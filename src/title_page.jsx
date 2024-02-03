import React from "react";
import "./title _page.css"; // Ensure correct file path for your CSS file
import a from"./assets/logo/log.jpg"

function TitlePage() {
  return (
    <>
      <div id="inicio">
        <div className="start">
          <h1 className="section">Inicio Section</h1>
          <img className="logo2" src={a} alt="Logo Alt Text" />
          <h2 className="subtexto">nome da empresa</h2>
        </div>
        {/* Add content for the "inicio" section */}
      </div>
    </>
  );
}

export default TitlePage;
