import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    FaAngleUp,
    FaEnvelope,
    FaGithub,
    FaLink,
    FaLinkedin,
} from "react-icons/fa6";
import { TiStarHalf } from "react-icons/ti";
import IconButton from "./IconButton";
import { IoStar } from "react-icons/io5";
import { TbNorthStar } from "react-icons/tb";
import { BsStars } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { MdStarRate } from "react-icons/md";
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
        <>
            <main
                name="home"
                className="relative flex flex-col items-center justify-center h-[90svh] md:h-[92svh] mx-auto bg-gradient-to-b from-neutral-100 via-white to-neutral-100
        dark:bg-gradient-to-b dark:from-black dark:via-gray-900 dark:to-black"
            >
                <div className="max-w-xs mx-auto sm:max-w-sm md:max-w-lg">
                    <RevealAnimation>
                        <h3 className="pl-2 text-base font-extrabold tracking-wider uppercase md:text-lg opacity-60 text-slate-900 dark:text-slate-400">
                            Hi! I'm,
                        </h3>
                    </RevealAnimation>
                    <RevealAnimation>
                        <h1 className="text-3xl md:text-5xl px-2 font-extrabold uppercase text-slate-900 dark:text-slate-300 max-w-[5rem] sm:max-w-none">
                            Leghemo Precious
                        </h1>
                    </RevealAnimation>
                    <RevealAnimation>
                        <p className="px-2 mt-2 text-xs font-bold tracking-wider md:text-base text-slate-900/60 dark:text-slate-300/60">
                            Frontend Web Developer
                        </p>
                    </RevealAnimation>

                    <RevealAnimation>
                        <div className="inline-flex p-2 space-x-3">
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
                                <IconButton
                                    text="LinkedIn"
                                    color="bg-[#004182]"
                                >
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

                    <div className="px-2 pb-2 mt-5 w-fit">
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
                    className={`absolute bottom-1 duration-500 ease-in-out ${
                        scrolled ? "animate-none opacity-0" : "animate-bounce"
                    }`}
                >
                    <FaAngleUp className="text-slate-800 dark:text-slate-400" />
                </div>
            </main>
            <div className="hidden text-[0.5rem] lg:text-xs text-neutral-50 dark:block">
                <TbNorthStar className="absolute text-base opacity-90 top-[11%] lg:top-[10%] right-5 lg:right-48 animate-pulse" />
                <BsStars className="absolute opacity-80 top-[20%] left-[15%] star2" />
                <MdStarRate className="absolute opacity-80 top-96 right-1/4 star3" />
                <IoStar className="absolute bottom-0 right-[10%] opacity-80 star4" />
                <IoStar className="absolute bottom-10 lg:bottom-40 lg:right-1/2 star5" />
                <AiFillStar className="absolute top-2/3 opacity-80 left-[15%] star6" />
                <TiStarHalf className="absolute opacity-80 top-1/4 left-1/2 star7" />
            </div>
        </>
    );
};

export default Hero;
