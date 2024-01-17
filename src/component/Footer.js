import React from "react";

const Footer = () => {
    const date = new Date();

    return (
        <footer className="container py-3 mx-auto mt-10 text-sm bg-white border-t-2 dark:bg-black md:text-base dark:border-t dark:border-gray-500">
            <p className="text-center text-slate-900 dark:text-slate-200/40">
                Copyright &copy;
                <span className="mx-1 font-semibold">{date.getFullYear()}</span>
                Leghemo Precious
            </p>
        </footer>
    );
};

export default Footer;
