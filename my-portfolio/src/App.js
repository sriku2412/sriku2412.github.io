import React from "react";
import profile from "./profile.jpeg";
import "./App.css";

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
        <img src={profile} alt="Profile" className="profile-pic" />
        <div className="contact-info">
          <p>2020 Bathurst St, Toronto, ON M5P 0A6 | +1 (807) 842-5507</p>
          <p>srikanth.potlabathini@gmail.com</p>
          <p><a href="https://www.linkedin.com/in/potlabathini">LinkedIn</a> | <a href="https://github.com/sriku2412">GitHub</a> | <a href="https://medium.com/@sreekanthpotlabathini">Medium</a></p>
        </div>
      </header>

      {/* === Feed Section === */}
      <section id="feed" className="feed">
        <h2>Technical Skills</h2>
        <p><strong>AI & ML:</strong> NLP, CV, Anomaly Detection, Segmentation, SHAP, ML, DL, KNN, K-Means, A/B testing, PCA, EM, Trees, Boosting, Neural nets, PyTorch, RLHF</p>
        <p><strong>MLOps & Cloud:</strong> MLflow, Docker, Kubernetes, GitHub Actions, CI/CD, AWS (S3, EC2, SageMaker), GCP (Cloud Run, BigQuery, Vertex AI)</p>
        <p><strong>Data Engineering:</strong> ETL/ELT, Spark, Databricks, SQL, Tableau, Power BI, Looker, Grafana</p>
        <p><strong>DevOps & Tools:</strong> AWS DevOps, Jira, HubSpot API</p>
        <p><strong>Libraries:</strong> LangChain, LlamaIndex, TRL, Flask, OpenCV</p>
        <p><strong>Design & Simulation:</strong> CATIA, Ansys, GD&T, PLM</p>
        <p><strong>Management:</strong> Leadership, PM, Innovation, Stakeholder Mgmt, Agile, SOPs, Reporting</p>

        <h2>Education & Experience</h2>
        <p><strong>Schulich School of Business</strong>, MBAN, 2023-24 – Projects: motion detector, DQN, Digital Earth Guardian</p>
        <p><strong>Seneca College</strong>, Financial Planning, 2022-23 – GPA 3.8, CFA L1</p>
        <p><strong>JNTU Hyderabad</strong>, B.Tech Mech, 2006-10 – GPA 3.2, Top 5%</p>

        <p><strong>Soralink</strong> – Lead Data Scientist – Built full ML pipelines, CI/CD, dashboards</p>
        <p><strong>Dotslive</strong> – Job Rec System – NLP, LLMs, GPT-3.5, SFT, Pinecone</p>
        <p><strong>StartupClub</strong> – RAG Chatbot – AWS + Docker + Voice UI</p>
        <p><strong>Hyundai India</strong> – Sr. Engineer to Deputy Manager – Designed fuel/urea systems, filed patents</p>
      </section>

      {/* === Projects Section === */}
      <section id="portfolio" className="portfolio">
        <h2>Highlighted Projects</h2>
        <div className="tabs">
          <button className="tab active" data-cat="all">All</button>
          <button className="tab" data-cat="ai">AI & ML</button>
          <button className="tab" data-cat="dash">Dashboards</button>
          <button className="tab" data-cat="game">Games</button>
        </div>
        <div className="portfolio-grid">
          <div className="portfolio-card" data-cat="ai">
            <h3>Job Recommendation System</h3>
            <p>SFT on LLaMA-2 for resume-job matching</p>
            <img src="https://opengraph.githubassets.com/1/sriku2412/unsloth_SFT_dotsLive" alt="Job Rec" />
            <a href="https://huggingface.co/sriku2412/unsloth_SFT_dotsLive" target="_blank">View on HF</a>
          </div>
          <div className="portfolio-card" data-cat="ai">
            <h3>StartupClub Chatbot (RAG)</h3>
            <p>Retrieval-augmented chatbot with LlamaIndex</p>
            <img src="https://opengraph.githubassets.com/1/sriku2412/startupclub-rag" alt="RAG" />
            <a href="https://www.startup.club/ask-ai" target="_blank">Live Demo</a>
          </div>
          <div className="portfolio-card" data-cat="game">
            <h3>Connect4 AI Game</h3>
            <p>DQN and Minimax AI playable game</p>
            <iframe src="https://sriku2412.github.io/Connect4/" title="Connect4 Game"></iframe>
          </div>
        </div>
      </section>

      {/* === Blog Section === */}
      <section id="blog" className="blog">
        <h2>Recent Blog Posts</h2>
        <ul>
          <li><a href="https://medium.com/@sreekanthpotlabathini/clustering-multidimensional-time-series-sensor-data-a-friendly-walk-through-of-kl-js-emd-ks-07a7823043a1" target="_blank">Clustering Multidimensional Time-Series Data</a> – 5 min read</li>
          <li><a href="https://medium.com/@sreekanthpotlabathini/predicting-battery-life-a-practical-guide-with-production-ready-python-code-111a5102c187" target="_blank">Predicting Battery Life</a> – 5 min read</li>
          <li><a href="https://medium.com/@sreekanthpotlabathini/listening-to-machines-a-practical-guide-to-sound-based-anomaly-detection-with-lstm-6e7da45291f9" target="_blank">Sound-Based Anomaly Detection with LSTM</a> – 3 min read</li>
          <li><a href="https://medium.com/@sreekanthpotlabathini/from-thresholds-to-triumph-068dc229830f" target="_blank">Rule-Based Model Beat ML in Prod</a> – 4 min read</li>
          <li><a href="https://medium.com/@sreekanthpotlabathini/built-an-anomaly-detection-model-without-any-ground-truth-just-feedback-5034c80a2424" target="_blank">Anomaly Detection with Feedback Only</a> – 5 min read</li>
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
