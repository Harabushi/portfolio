import * as React from "react";
import "../assets/styles/bootstrap.css";
import "../assets/styles/style.css";
import Footer from "../components/footer";
import Nav from "../components/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Resume from "../assets/docs/colby-harris-resume.pdf";

const Contact = () => {
  return (
    <div>
      <Nav></Nav>
      <main className="container-xxl mt-5">
        <div className="container text-center align-middle col-3xl-8">
            <h2 className="p-2 border-bottom border-light text-light">How to reach me!</h2>
        </div>
        <article className="container align-self-center align-middle col-10 col-3xl-8 my-5">
        <div className="row align-self-center my-5 p-2 justify-content-between">
          <div className="col-12 col-md-12 col-lg-5 col-3xl-5 border border-primary m-1">
            <p className="m-3">
              Have any questions about me or my projects? <br /><br />
              Want to get in touch about any of my projects or to talk about what I could do for yours?<br /><br />
              Reach out using whatever mode of contact is best for you!
            </p>
          </div>
          <div className="col-12 col-md-12 col-lg-5 col-3xl-5 text-center border border-primary m-1">
            <p className="m-3">
              Ways to contact me:
              <br/>
              (Don't forget to check out my <a href={Resume} className="text-decoration-none link-info" target="_blank" rel="noreferrer">resume</a>!)
              <br /><br />
              <span className="text-info">763.412.7142</span>
              <br /><br />
              <a href="mailto:harris.colby@gmail.com" className="text-decoration-none link-info" target="_blank" rel="noreferrer">
                harris.colby@gmail.com
              </a>
              <br /><br />
              Social Media:
              <a href="https://www.linkedin.com/in/colby-harris-a6465871/" className="text-decoration-none link-info m-2 fa-2x" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://www.github.com/Harabushi" className="text-decoration-none link-info m-2 fa-2x" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </p>
          </div>
          </div>
        </article>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Contact