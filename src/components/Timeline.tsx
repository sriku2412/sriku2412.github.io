import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            date="May 2024 – Present"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3>Lead Data Scientist</h3>
            <h4>Soralink · Montreal, QC</h4>
            <p>Predictive analytics, anomaly detection, full-stack MLOps (AWS & GCP), CI/CD automation, observability, Grafana dashboards.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="Feb 2024 – Apr 2024"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3>MLOps Engineer</h3>
            <h4>Startup Club · Toronto (Remote)</h4>
            <p>Built and deployed LLM-based chatbot with RAG and FastAPI, React UI, text-to-voice UX, hosted live with full-stack automation.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="Sep 2023 – Apr 2024"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3>Tech Consultant (Intern)</h3>
            <h4>DotsLive · Toronto (Remote)</h4>
            <p>Developed LLM-based job recommender, resume-to-job matcher using clustering, GPT-3.5/LLaMA2, Pinecone & dashboards.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="May 2023 – Apr 2024"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3>Master’s in Business Analytics</h3>
            <h4>Schulich School of Business, York University</h4>
            <p>Capstone in GenAI/NLP, cohort rep, specialized in AI/ML, data pipelines, and visualization.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="Sep 2022 – Apr 2023"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3>Graduate Certificate – Financial Planning</h3>
            <h4>Seneca College, Toronto</h4>
            <p>President’s Honour List, studied risk, portfolio management, and regulatory standards.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="Apr 2021 – Aug 2022"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3>Sr. Research Engineer</h3>
            <h4>Hyundai Motor India Engineering</h4>
            <p>Led design and validation of fuel/urea systems; managed plant issues, PLM, and international compliance strategy.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="Apr 2017 – Apr 2021"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3>Deputy Manager</h3>
            <h4>Hyundai Motor India Engineering</h4>
            <p>Filed 4 patents, trained engineers, resolved plant design issues across brake, exhaust, and engine MTG systems.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="Apr 2014 – Apr 2017"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3>Assistant Manager</h3>
            <h4>Hyundai Motor India Engineering</h4>
            <p>R&D at Hyundai HQ (Korea); developed diesel filter system and managed fuel/wiring/MTG design for various vehicle platforms.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="Sep 2010 – Apr 2014"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3>Research Engineer</h3>
            <h4>Hyundai Motor India Engineering</h4>
            <p>Contributed to commercial/passenger vehicle layout design; developed cooling, intake, and urea systems for CV segment.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="May 2006 – Jun 2010"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3>B.Tech – Mechanical Engineering</h3>
            <h4>JNTU Hyderabad</h4>
            <p>Graduated in top 5%; designed innovative CVT transmission as final year project.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
