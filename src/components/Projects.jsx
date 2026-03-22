"use client";
import { FaGithub, FaExternalLinkAlt, FaCalendarAlt } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";

const projects = [
  {
    id: 1,
    title: "Authent",
    description:
      "Built a secure TOTP-based two-factor authentication system with QR code and OTP login.",
    tech: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
    github: "https://github.com/Bh-Abhiram/Authent",
    tag: "Security",
  },
  {
    id: 2,
    title: "Med Forecast",
    description:
      "Built an interactive disease prediction tool based on user input with health parameters using disease datasets.",
    tech: ["HTML", "CSS", "JavaScript", "Python", "Django"],
    github: "https://github.com/Bh-Abhiram/Disease-Predictor",
    tag: "ML",
  },
  {
    id: 3,
    title: "Defense Against SQL Injection",
    description:
      "Exploited and mitigated SQL Injection vulnerabilities in a controlled lab environment using SQLMap on Kali Linux.",
    tech: ["ReactJS", "NodeJS", "MySQL", "SQLMap", "Kali Linux"],
    github: "https://github.com/Bh-Abhiram/SQL-injection",
    tag: "Offensive",
  },
  {
    id: 4,
    title: "XSS Vulnerability Analysis & Mitigation",
    description:
      "Analyzed different types of XSS attacks in a web application and implemented preventive techniques using input validation and CSP.",
    tech: ["ReactJS", "NodeJS", "MySQL", "XSStrike", "Kali Linux"],
    github: "https://github.com/Bh-Abhiram/stored-xss",
    tag: "Offensive",
  },
  {
    id: 5,
    title: "Code Space",
    description:
      "Developed a platform to write, manage, execute programs and submit coding tasks of different levels.",
    tech: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
    github: "https://github.com/Bh-Abhiram/CodeSpace",
    tag: "Web App",
  },
  {
    id: 6,
    title: "Smart Bookmark App",
    description:
      "Developed a secure bookmark management platform enabling users to store and manage bookmarks efficiently.",
    tech: ["Next.js", "Supabase"],
    github: "https://online-bookmark-app.vercel.app/",
    tag: "Web App",
  },
];

const tagColors = {
  Security:  { bg: "rgba(0,212,255,0.1)",  border: "rgba(0,212,255,0.25)",  text: "#00d4ff" },
  Offensive: { bg: "rgba(255,80,80,0.1)",  border: "rgba(255,80,80,0.25)",  text: "#ff6b6b" },
  ML:        { bg: "rgba(120,80,255,0.1)", border: "rgba(120,80,255,0.25)", text: "#a78bfa" },
  "Web App": { bg: "rgba(0,200,120,0.1)",  border: "rgba(0,200,120,0.25)",  text: "#34d399" },
};

function Projects() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@300;400;500&display=swap');

        .proj-section {
          font-family: 'Syne', sans-serif;
          position: relative;
          width: 100%;
          min-height: 100vh;
          background: #050a10;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 7rem 1.5rem 5rem;
          box-sizing: border-box;
          overflow: hidden;
        }

        /* BG */
        .proj-grid-bg {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 100%);
          pointer-events: none;
        }
        .proj-orb-a {
          position: absolute; border-radius: 50%; pointer-events: none; filter: blur(100px);
          width: 480px; height: 480px;
          background: radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%);
          top: -100px; right: -120px;
          animation: projOrb 14s ease-in-out infinite;
        }
        .proj-orb-b {
          position: absolute; border-radius: 50%; pointer-events: none; filter: blur(90px);
          width: 360px; height: 360px;
          background: radial-gradient(circle, rgba(0,60,200,0.1) 0%, transparent 70%);
          bottom: -80px; left: -90px;
          animation: projOrb 18s ease-in-out infinite reverse;
        }
        @keyframes projOrb {
          0%,100% { transform: translate(0,0); }
          50%      { transform: translate(25px,-25px); }
        }

        /* Wrap */
        .proj-wrap {
          position: relative; z-index: 10;
          max-width: 1020px; width: 100%;
        }

        /* Eyebrow */
        .proj-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.68rem; color: #00d4ff;
          letter-spacing: 0.16em; text-transform: uppercase;
          margin-bottom: 1rem;
        }
        .proj-eyebrow-line {
          width: 32px; height: 1px;
          background: #00d4ff; opacity: 0.45;
        }

        /* Heading */
        .proj-heading {
          font-size: clamp(2rem,5vw,3rem);
          font-weight: 800; line-height: 1.08;
          letter-spacing: -0.02em;
          margin: 0 0 3rem;
          background: linear-gradient(135deg, #fff 35%, #00d4ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Grid */
        .proj-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.4rem;
        }

        /* Card */
        .proj-card {
          position: relative;
          background: rgba(8,20,34,0.75);
          border: 1px solid rgba(0,212,255,0.1);
          border-radius: 16px;
          padding: 1.6rem;
          display: flex;
          flex-direction: column;
          backdrop-filter: blur(10px);
          overflow: hidden;
          transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s;
        }
        .proj-card:hover {
          border-color: rgba(0,212,255,0.3);
          box-shadow: 0 0 30px rgba(0,212,255,0.07), 0 16px 40px rgba(0,0,0,0.35);
          transform: translateY(-4px);
        }
        .proj-card::before {
          content: '';
          position: absolute;
          top: -1px; left: 20px; right: 20px;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(0,212,255,0.45), transparent);
          border-radius: 2px;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .proj-card:hover::before { opacity: 1; }

        /* Card number watermark */
        .proj-card-num {
          position: absolute;
          top: 1rem; right: 1.2rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 2.5rem;
          font-weight: 700;
          color: rgba(0,212,255,0.05);
          line-height: 1;
          user-select: none;
        }

        /* Top row */
        .proj-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 0.5rem;
          margin-bottom: 0.9rem;
        }

        /* Tag */
        .proj-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.58rem;
          border-radius: 4px;
          padding: 3px 8px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          white-space: nowrap;
          flex-shrink: 0;
        }

        /* Title */
        .proj-title {
          font-size: 0.97rem;
          font-weight: 700;
          color: #e8f4ff;
          line-height: 1.35;
          margin-bottom: 0.65rem;
        }

        /* Description */
        .proj-desc {
          font-size: 0.8rem;
          color: #7aa0bb;
          line-height: 1.7;
          flex: 1;
          margin-bottom: 1.2rem;
        }

        /* Tech chips */
        .proj-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          margin-bottom: 1.3rem;
        }
        .proj-tech-chip {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.6rem;
          color: rgba(0,212,255,0.7);
          background: rgba(0,212,255,0.06);
          border: 1px solid rgba(0,212,255,0.12);
          border-radius: 4px;
          padding: 2px 8px;
          letter-spacing: 0.03em;
        }

        /* Footer */
        .proj-footer {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          margin-top: auto;
        }
        .proj-github-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.68rem;
          color: #00d4ff;
          background: rgba(0,212,255,0.08);
          border: 1px solid rgba(0,212,255,0.18);
          border-radius: 7px;
          padding: 6px 14px;
          text-decoration: none;
          letter-spacing: 0.05em;
          transition: background 0.2s, box-shadow 0.2s, transform 0.15s;
        }
        .proj-github-btn:hover {
          background: rgba(0,212,255,0.18);
          box-shadow: 0 0 12px rgba(0,212,255,0.22);
          transform: translateY(-1px);
        }

        /* Responsive */
        @media (max-width: 860px) {
          .proj-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 540px) {
          .proj-section { padding: 5.5rem 1rem 4rem; }
          .proj-grid    { grid-template-columns: 1fr; }
        }
      `}</style>

      <section id="projects" className="proj-section">
        <div className="proj-grid-bg" />
        <div className="proj-orb-a" />
        <div className="proj-orb-b" />

        <div className="proj-wrap">
          <div className="proj-eyebrow">
            <span className="proj-eyebrow-line" />
            Academic Projects
            <span className="proj-eyebrow-line" />
          </div>

          <h2 className="proj-heading">Projects</h2>

          <div className="proj-grid">
            {projects.map((proj) => {
              const color = tagColors[proj.tag];
              return (
                <div className="proj-card" key={proj.id}>
                  <span className="proj-card-num">0{proj.id}</span>

                  <div className="proj-card-top">
                    <span
                      className="proj-tag"
                      style={{
                        background: color.bg,
                        border: `1px solid ${color.border}`,
                        color: color.text,
                      }}
                    >
                      {proj.tag}
                    </span>
                  </div>

                  <div className="proj-title">{proj.title}</div>
                  <div className="proj-desc">{proj.description}</div>

                  <div className="proj-tech">
                    {proj.tech.map((t) => (
                      <span className="proj-tech-chip" key={t}>{t}</span>
                    ))}
                  </div>

                  <div className="proj-footer">
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="proj-github-btn"
                    >
                      <FaGithub />
                      View Code
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;