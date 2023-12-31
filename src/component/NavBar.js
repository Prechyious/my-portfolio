import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { RevealAnimation } from "./Animation/RevealAnimation";
import { Link } from "react-scroll";

const NavBar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const menus = ["home", "about", "projects", "contact"];

    const navToggle = () => {
        setNavOpen(!navOpen);
    };

    const navScrolled = () => {
        window.scrollY > 100 ? setScrolled(true) : setScrolled(false);
    };

    window.addEventListener("scroll", navScrolled);

    return (
        <nav
            className={`sticky top-0 left-0 flex justify-between items-center h-14 px-5 md:px-20 bg-neutral-100 dark:bg-black z-10 transition-all duration-500 ease-in-out
                ${
                    scrolled
                        ? "shadow-md dark:shadow-slate-400/10 px-12 md:px-[5.5rem] bg-neutral-50"
                        : ""
                }`}
        >
            <RevealAnimation>
                <div>
                    <Link
                        to="home"
                        smooth
                        offset={-80}
                        duration={500}
                        className="text-lg font-bold tracking-wide uppercase cursor-pointer text-blue-950 dark:text-slate-300 md:text-xl"
                    >
                        Leghemo
                    </Link>
                </div>
            </RevealAnimation>

            <div
                className={`absolute top-14 right-0 flex flex-col items-end justify-end w-full bg-gray-50 dark:bg-black duration-300 ease-in-out overflow-hidden px-10 md:px-20 uppercase font-semibold text-blue-950 dark:text-slate-200/80  text-sm tracking-widest
                    ${navOpen ? "max-h-80 shadow-md" : "max-h-0"}
                    ${scrolled ? "px-12 md:px-[5.5rem]" : ""}`}
            >
                {menus.map((menu) => {
                    return (
                        <Link
                            onClick={navToggle}
                            to={menu}
                            smooth
                            duration={500}
                            offset={-80}
                            key={menu}
                            className={`hover:font-bold dark:hover:text-white active:font-bold border-t text-right border-slate-300 dark:border-slate-400/40 w-full py-4 cursor-pointer`}
                        >
                            {menu}
                        </Link>
                    );
                })}
            </div>

            <RevealAnimation>
                <div className="flex items-center gap-x-4">
                    <DarkModeToggle />
                    <div
                        className="flex flex-col gap-1 duration-300 ease-in-out cursor-pointer"
                        onClick={navToggle}
                    >
                        <span
                            className={`w-[22px] h-[3px] bg-slate-950 dark:bg-slate-400
                    transition-all duration-300 ease-in-out ${
                        navOpen
                            ? "rotate-45 translate-y-[6px]"
                            : "rotate-0 translate-y-0"
                    }`}
                        ></span>
                        <span
                            className={`w-full h-[3px] bg-slate-950 dark:bg-slate-400
                    transition-all duration-300 ease-in-out ${
                        navOpen ? "opacity-0" : "opacity-100"
                    }`}
                        ></span>
                        <span
                            className={`w-full h-[3px] bg-slate-950 dark:bg-slate-400 transition-all duration-300 ease-in-out ${
                                navOpen
                                    ? "-rotate-45 -translate-y-2"
                                    : "rotate-0 translate-y-0"
                            }`}
                        ></span>
                    </div>
                </div>
            </RevealAnimation>
        </nav>
    );
};

export default NavBar;
