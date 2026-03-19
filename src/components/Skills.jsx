"use client";

const skillCategories = [
  {
    id: 1,
    label: "Cybersecurity Domains",
    code: "01",
    items: [
      "Networking",
      "Cryptography",
      "VAPT",
      "Malware Analysis",
      "SOC & Incident Response",
    ],
  },
  {
    id: 2,
    label: "Security Tools",
    code: "02",
    items: [
      "Nmap",
      "Burp Suite",
      "SQLMap",
      "Volatility",
      "OpenVAS",
      "Slowloris",
      "Hping3",
      "Kali Linux",
      "Splunk Enterprise",
    ],
  },

];

function Skills() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@300;400;500&display=swap');

        .skills-section {
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
        .skills-grid-bg {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 100%);
          pointer-events: none;
        }
        .skills-orb-a {
          position: absolute; border-radius: 50%; pointer-events: none; filter: blur(100px);
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%);
          top: -100px; left: -140px;
          animation: orbFloat 14s ease-in-out infinite;
        }
        .skills-orb-b {
          position: absolute; border-radius: 50%; pointer-events: none; filter: blur(90px);
          width: 380px; height: 380px;
          background: radial-gradient(circle, rgba(0,60,200,0.1) 0%, transparent 70%);
          bottom: -80px; right: -80px;
          animation: orbFloat 18s ease-in-out infinite reverse;
        }
        @keyframes orbFloat {
          0%,100% { transform: translate(0,0); }
          50%      { transform: translate(25px,-25px); }
        }

        /* Wrap */
        .skills-wrap {
          position: relative; z-index: 10;
          max-width: 980px; width: 100%;
        }

        /* Eyebrow */
        .skills-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.68rem; color: #00d4ff;
          letter-spacing: 0.16em; text-transform: uppercase;
          margin-bottom: 1rem;
        }
        .skills-eyebrow-line {
          width: 32px; height: 1px;
          background: #00d4ff; opacity: 0.45;
        }

        /* Heading */
        .skills-heading {
          font-size: clamp(2rem,5vw,3rem);
          font-weight: 800; line-height: 1.08;
          letter-spacing: -0.02em;
          margin: 0 0 3rem;
          background: linear-gradient(135deg, #fff 35%, #00d4ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .skills-categories {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.4rem;
        }

        /* Category card */
        .skill-cat {
          position: relative;
          background: rgba(8,20,34,0.75);
          border: 1px solid rgba(0,212,255,0.12);
          border-radius: 16px;
          padding: 1.6rem;
          backdrop-filter: blur(10px);
          overflow: hidden;
          transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s;
        }
        .skill-cat:hover {
          border-color: rgba(0,212,255,0.35);
          box-shadow: 0 0 30px rgba(0,212,255,0.07), 0 12px 40px rgba(0,0,0,0.3);
          transform: translateY(-3px);
        }
        /* top accent line */
        .skill-cat::before {
          content: '';
          position: absolute;
          top: -1px; left: 20px; right: 20px;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(0,212,255,0.5), transparent);
          border-radius: 2px;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .skill-cat:hover::before { opacity: 1; }

        /* Cat header */
        .skill-cat-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.2rem;
        }
        .skill-cat-label {
          font-size: 0.88rem;
          font-weight: 700;
          color: #e8f4ff;
          letter-spacing: 0.01em;
        }
        .skill-cat-code {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.6rem;
          color: #00d4ff;
          background: rgba(0,212,255,0.1);
          border: 1px solid rgba(0,212,255,0.18);
          border-radius: 4px;
          padding: 2px 8px;
          letter-spacing: 0.1em;
        }

        /* Divider under header */
        .skill-cat-rule {
          width: 100%; height: 1px;
          background: linear-gradient(90deg, rgba(0,212,255,0.15), transparent);
          margin-bottom: 1rem;
        }

        /* Chips */
        .skill-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }
        .skill-chip {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.66rem;
          color: #00d4ff;
          background: rgba(0,212,255,0.07);
          border: 1px solid rgba(0,212,255,0.14);
          border-radius: 6px;
          padding: 5px 12px;
          letter-spacing: 0.04em;
          transition: background 0.2s, box-shadow 0.2s, transform 0.15s, color 0.2s;
          cursor: default;
          white-space: nowrap;
        }
        .skill-chip:hover {
          background: rgba(0,212,255,0.18);
          box-shadow: 0 0 10px rgba(0,212,255,0.2);
          transform: translateY(-1px);
          color: #e8f4ff;
        }

        /* Responsive */
        @media (max-width: 560px) {
          .skills-section    { padding: 5.5rem 1rem 4rem; }
          .skills-categories { grid-template-columns: 1fr; }
        }
      `}</style>

      <section id="skills" className="skills-section">
        <div className="skills-grid-bg" />
        <div className="skills-orb-a" />
        <div className="skills-orb-b" />

        <div className="skills-wrap">
          <div className="skills-eyebrow">
            <span className="skills-eyebrow-line" />
            Technical Skills
            <span className="skills-eyebrow-line" />
          </div>

          <h2 className="skills-heading">Skills & Tools</h2>

          <div className="skills-categories">
            {skillCategories.map((cat) => (
              <div
                key={cat.id}
                className="skill-cat"
              >
                <div className="skill-cat-header">
                  <span className="skill-cat-label">{cat.label}</span>
                  <span className="skill-cat-code">{cat.code}</span>
                </div>
                <div className="skill-cat-rule" />
                <div className="skill-chips">
                  {cat.items.map((item) => (
                    <span className="skill-chip" key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;