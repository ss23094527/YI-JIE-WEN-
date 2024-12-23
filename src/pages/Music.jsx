import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import MusicContent from "../components/MusicContent";
import ScrollToTop from '../components/ScrollToTop';

import { useSongs } from '../react-query';

function Music() {

    const { data, isLoading } = useSongs();
    // console.log(isLoading);
    const songs = data || [];
  

    return (
        <>
            <ScrollToTop />
            <div>
                <Header />
                <MusicContent songs={songs} isLoading={isLoading}/>
            </div>
            <Helmet><title>Music</title></Helmet>
        </>
    );
}

export default Music