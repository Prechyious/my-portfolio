import { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    // Function to toggle dark mode
    const toggleDarkMode = () => {
        const selectedMode = !darkMode;
        setDarkMode(selectedMode);
        localStorage.setItem("darkMode", JSON.stringify(selectedMode));
    };

    useEffect(() => {
        // Check if the user prefers dark mode
        const prefersDarkMode = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;

        // Get the user's preference from local storage (if available)
        const storedDarkMode = JSON.parse(localStorage.getItem("darkMode"));

        // Set the initial theme based on the user's preference (if available)
        setDarkMode(storedDarkMode !== null ? storedDarkMode : prefersDarkMode);

        // Add or remove the 'dark' class to the body based on the user's preference
        document.body.classList.toggle(
            "dark",
            storedDarkMode !== null ? storedDarkMode : prefersDarkMode
        );
    }, []);

    useEffect(() => {
        // Update the body class whenever darkMode changes
        document.body.classList.toggle("dark", darkMode);
    }, [darkMode]);

    return (
        <div onClick={toggleDarkMode} className="cursor-pointer">
            {darkMode ? (
                <BsSun className="text-slate-200" />
            ) : (
                <BsMoon className="text-slate-800" />
            )}
        </div>
    );
};

export default DarkModeToggle;
