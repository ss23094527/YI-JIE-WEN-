import React, { useState, useRef, useEffect } from "react";
import './styles/model.css'

import ModelDescription from './ModelDescription.jsx'


function ModelContent() {
    const [showBtn, setshowBtn] = useState(false)
    const [promptVisible, setpromptVisible] = useState(true)
    const [presentId, setpresentId] = useState(0)
    const modelRef = useRef();

    const setModel = (Orbit, Target) => {
        modelRef.current.cameraOrbit = Orbit;
        modelRef.current.cameraTarget = Target;
    }

    useEffect(() => {
        modelRef.current.addEventListener('load', function () {
            setshowBtn(true);
            console.log("loaded");
            // call your function here
        });

        // cleanup this component
        // return () => {
        //     modelRef.current.removeEventListener('load', function () { });
        // };
    }, []);


    return (
        <model-viewer id="modelContainer"
            src="Room.glb"
            poster="LOGO.png"
            environment-image="purple1.jpg"
            exposure="3"
            camera-controls
            interaction-prompt="none"
            //interaction-prompt-threshold="100"
            touch-action="none"
            camera-orbit="45deg 85deg 0m"
            camera-target="0m 3m 0m"
            field-of-view="45deg"
            interpolation-decay="130"
            shadow-intensity="0.5"
            ref={modelRef}
        >
            {showBtn && promptVisible && <div className="interactionWindow" onClick={() => setpromptVisible(false)}>PRESS BUTTOM BELOW TO LOOK CLOSER<br />&#8595;&#8595;&#8595;</div>}
            <ModelDescription id={presentId} />


            {showBtn &&
                <button className="returnButton"
                    onClick={() => {
                        setModel("45deg 75deg 0m", "0m 3m 0m");
                        setpresentId(0);
                    }}
                >Back To Center
                </button>}

            <button className="viewButton"
                slot="hotspot-2"
                data-surface="3 0 33 35 34 0.381 0.460 0.159"
                onClick={() => {
                    setModel("90deg 90deg 14m", "-15.5m 4.7m 2.7m");
                    setpromptVisible(false);
                    setpresentId(1);
                }}
            >Paint 1
            </button>
            <button className="viewButton"
                slot="hotspot-1"
                data-surface="3 0 32 33 34 0.018 0.565 0.417"
                onClick={() => {
                    setModel("90deg 90deg 14m", "-15m 3.6m 0.6m");
                    setpromptVisible(false);
                    setpresentId(2);
                }}
            >Paint 2
            </button>
            <button className="viewButton"
                slot="hotspot-0"
                data-surface="3 0 32 33 34 0.469 0.227 0.304"
                onClick={() => {
                    setModel("90deg 90deg 14m", "-13m 3.6m -2.2m");
                    setpromptVisible(false);
                    setpresentId(3);
                }}
            >Paint 3
            </button>
            <button className="viewButton"
                slot="hotspot-3"
                data-surface="3 0 33 35 34 0.651 0.112 0.237"
                onClick={() => {
                    setModel("120deg 85deg 14m", "-14.5m 1.9m 8.7m");
                    setpromptVisible(false);
                    setpresentId(4);
                }}
            >Paint 4
            </button>
            <button className="viewButton"
                slot="hotspot-4"
                data-surface="3 1 1 3 2 0.076 0.862 0.063"
                onClick={() => {
                    setModel("40deg 55deg 14m", "-8.5m -3.2m -9.5m");
                    setpromptVisible(false);
                }}
            >Broken Guitar
            </button>


        </model-viewer>
    );
}

export default ModelContent;