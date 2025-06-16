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
          <a href="https://github.com/sriku2412" target="_blank" rel="noreferrer">
            <img src={mock10} className="zoom" alt="Filmate AI" width="100%" />
          </a>
          <a href="https://github.com/sriku2412/Personal-projects/tree/main/MotionDetector" target="_blank" rel="noreferrer">
            <h2>Computer vision - Motion Detection</h2>
          </a>
          <p>
            Developed a motion detection system with Python and OpenCV.
          </p>
        </div>

        <div className="project">
          <a href="https://github.com/sriku2412/Conect4" target="_blank" rel="noreferrer">
            <img src={mock09} className="zoom" alt="High Speed Chase" width="100%" />
          </a>
          <a href="https://github.com/sriku2412/Conect4" target="_blank" rel="noreferrer">
            <h2>Connect4 - DQN</h2>
          </a>
          <p>
            Designed, developed, and launched a Connect4 game with a combination of Minimax and Deep Q-Network.
          </p>
        </div>

        <div className="project">
          <a href="https://github.com/sriku2412/Personal-projects/blob/main/north_and_south_hemisphere.ipynb" target="_blank" rel="noreferrer">
            <img src={mock08} className="zoom" alt="Astro Raiders" width="100%" />
          </a>
          <a href="https://github.com/sriku2412/Personal-projects/blob/main/north_and_south_hemisphere.ipynb" target="_blank" rel="noreferrer">
            <h2>Time series clustering</h2>
          </a>
          <p>
            This project clusters regions based on their annual climate patterns—temperature, humidity, and wind speed—to identify areas with similar conditions for crop suitability and transferability.
          </p>
        </div>

        <div className="project">
          <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer">
            <img src={mock07} className="zoom" alt="Datum" width="100%" />
          </a>
          <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer">
            <h2>AI chatbot : Integrated with RAG & LLM</h2>
          </a>
          <p>
            Built a Gen AI Chatbot that uses LlamaIndex and Node.js. It also has a sentiment analysis done to recomment Youtube & blog plost.
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
          <a href="https://patentimages.storage.googleapis.com/eb/63/77/42e9150c8fcbad/US10500949.pdf" target="_blank" rel="noreferrer">
            <img src={mock02} className="zoom" alt="Transfer Evaluation" width="100%" />
          </a>
          <a href="https://patentimages.storage.googleapis.com/eb/63/77/42e9150c8fcbad/US10500949.pdf" target="_blank" rel="noreferrer">
            <h2>Integrated fuel-mixing prevention device for diesel vehicle</h2>
          </a>
          <p>
            An integrated filler system for diesel vehicles that prevents fuel mixing by allowing only the correct nozzle—diesel or urea—to be inserted based on the selected filling mode.
          </p>
        </div>

        <div className="project">
          <a href="https://patentimages.storage.googleapis.com/eb/0e/a4/546c723c0be3df/DE102017222785A1.pdf" target="_blank" rel="noreferrer">
            <img src={mock01} className="zoom" alt="Submeowrine" width="100%" />
          </a>
          <a href="https://patentimages.storage.googleapis.com/eb/0e/a4/546c723c0be3df/DE102017222785A1.pdf" target="_blank" rel="noreferrer">
            <h2>Passenger Compartment Urea Filling System</h2>
          </a>
          <p>
            To reduce cost and improve safety, I developed a solution that enables safe urea refilling from within the passenger compartment, without any issues of fumes or spillage. The system supports filling both via bottle and refill gun.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
