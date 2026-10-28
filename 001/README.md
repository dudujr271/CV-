TP React – Projet 001 (Vite)
Projet réalisé avec Vite et React : un CV composé de trois composants (infos
personnelles, compétences, expériences).
1. Prérequis
Node.js (version 18 ou plus) et npm installés
Vérification dans le terminal :
node -v
npm -v
2. Étapes de création du projet
Étape 1 : créer le projet avec Vite
npm create vite@latest 001 -- --template react
Vite crée le dossier 001 avec le modèle React.
Étape 2 : entrer dans le dossier
cd 001
Étape 3 : installer les dépendances
npm install
Cette commande crée le dossier node_modules à partir de package.json.
Étape 4 : lancer le serveur de développement
npm run dev
Ouvrir ensuite l'adresse affichée dans le terminal (par défaut Étape 5 : créer le dossier des composants
Créer le dossier src/components/ puis y ajouter les trois fichiers :
InfoPerso.jsx
Competences.jsx
Experiences.jsx
Étape 6 : écrire les composants
Voir la section 4 ci-dessous.
http://localhost:5173 ).
Étape 7 : assembler les composants dans src/App.jsx
Voir la section 5 ci-dessous.
Étape 8 : vérifier le rendu dans le navigateur
Le CV s'affiche et se met à jour automatiquement à chaque sauvegarde.
3. Rôle des dossiers et fichiers indispensables
001/
├── node_modules/
├── public/
├── src/
│ ├── components/
│ │ ├── InfoPerso.jsx
│ │ ├── Competences.jsx
│ │ └── Experiences.jsx
│ ├── App.jsx
│ ├── App.css
│ ├── index.css
│ └── main.jsx
├── index.html
├── package.json
└── vite.config.js
Élément Rôle
node_modules/ Contient toutes les bibliothèques installées par npm install
(React, Vite…). On ne le modifie pas et on ne le rend pas.
public/ Fichiers statiques servis tels quels (icône du site, images).
src/ Dossier du code source de l'application.
src/components/ Contient les composants réutilisables créés pour le projet.
src/main.jsx Point d'entrée JavaScript : il « monte » l'application React dans la
page grâce à ReactDOM.createRoot(...).
src/App.jsx Composant principal : il regroupe les autres composants.
src/App.css et
src/index.css Feuilles de style de l'application et du site.
index.html
Unique page HTML. Elle contient <div id="root"></div> , l'endroit
où React affiche l'application, et charge main.jsx.
package.json Décrit le projet : nom, version, scripts ( dev , build , preview ) et
dépendances.
vite.config.js Fichier de configuration de Vite (plugins, port, etc.).
4. Les trois composants du CV
src/components/InfoPerso.jsx
function InfoPerso() {
return (
<section>
<h1>Abdoulaye Yare Fall</h1>
<p>Étudiant – Dakar, Sénégal</p>
<p>Email : ton.email@exemple.com</p>
<p>Téléphone : +221 XX XXX XX XX</p>
</section>
);
}
export default InfoPerso;
src/components/Competences.jsx
function Competences() {
const liste = [
"HTML / Bootstrap",
"JavaScript",
"SQL / MariaDB",
"Langage C",
"Linux",
];
return (
<section>
<h2>Compétences</h2>
<ul>
{liste.map((competence) => (
<li key={competence}>{competence}</li>
))}
</ul>
</section>
);
}
export default Competences;
src/components/Experiences.jsx
function Experiences() {
return (
<section>
<h2>Expériences</h2>
<h3>Intitulé du poste – Organisme</h3>
<p>2025 – 2026 : description courte des missions.</p>
</section>
);
}
export default Experiences;
5. Assemblage dans src/App.jsx
import InfoPerso from "./components/InfoPerso";
import Competences from "./components/Competences";
import Experiences from "./components/Experiences";
function App() {
return (
<>
<InfoPerso />
<Competences />
<Experiences />
</>
);
}
export default App;
6. Scripts utiles
Commande Effet
npm run dev Lance le serveur de développement
npm run build Génère la version de production dans dist/
npm run preview Prévisualise la version de production
7. Résultat
Capture d'écran du CV affiché dans le navigateur :
(ajouter ici une capture d'écran, par exemple ![CV](./capture.png) )