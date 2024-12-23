import { Badge } from "antd";
import { HeartFilled } from "@ant-design/icons";

import styles from "./favorite.module.css";
import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../components/SignContent/context/AuthContext';
import { auth } from '../../firebase';
export default function Favorite({count}) {

  const { setCurrentUser, currentUser } = useContext(AuthContext);
  
  const toggleOpen = () => {};

  return (
    <div onClick={toggleOpen} className={styles.favorite}>
      <Badge count={2} color="#F19D38" style={{ color: "white" }}>
        <HeartFilled  style={{ color: '#efeef7' }}/>
      </Badge>
    </div>
  );
}
