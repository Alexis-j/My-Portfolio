import "./hero.css";

import BtnMoreAboutMe from "../../btns/BtnMoreAboutMe";
import ProfilePic from "../../../assets/img/profile-photo.jpg";
import React from "react";

export default function Hero() {
  return (
    <section className="hero-container" id="hero">
      <div className="hero-flex">
        <div className="hero-image-wrapper">
          <img src={ProfilePic} alt="logo_cv" />
        </div>

        <div className="hero-text">
          <h3 className="hero-title">
            Hi, I am <br />
            <strong>Alexis Jimenez C</strong>
          </h3>
          <h5 className="hero-subtitle">Full Stack Web-Developer</h5>
          <BtnMoreAboutMe />
        </div>
      </div>
    </section>
  );
}
