import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import ModelContent from "../components/ModelContent";

function Model() {
    return (
        <>
            <Header />
            <ModelContent />
            <Helmet><title>3D Model</title></Helmet>
        </>
    );
}

export default Model