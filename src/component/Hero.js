import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    FaAngleUp,
    FaEnvelope,
    FaGithub,
    FaLink,
    FaLinkedin,
} from "react-icons/fa6";
import IconButton from "./IconButton";
import { RevealAnimation } from "./Animation/RevealAnimation";
import { CardsAnimation } from "./Animation/CardsAnimation";

const Hero = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const navScrolled = () => {
            window.scrollY > 80 ? setScrolled(true) : setScrolled(false);
        };
        window.addEventListener("scroll", navScrolled);
    }, [scrolled]);

    return (
        <main
            name="home"
            className="relative flex flex-col items-center justify-center h-[91dvh] md:h-[92vh] mx-auto bg-gradient-to-b from-neutral-100 via-white to-neutral-100
        dark:bg-gradient-to-b dark:from-black dark:via-gray-900 dark:to-black"
        >
            <div className="mx-auto max-w-xs sm:max-w-sm md:max-w-lg">
                <RevealAnimation>
                    <h3
                        className="text-base md:text-lg pl-2 font-extrabold tracking-wider opacity-60 uppercase 
                    text-slate-900 dark:text-slate-400"
                    >
                        Hi! I'm,
                    </h3>
                </RevealAnimation>
                <RevealAnimation>
                    <h1 className="text-3xl md:text-5xl px-2 font-extrabold uppercase text-slate-900 dark:text-slate-300 max-w-[5rem] sm:max-w-none">
                        Leghemo Precious
                    </h1>
                </RevealAnimation>
                <RevealAnimation>
                    <p className="font-bold text-xs md:text-base tracking-wider text-slate-900/60 dark:text-slate-300/60 mt-2 px-2">
                        Frontend Web Developer
                    </p>
                </RevealAnimation>

                <RevealAnimation>
                    <div className="inline-flex space-x-3 p-2">
                        <Link
                            to="https://github.com/Prechyious"
                            target="_blank"
                        >
                            <IconButton text="Github" color="bg-gray-600">
                                <FaGithub size={20} />
                            </IconButton>
                        </Link>
                        <Link
                            to="https://www.linkedin.com/in/prechyious"
                            target="_blank"
                        >
                            <IconButton text="LinkedIn" color="bg-[#004182]">
                                <FaLinkedin size={20} />
                            </IconButton>
                        </Link>
                        <Link to="mailto:lemoprechy@gmail.com">
                            <IconButton text="Mail" color="bg-red-600">
                                <FaEnvelope size={20} />
                            </IconButton>
                        </Link>
                    </div>
                </RevealAnimation>

                <div className="mt-5 w-fit px-2 pb-2">
                    <CardsAnimation>
                        <Link
                            className="text-sm md:text-base font-medium uppercase tracking-wide w-fit px-4 py-1.5 md:px-5 md:py-2 rounded-lg transition-all duration-300 ease-in-out shadow-md bg-blue-900 text-gray-50 hover:bg-slate-900 dark:hover:bg-blue-800 flex items-center justify-center gap-1.5"
                            to="https://drive.google.com/file/d/1WSEIcLKoIlF_viNKQuZY8lnYIyBZuCyW/view?usp=sharing"
                            target="_blank"
                        >
                            <FaLink />
                            Resume
                        </Link>
                    </CardsAnimation>
                </div>
            </div>
            <div
                className={`absolute bottom-0 duration-500 ease-in-out ${
                    scrolled ? "animate-none opacity-0" : "animate-bounce"
                }`}
            >
                <FaAngleUp className="text-slate-800 dark:text-slate-400" />
            </div>
        </main>
    );
};

export default Hero;
