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
      <main className="container text-center col-10 col-3xl-8 my-5" id="my-work">
        <h2 className="p-2 border-bottom border-secondary text-secondary">My Work</h2>
        <div className="row my-5">
          <div className="col-12 col-sm-6">
            <h3 className="text-secondary">Mental Health Checker</h3>
            <h4>My Role: Back-end</h4>
            <p>
              A mental health quiz app that helps users track their moods using standardized 
              screening tests. Mental Health Check tests users with multiple quiz options to 
              help users understand and identify their feelings. The app is a Progressive Web 
              Application including the ability to take and save quiz results offline.
            </p>
            <h4>Technologies Used</h4>
            <p>
              The application uses a React.js front-end with MongoDB, Express.js and Node.js running the back-end
            </p>
          </div>
          <figure className="col-12 col-sm-6">
            <a href="https://mh-check.herokuapp.com/" target="_blank" rel="noreferrer">
              <img
                className="rounded mw-100"
                src={mhc}
                title="Mental Health Checker"
                alt="mental health checker website"
              />
            </a>
          </figure>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6">
            <h3 className="text-secondary">Traveler's Hidden Gems</h3>
            <h4>My Role: Back-end</h4>
            <p>
              A travel guide to hidden spots across the globe. Find the offbeat, 
              see something interesting, and share it with others!Access all this 
              application has to offer by creating a user account.  Once logged in 
              you will be able to create, view, comment, and bookmark places of interest!  
              Use the well-designed map to view pins of the locations.
            </p>
            <h4>Technologies Used</h4>
            <p>
              This app is made with a Handlebars.js front-end with MySQL, Sequelize, Express.js, and Node.js running the back-end. Along with some third-party API's leaflet.js, GeoApify API
            </p>
          </div>
          <figure className="col-12 col-sm-6">
            <a href="https://sleepy-woodland-16634.herokuapp.com/" target="_blank" rel="noreferrer">
              <img
                className="rounded mw-100"
                src={hiddenGems}
                title="Traveler's Hidden Gems"
                alt="traveler's hidden gems website"
              />
            </a>
          </figure>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6">
            <h3 className="text-secondary">B & E Website</h3>
            <h4>My Role: Full-Stack</h4>
            <p>
              A website for promotion of the local music production group know as B & E. 
              The site contains recent production releases, upcoming shows, a list of 
              all artists involved with B & E, and eventually profile pages for each artist 
              and project as well as a merch page.
            </p>
            <h4>Technologies Used</h4>
            <p>
              The B & E app is made with React.js front-end with MongoDB, Express.js and Node.js running the back-end
            </p>
          </div>
          <figure className="col-12 col-sm-6">
            <a href="https://harabushi.github.io/B-and-E-website/" target="_blank" rel="noreferrer">
              <img
                className="rounded mw-100"
                src={bande}
                title="B and E"
                alt="B and E music website"
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