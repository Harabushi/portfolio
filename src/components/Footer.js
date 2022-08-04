import * as React from "react";
import "../assets/styles/bootstrap.css";
import "../assets/styles/style.css";
import Resume from "../assets/docs/colby-harris-resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeSquare, faFile } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer container justify-content-center border-top border-secondary" id="contact-me">
        <div className="d-flex justify-content-between py-2">
          <h4 className="">Colby Harris, 2022</h4>
          <address className="">
            <a href="https://www.linkedin.com/in/colby-harris-a6465871/" className="text-decoration-none link-info m-2 fa-lg p-2" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://www.github.com/Harabushi" className="text-decoration-none link-info m-2 fa-lg p-2" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="mailto:harris.colby@gmail.com" className="text-decoration-none link-info m-2 fa-lg p-2" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faEnvelopeSquare} />
            </a>
            <a href={Resume} className="text-decoration-none link-info m-2 fa-lg p-2" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFile} />
            </a>
          </address>
        </div>
    </footer>
  );
};

export default Footer;