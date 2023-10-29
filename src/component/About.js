import { CardsAnimation } from "./Animation/CardsAnimation";
import { RevealAnimation } from "./Animation/RevealAnimation";
import { skills } from "../data/Skills";

const About = () => {
    return (
        <section
            name="about"
            className="relative px-10 mt-10 md:px-20 md:mt-20"
        >
            <h2 className="text-2xl font-bold text-center md:text-3xl text-slate-950 dark:text-slate-300">
                About Me
            </h2>

            <div className="w-8 h-1 mx-auto my-4 mt-2 bg-blue-800 rounded-full"></div>

            <div className="font-medium leading-8 tracking-wider text-center md:text-left text-slate-800 dark:text-slate-200/80 text-md md:text-lg">
                <p>
                    Frontend web developer with a knack for bringing ideas and
                    designs to life by creating visually appealing, interactive
                    and responsive user interfaces that also gives the optimum
                    user experience.
                </p>

                <p className="mt-2">
                    B.ENG Civil Engineer, who transitioned to web development in
                    the year 2022. I am a dynamic Web developer who combines my
                    engineering background with a passion for software
                    development. With a commitment to excellence and a keen eye
                    for design, I aim to create exceptional web experiences that
                    leave a lasting impression on users.
                </p>
                <p className="mt-2">
                    Throughout my journey as a web developer, I have had the
                    opportunity to work on multiple projects ranging from
                    landing pages to complex web apps. Each experience has
                    further improved my skill set and widened my knowledge of
                    various programming languages and frameworks including
                    React, Node.js, Express.js, sqlite3 e.t.c.
                </p>
                <p className="mt-2">
                    As an active and continuous learner I possess the ability to
                    learn quickly, a solid understanding of fundamental design
                    principles, astounding communication skills, a team player
                    that can also get work done if or when required to work
                    alone. I eagerly look forward to taking on new challenges,
                    building innovative solutions, and contributing my expertise
                    to make a positive impact in the world of web development.
                </p>
            </div>

            <div className="mt-10">
                <RevealAnimation>
                    <h3 className="text-lg font-bold text-center md:text-xl text-slate-950 dark:text-slate-300">
                        Skills and Proficiencies
                    </h3>
                    <div className="w-8 h-1 mx-auto my-4 mt-2 bg-blue-800 rounded-full"></div>
                </RevealAnimation>

                <div className="relative grid grid-cols-2 gap-5 my-5 md:grid-cols-3">
                    {skills.map((skill) => {
                        return (
                            <CardsAnimation key={skill.text}>
                                <li
                                    className={`list-none p-5 font-medium flex items-center justify-start gap-x-2 shadow-lg
                                text-gray-200 text-xs md:text-base text-center rounded-md
                                ${skill.color || "bg-slate-900/80"}`}
                                >
                                    {skill.icon}
                                    {skill.text}
                                </li>
                            </CardsAnimation>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default About;
