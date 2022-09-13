import biletBuldumHome from '../images/biletbuldum/bilet-buldum-home.PNG';
import biletBuldumSearch from '../images/biletbuldum/bilet-buldum-search.PNG';

import battleshipHome from '../images/battleship/battleship-home.PNG';
import battleshipPrepare from '../images/battleship/battleship-prepare.PNG';
import battleshipGame from '../images/battleship/battleship-game.PNG';
import battleshipWaiting from '../images/battleship/battleship-waiting.gif';


import parallaxHome from '../images/parallax/parallax-home.gif';


export const techImages = [
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg',
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg',
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg',
    'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg',
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg',
    'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg']


export const reachMeImagesAndLinks = [
    ['https://www.vectorlogo.zone/logos/gmail/gmail-icon.svg', 'mailto:furkan.gundz00@gmail.com'],
    ['https://www.vectorlogo.zone/logos/github/github-icon.svg', 'https://github.com/Furkangunduz'],
    ['https://www.vectorlogo.zone/logos/linkedin/linkedin-icon.svg', 'https://www.linkedin.com/in/furkangunduz00/'],
    ['https://www.codewars.com/packs/assets/logo-square-red-big-dark-text.2e091298.png', 'https://www.codewars.com/users/kralDragon'],
    ['https://www.vectorlogo.zone/logos/codepen/codepen-tile.svg', 'https://codepen.io/furkangunduz']
]

export const AboutMeTexts =
    ["My name is Furkan Gündüz. I am 21 years old enginnering student from Turkey and self-taught front-end developer focused on making beautiful functional and scalable websites and web apps.",
        "As a self-taught developer.I have spent the last few years learning the technologies here.I am currently working within the"]




export const projectsCardInfos = [
    {
        name: "Bilet Buldum",
        images: [biletBuldumHome, biletBuldumSearch],
        tags: [
            'React',
            'TailwindCSS',
            'NodeJS',
            'Express',
            'Puppetteer',
        ],
        description: ' This is the project which can help you find train tickets when all train tickets for all train trips are bought. This project uses   <strong>Express </strong> and <strong>Puppeteer </strong> to get informationabout train trips on the server side. When youcreate a request to the server, it starts thesearch for a train ticket for you. When it findsit, it sends the email to you. On the Client sideFront-end made by using <strong>React</strong> and   <strong>TailwindCSS </strong>',
        demoLink: "https://bilet-buldum.vercel.app/",
        sourceLink: "https://github.com/Furkangunduz/Bilet-Buldum",
    },
    {
        name: "BattleShip",
        images: [
            battleshipHome,
            battleshipPrepare,
            battleshipGame,
            battleshipWaiting],
        tags: [
            'React',
            'NodeJS',
            'Pure CSS',
            'Express',
            'Socket.io',
        ],
        description: 'This project is an online adaptation of the board game Battleship. It is built with<strong> React </strong> and <strong> React - dnd</strong> on the front end and <strong> SocketIO</strong> in the backend.You can choose a create room for yourself and invite people to  battle there.2 players has their own 5 ships and a 10x10 grid board .Place all of your ships here.When both players are prepared, the game will start, and players will shoot at the opponent board and try to locate enemy ships.Whoever locates all ships first will win.',
        demoLink: "https://battleship-orpin.vercel.app/",
        sourceLink: "https://github.com/Furkangunduz/Battleship",
    },
    {
        name: "Parallax Landing Page",
        images: [parallaxHome],
        tags: [
            'HTML',
            'Pure CSS',
            'Javascript',
            'Gsap'
        ],
        description: 'This website aims to assist anyone looking to travel to adventurous locations.<strong>TailwindCSS</strong> is used in this project for styling. For parallax effect used <strong>GSAP library</strong>.',
        demoLink: "https://battleship-orpin.vercel.app/",
        sourceLink: "https://github.com/Furkangunduz/Battleship",
    }
]

