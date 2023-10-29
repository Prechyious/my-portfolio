import { FaCode, FaGlobe } from "react-icons/fa6";
import dictionaryWebApp from "../../assets/images/dictionary.png";
import portfolio from "../../assets/images/portfolio.png";
import artGallery from "../../assets/images/Art-gallery.png";
import authenticate from "../../assets/images/Authenticate-me.png";
import countries from "../../assets/images/countries.png";
import battleship from "../../assets/images/battleship.png";
import multiStepForm from "../../assets/images/mobile.png";

export const projects = [
    {
        id: 1,
        img: dictionaryWebApp,
        title: "Dictionary Web App",
        description:
            "A dictionary web app using free dictionary api, with light and dark mode.",
        stack: [
            {
                name: "React",
                bg: "bg-sky-500",
            },
            {
                name: "Tailwind",
                bg: "bg-blue-800",
            },
        ],
        links: [
            {
                demo: {
                    link: "https://presh-dictionary-app.netlify.app",
                    icon: <FaGlobe size={18} />,
                },
                github: {
                    link: "https://github.com/Prechyious/dictionary-app",
                    icon: <FaCode size={18} />,
                },
            },
        ],
    },
    {
        id: 2,
        img: multiStepForm,
        title: "Multi Step Form",
        description:
            "A multi-step form in sequence, you can go back to edit previous selections and then finally get a summary of all selections",
        stack: [
            {
                name: "React",
                bg: "bg-sky-500",
            },
            {
                name: "Redux Toolkit",
                bg: "bg-purple-800",
            },
            {
                name: "Tailwind",
                bg: "bg-blue-800",
            },
        ],
        links: [
            {
                demo: {
                    link: "https://my-multi-step-form.vercel.app",
                    icon: <FaGlobe size={18} />,
                },
                github: {
                    link: "https://github.com/Prechyious/multi-step-form",
                    icon: <FaCode size={18} />,
                },
            },
        ],
    },
    {
        id: 3,
        img: authenticate,
        title: "Authenticate",
        description: "An authentication app with Express and React",
        stack: [
            {
                name: "Express",
                bg: "bg-cyan-500",
            },
            {
                name: "Sequelize",
                bg: "bg-blue-800",
            },
            {
                name: "PostgreSQL",
                bg: "bg-teal-400",
            },
            {
                name: "React",
                bg: "bg-sky-500",
            },
            {
                name: "Redux",
                bg: "bg-purple-800",
            },
            {
                name: "CSS",
                bg: "bg-blue-400",
            },
        ],
        links: [
            {
                demo: {
                    link: "https://youtu.be/_y46CY2hfBk",
                    icon: <FaGlobe size={18} />,
                },
                github: {
                    link: "https://github.com/Prechyious/practice-for-week-15-react-redux-authenticate-me-long-practice",
                    icon: <FaCode size={18} />,
                },
            },
        ],
    },
    {
        id: 4,
        img: countries,
        title: "Rest Countries",
        description:
            "Countries of the world using the rest countries api and also with theme/color switcher in React",
        stack: [
            {
                name: "React",
                bg: "bg-sky-500",
            },
            {
                name: "Tailwind",
                bg: "bg-blue-800",
            },
        ],
        links: [
            {
                demo: {
                    link: "https://prech-rest-countries.netlify.app/",
                    icon: <FaGlobe size={18} />,
                },
                github: {
                    link: "https://github.com/Prechyious/rest-countries-api-with-color-theme-switcher",
                    icon: <FaCode size={18} />,
                },
            },
        ],
    },
    {
        id: 5,
        img: portfolio,
        title: "Portfolio Site",
        description:
            "One of my first projects, a fully responsive portfolio website with theme toggle.",
        stack: [
            {
                name: "HTML",
                bg: "bg-orange-400",
            },
            {
                name: "CSS",
                bg: "bg-blue-600",
            },
            {
                name: "JavaScript",
                bg: "bg-amber-400",
            },
        ],
        links: [
            {
                demo: {
                    link: "https://numo-stanley.netlify.app",
                    icon: <FaGlobe size={18} />,
                },
                github: {
                    link: "https://github.com/Numostanley/MyPortfolio",
                    icon: <FaCode size={18} />,
                },
            },
        ],
    },
    {
        id: 6,
        img: artGallery,
        title: "Harvard Art Gallery",
        description:
            "A React frontend application that displays a list of art galleries. The information about the art galleries were extracted from the Harvard Art Museum API",
        stack: [
            {
                name: "React",
                bg: "bg-sky-500",
            },
            {
                name: "CSS",
                bg: "bg-blue-400",
            },
        ],
        links: [
            {
                demo: {
                    link: "https://youtu.be/E6z3twyKtDE",
                    icon: <FaGlobe size={18} />,
                },
                github: {
                    link: "https://github.com/Prechyious/long-practice-art-museum-project",
                    icon: <FaCode size={18} />,
                },
            },
        ],
    },
    {
        id: 7,
        img: battleship,
        title: "Battleship",
        description:
            "Battleship game in html, css, and javascript where user can interact with, to find and destroy ships by guessing their coordinates on the board",
        stack: [
            {
                name: "HTML",
                bg: "bg-orange-400",
            },
            {
                name: "CSS",
                bg: "bg-blue-600",
            },
            {
                name: "JavaScript",
                bg: "bg-amber-400",
            },
        ],
        links: [
            {
                demo: {
                    link: "https://presh-battleship.netlify.app/",
                    icon: <FaGlobe size={18} />,
                },
                github: {
                    link: "https://github.com/Prechyious/practice-for-week-09-battleship-dom",
                    icon: <FaCode size={18} />,
                },
            },
        ],
    },
];
