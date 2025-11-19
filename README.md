# CSVMarees
<section>
        <article>
            <h3>Description de la libraire</h3>
            <p>Cette librairie permets de charger les données issus d'un document CSV fournis par le gourvenment canadien sur la prévision des marrées. Elle peut-être utiliseé sur wordpress, comme sur un site static. Elle est simple d'utilisation et utilise des librairies externe, tel que Papaparse et date-fns.</p>
            <p><a href="https://github.com/LauriFernandez/CSVMarees/blob/main/dist/lib-csv-marees.js">Lien de téléchargement de la libraire</a></p>
        </article>
        <article>
            <h3>Fonctions disponible</h3>
            <div class="fonction">
                <h4>fetchCSVMarees(intervalDay, link)</h4>
                <p>Cette fonction permets de retourner un array contenant les dates en ISO avec l'heure ainsi que la hauteur en mètre de la marée. Les prédictions commence toujours à partir du jours et de l'heure de la requète.</p>
                <p>Elle prends deux paramètres: </p>
                <ul>
                    <li>intervalDay : entier pour indiquer le nombre de jours de prévision souhaité</li>
                    <li>link : string contenant le lien vers le fichier csv à charger</li>
                </ul>
                <p>Son utilisation doit se faire dans une fonction asynchrone pour premmetre la récupération des données avec un await.</p>
                <div class="exemple">
                    <p class="title">Exemple d'utilisation</p>
                    <pre><code>async function showData() {
    const values = await csvMarees.fetchCSVMarees(4, "annuelles_Matane_2025.csv"); // Renvoie les prédictions d'aujourdhui et des 3 prochains jours
    // traitement des données depuis values
}
showData();</code></pre>
                </div>
            </div>
        </article>
    </section>