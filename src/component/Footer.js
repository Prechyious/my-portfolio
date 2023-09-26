import React from "react";

const Footer = () => {
    const date = new Date();

    return (
        <footer className="mt-10 bg-white dark:bg-black border-t-2 py-3 text-sm md:text-base dark:border-t dark:border-gray-500">
            <p className="text-center text-slate-900 dark:text-slate-200/40">
                Copyright &copy;
                <span className="font-semibold mx-1">{date.getFullYear()}</span>
                Leghemo Precious
            </p>
        </footer>
    );
};

export default Footer;
