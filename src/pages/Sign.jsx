
import Header from "../components/Header";
import { Helmet } from "react-helmet-async";
import Rigester from "../components/SignContent/Rigister"

function Sign() {
    return (

        <div>
            <Header />
            <Rigester />
            <Helmet><title>Sign</title></Helmet>
        </div>

    );
}

export default Sign