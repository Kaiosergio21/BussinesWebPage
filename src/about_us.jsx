import React from "react";
import "./about_us.css";
import meet from "./assets/meet/meet.jpg"; // Importing the image using ES6 module syntax

function AboutUs() {
  return (
    <>
      <div id="sobre">
        <div className="about">
          <h1 className="section">sobre a empresa</h1>
        </div>
        <p className="text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularized in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
          <img className="meet" src={meet} alt="Logo Alt Text" />
        </p>
        {/* Add content for the "sobre" section */}
      </div>
    </>
  );
}

export default AboutUs;
