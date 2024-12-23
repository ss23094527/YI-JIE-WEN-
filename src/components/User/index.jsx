import React, { useState, useContext } from "react";
import { AuthContext } from "../SignContent/context/AuthContext";
import { FaUser, FaStar, FaMusic, FaQuestion } from "react-icons/fa"; // 導入需要的 react-icons 元件
import "./styles/User.css";

function UserContent() {
  const { currentUser } = useContext(AuthContext);
  const [name, setName] = useState(currentUser ? currentUser.displayName : "");

  return (
    <div className="User">
      <div className="user-profile">
        <h1 className="user-title">User Profile</h1>
        <div className="user-icon">
          {currentUser && (
            <img src={currentUser.photoURL} alt="User Avatar" className="user-icon" />
          )}
        </div>
        <div className="user-info">
          <h1>
            <strong>{currentUser.displayName}</strong>
          </h1>
        </div>
      </div>
      <div className="user-footer">
        <div className="footer-section">
          <FaUser className="nav-icon" />
          <span>PERSONAL INFORMATION</span>
        </div>
        <div className="footer-section">
          <FaStar className="nav-icon" />
          <span>MY COLLECTION</span>
        </div>
        <div className="footer-section">
          <FaMusic className="nav-icon" />
          <span>MY PLAYLIST</span>
        </div>
        <div className="footer-section">
          <FaQuestion className="nav-icon" />
          <span>MY QUESTION</span>
        </div>
      </div>
    </div>
  );
}

export default UserContent;
