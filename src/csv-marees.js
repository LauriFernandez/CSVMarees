import { format, sub, add, isAfter, isBefore } from "date-fns";
import { TZDate } from "@date-fns/tz";
import { parse } from "papaparse";

/**
 * Fonction permettant le chargement des données du csv des prédiction des marées en fonction du nombre de jour d'indiqué et du lien vers le fichier
 * @param {interger} intervalDay 
 * @param {string} link 
 * @returns {array}
 */
export function fetchCSVMarees(intervalDay, link) {
  let promise = new Promise((resolve) => {
    parse(link, {
      download: true,
      comments: "Généré",
      complete: function (results) {
        let data = results.data;
        let finalData = [];
        let now = format(new TZDate(new Date(), "America/New_York"), 'Pp');
        if (intervalDay == null || intervalDay == 0) {
          for (var i = 1; i < data.length; i++) {
            if (isAfter(format(data[i][0], 'Pp'), now)) {
              finalData.push(data[i])
            }
          }
        } else {
          let endDate = add(format(new Date(), 'Pp'), { days: intervalDay });
          for (var i = 1; i < data.length; i++) {
            if (isAfter(format(data[i][0], 'Pp'), now) && isBefore(format(data[i][0], 'Pp'), endDate)) {
              finalData.push(data[i])
            }
          }
        }
        resolve(finalData);
      }
    })
  });
  promise.then((values) => {
    return values
  });
  return promise;
}

export function fetchIntervalMarees(nbDayBefore, nbDayAfter, link) {
  let promise = new Promise((resolve) => {
    parse(link, {
      download: true,
      comments: "Généré",
      complete: function (results) {
        let data = results.data;
        let finalData = [];
        let now = format(new TZDate(new Date(), "America/New_York"), 'P');
        // On vérifie si on a un nombre de jours avant et après
        if ((nbDayBefore == null || nbDayBefore == 0) && (nbDayAfter == null || nbDayAfter == 0)) { // ni de jours avant, ni de jours après
          for (var i = 1; i < data.length; i++) {
            if (isAfter(format(data[i][0], 'P'), now)) {
              finalData.push(data[i])
            }
          }
        } else if ((nbDayBefore == null || nbDayBefore == 0) && (nbDayAfter != null || nbDayAfter != 0)) { // ni de jours avant

          let endDate = add(format(new Date(), 'P'), { days: nbDayAfter + 1 });
          for (var i = 1; i < data.length; i++) {
            if (isAfter(format(data[i][0], 'P'), now) && isBefore(format(data[i][0], 'P'), endDate)) {
              finalData.push(data[i])
            }
          }
        } else if ((nbDayBefore != null || nbDayBefore != 0) && (nbDayAfter == null || nbDayAfter == 0)) { // ni de jours après
          let startDate = sub(format(new Date(), 'P'), { days: nbDayBefore + 1 });
          for (var i = 1; i < data.length; i++) {
            if (isAfter(format(data[i][0], 'Pp'), startDate)) {
              finalData.push(data[i])
            }
          }
        } else { // on a des jours avant et après
          let startDate = sub(format(new Date(), 'P'), { days: nbDayBefore + 1 });
          let endDate = add(format(new Date(), 'P'), { days: nbDayAfter + 1 });
          for (var i = 1; i < data.length; i++) {
            if (isAfter(format(data[i][0], 'P'), startDate) && isBefore(format(data[i][0], 'P'), endDate)) {
              finalData.push(data[i])
            }
          }
        }
        resolve(finalData);
      }
    })
  });
  promise.then((values) => {
    return values
  });
  return promise;
};