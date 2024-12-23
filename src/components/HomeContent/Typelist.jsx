import FadeIn from '../Animation/FadeIn';
import './styles/Typelist.css';
import { NavLink } from 'react-router-dom';
function TextBlock() {
    return (
        <div id="textblock">
            <FadeIn>
                <h1 id="textblock-title">OURWORK <br /><br /></h1>
                <p id="textblock-p">everything you want is here. </p>
                <div id="textblock-content">
                    {/* <NavLink to="/Music" style={{ textDecoration: 'none' }}> */}
                    <div className="card ">
                        <div className="circle"></div>
                        <div className="content">
                            <h2>MUSIC</h2>
                            <p>Listen to the music you want to hear, <br />do what you want to do.
                            </p>
                            <div className="typelistBtn">Listen Now</div>
                        </div>
                        <img src="./images/CD.png" alt="CD" />
                    </div>
                    {/* </NavLink> */}

                    <NavLink to="/Model" style={{ textDecoration: 'none' }}>
                        <div className="card">
                            <div className="circle"></div>
                            <div className="content">
                                <h2>3D MODEL</h2>
                                <p>Collect different models and provide free downloads <br />for you to learn!
                                </p>
                                <div className="typelistBtn">Play Now</div>
                            </div>
                            <img src="./images/house.png" alt="house" />
                        </div>
                    </NavLink>

                    {/* <NavLink to="/Model" style={{ textDecoration: 'none' }}> */}
                    <div className="card">
                        <div className="circle"></div>
                        <div className="content">
                            <h2>SHOP</h2>
                            <p>TRANCE has a special course selling service to <br />enable you to learn effectively.</p>
                            <div className="typelistBtn">Visit Now</div>
                        </div>
                        <img src="./images/shop.png" alt="shop" />
                    </div>
                    {/* </NavLink> */}

                    <NavLink to="/AboutUs" style={{ textDecoration: 'none' }}>
                        <div className="card">
                            <div className="circle"></div>
                            <div className="content">
                                <h2>ABOUT US</h2>
                                <p>Various information and contact information <br />about TRANCE.
                                </p>
                                <div className="typelistBtn">Visit Now</div>
                            </div>
                            <img src="./images/about.png" alt="about" />
                        </div>
                    </NavLink>
                </div>
            </FadeIn>
        </div >
    );
}

export default TextBlock;