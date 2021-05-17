import React from 'react';

const Footer: React.FC = (props) => (
  <footer className="footer mt-auto bg-dark">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center py-3 text-white">
          <a href="https://github.com/kevin-aminzadeh" className="mx-2">
            <i
              aria-hidden="true"
              className="fab fa-github fa-lg"
              title="My Github"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/kevin-aminzadeh-6a2269152/"
            className="mx-2"
          >
            <i
              className="fab fa-linkedin fa-lg"
              aria-hidden="true"
              title="My LinkedIn"
            />
          </a>

          <a href="https://www.linkedin.com/in/kevinxoxoxo/" className="mx-2">
            <i
              className="fab fa-instagram fa-lg"
              aria-hidden="true"
              title="My LinkedIn"
            />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
