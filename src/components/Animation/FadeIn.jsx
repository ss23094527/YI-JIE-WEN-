import React, { useEffect, useRef, useState } from 'react';
import styles from './styles/FadeIn.module.css';

const FadeIn = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // 0~1之間的數字，當元素進入視窗的面積大於等於這個數字時，就會觸發回調函數
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.fadeIn} ${isVisible ? styles.isVisible : ''}`}
    >
      {children}
    </div>
  );
};

export default FadeIn;
