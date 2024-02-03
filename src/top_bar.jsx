import React from "react";
import "./top_bar.css";

import a from "./assets/logo/log.jpg";

function Topbar() {
  return (
    <>
      <header>
        <img className="logo" src={a} alt="Logo Alt Text" />
        <div className="menu">
          {/* Use anchor tags with href="#targetId" for internal navigation */}
          <a href="#inicio" className="inicio">
            <li>inicio</li>
          </a>
          <a href="#sobre" className="sobre">
            <li>sobre</li>
          </a>
        </div>
      </header>
    </>
  );
}

export default Topbar;
