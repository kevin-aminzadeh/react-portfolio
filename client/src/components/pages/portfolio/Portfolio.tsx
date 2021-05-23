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
          name="Ivy Inventory Management App"
          url="https://ivy-inventory-management.herokuapp.com/dashboard"
          imageSrc="https://github.com/kevin-aminzadeh/inventory-management-app/raw/main/images/orderlist.png"
        />
        <ProjectCard
          name="Searchify Web App"
          url="https://github.com/kevin-aminzadeh/Searchify"
          imageSrc="https://github.com/Travis297/Searchify/blob/main/assets/images/screenshot-2.png?raw=true"
        />
        <ProjectCard
          name="React.js Google Book Search"
          url="https://github.com/kevin-aminzadeh/react-google-books-search"
          imageSrc="https://github.com/kevin-aminzadeh/react-google-books-search/raw/main/assets/demo.gif"
        />
        <ProjectCard
          name="Code Quiz"
          url="https://github.com/kevin-aminzadeh/04-code-quiz"
          imageSrc="https://github.com/kevin-aminzadeh/javascript-code-quiz/raw/main/assets/img/screenshot.gif"
        />
        <ProjectCard
          name="MongoDB Fitness Tracker"
          url="https://fitness-tracker-4.herokuapp.com/"
          imageSrc="https://github.com/kevin-aminzadeh/node-fitness-tracker/raw/main/assets/img/demo.gif"
        />
        <ProjectCard
          name="React.js Employee Directory"
          url="https://kevin-aminzadeh.github.io/react-employee-directory"
          imageSrc="https://github.com/kevin-aminzadeh/react-employee-directory/raw/main/public/assets/img/demo.gif"
        />
      </div>
    </div>
  </section>
);

export default Portfolio;
