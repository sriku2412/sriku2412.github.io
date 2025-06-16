import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "Flask",
    "LangChain",
    "LlamaIndex",
    "Streamlit",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "Flask",
    "Python",
    "SQL",
    "PostgreSQL",
    "Postman"
];

const labelsSecond = [
    "Docker",
    "Kubernetes",
    "GitHub Actions",
    "CI/CD",
    "AWS",
    "GCP",
    "MLflow",
    "Cloud Run",
    "Pub/Sub",
    "SQL",
    "Databricks",
    "Spark",
    "git",
    "Jira",
    "pandas",
    "numpy",
    "matplotlib",
    "seaborn"
];

const labelsThird = [
    "OpenAI",
    "Hugging Face",
    "LLMs",
    "RAG",
    "SFT",
    "PyTorch",
    "TRL",
    "Computer Vision",
    "NLP",
    "SHAP",
    "Anomaly Detection",
    "LlamaIndex",
    "Hugging Face",
    "Streamlit"
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faReact} size="3x" />
                        <h3>Tech Consultant – GenAI</h3>
                        <p>
                            Delivered AI-enabled solutions integrating LLMs, custom SFT models, and chatbots with LangChain, Streamlit, and Flask. Built job recommendation systems and ethical career coaching tools hosted on Hugging Face.
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
                        <h3>MLOps Engineer</h3>
                        <p>
                            Built full ML pipelines with automated CI/CD, MLflow, and cloud deployments across AWS and GCP. Implemented observability, experiment tracking, and data drift monitoring for scalable AI workflows.
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
                        <h3>Mechanical Engineer – R&D & Project Management</h3>
                        <p>
                            10+ years leading design & simulation projects at Hyundai. Expertise in CATIA, GD&T, and innovation-driven system design. Filed 4 patents. Applied root cause analysis, stakeholder engagement, and cost optimization to deliver high-impact automotive systems.
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
