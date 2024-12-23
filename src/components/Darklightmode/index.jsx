import React, { useState } from "react";
import "./darklightmode.css";

//☀︎ ☽
export default function Darklightmode() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="container">
        <span style={{ color: darkMode ? "grey" : "#ffffff" }}>☀︎</span>
        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round"> </span>
          </label>
        </div>
        <span style={{ color: darkMode ? "#c96dfd" : "#ffffff" }}>☪</span>
      </div>
      <div>
       
      </div>
    </div>
  );
}
