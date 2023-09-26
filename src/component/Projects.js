import ProjectsCard from "./ProjectsCard";
import { Link } from "react-router-dom";
import IconButton from "./IconButton";
import { projects } from "./data/Projects";

const Projects = () => {
    return (
        <section name="projects" className="px-10 mt-20 mb-10 md:px-20">
            <h2 className="text-center text-2xl md:text-3xl font-bold text-slate-950 dark:text-slate-300">
                Projects
            </h2>
            <div className="mx-auto mt-2 my-4 h-1 w-8 bg-blue-800 rounded-full"></div>
            <p className="text-center font-medium leading-8 text-base md:text-lg tracking-wider text-slate-800 dark:text-slate-200/80">
                Below are a couple of projects I've worked on
            </p>

            <div className="mt-5 grid place-items-center sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-10 sm:px-10">
                {projects.map(
                    ({ id, img, title, description, stack, links }) => {
                        return (
                            <ProjectsCard key={id} imgSrc={img}>
                                <h3 className="text-lg md:text-xl font-bold mb-2">
                                    {title}
                                </h3>
                                <p>{description}</p>
                                <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
                                    {stack.map(({ name, bg }) => {
                                        return (
                                            <h6
                                                key={name}
                                                className={`rounded-lg ${bg} px-2 py-1`}
                                            >
                                                {name}
                                            </h6>
                                        );
                                    })}
                                </div>

                                {links.map(({ demo, github }) => {
                                    return (
                                        <div
                                            className="mt-4 flex items-center justify-between"
                                            key={demo.link}
                                        >
                                            <Link
                                                to={demo.link}
                                                target="_blank"
                                            >
                                                <IconButton
                                                    text="Demo"
                                                    color="bg-green-600"
                                                >
                                                    {demo.icon}
                                                </IconButton>
                                            </Link>
                                            <Link
                                                to={github.link}
                                                target="_blank"
                                            >
                                                <IconButton
                                                    text="Code"
                                                    color="bg-gray-600"
                                                >
                                                    {github.icon}
                                                </IconButton>
                                            </Link>
                                        </div>
                                    );
                                })}
                            </ProjectsCard>
                        );
                    }
                )}
            </div>
            <p className="mt-2 md:mt-4 px-10 font-medium leading-8 text-sm md:text-base tracking-wider text-slate-800 dark:text-slate-200/80">
                <em>Note:</em> Some of these projects were done following
                instructions from App Academy's projects instructions
            </p>
        </section>
    );
};

export default Projects;
