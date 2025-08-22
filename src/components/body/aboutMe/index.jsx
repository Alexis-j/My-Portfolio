/* eslint-disable react/no-unescaped-entities */
import "./AboutMe.css";

import AboutPic from "../../../assets/img/about_me.jpg";

export default function AboutMe() {
  return (
    <div className="about-container" id="AboutMe">
      <h2 className="about-title">About Me</h2>

      <div className="role-box">
        <p className="role-text">Full Stack Web Dev</p>
      </div>

      <p className="description">
        I'm Alexis Jiménez Castillo, a dedicated junior full-stack developer residing in Berlin, originally from Costa Rica.
        I have a strong focus on front-end development and enjoy designing engaging, user-friendly websites and web applications.
        My skills include HTML, CSS, JavaScript, React, GIT, and GitHub, however, I am constantly learning and remain open to new technologies.
        I dedicate my time to personal projects and continuous improvement in front-end development.
        <br /><br />
        I am well-prepared to help you create a new website or transform an existing one to meet evolving needs.
        As a graduate of Le Wagon, I am a fast, efficient, and resourceful learner. With my abilities and skills,
        I can quickly solve problems.
        <br /><br />
        In my free time, I enjoy spending time with my family in nature, reading Manga, riding a longboard, surfing, and gaming.
      </p>

      <div className="image-wrapper">
        <img src={AboutPic} alt="logo_cv" />
      </div>
    </div>
  );
}
