"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import Navbar from "../components/Navbar";
import profile from "../assets/profile.jpg";

export default function HomePage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@300;400;500&display=swap');

        :root {
          --cyan: #00d4ff;
          --cyan-dim: rgba(0, 212, 255, 0.15);
          --bg: #050a10;
          --surface: rgba(10, 25, 40, 0.7);
          --border: rgba(0, 212, 255, 0.18);
          --text: #e8f4ff;
          --muted: #7aa0bb;
        }

        .home-section {
          font-family: 'Syne', sans-serif;
          min-height: 100vh;
          background: var(--bg);
          color: var(--text);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 5rem 1.5rem 4rem;
          box-sizing: border-box;
        }

        .grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%);
          animation: gridDrift 20s linear infinite;
        }
        @keyframes gridDrift {
          0%   { transform: translateY(0); }
          100% { transform: translateY(60px); }
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
        }
        .orb-1 {
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%);
          top: -100px; left: -150px;
          animation: floatOrb 12s ease-in-out infinite;
        }
        .orb-2 {
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(0,80,200,0.15) 0%, transparent 70%);
          bottom: -80px; right: -100px;
          animation: floatOrb 15s ease-in-out infinite reverse;
        }
        @keyframes floatOrb {
          0%, 100% { transform: translate(0, 0); }
          50%       { transform: translate(30px, -30px); }
        }

        .scanline {
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 212, 255, 0.015) 2px,
            rgba(0, 212, 255, 0.015) 4px
          );
          pointer-events: none;
        }

        .hero-card {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          width: 100%;
          max-width: 600px;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .profile-ring {
          position: relative;
          width: 150px;
          height: 150px;
          margin-bottom: 2rem;
          flex-shrink: 0;
          animation: fadeUp 0.9s 0.1s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .profile-ring::before {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          background: conic-gradient(
            var(--cyan) 0deg, transparent 120deg,
            var(--cyan) 240deg, transparent 360deg
          );
          animation: spin 5s linear infinite;
          z-index: 0;
        }
        .profile-ring::after {
          content: '';
          position: absolute;
          inset: -8px;
          border-radius: 50%;
          background: conic-gradient(
            transparent 0deg, rgba(0,212,255,0.3) 90deg, transparent 180deg
          );
          animation: spin 8s linear infinite reverse;
          z-index: 0;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .profile-img {
          position: relative;
          z-index: 1;
          width: 142px;
          height: 142px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid var(--bg);
          box-shadow: 0 0 30px rgba(0, 212, 255, 0.3);
          top: 4px;
          left: 4px;
        }

        .hero-name {
          font-size: clamp(2rem, 6vw, 3.8rem);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.02em;
          margin: 0 0 0.6rem;
          background: linear-gradient(135deg, #fff 30%, var(--cyan) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: fadeUp 0.9s 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .hero-role {
          font-family: 'JetBrains Mono', monospace;
          font-size: clamp(0.8rem, 2vw, 1rem);
          font-weight: 400;
          color: var(--muted);
          margin: 0 0 1.8rem;
          letter-spacing: 0.06em;
          animation: fadeUp 0.9s 0.35s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .hero-role span {
          color: var(--cyan);
          font-weight: 500;
        }

        .divider {
          width: 60px;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--cyan), transparent);
          margin: 0 auto 1.8rem;
          animation: fadeUp 0.9s 0.4s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .cta-row {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          animation: fadeUp 0.9s 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .icon-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 46px;
          height: 46px;
          border-radius: 10px;
          background: var(--surface);
          border: 1px solid var(--border);
          color: var(--muted);
          font-size: 1.2rem;
          text-decoration: none;
          transition: color 0.2s, border-color 0.2s, background 0.2s, transform 0.2s, box-shadow 0.2s;
        }
        .icon-btn:hover {
          color: var(--cyan);
          border-color: var(--cyan);
          background: var(--cyan-dim);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0,212,255,0.2);
        }

        .resume-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 0 22px;
          height: 46px;
          border-radius: 10px;
          background: linear-gradient(135deg, #0088cc 0%, #00d4ff 100%);
          color: #020c14;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 0.04em;
          text-decoration: none;
          text-transform: uppercase;
          transition: transform 0.2s, box-shadow 0.2s, filter 0.2s;
          box-shadow: 0 4px 20px rgba(0,212,255,0.35);
          white-space: nowrap;
        }
        .resume-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0,212,255,0.5);
          filter: brightness(1.08);
        }

        .scroll-hint {
          position: absolute;
          bottom: 1.8rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.58rem;
          color: var(--muted);
          letter-spacing: 0.18em;
          text-transform: uppercase;
          z-index: 10;
          animation: fadeUp 1s 1s both;
        }
        .scroll-line {
          width: 1px;
          height: 28px;
          background: linear-gradient(to bottom, var(--cyan), transparent);
          animation: scrollDrop 1.8s ease-in-out infinite;
        }
        @keyframes scrollDrop {
          0%   { transform: scaleY(0); transform-origin: top;    opacity: 0; }
          50%  { transform: scaleY(1); transform-origin: top;    opacity: 1; }
          100% { transform: scaleY(1); transform-origin: bottom; opacity: 0; }
        }

        /* ── Responsive ── */
        @media (max-width: 600px) {
          .home-section  { padding: 5rem 1.2rem 4rem; }
          .profile-ring  { width: 120px; height: 120px; margin-bottom: 1.5rem; }
          .profile-img   { width: 112px; height: 112px; }
          .hero-role     { margin-bottom: 1.4rem; }
          .divider       { margin-bottom: 1.4rem; }
          .icon-btn      { width: 42px; height: 42px; font-size: 1.1rem; }
          .resume-btn    { padding: 0 16px; font-size: 0.8rem; }
        }

        @media (max-width: 360px) {
          .cta-row    { flex-direction: column; width: 100%; }
          .resume-btn { width: 100%; justify-content: center; }
        }
      `}</style>

      <Navbar />

      <section id="home" className="home-section">
        <div className="grid-bg" />
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="scanline" />

        <div className="hero-card">
          <div className="profile-ring">
            <img src={profile.src} alt="Abhiram Bheemaraju" className="profile-img" />
          </div>

          <h1 className="hero-name">Abhiram Bheemaraju</h1>

          <p className="hero-role">
            <span>Cybersecurity Analyst</span>
          </p>

          <div className="divider" />

          <div className="cta-row">
            <a href="https://github.com/Bh-Abhiram" target="_blank" rel="noopener noreferrer" className="icon-btn" title="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/abhiram-bhimaraju" target="_blank" rel="noopener noreferrer" className="icon-btn" title="LinkedIn">
              <FaLinkedin />
            </a>
            <a
              href="https://drive.google.com/file/d/1mxuc8MxQYLxnWLXyvdAIldsgt7dsS-gr/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn"
            >
              <HiDownload />
              Download Resume
            </a>
          </div>
        </div>

        <div className="scroll-hint">
          <div className="scroll-line" />
          scroll
        </div>
      </section>
    </>
  );
}