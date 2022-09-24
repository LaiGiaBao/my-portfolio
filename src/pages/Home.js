import React from "react";
import Cerificates from "./Certificates";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import Experience from "./Experience";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Gia Bao Lai</h2>
        <div className="prompt">
          <p>An entry level Web Developer with passion for learning</p>
          <a href="https://www.linkedin.com/in/lai-gia-bao-6b8a981b4/">
            <LinkedInIcon />
          </a>
          <EmailIcon />

          <a href="https://github.com/LaiGiaBao">
            <GithubIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <header className="skills__header">I'm quite good at</header>
        <div className="grid grid--cols-3">
          <ul className="card list">
            <h2> Front-End</h2>

            <li className="item">
              <span>ReactJS</span>
            </li>
            <li className="item">
              <span>HTML</span>
            </li>
            <li className="item">
              <span>CSS</span>
            </li>
            <li className="item">
              <span>Bootstrap</span>
            </li>
            <li className="item">
              <span>GatsbyJS</span>
            </li>
          </ul>
          <ul className="card list">
            <h2>Back-End</h2>
            <li className="item">
              <span>NodeJS</span>
            </li>
            <li className="item">
              <span>Java</span>
            </li>
            <li className="item">
              <span>ExpressJS</span>
            </li>
            <li className="item">
              <span>GraphQL</span>
            </li>
            <li className="item">
              <span>MySQL</span>
            </li>
            <li className="item">
              <span>MongoDB</span>
            </li>
          </ul>
          <ul className="card list">
            <h2>Languages</h2>
            <li className="item">
              <span>JavaScript</span>
            </li>
            <li className="item">
              <span>Java</span>
            </li>
            <li className="item">
              <span>Python</span>
            </li>
            <li className="item">
              <span>TypeScript</span>
            </li>
          </ul>
        </div>
      </div>
      <Cerificates />
      <Experience />
    </div>
  );
}

export default Home;
