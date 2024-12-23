import React from "react";
import { SearchOutlined } from "@ant-design/icons";
// import { Canvas } from '@react-three/fiber';
// import { PresentationControls, Stage, useGLTF } from "@react-three/drei";
import Button from 'react-bootstrap/Button';

import InputGroup from 'react-bootstrap/InputGroup';
import './styles/whatdo.css';
import { NavLink } from 'react-router-dom';
import FadeIn from "../Animation/FadeIn";



function Whatdo() {
  return (
    <div className="whatdo-container">

      <div className="whatdo-content">
        <FadeIn >
          <h1 className="whatdo-title">➥ What do we do?</h1>
          <h3>TRANCE is a creative studio that specializes in 3D design, <br />music production, and art direction. Our team offers services <br />including 3D modeling and animation, music composition, and art direction<br /> for branding and marketing campaigns. Contact us today to learn more.</h3>
          <br />

          <InputGroup className="mb-3 searchbar">
            <h1 className="search-title"></h1>

            <Button variant="outline-light" id="button-addon2" >
              <NavLink to="/AboutUs" style={{ textDecoration: 'none' }}><h2 style={{ margin: 'auto' }}>LEARN MORE ↗</h2></NavLink></Button>
          </InputGroup>
        </FadeIn>
      </div>

      {/* model */}
      <model-viewer id="modelContainerr"
        src="bmw.glb"
        camera-orbit="25deg 75deg 5.5m"
        environment-image="night.jpg"
        exposure="9"
        camera-controls
        touch-action="none"
        camera-target="auto auto auto"
        disable-zoom
        auto-rotate
        auto-rotate-delay="100"
        rotation-per-second
        interaction-prompt="none"
        scale="1.3 1.3 1.3"
        shadow-intensity="2">
      </model-viewer>
    </div >
  );
}

export default Whatdo