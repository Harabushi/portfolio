import * as React from "react";
import "../assets/styles/bootstrap.css";
import "../assets/styles/style.css";
import bande from "../assets/images/bande-screenshot.png";
import hiddenGems from "../assets/images/hidden-gems-screenshot.jpg";
import mhc from "../assets/images/mhc-screenshot.png";
import Nav from "../components/Nav";
import Footer from "../components/footer";

const Projects = () => {
  return (
    <div>
      <Nav></Nav>
      <main className="container text-center col-12 col-3xl-6" id="my-work">
        <h2 className="p-2 border-bottom border-secondary">My Work</h2>
        <div className="row">
          <figure className="col-12 mx-auto">
            <a href="https://mh-check.herokuapp.com/" target="_blank" rel="noreferrer">
              <img
                className="rounded desktop mw-100"
                src={mhc}
                title="Mental Health Checker"
                alt="screenshot of mental health checker website"
              />
            </a>
          </figure>
          <figure className="col-12 col-sm-6 col-lg-3">
            <a href="https://sleepy-woodland-16634.herokuapp.com/" target="_blank" rel="noreferrer">
              <img
                className="rounded mw-100"
                src={hiddenGems}
                title="Traveler's Hidden Gems"
                alt="screenshot of traveler's hidden gems website"
              />
            </a>
          </figure>
          <figure className="col-12 col-sm-6 col-lg-3">
            <a href="https://harabushi.github.io/B-and-E-website/" target="_blank" rel="noreferrer">
              <img
                className="rounded mw-100"
                src={bande}
                title="B and E"
                alt="screenshot of B and E music website"
              />
            </a>
          </figure>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Projects;