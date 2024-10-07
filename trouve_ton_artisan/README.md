La région souhaite un site accessible à tous (jeune, personne âgée, personnes en situation de
handicap…). Il faudra donc veiller à l’expérience utilisateur et à aller au plus simple. Vous devrez
également vous conformer à la norme WCAG 2.1 (https://www.w3.org/TR/WCAG21/)
Conscient de l’importance de la navigation sur mobile aujourd’hui, elle souhaite que le site soit
responsif et mobile first.
La sécurité est un point important pour les collectivités, vous mettrez donc en place toutes les
bonnes pratiques à ce niveau.
Elle aimerait que le site s’intègre à leur environnement numérique. Il devra donc ressembler à
celui-ci : https://www.auvergnerhonealpes.fr/contenus/ladministration-regionale. 
Pour construire cette plateforme vous devrez utiliser :
• Pour la maquette : Figma.
• Au choix : ReactJS (ou NextJS) ou AngularJS (vous veillerez à choisir la dernière
version stable).
• HTML5, Bootstrap, Sass, JS.
• Git et Github pour le versionning.
Vous coderez sur Visual Studio Code et maquetterez l’application Web avec Figma.

LIVRABLES ATTENDUS
 Contenu des pages
Le footer :
• Le footer est identique sur toutes les pages.
• Un menu pour les pages légales (mentions légales, données personnelles,
accessibilité, cookies…). Ces pages devront être vides et seront remplies plus tard par
un cabinet spécialisé.
• L’adresse et les contacts de l’antenne à Lyon présent :
101 cours Charlemagne
CS 20033
69269 LYON CEDEX 02
France
+33 (0)4 26 73 40 00
Le header :
• Le header est présent sur toutes les pages.
• Le logo avec un lien qui ramène vers la page d’accueil.
• Un menu avec des liens vers les pages « Bâtiment », « Services », « Fabrication » et
« Alimentation ».
• Une barre de recherche qui devra faire ressortir les artisans en cherchant dans les
noms, spécialités et ville.
1 page d’accueil avec :
• L’explication étape par étape du fonctionnement du site.
o Choisir la catégorie d’artisanat dans le menu.
o Choisir un artisan.
o Le contacter via le formulaire de contact.
o Une réponse sera apportée sous 48h.
Vous nommerez cette rubrique « Comment trouver mon artisan ? ». Vous êtes libre de la
présenter comme vous le souhaitez cependant le numéro et le texte de chaque étape devra
obligatoirement apparaitre.
• Les trois artisans du mois avec pour chacun :
o Le nom de l’artisan ou de l’entreprise.
o Sa note sur cinq avec des étoiles.
o Sa spécialité.
o Sa localisation.
1 page avec la liste des artisans selon la catégorie/recherche avec :
• Des petites fiches pour chaque artisan qui contiennent :
o Le nom de l’artisan ou de l’entreprise.
o Sa note sur cinq avec des étoiles.
o Sa spécialité.
o Sa localisation.
• Chaque fiche doit être cliquable et renvoyer vers la fiche complète de l’artisan.
Page 7 sur 9
1 page « Fiche artisan » avec :
• Le nom de l’artisan ou de l’entreprise.
• Sa note avec des étoiles.
• Sa spécialité.
• Sa localisation.
• Une rubrique « A propos ».
• Un formulaire de contact (nom, objet et message) qui envoie un e-mail à l’artisan.
• Le site web de l’artisan le cas échéant.
1 page 404 avec :
• Une image.
• Le texte "404".
• Elle devra apparaître dès lors qu'on essaie d'accéder à autre chose que la page d'accueil
(pensez à utiliser un router).

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
