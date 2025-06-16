import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a href="https://www.filmate.club/" target="_blank" rel="noreferrer">
            <img src={mock10} className="zoom" alt="Filmate AI" width="100%" />
          </a>
          <a href="https://www.filmate.club/" target="_blank" rel="noreferrer">
            <h2>Filmate AI</h2>
          </a>
          <p>
            Developed movie finder app with semantic search and sentiment analysis using OpenAI GPT-3.5 Turbo, Qdrant, React, and Flask.
          </p>
        </div>

        <div className="project">
          <a href="https://sriku2412.itch.io/highspeedchase" target="_blank" rel="noreferrer">
            <img src={mock09} className="zoom" alt="High Speed Chase" width="100%" />
          </a>
          <a href="https://sriku2412.itch.io/highspeedchase" target="_blank" rel="noreferrer">
            <h2>High Speed Chase</h2>
          </a>
          <p>
            Designed, developed, and launched a 3D multiplayer racing game with C# and Unity.
          </p>
        </div>

        <div className="project">
          <a href="https://sriku2412.itch.io/spacecraft" target="_blank" rel="noreferrer">
            <img src={mock08} className="zoom" alt="Astro Raiders" width="100%" />
          </a>
          <a href="https://sriku2412.itch.io/spacecraft" target="_blank" rel="noreferrer">
            <h2>Astro Raiders</h2>
          </a>
          <p>
            Developed and released a 2D shooting game with C# and Unity, hosted on Itch.io.
          </p>
        </div>

        <div className="project">
          <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer">
            <img src={mock07} className="zoom" alt="Datum" width="100%" />
          </a>
          <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer">
            <h2>Datum: Integrated Learning Platform</h2>
          </a>
          <p>
            Built a Japanese-language data science learning platform from scratch using Ruby on Rails.
          </p>
        </div>

        <div className="project">
          <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer">
            <img src={mock06} className="zoom" alt="WeManage" width="100%" />
          </a>
          <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer">
            <h2>WeManage: Real Estate Asset Management</h2>
          </a>
          <p>
            Mobile app for realtors in Japan to manage property and forecast income. Built with Rails & JS.
          </p>
        </div>

        <div className="project">
          <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer">
            <img src={mock05} className="zoom" alt="COVID Case Tracker" width="100%" />
          </a>
          <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer">
            <h2>COVID-19 Case Management</h2>
          </a>
          <p>
            Built COVID/vaccine tracking charts using JavaScript and Google Sheets API for university leaders.
          </p>
        </div>

        <div className="project">
          <a href="https://github.com/sriku2412/multi-reg-analysis" target="_blank" rel="noreferrer">
            <img src={mock04} className="zoom" alt="Regression Analysis" width="100%" />
          </a>
          <a href="https://github.com/sriku2412/multi-reg-analysis" target="_blank" rel="noreferrer">
            <h2>Multiple Regression Property Analysis</h2>
          </a>
          <p>
            Predicted real estate prices in Japan using OLS and regression in Python (Pandas, Sklearn).
          </p>
        </div>

        <div className="project">
          <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer">
            <img src={mock03} className="zoom" alt="Programs of Study" width="100%" />
          </a>
          <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer">
            <h2>Programs of Study</h2>
          </a>
          <p>
            Built a CMS-integrated module using Java, Handlebars, and LESS to help students explore majors.
          </p>
        </div>

        <div className="project">
          <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer">
            <img src={mock02} className="zoom" alt="Transfer Evaluation" width="100%" />
          </a>
          <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer">
            <h2>Transfer Evaluation Matrix</h2>
          </a>
          <p>
            Interactive table generator using Java & Handlebars to help transfer students map credit eligibility.
          </p>
        </div>

        <div className="project">
          <a href="https://github.com/sriku2412/submeowrine" target="_blank" rel="noreferrer">
            <img src={mock01} className="zoom" alt="Submeowrine" width="100%" />
          </a>
          <a href="https://github.com/sriku2412/submeowrine" target="_blank" rel="noreferrer">
            <h2>Submeowrine</h2>
          </a>
          <p>
            Android 2D shooting game developed in Java with Android Studio. Hosted on GitHub.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
