import React, { useState } from "react";
import "./App.css";
import { projectData, skills, certi } from "./data";
import DisplayCard from "./ComponentCard";
import Paper from "./Paper";
import AppBar from './AppBar'; 
const firstName = ["N", "a", "v", "e", "e", "n"];
const middleName = ["K", "u", "m", "a", "r"];
const lastName = ["S", "i", "n", "g", "h"];


const Dashboard = () => {
  const [displayskill, setDisplaySkill] = useState("flex");
  const [displayProjects, setDisplayProjects] = useState("flex");
  const [displayCerti, setDisplayCerti] = useState("flex");
  function clickOnSkills() {
    if (displayskill === "none") {
      setDisplaySkill("flex");
    } else {
      setDisplaySkill("none");
    }
  }
  function clickOnProjects() {
    if (displayProjects === "none") {
      setDisplayProjects("flex");
    } else {
      setDisplayProjects("none");
    }
  }
  function clickOnCerti() {
    if (displayCerti === "none") {
      setDisplayCerti("flex");
    } else {
      setDisplayCerti("none");
    }
  }
  return (
    <React.Fragment>
      <div className="nameBody" id="intro">
        <h1>
          {firstName.map((char, index) => (
            <div className=" box myName" key={index}>
              {char}
            </div>
          ))}
        </h1>
        <h1>
          {middleName.map((char, index) => (
            <div className="box myName" key={index}>
              {char}
            </div>
          ))}
        </h1>
        <h1>
          {lastName.map((char, index) => (
            <div className="box myName" key={index}>
              {char}
            </div>
          ))}
        </h1>
      </div>
      <div className="selfIntroBody">
        {/* <div className="nameBody batman">I want to be the Batman but without Alfred.</div> */}
        <h3 className="box nameBody selfIntro">
          I'm a DevOps engineer who is passionate about learning new tools and
          technologies that will make my work cool with the least amount of
          effort. I'm interested in automation. I also have expertise with
          full-stack web development using Django and ReactJs, and I'm now
          interested in learning security-related topics.
        </h3>
      </div>
      <div className=" projectHeading">
        <h3 className="box nameBody techSkills" onClick={() => clickOnSkills()}>
          Technical Skills
        </h3>
        <div className="projects" style={{ display: displayskill }}>
          {skills.map((skill, index) => (
            <Paper pr={skill} key={index} />
          ))}
        </div>
      </div>
      <div className="projectHeading">
        <h3 className="box nameBody" onClick={() => clickOnProjects()}>
          Projects
        </h3>
        <div className="projects" style={{ display: displayProjects }}>
          {projectData.map((project, index) => (
            <DisplayCard pr={project} key={index} />
          ))}
        </div>
      </div>
      <div className="projectHeading">
        <h3 className="box nameBody" onClick={() => clickOnCerti()}>
          Certification & Workshop
        </h3>
        <div className="projects" style={{ display: displayCerti }}>
          {certi.map((certi, index) => (
            <DisplayCard pr={certi} key={index} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};
export default Dashboard;
