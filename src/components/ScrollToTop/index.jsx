import React from 'react';
import { useEffect, useState } from 'react';
import { FaAngleUp } from 'react-icons/fa';
import styles from './ScrollToTop.module.css';

const ScrollToTop = () => {

    
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const goTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div className={styles.topToBtn}>
            {" "}
            {showTopBtn && (
                <FaAngleUp
                    className={styles.iconStyle}
                    onClick={goTop}
                />
            )}{" "}
        </div>
    );
};

export default ScrollToTop