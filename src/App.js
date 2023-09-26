import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import NavBar from "./component/NavBar";
import Projects from "./component/Projects";

const App = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </>
    );
};

export default App;
