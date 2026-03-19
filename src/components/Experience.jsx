"use client";
import { MdSecurity } from "react-icons/md";
import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt, FaChevronRight } from "react-icons/fa";
import { SiOwasp } from "react-icons/si";

function Experience() {
  const responsibilities = [
    "Implemented networking fundamentals, cryptography, network security concepts, and IPv4 subnetting in practical scenarios.",
    "Analyzed web application security based on OWASP Top 10 and WSTG, including HTTP/HTTPS, SOP, and CORS.",
    "Performed web application security testing using Burp Suite via PortSwigger Web Security Academy and Cybrary.",
    "Analyzed SOC operations: SIEM workflows, log analysis, alert triaging, and incident handling using LogRhythm.",
    "Worked on alert classification (TP, FP, TN, FN) with exposure to Active Directory and SOC workflows.",
    "Collaborated with DLP team on Trellix DLP and Mimecast Email Security (SPF/DKIM/DMARC, phishing detection).",
    "Gained exposure to security operations workflows across DFIR, SOC, and Threat Hunting.",
  ];



  const periods = [
    { label: "Phase I",  dates: "14 Oct 2024 – 14 Jan 2025" },
    { label: "Phase II", dates: "13 May 2025 – 13 Feb 2026" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@300;400;500&display=swap');

        /* ── Variables ── */
        :root {
          --c:   #00d4ff;
          --cd:  rgba(0,212,255,0.12);
          --cb:  rgba(0,212,255,0.18);
          --bg:  #050a10;
          --s:   rgba(8,20,34,0.8);
          --txt: #e8f4ff;
          --mut: #7aa0bb;
        }

        /* ── Section ── */
        .exp-section {
          font-family: 'Syne', sans-serif;
          position: relative;
          width: 100%;
          min-height: 100vh;
          background: var(--bg);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 7rem 1.5rem 5rem;
          box-sizing: border-box;
          overflow: hidden;
        }

        /* ── Ambient BG ── */
        .exp-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 100%);
          pointer-events: none;
        }
        .exp-orb-a {
          position: absolute; border-radius: 50%; pointer-events: none; filter: blur(100px);
          width: 480px; height: 480px;
          background: radial-gradient(circle, rgba(0,212,255,0.09) 0%, transparent 70%);
          top: -100px; right: -120px;
          animation: orbFloat 14s ease-in-out infinite;
        }
        .exp-orb-b {
          position: absolute; border-radius: 50%; pointer-events: none; filter: blur(90px);
          width: 360px; height: 360px;
          background: radial-gradient(circle, rgba(0,60,200,0.11) 0%, transparent 70%);
          bottom: -80px; left: -90px;
          animation: orbFloat 18s ease-in-out infinite reverse;
        }
        @keyframes orbFloat {
          0%,100% { transform: translate(0,0); }
          50%      { transform: translate(25px,-25px); }
        }

        /* ── Container ── */
        .exp-wrap {
          position: relative; z-index: 10;
          max-width: 860px; width: 100%;
        }

        /* ── Section label ── */
        .exp-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.68rem; color: var(--c);
          letter-spacing: 0.16em; text-transform: uppercase;
          margin-bottom: 1rem;
        }
        .exp-eyebrow-line {
          width: 32px; height: 1px;
          background: var(--c); opacity: 0.45;
        }

        /* ── Heading ── */
        .exp-heading {
          font-size: clamp(2rem,5vw,3rem);
          font-weight: 800; line-height: 1.08;
          letter-spacing: -0.02em;
          margin: 0 0 3rem;
          background: linear-gradient(135deg, #fff 35%, var(--c) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* ── Main card ── */
        .exp-card {
          position: relative;
          background: var(--s);
          border: 1px solid var(--cb);
          border-radius: 20px;
          padding: 2.4rem;
          backdrop-filter: blur(12px);
          overflow: hidden;
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        .exp-card:hover {
          border-color: rgba(0,212,255,0.38);
          box-shadow: 0 0 40px rgba(0,212,255,0.08), 0 20px 60px rgba(0,0,0,0.4);
        }

        /* top-right corner glow accent */
        .exp-card::before {
          content: '';
          position: absolute;
          top: -1px; right: 60px;
          width: 120px; height: 2px;
          background: linear-gradient(90deg, transparent, var(--c), transparent);
          border-radius: 2px;
        }
        /* bottom glow */
        .exp-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 50%;
          transform: translateX(-50%);
          width: 60%; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0,212,255,0.2), transparent);
        }

        /* ── Card header ── */
        .exp-header {
          display: flex;
          align-items: flex-start;
          gap: 1.4rem;
          margin-bottom: 1.8rem;
          flex-wrap: wrap;
        }

        /* Icon box */
        .exp-icon-box {
          flex-shrink: 0;
          width: 56px; height: 56px;
          border-radius: 14px;
          background: var(--cd);
          border: 1px solid var(--cb);
          display: flex; align-items: center; justify-content: center;
          color: var(--c);
          font-size: 1.5rem;
          box-shadow: 0 0 20px rgba(0,212,255,0.15);
          position: relative;
        }
        .exp-icon-box::after {
          content: '';
          position: absolute; inset: -1px;
          border-radius: 14px;
          background: conic-gradient(var(--c) 0deg, transparent 60deg, transparent 300deg, var(--c) 360deg);
          opacity: 0.3;
          animation: borderSpin 6s linear infinite;
          z-index: -1;
        }
        @keyframes borderSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        .exp-header-text { flex: 1; min-width: 200px; }

        .exp-tag {
          display: inline-block;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.6rem; color: var(--c);
          background: var(--cd);
          border: 1px solid var(--cb);
          border-radius: 4px; padding: 3px 10px;
          letter-spacing: 0.1em; text-transform: uppercase;
          margin-bottom: 0.5rem;
        }

        .exp-role {
          font-size: clamp(1rem, 2.5vw, 1.25rem);
          font-weight: 800; color: var(--txt);
          line-height: 1.25; margin-bottom: 0.4rem;
        }

        .exp-meta {
          display: flex; align-items: center; gap: 6px; flex-wrap: wrap;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.72rem; color: var(--mut);
        }
        .exp-meta svg { font-size: 0.65rem; opacity: 0.6; flex-shrink: 0; }
        .exp-meta-sep { opacity: 0.3; }

        /* ── Period pills ── */
        .exp-periods {
          display: flex; gap: 10px; flex-wrap: wrap;
          margin-bottom: 2rem;
        }
        .exp-period-pill {
          display: flex; align-items: center; gap: 8px;
          background: rgba(0,212,255,0.06);
          border: 1px solid rgba(0,212,255,0.14);
          border-radius: 8px;
          padding: 7px 14px;
          transition: background 0.2s, border-color 0.2s;
        }
        .exp-period-pill:hover {
          background: rgba(0,212,255,0.12);
          border-color: rgba(0,212,255,0.3);
        }
        .exp-period-badge {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.58rem; color: var(--c);
          background: rgba(0,212,255,0.15);
          border-radius: 3px; padding: 1px 6px;
          letter-spacing: 0.08em; text-transform: uppercase;
        }
        .exp-period-date {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem; color: var(--mut);
          letter-spacing: 0.03em;
        }

        /* ── Divider ── */
        .exp-rule {
          width: 100%; height: 1px;
          background: linear-gradient(90deg, rgba(0,212,255,0.15), transparent);
          margin-bottom: 1.8rem;
        }

        /* ── Responsibilities ── */
        .exp-col-title {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.62rem; color: var(--c);
          letter-spacing: 0.14em; text-transform: uppercase;
          margin-bottom: 1rem;
          display: flex; align-items: center; gap: 6px;
        }
        .exp-col-title::after {
          content: '';
          flex: 1; height: 1px;
          background: linear-gradient(90deg, rgba(0,212,255,0.2), transparent);
        }

        .exp-resp-list {
          list-style: none; margin: 0; padding: 0;
          display: flex; flex-direction: column; gap: 0.7rem;
        }
        .exp-resp-item {
          display: flex; gap: 10px; align-items: flex-start;
          font-size: 0.83rem; color: #a0bdd4; line-height: 1.65;
          padding: 8px 10px;
          border-radius: 8px;
          border: 1px solid transparent;
          transition: background 0.2s, border-color 0.2s;
        }
        .exp-resp-item:hover {
          background: rgba(0,212,255,0.04);
          border-color: rgba(0,212,255,0.1);
        }
        .exp-resp-arrow {
          flex-shrink: 0; margin-top: 5px;
          color: var(--c); opacity: 0.5;
          font-size: 0.6rem;
          transition: opacity 0.2s, transform 0.2s;
        }
        .exp-resp-item:hover .exp-resp-arrow {
          opacity: 1; transform: translateX(2px);
        }

        /* ── Responsive ── */
        @media (max-width: 560px) {
          .exp-section  { padding: 5.5rem 1rem 4rem; }
          .exp-card     { padding: 1.5rem; }
          .exp-header   { gap: 1rem; }
          .exp-icon-box { width: 46px; height: 46px; font-size: 1.2rem; border-radius: 11px; }
          .exp-role     { font-size: 1rem; }
          .exp-period-date { font-size: 0.65rem; }
        }
      `}</style>

      <section id="experience" className="exp-section">
        <div className="exp-grid" />
        <div className="exp-orb-a" />
        <div className="exp-orb-b" />

        <div className="exp-wrap">
          {/* Label */}
          <div className="exp-eyebrow">
            <span className="exp-eyebrow-line" />
            Experience
            <span className="exp-eyebrow-line" />
          </div>

          <h2 className="exp-heading">Work Experience</h2>

          {/* ── Card ── */}
          <div className="exp-card">

            {/* Header */}
            <div className="exp-header">
              <div className="exp-icon-box">
                <MdSecurity />
              </div>
              <div className="exp-header-text">
                <span className="exp-tag">Internship</span>
                <div className="exp-role">Technical Risk Office — Cyber Security Intern</div>
                <div className="exp-meta">
                  <FaBuilding />
                  PrimEra Medical Technologies
                  <span className="exp-meta-sep">·</span>
                  <FaMapMarkerAlt />
                  Madhapur, Hyderabad
                </div>
              </div>
            </div>

            {/* Period pills */}
            <div className="exp-periods">
              {periods.map((p) => (
                <div className="exp-period-pill" key={p.label}>
                  <span className="exp-period-badge">{p.label}</span>
                  <FaCalendarAlt style={{ color: "var(--c)", opacity: 0.5, fontSize: "0.65rem" }} />
                  <span className="exp-period-date">{p.dates}</span>
                </div>
              ))}
            </div>

            <div className="exp-rule" />

            {/* Responsibilities */}
            <div className="exp-col-title">Responsibilities</div>
            <ul className="exp-resp-list">
              {responsibilities.map((r, i) => (
                <li className="exp-resp-item" key={i}>
                  <FaChevronRight className="exp-resp-arrow" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Experience;