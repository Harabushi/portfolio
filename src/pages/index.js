import * as React from "react";
import "../assets/styles/bootstrap.css";
import "../assets/styles/style.css";
import Nav from "../components/Nav";
import profilePhoto from "../assets/images/profile-photo.jpg";
import { Script } from "gatsby";
import Skills from "../components/Skills";
import Footer from "../components/footer";

// data
const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
];

// markup
const IndexPage = () => {
  return (
    <div>
      <Nav></Nav>
      <main className="container-xxl my-5">
        <div className="row">
          <article className="container text-center align-middle col-10 col-3xl-8" id="about-me">
            <h2 className="p-2 border-bottom border-secondary text-secondary">About Me</h2>
            <div className="row align-self-center my-5">
              <div className="col-12 col-md-12 col-lg-6 col-3xl-6">
                <img
                  className="rounded-3 mw-100"
                  src={profilePhoto}
                  alt="Colby"
                />
              </div>
              <div className="col-12 col-md-12 col-lg-6 col-3xl-6 lead">
                <p className="h-100">
                Full Stack Web Developer leveraging a decade of experience in the mental health field to
                create a more accessible experience on the web. Recently earned a certificate in Full Stack
                Web Development from University of Minnesota Coding, with newly developed skills in JavaScript,
                CSS, HTML, Node.js, the MERN stack, and SQL. Known as an eager learner, always looking to pick
                up new skills to complete or improve a project. Aim for each project is to improve accessibility
                and intuitive user experience, to allow everyone access to what the web has to offer. Worked on a
                team of four to develop a MERN app that aims to help people with mental health needs identify and
                track their mental state on a daily basis and access resources. I'm excited to use these new
                skills to help build better experiences on the web for everyone.
                </p>
              </div>
            </div>
          </article>
        </div>
        <section className="container text-center align-middle col-10 col-3xl-8" id="skills">
          <h2 className="p-2 border-bottom border-secondary text-secondary">Skills</h2>
          <Skills className="my-5"></Skills>
        </section>
      </main>
      <Footer></Footer>
      <Script
        src="https://code.jquery.com/jquery-3.6.0.js"
        integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
        crossorigin="anonymous"
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.11.2/umd/popper.min.js"
        integrity="sha512-aDciVjp+txtxTJWsp8aRwttA0vR2sJMk/73ZT7ExuEHv7I5E6iyyobpFOlEFkq59mWW8ToYGuVZFnwhwIUisKA=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.3/js/bootstrap.min.js" 
        integrity="sha512-OvBgP9A2JBgiRad/mM36mkzXSXaJE9BEIENnVEmeZdITvwT09xnxLtT4twkCa8m/loMbPHsvPl0T8lRGVBwjlQ==" 
        crossorigin="anonymous" 
        referrerpolicy="no-referrer"
      />
    </div>
  );
};

export default IndexPage;
