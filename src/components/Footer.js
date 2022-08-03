import * as React from "react";
import "../assets/styles/bootstrap.css";
import "../assets/styles/style.css";
import Resume from "../assets/docs/colby-harris-resume.pdf"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faEnvelopeSquare, faFile } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer container justify-content-center" id="contact-me">
      <div className="row justify-content-center">
      <div className="d-flex col-10 col-3xl-8 justify-content-between border-top border-secondary">
        <h4 className="">Colby Harris, 2022</h4>
        <address className="">
          <a href="https://www.linkedin.com/in/colby-harris-a6465871/" className="text-decoration-none m-2" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://www.github.com/Harabushi" className="text-decoration-none m-2" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="mailto:harris.colby@gmail.com" className="text-decoration-none m-2" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faEnvelopeSquare} />
          </a>
          <a href={Resume} className="text-decoration-none m-2" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFile} />
          </a>
        </address>
      </div>
      </div>
    </footer>
  );
};

export default Footer;