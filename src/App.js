import React from "react";
import profile from "./profile.jpeg";
import "./App.css";

const skills = [
  { name: "Python", level: 90 },
  { name: "SQL", level: 85 },
  { name: "Machine Learning", level: 70 },
  { name: "AI", level: 60 },
];

function SkillBar({ name, level }) {
  return (
    <div className="skill-bar">
      <div className="label">{name}</div>
      <div className="bar">
        <div className="fill" style={{ width: `${level}%` }}>{level}%</div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="container">
      {/* === Navigation === */}
      <nav className="navbar">
        <h1>Sreekanth Potlabathini</h1>
        <ul>
          <li><a href="#feed">Skills</a></li>
          <li><a href="#portfolio">Projects</a></li>
          <li><a href="#blog">Blog</a></li>
        </ul>
      </nav>

      {/* === Header Section === */}
      <header className="header">
        <div className="floating-image">
          <div className="image-shadow">
            <img src={profile} alt="Profile" className="profile-pic" />
          </div>
        </div>
        <div className="contact-info">
          <p>2020 Bathurst St, Toronto, ON M5P 0A6 | +1 (807) 842-5507</p>
          <p>srikanth.potlabathini@gmail.com</p>
          <p>
            <a href="https://www.linkedin.com/in/potlabathini" target="_blank" rel="noreferrer">LinkedIn</a> |
            <a href="https://github.com/sriku2412" target="_blank" rel="noreferrer"> GitHub</a> |
            <a href="https://medium.com/@sreekanthpotlabathini" target="_blank" rel="noreferrer"> Medium</a>
          </p>
        </div>
      </header>

      {/* === Skills Section === */}
      <section id="feed" className="feed">
        <h2>Skills</h2>
        {skills.map(skill => (
          <SkillBar key={skill.name} {...skill} />
        ))}
      </section>

      {/* === Projects Section === */}
      <section id="portfolio" className="portfolio">
        <h2>Highlighted Projects</h2>

        <div className="portfolio-grid">
          <div className="portfolio-card" data-cat="ai">
            <h3>Job Recommendation System</h3>
            <p>SFT on LLaMA-2 for resume-job matching</p>
            <img
              src="https://opengraph.githubassets.com/1/sriku2412/unsloth_SFT_dotsLive"
              alt="Job Rec"
            />
            <a
              href="https://huggingface.co/sriku2412/unsloth_SFT_dotsLive"
              target="_blank"
              rel="noreferrer"
            >
              View on HF
            </a>
          </div>

          <div className="portfolio-card" data-cat="ai">
            <h3>StartupClub Chatbot (RAG)</h3>
            <p>Retrieval-augmented chatbot with LlamaIndex</p>
            <img
              src="https://opengraph.githubassets.com/1/sriku2412/startupclub-rag"
              alt="RAG"
            />
            <a
              href="https://www.startup.club/ask-ai"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>

          <div className="portfolio-card" data-cat="game">
            <h3>Connect4 AI Game</h3>
            <p>DQN and Minimax AI playable game</p>
            <iframe
              src="https://sriku2412.github.io/Connect4/"
              title="Connect4 Game"
            ></iframe>
          </div>
        </div>
      </section>

      {/* === Blog Section === */}
      <section id="blog" className="blog">
        <h2>Recent Blog Posts</h2>
        <ul>
          <li><a href="https://medium.com/@sreekanthpotlabathini/clustering-multidimensional-time-series-sensor-data-a-friendly-walk-through-of-kl-js-emd-ks-07a7823043a1" target="_blank" rel="noreferrer">Clustering Multidimensional Time-Series Data</a> – 5 min read</li>
          <li><a href="https://medium.com/@sreekanthpotlabathini/predicting-battery-life-a-practical-guide-with-production-ready-python-code-111a5102c187" target="_blank" rel="noreferrer">Predicting Battery Life</a> – 5 min read</li>
          <li><a href="https://medium.com/@sreekanthpotlabathini/listening-to-machines-a-practical-guide-to-sound-based-anomaly-detection-with-lstm-6e7da45291f9" target="_blank" rel="noreferrer">Sound-Based Anomaly Detection with LSTM</a> – 3 min read</li>
          <li><a href="https://medium.com/@sreekanthpotlabathini/from-thresholds-to-triumph-068dc229830f" target="_blank" rel="noreferrer">Rule-Based Model Beat ML in Prod</a> – 4 min read</li>
          <li><a href="https://medium.com/@sreekanthpotlabathini/built-an-anomaly-detection-model-without-any-ground-truth-just-feedback-5034c80a2424" target="_blank" rel="noreferrer">Anomaly Detection with Feedback Only</a> – 5 min read</li>
        </ul>
      </section>

      {/* === Footer === */}
      <footer className="footer">
        <p>© 2025 Sreekanth Potlabathini</p>
        <p><a href="mailto:srikanth.potlabathini@gmail.com">srikanth.potlabathini@gmail.com</a></p>
      </footer>
    </div>
  );
}
