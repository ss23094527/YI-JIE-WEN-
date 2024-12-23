import React, { useContext, useState, useEffect } from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../../firebase';
import { AuthContext } from '../../components/SignContent/context/AuthContext';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { FaRegHeart, FaSignOutAlt, FaGlobe } from 'react-icons/fa'; // 引入地球符號
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dropdown from 'react-bootstrap/Dropdown'; // 引入 Dropdown
import styles from './Headerstyle.module.css';

import { useNavigate, NavLink } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const { setCurrentUser, currentUser } = useContext(AuthContext);
  const [loggedIn, setLoggedIn] = useState(false);
  const [language, setLanguage] = useState('en'); // 新增語言狀態

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setLoggedIn(user !== null);
    });

    return unsubscribe;
  }, []);

  const handleSignOut = () => {
    if (currentUser) {
      signOut(auth)
        .then(() => {
          setCurrentUser(null);
          setLoggedIn(false);
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      navigate("/login");
    }
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <>
      {['sm'].map((expand) => (
        <Navbar className={styles.navbarCustom} key={expand} variant="dark" expand={expand}>
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  {language === 'en' ? 'MENU' : '選單'} {/* 动态显示语言 */}
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className={`${styles.navlink} ms-auto`} style={{ textAlign: 'right' }}>
                  <Nav.Link as={NavLink} to="/" >
                    {language === 'en' ? 'HOME' : '首頁'}
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/AboutUs" >
                    {language === 'en' ? 'ABOUT ME' : '關於我'}
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/Music" >
                    {language === 'en' ? 'WORK' : '作品'}
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/Model" >
                    {language === 'en' ? '3D MODEL' : '3D 模型'}
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>

            <Dropdown className="ms-auto">
              <Dropdown.Toggle
                variant="link"
                className={styles.languageToggle}
                style={{ color: 'white' }} // 符号改为白色
              >
                <FaGlobe size={25} />
              </Dropdown.Toggle>
              <Dropdown.Menu align="end">
                <Dropdown.Item onClick={() => changeLanguage('en')}>EN</Dropdown.Item>
                <Dropdown.Item onClick={() => changeLanguage('zh')}>CH</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
