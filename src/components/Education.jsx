"use client";
import { FaGraduationCap, FaSchool, FaUniversity } from "react-icons/fa";

function Education() {
  const educationData = [
    {
      id: 1,
      icon: <FaGraduationCap />,
      level: "B.Tech — CSE (Cybersecurity)",
      institute: "Malla Reddy University",
      location: "Hyderabad",
      year: "2021 – 2025",
      grade: "8.82 CGPA",
      tag: "B.Tech",
    },
    {
      id: 2,
      icon: <FaUniversity />,
      level: "Board of Intermediate Education",
      institute: "Sri Chaitanya Junior College",
      location: "Kakinada",
      year: "2019 – 2021",
      grade: "88.2%",
      tag: "MPC",
    },
    {
      id: 3,
      icon: <FaSchool />,
      level: "Secondary School Certificate",
      institute: "Bhashyam High School",
      location: "Ramachandrapuram",
      year: "2018 – 2019",
      grade: "9.70 CGPA",
      tag: "SSC",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@300;400;500&display=swap');

        .edu-section {
          font-family: 'Syne', sans-serif;
          position: relative;
          width: 100%;
          min-height: 100vh;
          background: #050a10;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 7rem 1.5rem;
          box-sizing: border-box;
          overflow: hidden;
        }

        /* Background */
        .edu-grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 100%);
          pointer-events: none;
        }
        .edu-orb-1 {
          position: absolute;
          width: 450px; height: 450px;
          border-radius: 50%;
          filter: blur(100px);
          background: radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%);
          top: -80px; left: -120px;
          pointer-events: none;
        }
        .edu-orb-2 {
          position: absolute;
          width: 350px; height: 350px;
          border-radius: 50%;
          filter: blur(90px);
          background: radial-gradient(circle, rgba(0,60,180,0.1) 0%, transparent 70%);
          bottom: -60px; right: -80px;
          pointer-events: none;
        }

        /* Container */
        .edu-container {
          position: relative;
          z-index: 10;
          max-width: 780px;
          width: 100%;
        }

        /* Section label */
        .edu-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.68rem;
          color: #00d4ff;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }
        .edu-label-line {
          width: 32px;
          height: 1px;
          background: #00d4ff;
          opacity: 0.5;
        }

        /* Heading */
        .edu-heading {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin: 0 0 3rem;
          background: linear-gradient(135deg, #fff 40%, #00d4ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Timeline wrapper */
        .timeline {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        /* Vertical line */
        .timeline::before {
          content: '';
          position: absolute;
          left: 22px;
          top: 22px;
          bottom: 22px;
          width: 1px;
          background: linear-gradient(
            to bottom,
            transparent,
            rgba(0,212,255,0.4) 10%,
            rgba(0,212,255,0.4) 90%,
            transparent
          );
        }

        /* Single item */
        .edu-item {
          display: flex;
          gap: 1.6rem;
          align-items: flex-start;
          padding-bottom: 2.8rem;
          position: relative;
        }
        .edu-item:last-child {
          padding-bottom: 0;
        }

        /* Node dot */
        .edu-node {
          position: relative;
          flex-shrink: 0;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(10, 25, 40, 0.9);
          border: 1px solid rgba(0, 212, 255, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #00d4ff;
          font-size: 1rem;
          z-index: 2;
          transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
        }
        .edu-item:hover .edu-node {
          border-color: #00d4ff;
          background: rgba(0, 212, 255, 0.1);
          box-shadow: 0 0 16px rgba(0, 212, 255, 0.25);
        }

        /* Card */
        .edu-card {
          flex: 1;
          background: rgba(10, 25, 40, 0.55);
          border: 1px solid rgba(0, 212, 255, 0.1);
          border-radius: 14px;
          padding: 1.4rem 1.6rem;
          transition: border-color 0.25s, background 0.25s, transform 0.25s;
        }
        .edu-item:hover .edu-card {
          border-color: rgba(0, 212, 255, 0.3);
          background: rgba(0, 212, 255, 0.04);
          transform: translateX(4px);
        }

        /* Card top row */
        .edu-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 0.5rem;
          flex-wrap: wrap;
        }
        .edu-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.62rem;
          color: #00d4ff;
          background: rgba(0, 212, 255, 0.1);
          border: 1px solid rgba(0, 212, 255, 0.2);
          border-radius: 4px;
          padding: 3px 9px;
          letter-spacing: 0.08em;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .edu-year {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          color: #7aa0bb;
          letter-spacing: 0.06em;
          white-space: nowrap;
          flex-shrink: 0;
        }

        /* Level title */
        .edu-level {
          font-size: 1.05rem;
          font-weight: 700;
          color: #e8f4ff;
          line-height: 1.3;
          margin-bottom: 0.3rem;
        }

        /* Institute */
        .edu-institute {
          font-size: 0.88rem;
          color: #7aa0bb;
          margin-bottom: 0.8rem;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .edu-dot {
          width: 3px; height: 3px;
          border-radius: 50%;
          background: rgba(0,212,255,0.5);
          display: inline-block;
        }

        /* Grade badge */
        .edu-grade {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.72rem;
          color: #00d4ff;
          background: rgba(0, 212, 255, 0.08);
          border: 1px solid rgba(0, 212, 255, 0.15);
          border-radius: 6px;
          padding: 4px 12px;
        }
        .edu-grade-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #00d4ff;
          box-shadow: 0 0 5px rgba(0,212,255,0.7);
        }

        /* Responsive */
        @media (max-width: 600px) {
          .edu-section  { padding: 5.5rem 1.1rem 4rem; }
          .edu-card     { padding: 1.1rem 1.2rem; }
          .edu-level    { font-size: 0.95rem; }
          .timeline::before { left: 19px; }
          .edu-node     { width: 38px; height: 38px; font-size: 0.9rem; }
          .edu-item     { gap: 1.2rem; }
        }
      `}</style>

      <section id="education" className="edu-section">
        <div className="edu-grid-bg" />
        <div className="edu-orb-1" />
        <div className="edu-orb-2" />

        <div className="edu-container">
          <div className="edu-label">
            <span className="edu-label-line" />
            Education
            <span className="edu-label-line" />
          </div>

          <h2 className="edu-heading">Academic Journey</h2>

          <div className="timeline">
            {educationData.map((edu) => (
              <div className="edu-item" key={edu.id}>
                <div className="edu-node">{edu.icon}</div>

                <div className="edu-card">
                  <div className="edu-card-top">
                    <span className="edu-tag">{edu.tag}</span>
                    <span className="edu-year">{edu.year}</span>
                  </div>

                  <div className="edu-level">{edu.level}</div>

                  <div className="edu-institute">
                    {edu.institute}
                    <span className="edu-dot" />
                    {edu.location}
                  </div>

                  <div className="edu-grade">
                    <span className="edu-grade-dot" />
                    {edu.grade}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Education;