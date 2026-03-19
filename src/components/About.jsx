function About() {

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@300;400;500&display=swap');

        .about-section {
          font-family: 'Syne', sans-serif;
          position: relative;
          width: 100%;
          min-height: 100vh;
          background: #050a10;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6rem 1.5rem;
          box-sizing: border-box;
          overflow-x: hidden;
        }

        /* Background grid */
        .about-grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 100%);
          pointer-events: none;
        }
        .about-orb-1 {
          position: absolute;
          width: 420px; height: 420px;
          border-radius: 50%;
          filter: blur(90px);
          background: radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%);
          top: -80px; right: -100px;
          pointer-events: none;
        }
        .about-orb-2 {
          position: absolute;
          width: 320px; height: 320px;
          border-radius: 50%;
          filter: blur(80px);
          background: radial-gradient(circle, rgba(0,60,180,0.12) 0%, transparent 70%);
          bottom: -60px; left: -80px;
          pointer-events: none;
        }

        /* Container */
        .about-container {
          position: relative;
          z-index: 10;
          max-width: 900px;
          width: 100%;
        }

        /* Section label */
        .section-label {
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
        .section-label-line {
          width: 32px;
          height: 1px;
          background: #00d4ff;
          opacity: 0.5;
        }

        /* Heading */
        .about-heading {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin: 0 0 2rem;
          background: linear-gradient(135deg, #fff 40%, #00d4ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Bio card */
        .about-bio {
          background: rgba(10, 25, 40, 0.6);
          border: 1px solid rgba(0, 212, 255, 0.12);
          border-radius: 14px;
          padding: 1.8rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .about-bio p {
          font-size: 0.95rem;
          color: #a8c8e0;
          line-height: 1.8;
          margin: 0;
        }
        .about-bio p .highlight {
          color: #e8f4ff;
          font-weight: 600;
        }
        .about-bio p .cyan {
          color: #00d4ff;
          font-weight: 500;
        }

        /* Stat row inside bio */
        .bio-stats {
          display: flex;
          gap: 1.2rem;
          margin-top: 0.5rem;
          flex-wrap: wrap;
        }
        .bio-stat {
          display: flex;
          flex-direction: column;
        }
        .bio-stat-num {
          font-family: 'JetBrains Mono', monospace;
          font-size: 1.3rem;
          font-weight: 500;
          color: #00d4ff;
          line-height: 1;
        }
        .bio-stat-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.62rem;
          color: #7aa0bb;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-top: 3px;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .about-layout { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) {
          .about-section { padding: 5rem 1.1rem; }
          .bio-stats     { gap: 1rem; }
        }
      `}</style>

      <section id="about" className="about-section">
        <div className="about-grid-bg" />
        <div className="about-orb-1" />
        <div className="about-orb-2" />

        <div className="about-container">
          {/* Label */}
          <div className="section-label">
            <span className="section-label-line" />
            About Me
            <span className="section-label-line" />
          </div>

          {/* Heading */}
          <h2 className="about-heading">Who I Am</h2>

          {/* Bio */}
          <div className="about-bio">
            <p>
              I'm <span className="highlight">Abhiram Bheemaraju</span>, a B.Tech graduate in{" "}
              <span className="cyan">Computer Science & Engineering (Cybersecurity)</span> from
              Malla Reddy University, Hyderabad, with a CGPA of{" "}
              <span className="cyan">8.82</span>.
            </p>
            <p>
              During my internship at <span className="highlight">PrimEra Medical Technologies</span> in
              the Technical Risk Office, I gained hands-on experience across{" "}
              <span className="cyan">VAPT</span>, <span className="cyan">SOC operations</span>,{" "}
              <span className="cyan">DFIR</span>, and <span className="cyan">Threat Hunting</span> —
              working with enterprise tools including LogRhythm SIEM, Trellix DLP, and Mimecast
              Email Security.
            </p>
            <p>
              I'm passionate about securing web applications and networks, using tools like{" "}
              <span className="cyan">Burp Suite</span> and <span className="cyan">Kali Linux</span>{" "}
              for penetration testing, and actively practice on platforms like{" "}
              <span className="cyan">PortSwigger</span>, <span className="cyan">TryHackMe</span>, and{" "}
              <span className="cyan">Cybrary</span>.
            </p>

            <div className="bio-stats">
              <div className="bio-stat">
                <span className="bio-stat-num">1+</span>
                <span className="bio-stat-label">Year Experience</span>
              </div>
              <div className="bio-stat">
                <span className="bio-stat-num">6+</span>
                <span className="bio-stat-label">Projects</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;