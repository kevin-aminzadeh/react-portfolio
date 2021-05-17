import React from 'react';

const Portfolio: React.FC = (props) => (
  <section id="portfolio">
    <div className="row mb-5 mt-lg-5">
      <div className="col">
        <h1 className="h2 text-primary text-uppercase fw-light">Portfolio</h1>
        <h2 className="text-uppercase fw-bold">
          Some Things <br /> I&apos;ve Built.
        </h2>
      </div>
    </div>

    <div className="project-gallery mb-5">
      <div className="row">
        <div className="col-xs-12 col-md-6 col-lg-4 p-3">
          <div className="card bg-dark text-white border-0">
            <a
              href="https://github.com/kevin-aminzadeh/Searchify"
              className="stretched-link"
            >
              <img
                className="card-img"
                src="https://github.com/Travis297/Searchify/blob/main/assets/images/screenshot-2.png?raw=true"
                alt="Searchify Web App Demo"
              />
            </a>
          </div>
        </div>
        <div className="col-xs-12 col-md-6 col-lg-4 p-3">
          <div className="card bg-dark text-white border-0">
            <a
              href="https://github.com/kevin-aminzadeh/03-javascript-password-generator"
              className="stretched-link"
            >
              <img
                className="card-img"
                src="https://github.com/kevin-aminzadeh/03-javascript-password-generator/raw/main/assets/img/03-javascript-homework-demo.png"
                alt="Javascript Password Generator Demo"
              />
            </a>
          </div>
        </div>
        <div className="col-xs-12 col-md-6 col-lg-4 p-3">
          <div className="card bg-dark text-white border-0">
            <a
              href="https://github.com/kevin-aminzadeh/04-code-quiz"
              className="stretched-link"
            >
              <img
                className="card-img"
                src="https://github.com/kevin-aminzadeh/javascript-code-quiz/raw/main/assets/img/screenshot.gif"
                alt="Code Quiz"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Portfolio;
