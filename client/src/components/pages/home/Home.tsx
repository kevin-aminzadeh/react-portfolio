import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => (
  <section id="hero">
    <div className="container-xl">
      <div className="row">
        <div className="col-10 mx-auto text-center">
          <h1 className="display-1 text-uppercase fw-bold mb-1">
            Kevin Aminzadeh
          </h1>
          <h2 className="text-muted fw-light h3">
            Software Engineer from South Australia
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="col-10 mx-auto mt-4 text-center">
          <div className="cta d-grid gap-2 d-md-block pt-4 text-center">
            <Link to="/portfolio" className="btn btn-primary text-light mb-3">
              View My Work
            </Link>
            <Link to="/contact" className="btn btn-outline-dark  mb-3 ms-md-3">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Home;
