import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import AboutContent from "../components/AboutContent";

function About() {
    return (
        <>
            <Header />
            <AboutContent />
            <Helmet><title>About Us</title></Helmet>
        </>
    );
}

export default About