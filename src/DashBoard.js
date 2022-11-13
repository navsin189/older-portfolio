import React, { useState } from "react";
import "./App.css";
import { projectData, skills, certi } from "./data";
import DisplayCard from "./ComponentCard";
import Paper from "./Paper";
import { context } from "./App";

const firstName = ["N", "a", "v", "e", "e", "n"];
const middleName = ["K", "u", "m", "a", "r"];
const lastName = ["S", "i", "n", "g", "h"];

const Dashboard = () => {
  const [displayskill, setDisplaySkill] = useState("flex");
  const [displayProjects, setDisplayProjects] = useState("flex");
  const [displayCerti, setDisplayCerti] = useState("flex");
  const themeContext = React.useContext(context);

  React.useEffect(() => {
    setTheme();
  }, [themeContext.themeState]);
  // console.log(themeContext);
  function setTheme() {
    let name = document.getElementsByClassName("myName");
    let box = document.getElementsByClassName("box");
    let ceo = document.getElementById("director");
    if (!themeContext.themeState) {
      ceo.classList.add("director")
      for (let element = 0; element < box.length; element++) {
        box[element].classList.add("darkBox");
      }
      for (let element = 0; element < name.length; element++) {
        name[element].classList.add("darkMyName");
      }
    } else {
      for (let element = 0; element < box.length; element++) {
        box[element].classList.remove("darkBox");
      }
      for (let element = 0; element < name.length; element++) {
        name[element].classList.remove("darkMyName");
      }
    }
  }
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
      <div id="director" >
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
            I'm a DevOps engineer who is enthusiastic about learning new tools
            and technologies that will help me do my job more efficiently. I'm
            fascinated by automation. I also have experience with full-stack web
            development with Django and ReactJs, and I'm interested in learning
            about security.
          </h3>
        </div>
        <div className=" projectHeading">
          <h3
            className="box nameBody techSkills"
            onClick={() => clickOnSkills()}
          >
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
      </div>
    </React.Fragment>
  );
};
export default Dashboard;
