import { motion as m, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const RevealAnimation = ({ children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) mainControls.start("visible");
    }, [isInView, mainControls]);

    const animateHero = {
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
    };
    return (
        <div ref={ref} className="relative overflow-hidden">
            <m.div
                variants={animateHero}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                {children}
            </m.div>
        </div>
    );
};
