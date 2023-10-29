import ProjectsCard from "./ProjectsCard";
import { Link } from "react-router-dom";
import IconButton from "./IconButton";
import { projects } from "../data/Projects";

const Projects = () => {
    return (
        <section name="projects" className="px-10 mt-20 mb-10 md:px-20">
            <h2 className="text-2xl font-bold text-center md:text-3xl text-slate-950 dark:text-slate-300">
                Projects
            </h2>
            <div className="w-8 h-1 mx-auto my-4 mt-2 bg-blue-800 rounded-full"></div>
            <p className="text-base font-medium leading-8 tracking-wider text-center md:text-lg text-slate-800 dark:text-slate-200/80">
                Below are a couple of projects I've worked on
            </p>

            <div className="grid gap-5 mt-5 place-items-center sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-10 sm:px-10">
                {projects.map(
                    ({ id, img, title, description, stack, links }) => {
                        return (
                            <ProjectsCard key={id} imgSrc={img}>
                                <h3 className="mb-2 text-lg font-bold md:text-xl">
                                    {title}
                                </h3>
                                <p>{description}</p>
                                <div className="flex flex-wrap gap-2 mt-4 text-xs font-semibold">
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
                                            className="flex items-center justify-between mt-4"
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
            <p className="px-10 mt-2 text-sm font-medium leading-8 tracking-wider md:mt-4 md:text-base text-slate-800 dark:text-slate-200/80">
                <em>Note:</em> Some of these projects were done following
                instructions from App Academy's projects instructions
            </p>
        </section>
    );
};

export default Projects;
