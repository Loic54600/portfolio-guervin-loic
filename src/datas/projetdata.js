import Bookiimg from '../assets/img/projet/booki/bookiCover.webp'
import Ohmyfoodimg from '../assets/img/projet/ohmyfood/ohmyfoodCover.webp'
import ArchiWebosimg from '../assets/img/projet/sophieblue/testcover.webp'
import Kasaimg from '../assets/img/projet/kasa/kasaCover.webp'
import Photographeimg from '../assets/img/projet/photographe/photographe.webp'


import Htmlimg from '../assets/img/competence/html.webp'
import Cssimg from '../assets/img/competence/css3.webp'
import Sassimg from '../assets/img/competence/sass.webp'
import Javascriptimg from '../assets/img/competence/javascript.webp'
import Githubimg from '../assets/img/competence/github.webp'
import Nodejsimg from '../assets/img/competence/nodejs.webp'
import Reactimg from '../assets/img/competence/react.webp'

export const projet = [
    {
        "id": "1",
        "src": Bookiimg,
        "descriptionImage": "visuel du site booki",
        "title": "Booki",
        "description": "Réalisation d'un site internet qui permette aux usagers de trouver des hébergements et des activités dans la ville de leur choix",
        "realisation":"Intégration du site avec du code Html et Css",
        "github":'https://github.com/Loic54600/projet-3',
        "competenceImg": [
            Htmlimg,
            Cssimg,
            Githubimg
        ]
    },
    {
        "id": "2",
        "src": Ohmyfoodimg,
        "descriptionImage": "visuel du site ohmyfood",
        "title": "Ohmyfood",
        "description": "Réalisation d'un site internet en (mobile first) qui répertorie les menus de restaurants gastronomiques. ",
        "realisation":"Intégration du site avec du code Html et Sass",
        "github":'https://github.com/Loic54600/Projet4Openclassroom',
        "competenceImg": [
            Htmlimg,
            Cssimg,
            Githubimg,
            Sassimg   
        ]
    },
    {
        "id": "3",
        "src": ArchiWebosimg,
        "descriptionImage": "visuel du site archiweb",
        "title": "ArchiWebos Sophie Blue",
        "description": "Réalisation d'un site internet a partir des maquettes, réalisation d'une connexion, d'une gallery dynamique",
        "realisation":"Intégration du site avec du code Html, Css et Javascript",
        "github":'https://github.com/Loic54600/projet6',
        "competenceImg": [
            Htmlimg,
            Cssimg,
            Githubimg,
            Nodejsimg,
            Javascriptimg
        ]
    },
    {
        "id": "4",
        "src": Kasaimg,
        "descriptionImage": "visuel du site kasa",
        "title": "Kasa",
        "description": "Réalisation d'une application web de location immobilière avec react",
        "realisation":"Intégration de l'application en React",
        "github":"https://github.com/Loic54600/projet8",
        "competenceImg": [
            Reactimg,
            Githubimg,
            Nodejsimg
        ]
    },
    {
        "id": "5",
        "src": Photographeimg,
        "descriptionImage": "visuel du site d'une photographe Nina Carducci",
        "title": "Photographe Nina Carducci",
        "description": "Optimisisation d'un site de photographe (Performances, Accessibility, Seo, Schema.org)",
        "realisation":"Optimisation et intégration d'un site de photographe",
        "github":"https://github.com/Loic54600/projet9",
        "competenceImg": [
            Htmlimg,
            Cssimg,
            Githubimg,
        ]
    }
   
]

export default projet;
