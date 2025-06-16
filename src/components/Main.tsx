import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import '../assets/styles/Main.scss';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="/profile.jpeg" alt="Sreekanth Potlabathini" />
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
            <a
              href="mailto:srikanth.potlabathini@gmail.com?subject=Hello%20Sreekanth%20Potlabathini"
              target="_blank"
              rel="noreferrer"
            >
              <EmailOutlinedIcon />
            </a>
            <a
              href="https://calendar.app.google/QSuqQv8Z7QAj1hvg9"
              target="_blank"
              rel="noreferrer"
            >
              <CalendarMonthIcon />
            </a>
            <a
              href="https://github.com/sriku2412/sriku2412/raw/main/Sreekanth-Resume-Jun-2025.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <FileDownloadIcon />
            </a>

          </div>

          <h1>Sreekanth&nbsp;Potlabathini</h1>
          <p>Data&nbsp;Scientist&nbsp;&nbsp;|&nbsp;&nbsp;Sr.&nbsp;Mechanical&nbsp;Research&nbsp;Engineer</p>

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
