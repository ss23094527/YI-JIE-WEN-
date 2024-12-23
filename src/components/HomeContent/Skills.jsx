import Col from "react-bootstrap/esm/Col";
import { Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../../assets/images/meter1.svg";

import './styles/skills.css';
import CountUp from 'react-countup';
import { useState } from "react";
import ScrollTrigger from 'react-scroll-trigger';
import FadeIn from "../Animation/FadeIn";


export const Skills = () => {

    const responsive = {
        superLargeDesktop: {

            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 390},
            items: 2
        },
        mobile: {
            breakpoint: { max: 390, min: 0 },
            items: 1
        }
    };

    const [couterOn, setCouterOn] = useState(false);


    return (
        <section className="skill" id="skills">
    
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>This is all the skills we possess.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                <ScrollTrigger onEnter={() => setCouterOn(true)} onExit={() => setCouterOn(false)}>
                                       <CountUp start={0} end={85} className="number1" duration={7} suffix="%" delay={8} />
                                    </ScrollTrigger>
                                    <img src={meter1} alt="Image" />
                                   
                                    <h5>Music production</h5>
                                </div>
                                <div className="item">
                                    <ScrollTrigger onEnter={() => setCouterOn(true)} onExit={() => setCouterOn(false)}>
                                       <CountUp start={0} end={90} className="number2" duration={7} suffix="%" delay={8} />
                                    </ScrollTrigger>
                                    <img src={meter1} alt="Image" />
                                    <h5>3D modeling</h5>
                                </div>
                                <div className="item">
                                <ScrollTrigger onEnter={() => setCouterOn(true)} onExit={() => setCouterOn(false)}>
                                       <CountUp start={0} end={95} className="number3" duration={7} suffix="%" delay={8} />
                                    </ScrollTrigger>
                                    <img src={meter1} alt="Image" />
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                <ScrollTrigger onEnter={() => setCouterOn(true)} onExit={() => setCouterOn(false)}>
                                       <CountUp start={0} end={95} className="number4" duration={7} suffix="%" delay={8} />
                                    </ScrollTrigger>

                                    <img src={meter1} alt="Image" />
                                    <h5>Graphic design</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
         
        </section>
    )
}