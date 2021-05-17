import React from 'react';
import ProjectCard from '../../ProjectCard/ProjectCard';

const Portfolio: React.FC = () => (
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
        <ProjectCard
          name="Searchify"
          url="https://github.com/kevin-aminzadeh/Searchify"
          imageSrc="https://github.com/Travis297/Searchify/blob/main/assets/images/screenshot-2.png?raw=true"
        />
        <ProjectCard
          name="Javascript Password Generator"
          url="https://github.com/kevin-aminzadeh/03-javascript-password-generator"
          imageSrc="https://github.com/kevin-aminzadeh/03-javascript-password-generator/raw/main/assets/img/03-javascript-homework-demo.png"
        />
        <ProjectCard
          name="Code Quiz"
          url="https://github.com/kevin-aminzadeh/04-code-quiz"
          imageSrc="https://github.com/kevin-aminzadeh/javascript-code-quiz/raw/main/assets/img/screenshot.gif"
        />
      </div>
    </div>
  </section>
);

export default Portfolio;
