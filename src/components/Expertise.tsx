import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python", "SQL", "TensorFlow", "PyTorch", "Scikit-learn",
    "Pandas", "Numpy", "SHAP", "Anomaly Detection", "Machine Learning", "Feature Engineering", "MLflow", "YAML", "Cloud Run", "Pub/Sub","Grafana", "BigQuery"
];

const labelsSecond = [
    "Docker", "Kubernetes", "GitHub Actions", "CI/CD", "AWS", "GCP", "MLflow", "Cloud Run",
    "Pub/Sub", "SQL", "Databricks", "Spark", "Git", "Jira",  "LangChain", "LlamaIndex", "Streamlit", "PostgreSQL", "Gen AI", "huggingface", "OpenAI", "Azure OpenAI",
];

const labelsThird = [
    "CATIA V5", "ANSYS", "GD&T", "PLM", "Root Cause Analysis", "Design Thinking", "Lean Six Sigma", "problem solving",
    "Project Management", "Cost Optimization", "Critical Thinking", "Innovation", "Stakeholder Management"
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faReact} size="3x" />
                        <h3>Lead Data Scientist – Predictive Analytics</h3>
                        <p>
                            Built ML pipelines with automation from ingestion to deployment using MLflow, YAML-configured modules, and explainable AI. Delivered anomaly detection systems, data drift monitoring, and observability dashboards using AWS/GCP stack.
                        </p>
                        <p>
                            Understanding client requirements and translating them into ML models using Python, SQL, and Tensorflow. Implemented feature engineering and model deployment using Cloud Run, Pub/Sub, and BigQuery.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faDocker} size="3x" />
                        <h3>MLOps Engineer & Consultant - inernships</h3>
<p>
    Developed a scalable, production-ready GenAI solution. Built a chatbot using LlamaIndex and Node.js, leveraging Docker, CI/CD, and cloud-native tools. 
    Integrated a CI/CD pipeline with GitHub Actions and cloud automation. 
    <a href="https://startup.club/ask-ai/" target="_blank">View Demo</a>
</p>

                        <p>
                            Built a Job recommendation system with SFT model as a career coach available on 
                            <a href="https://huggingface.co/sriku2412/unsloth_SFT_dotsLive" target="_blank">Hugging Face</a>. 
                            Automated CI/CD pipeline with GitHub Actions and Cloud automation.
                        </p>

                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faPython} size="3x" />
                        <h3>Sr. Mechanical Research Engineer – R&D </h3>
                        <p>
                            10+ years leading automotive R&D with a focus on fuel and urea systems. Delivered patented innovations, root cause analysis, and large-scale mechanical systems with strong cost and quality impact. Managed cross-functional projects across lifecycle stages.
                        </p>
                        <p>
                            Innovator with 4 patents, dedicated to driving innovation and process optimization in automotive industries.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tools & Methods:</span>
                            {labelsThird.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;
