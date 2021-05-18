import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => (
  <section id="about">
    <div className="row mb-5 mt-lg-5">
      <div className="col">
        <h1 className="h2 text-primary text-uppercase fw-light">About Me</h1>
        <h2 className="text-uppercase fw-bold">
          I Design & <br />
          Build Things <br />
          For The Web.
        </h2>
      </div>
    </div>

    <div className="row pb-5">
      <div
        className="
                col-12 col-lg-6
                order-2 order-lg-1
                d-flex
                flex-column
                justify-content-between
              "
      >
        <div id="bio-wrapper">
          <p className="lead text-center text-lg-start">
            I&apos;m a software engineer based in Adelaide, South Australia who
            enjoys building things that live on the internet. I develop
            exceptional websites and web apps that provide intuitive,
            pixel-perfect user interfaces with efficient and modern back-ends.
          </p>
          <p className="lead text-center text-lg-start">
            I&apos;m currently a second year Computer Science student at
            Flinders University and working as a freelance web developer on a
            wide variety of projects with a focus on empowering local businesses
            and brands.
          </p>
        </div>

        <div
          className="
                  cta
                  d-grid
                  gap-2
                  d-md-block
                  pt-4
                  text-center text-lg-start
                "
        >
          <Link
            to="/portfolio"
            className="btn btn-primary text-light mb-3 me-3"
          >
            View My Work
          </Link>
          <Link to="/contact" className="btn btn-outline-dark mb-3">
            Get in Touch
          </Link>
        </div>
      </div>

      <div className="col-10 order-1 col-lg-5 mb-4 mx-auto">
        <img src="./assets/img/dp.png" alt="" className="img-thumbnail" />
      </div>
    </div>
  </section>
);

export default About;
