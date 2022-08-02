import * as React from "react";
import mernIcon from "../assets/images/skill-icons/mern.jpg";
import bootstrapIcon from "../assets/images/skill-icons/bootstrap.png";
import html5Icon from "../assets/images/skill-icons/html5.png";
import css3Icon from "../assets/images/skill-icons/css3.png";
import expressIcon from "../assets/images/skill-icons/express.png";
import gatsbyIcon from "../assets/images/skill-icons/gatsby.png";
import githubIcon from "../assets/images/skill-icons/github-logo.png";
import jqueryIcon from "../assets/images/skill-icons/jQuery.png";
import jsIcon from "../assets/images/skill-icons/JS.png";
import mongodbIcon from "../assets/images/skill-icons/mongodb.png";
import sqlIcon from "../assets/images/skill-icons/MySQL.jpg";
import nodeIcon from "../assets/images/skill-icons/nodeJS.png";
import npmIcon from "../assets/images/skill-icons/npm_logo.png";
import reactIcon from "../assets/images/skill-icons/React.png";


const Skills = () => {
  return (
    <div className="pt-3">
        <img
          className="mern icon m-1"
          src={mernIcon}
          alt="mern"
        />
        <img
          className="icon m-1"
          src={bootstrapIcon}
          alt="bootstrap"
        />
        <img
          className="icon m-1"
          src={html5Icon}
          alt="html5"
        />
        <img
          className="icon m-1"
          src={css3Icon}
          alt="css3"
        />
        <img
          className="icon m-1"
          src={expressIcon}
          alt="express"
        />
        <img
          className="icon m-1"
          src={gatsbyIcon}
          alt="gatsby"
        />
        <img
          className="icon m-1"
          src={githubIcon}
          alt="github"
        />
        <img
          className="icon m-1"
          src={jqueryIcon}
          alt="jquery"
        />
        <img
          className="icon m-1"
          src={jsIcon}
          alt="js"
        />
        <img
          className="icon m-1"
          src={mongodbIcon}
          alt="mongodb"
        />
        <img
          className="icon m-1"
          src={sqlIcon}
          alt="mysql"
        />
        <img
          className="icon m-1"
          src={nodeIcon}
          alt="nodejs"
        />
        <img
          className="npm icon m-1"
          src={npmIcon}
          alt="npm"
        />
        <img
          className="icon m-1"
          src={reactIcon}
          alt="reactjs"
        />
    </div>
  );
};

export default Skills;