import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles/music.css'
import Footer from '../../components/Footer'
import CarouselImage1 from '../../assets/images/Cimage1.png'
import CarouselImage2 from '../../assets/images/Cimage2.png'
import CarouselImage3 from '../../assets/images/Cimage3.png'
import Logo from '../../assets/images/LOGO.png'

import SongBlock from './SongBlock'

import { CCarousel, CCarouselItem, CImage } from '@coreui/react'
import { HomeFilled, SearchOutlined, HeartFilled } from '@ant-design/icons';
import { Skeleton } from "antd";

import Favorite from "../Favorite"


function MusicContent({ songs, isLoading }) {

    return (
        <div id="musicLayout">
            <div id="musicsideBar">
                {/* icon */}
                <img src={Logo} style={{ width: "100px", marginTop: "50px", marginBottom: "60px" }} alt="CD" />
                {/* list */}
                <div className="listFrame"><HomeFilled style={{ fontSize: '25px', color: '#efeef7' }} /><p className="sidebarListText">H O M E</p></div>
                <div className="listFrame"><SearchOutlined style={{ fontSize: '25px', color: '#efeef7' }} /><p className="sidebarListText">S E A R C H</p></div>
                <div className="listFrame"><Favorite style={{ fontSize: '25px', color: '#efeef7' }} /><p className="sidebarListText">L I K E</p></div>

            </div>
            <div id="musicContentArea">
                <div className="musicBannerFrame">
                    <CCarousel controls indicators transition="crossfade">
                        <CCarouselItem>
                            <CImage style={{ width: "100%" }} src={CarouselImage1} alt="slide 1" />
                        </CCarouselItem>
                        <CCarouselItem>
                            <CImage style={{ width: "100%" }} src={CarouselImage2} alt="slide 2" />
                        </CCarouselItem>
                        <CCarouselItem>
                            <CImage style={{ width: "100%" }} src={CarouselImage3} alt="slide 3" />
                        </CCarouselItem>
                    </CCarousel>
                </div>

                <p className="musicTitle">TOP 10</p><Skeleton loading={isLoading} active>
                    <Row style={{ width: "100%", paddingLeft: "12px", paddingRight: "12px", paddingBottom: "12px", margin: "0" }}>
                        {songs.map(song => (
                            <Col
                                key={song.id}
                                xs={{ span: 6 }}
                                sm={{ span: 4 }}
                                lg={{ span: 4 }}
                                xl={{ span: 4 }}
                                xxl={{ span: 2 }}
                            >

                                <SongBlock song={song} />


                            </Col>
                        ))}
                    </Row>
                </Skeleton>
                {/* <p className="musicTitle">MUSIC TYPE</p> */}
                {/* <Row style={{ width: "100%", paddingLeft: "12px", paddingRight: "12px", paddingBottom: "12px", margin: "0" }}>
                    <Col sm={12} md={6} lg={4} xl={2} className="musicItemFrame"><SongBlock/></Col>
                    <Col sm={12} md={6} lg={4} xl={2} className="musicItemFrame"><SongBlock/></Col>
                    <Col sm={12} md={6} lg={4} xl={2} className="musicItemFrame"><SongBlock/></Col>
                    <Col sm={12} md={6} lg={4} xl={2} className="musicItemFrame"><SongBlock/></Col>
                    <Col sm={12} md={6} lg={4} xl={2} className="musicItemFrame"><SongBlock/></Col>
                    <Col sm={12} md={6} lg={4} xl={2} className="musicItemFrame"><SongBlock/></Col>
                </Row> */}

                <div style={{ height: "360px" }}><Footer /></div>

            </div>
        </div>
    );
}

export default MusicContent;