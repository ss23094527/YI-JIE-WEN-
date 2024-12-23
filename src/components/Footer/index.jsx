import React from 'react';
import styles from './Footerstyle.module.css'; // 引入CSS樣式

export default function Footer() {
  return (

    <footer>


          <div className={styles.left}>
            <h2>TRANCE</h2>
            <p>Everything you want is here.</p>
            <div className={styles.socialicons}>
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <div className={styles.right}>
            <ul>
              <li><h3>About</h3></li>

              <li><a href="#">Partners</a></li>
              <li><a href="#">Contact us</a></li>
            </ul>
            <ul>
              <li><h3>Shop</h3></li>
              <li><a href="#">Precautions</a></li>
              <li><a href="#">Newsletter</a></li>
            </ul>
            <ul>
              <li><h3>Music</h3></li>
              <li><a href="#">Saved</a></li>
              <li><a href="#">Liked</a></li>
            </ul>
          </div>
     
        <div className={styles.bottom}>
          <p>Copyright © 2023 TRANCE All Rights Reserved.</p>
        </div>

    
    </footer>

  );
}