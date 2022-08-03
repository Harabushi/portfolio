import * as React from "react";
import "../assets/styles/bootstrap.css";
import "../assets/styles/style.css";
import { Link } from "gatsby";

const Nav = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand mx-5"><h2>Colby Harris</h2></a>
        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01"
        aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
    
        <div className="navbar-collapse collapse mx-5 justify-content-end" id="navbarColor01">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">About Me</Link>
            </li>
            <li className="nav-item">
              <Link to="/Projects" className="nav-link">Projects</Link>
            </li>
            <li className="nav-item">
              <Link to="/Contact" className="nav-link">Contact Me</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;