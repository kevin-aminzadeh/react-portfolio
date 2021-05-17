import React from 'react';
import './Navbar.scss';
import { Router, Link } from 'react-router-dom';

const Navbar: React.FC = (props) => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-light px-4">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <span className="visually-hidden">Home</span>

          <svg
            id="logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 166.98 246.9"
            style={{ width: '42px' }}
            role="img"
          >
            <title>Home</title>

            <path
              d="M657.17,197.84V253c8.65-6.32,16.49-12,24.31-17.74,15.9-11.67,31.87-23.26,47.62-35.13,2.76-2.09,4.42-1.67,6.82.11,12.37,9.19,24.88,18.19,37.18,27.47a7.6,7.6,0,0,1,2.59,5.28q.25,29.68-.06,59.38a8.08,8.08,0,0,1-3,5.49c-10.12,7.74-20.46,15.2-31.44,23.28,7.83,5.78,15,11.95,23,16.76,8.38,5.05,12.53,10.76,11.81,21.3-1.11,16.23-.37,32.59-.18,48.89,0,3.56-1.13,5.62-4,7.69-13.2,9.44-26.18,19.19-39.39,28.93-26.66-19.57-53.09-39-79.69-58.51L609.47,418V343.19l118,86.68c.18-1.7.41-2.9.41-4.09,0-13.64-.09-27.29.13-40.92.06-3.58-1.18-5.68-4-7.76q-55.83-40.83-111.54-81.82c-2.24-1.64-3.28-3.17-3.26-6,.13-17.3,0-34.6.13-51.9,0-1.89.77-4.51,2.13-5.54C626.21,220.61,641.19,209.65,657.17,197.84ZM763.91,348.76l-79.32-58.25,79.29-58.46c-9.84-7.21-19.13-13.88-28.24-20.78-2.38-1.8-3.81-1.89-6.35,0C710,225.6,690.56,239.68,671.2,253.88c-16.54,12.13-33,24.34-49.94,36.8l111,81.54ZM699.67,290.5c10.72,7.91,20.9,15.31,30.93,22.9,2.42,1.83,4.13,1.59,6.42-.15,6.58-5,13-10.49,20.09-14.57,8.13-4.65,10.5-10.76,9.88-19.84-.82-12.16-.2-24.42-.2-37.64Zm67.07,67.38c-10.13,7.5-19.53,14.4-28.83,21.44a4.24,4.24,0,0,0-1.06,3.05c-.07,15.59-.05,31.18-.05,48,10.09-7.46,19.25-14.2,28.34-21a4.13,4.13,0,0,0,1.54-2.79M618.18,281.78c9.52-7,18.26-13.24,26.72-19.82a8.8,8.8,0,0,0,3.08-5.91c.27-12.13.13-24.26.09-36.4a28.24,28.24,0,0,0-.51-3.49C638,223.2,629,229.84,620,236.65a5.2,5.2,0,0,0-1.74,3.65C618.13,253.74,618.18,267.18,618.18,281.78Zm.39,79.35v38.94l26.49-19.47Z"
              transform="translate(-609.16 -197.84)"
            />
          </svg>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/portfolio" className="nav-link">
                <span className="text-primary">01.</span> Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <span className="text-primary">02.</span> About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                <span className="text-primary">03.</span> Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

export default Navbar;
