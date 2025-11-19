import { format, add, isAfter, isBefore } from "date-fns";
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
