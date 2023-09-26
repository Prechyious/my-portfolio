import {
    FaCss3,
    FaGithub,
    FaHtml5,
    FaJs,
    FaNodeJs,
    FaReact,
} from "react-icons/fa6";
import { SiExpress, SiSqlite, SiTailwindcss } from "react-icons/si";

export const skills = [
    {
        icon: <FaHtml5 size={30} />,
        text: "HTML",
        color: "bg-orange-400",
    },
    {
        icon: <FaCss3 size={30} />,
        text: "CSS",
        color: "bg-blue-600",
    },
    {
        icon: <FaJs size={30} />,
        text: "Javascript",
        color: "bg-amber-400",
    },
    {
        icon: <SiTailwindcss size={30} />,
        text: "Tailwind CSS",
        color: "bg-blue-800",
    },
    {
        icon: <FaGithub size={30} />,
        text: "Github",
        color: "bg-slate-700",
    },
    {
        icon: <FaReact size={30} />,
        text: "React",
        color: "bg-sky-500",
    },
    {
        icon: <FaNodeJs size={30} />,
        text: "Node.js",
        color: "bg-green-700",
    },
    {
        icon: <SiExpress size={30} />,
        text: "Express.js",
        color: "bg-cyan-500",
    },
    {
        icon: <SiSqlite size={30} />,
        text: "Sqlite",
        color: "bg-cyan-800",
    },
];
