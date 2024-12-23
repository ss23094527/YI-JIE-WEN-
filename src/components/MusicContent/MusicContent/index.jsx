import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from "react";
import './styles/music.css'
import Footer from '../../components/Footer'
function MusicContent() {
    return (
        <div id="musicLayout">
            <div id="musicsideBar"></div>
            <div id="musicContentArea">
                <div className="musicBannerFrame"><div className="musicBanner"></div></div>
                <Row style={{ width: "100%",margin:"0" }}>
                    <Col sm={12} md={6} lg={4} xl={3} className="musicItemFrame"><div className="musicItem"></div></Col>
                    <Col sm={12} md={6} lg={4} xl={3} className="musicItemFrame"><div className="musicItem"></div></Col>
                    <Col sm={12} md={6} lg={4} xl={3} className="musicItemFrame"><div className="musicItem"></div></Col>
                    <Col sm={12} md={6} lg={4} xl={3} className="musicItemFrame"><div className="musicItem"></div></Col>
                    <Col sm={12} md={6} lg={4} xl={3} className="musicItemFrame"><div className="musicItem"></div></Col>
                    <Col sm={12} md={6} lg={4} xl={3} className="musicItemFrame"><div className="musicItem"></div></Col>
                    <Col sm={12} md={6} lg={4} xl={3} className="musicItemFrame"><div className="musicItem"></div></Col>
                    <Col sm={12} md={6} lg={4} xl={3} className="musicItemFrame"><div className="musicItem"></div></Col>
                </Row>

                <Footer />
            </div>
        </div>
    );
}

export default MusicContent;