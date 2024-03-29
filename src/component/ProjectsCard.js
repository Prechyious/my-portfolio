import { RevealAnimation } from "./Animation/RevealAnimation";

const ProjectsCard = ({ children, imgSrc, ...props }) => {
    return (
        <RevealAnimation>
            <div
                {...props}
                className="relative max-w-[22rem] h-[22rem] lg:h-[26rem] overflow-hidden shadow-md border dark:border-2 border-slate-500/30 rounded-2xl group"
            >
                <img
                    src={imgSrc}
                    alt="project"
                    className="transition-transform group-hover:scale-110 duration-500 ease-in-out blur-[1.5px] min-h-full"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-r from-black/70 to-black/40 backdrop:blur-sm">
                    <div className="p-3 mb-2 text-xs font-medium leading-5 tracking-wider text-white md:p-4 md:text-sm">
                        {children}
                    </div>
                </div>
            </div>
        </RevealAnimation>
    );
};

export default ProjectsCard;
