# CSVMarees
<section>
        <article>
            <h3>Description de la librairie</h3>
            <p>Cette librairie permets de charger les données issus d'un document CSV fournis par le gourvenment canadien sur la prévision des marrées. Elle peut-être utiliseé sur wordpress, comme sur un site static. Elle est simple d'utilisation et utilise des librairies externe, tel que Papaparse et date-fns.</p>
            <p><a href="https://github.com/LauriFernandez/CSVMarees/blob/main/dist/lib-csv-marees.js">Lien de téléchargement de la libraire</a></p>
        </article>
        <article>
            <h3>Fonctions disponible (V2)</h3>
            <div class="fonction">
                <h4>fetchCSVMarees(link, intervalDay)</h4>
                <p>Cette fonction permets de retourner un array contenant les dates en ISO avec l'heure ainsi que la hauteur en mètre de la marée. Les prédictions commence toujours à partir du jours et de l'heure de la requète.</p>
                <p>Elle prends deux paramètres: </p>
                <ul>
                    <li>link : string contenant le lien vers le fichier csv à charger</li>
                    <li>intervalDay : entier pour indiquer le nombre de jours de prévision souhaité (mettre 0 si on ne souhaite pas de limite)</li>
                </ul>
                <p>Son utilisation doit se faire dans une fonction asynchrone pour premmetre la récupération des données avec un await.</p>
                <div class="exemple">
                    <p class="title">Exemple d'utilisation</p>
                    <pre><code>async function showData() {
    const values = await csvMarees.fetchCSVMarees("annuelles_Matane_2025.csv",4); // Renvoie les prédictions d'aujourdhui et des 3 prochains jours
    // traitement des données depuis values
}
showData();</code></pre>
                </div>
            </div>
            <div class="fonction">
                <h4>fetchIntervalMarees(link, nbDayBefore, nbDayAfter)</h4>
                <p>Cette fonction permets de retourner un array contenant les dates en ISO avec l'heure ainsi que la hauteur en mètre de la marée. On peut lui donner un interval de journée avant et après pour avoir les données sur plusieurs jours.</p>
                <p>Elle prends trois paramètres: </p>
                <ul>
                    <li>link : string contenant le lien vers le fichier csv à charger</li>
                    <li>nbDayBefore : entier représentant le nombre de jours précédent à aujourd'hui que nous souhaitons avoir (mettre 0 si on ne souhaite pas de limite)</li>
                    <li>nbDayAfter : entier représentant le nombre de jours suivant à aujourd'hui que nous souhaitons avoir (mettre 0 si on ne souhaite pas de limite)</li>
                </ul>
                <p>Son utilisation doit se faire dans une fonction asynchrone pour premmetre la récupération des données avec un await.</p>
                <div class="exemple">
                    <p class="title">Exemple d'utilisation</p>
                    <pre><code>async function showData() {
    const values = await csvMarees.fetchIntervalMarees("annuelles_Matane_2025.csv",7,4); // Renvoie les prédictions d'il y a une semaine au 4 prochains jours
    // traitement des données depuis values
}
showData();</code></pre>
                </div>
            </div>
        </article>
    </section>