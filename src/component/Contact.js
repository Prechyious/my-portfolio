import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import IconButton from "./IconButton";
import { RevealAnimation } from "./Animation/RevealAnimation";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [validationErrors, setValidationErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);

    useEffect(() => {
        const errors = [];

        if (!name.length) errors.push("Please enter your Name");

        const validMail = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
        if (!validMail.test(email)) errors.push("Please enter a valid Email");

        if (!message.length) errors.push("Please leave a message");
        setValidationErrors(errors);
    }, [name, email, message]);

    const sendEmail = async (e) => {
        e.preventDefault();

        setHasSubmitted(true);
        if (validationErrors.length) return alert(`Cannot Submit`);

        try {
            await emailjs.sendForm(
                "service_lrdi1um",
                "template_eyo83nj",
                form.current,
                "6oJLqHCfwcB43u0R4"
            );

            toast.success("Message Sent Successfully", {
                theme: document.body.classList.contains("dark")
                    ? "dark"
                    : "light",
                autoClose: 2000,
            });
            reset();
        } catch (error) {
            toast.error(`Unable to send ${error.text}`, {
                theme: document.body.classList.contains("dark")
                    ? "dark"
                    : "light",
                autoClose: 2000,
            });
        }
    };

    const reset = () => {
        setName("");
        setEmail("");
        setMessage("");
        setHasSubmitted(false);
    };
    return (
        <section name="contact" className="container px-5 mx-auto mt-20 mb-10">
            <h2 className="text-2xl font-bold text-center md:text-3xl text-slate-950 dark:text-slate-300">
                Contact
            </h2>
            <div className="w-8 h-1 mx-auto my-4 mt-2 bg-blue-800 rounded-full"></div>

            <div className="flex flex-col items-start justify-between w-full px-10 md:flex-row md:px-40 xl:px-20">
                <div className="p-2 md:w-3/4">
                    <p className="text-base font-medium leading-8 tracking-wider md:text-lg text-slate-800 dark:text-slate-200/80 md:max-w-sm">
                        Want to have a chat, collaborate, drop a feedback or
                        would like to contact me? Say Hi! below.
                    </p>
                    <RevealAnimation>
                        <div className="inline-flex py-2 space-x-3">
                            <Link
                                to="https://github.com/Prechyious"
                                target="_blank"
                            >
                                <IconButton text="Github" color="bg-gray-600">
                                    <FaGithub size={20} />
                                </IconButton>
                            </Link>
                            <Link
                                to="https://www.linkedin.com/in/prechyious"
                                target="_blank"
                            >
                                <IconButton
                                    text="LinkedIn"
                                    color="bg-[#004182]"
                                >
                                    <FaLinkedin size={20} />
                                </IconButton>
                            </Link>
                            <Link to="mailto:lemoprechy@gmail.com">
                                <IconButton text="Mail" color="bg-red-600">
                                    <FaEnvelope size={20} />
                                </IconButton>
                            </Link>
                        </div>
                    </RevealAnimation>
                </div>

                <div className="w-full mt-5 md:mt-0 md:w-1/2">
                    <RevealAnimation>
                        <form
                            ref={form}
                            onSubmit={sendEmail}
                            className="flex flex-col w-full gap-5 px-2"
                        >
                            <div className="flex flex-col">
                                <input
                                    className={`border-2  py-1 px-2 rounded-md bg-transparent focus:outline-none dark:text-slate-400 focus:shadow-md focus:shadow-slate-600/50
                            placeholder:text-sm transition-shadow duration-300 ease-in-out ${
                                hasSubmitted &&
                                validationErrors.includes(
                                    "Please enter your Name"
                                )
                                    ? "border-red-500"
                                    : "border-slate-400 dark:border-slate-500/30"
                            }`}
                                    type="text"
                                    name="user_name"
                                    placeholder="Enter Your Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                {hasSubmitted &&
                                    validationErrors.includes(
                                        "Please enter your Name"
                                    ) && (
                                        <span className="text-red-500">
                                            Please enter your Name
                                        </span>
                                    )}
                            </div>

                            <div className="flex flex-col">
                                <input
                                    className={`border-2  py-1 px-2 rounded-md bg-transparent focus:outline-none dark:text-slate-400 focus:shadow-md focus:shadow-slate-600/50 placeholder:text-sm transition-shadow duration-300 ease-in-out ${
                                        hasSubmitted &&
                                        validationErrors.includes(
                                            "Please enter a valid Email"
                                        )
                                            ? "border-red-500"
                                            : "border-slate-400 dark:border-slate-500/30"
                                    }`}
                                    type="email"
                                    name="user_email"
                                    placeholder="Enter Your Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {hasSubmitted &&
                                    validationErrors.includes(
                                        "Please enter a valid Email"
                                    ) && (
                                        <span className="text-red-500">
                                            Please enter a valid Email
                                        </span>
                                    )}
                            </div>
                            <div className="flex flex-col">
                                <textarea
                                    className={`border-2  py-1 px-2 rounded-md bg-transparent focus:outline-none dark:text-slate-400 focus:shadow-md focus:shadow-slate-600/50 placeholder:text-sm transition-shadow duration-300 ease-in-out ${
                                        hasSubmitted &&
                                        validationErrors.includes(
                                            "Please leave a message"
                                        )
                                            ? "border-red-600"
                                            : "border-slate-400 dark:border-slate-500/30"
                                    }`}
                                    rows="5"
                                    name="message"
                                    placeholder="Message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                                {hasSubmitted &&
                                    validationErrors.includes(
                                        "Please leave a message"
                                    ) && (
                                        <span className="text-red-500">
                                            Please leave a message
                                        </span>
                                    )}
                            </div>
                            <button
                                className="text-sm md:text-base font-medium uppercase tracking-wide w-fit px-4 md:px-6 py-1.5 md:py-2 rounded-lg transition-all duration-300 ease-in-out shadow-md dark:shadow-slate-400/20 bg-blue-900 text-gray-50 hover:bg-slate-900 flex items-center justify-center gap-2"
                                type="submit"
                            >
                                Send
                            </button>
                        </form>
                    </RevealAnimation>
                </div>
            </div>
        </section>
    );
};

export default Contact;
