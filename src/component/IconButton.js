import { useRef, useState } from "react";

const IconButton = ({ children, text, color, ...props }) => {
    const [hovered, setHovered] = useState(false);
    const ref = useRef(null);
    return (
        <button
            className={`py-1 px-1.5 md:py-2 md:px-2.5  flex items-center rounded-lg shadow-md dark:shadow-slate-400/20 text-white overflow-hidden ${
                color || "bg-gray-200"
            }`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            {...props}
        >
            {children}
            <div
                className="overflow-x-hidden transition-all duration-300 ease-in-out"
                style={{ width: hovered ? ref.current?.offsetWidth || 0 : 0 }}
            >
                <span ref={ref} className="px-1.5 font-semibold">
                    {text}
                </span>
            </div>
        </button>
    );
};

export default IconButton;
