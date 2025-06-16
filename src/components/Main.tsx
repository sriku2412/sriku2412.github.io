import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="public/profile.jpeg" alt="Sreekanth Potlabathini" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/sriku2412"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/potlabathini/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>

          <h1>Sreekanth&nbsp;Potlabathini</h1>
          <p>Data&nbsp;Scientist&nbsp;&nbsp;|&nbsp;&nbsp;MLOps&nbsp;Engineer|&nbsp;&nbsp;Sr.&nbsp;Mechanical&nbsp;Research&nbsp;Engineer</p>

          {/* duplicated icons for mobile view */}
          <div className="mobile_social_icons">
            <a
              href="https://github.com/sriku2412"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/potlabathini"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
