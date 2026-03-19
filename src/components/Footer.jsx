import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";

function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@300;400;500&display=swap');

        .footer {
          font-family: 'Syne', sans-serif;
          position: relative;
          background: #050a10;
          border-top: 1px solid rgba(0,212,255,0.1);
          padding: 2rem 1.5rem;
          overflow: hidden;
        }

        /* top glow line */
        .footer::before {
          content: '';
          position: absolute;
          top: -1px; left: 50%; transform: translateX(-50%);
          width: 40%; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0,212,255,0.5), transparent);
        }

        .footer-inner {
          max-width: 1000px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.2rem;
        }

        /* Logo */
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .footer-logo-icon {
          width: 30px; height: 30px;
          border-radius: 7px;
          background: rgba(0,212,255,0.1);
          border: 1px solid rgba(0,212,255,0.18);
          display: flex; align-items: center; justify-content: center;
          color: #00d4ff; font-size: 0.85rem;
        }
        .footer-logo-text {
          font-weight: 800;
          font-size: 0.95rem;
          letter-spacing: 0.04em;
          background: linear-gradient(135deg, #fff 30%, #00d4ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Copyright */
        .footer-copy {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          color: #4a7090;
          letter-spacing: 0.06em;
          text-align: center;
        }
        .footer-copy span {
          color: #7aa0bb;
        }

        /* Socials */
        .footer-socials {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .footer-social-btn {
          display: flex; align-items: center; justify-content: center;
          width: 34px; height: 34px;
          border-radius: 8px;
          background: rgba(0,212,255,0.06);
          border: 1px solid rgba(0,212,255,0.12);
          color: #7aa0bb;
          font-size: 0.9rem;
          text-decoration: none;
          transition: color 0.2s, background 0.2s, border-color 0.2s, transform 0.2s, box-shadow 0.2s;
        }
        .footer-social-btn:hover {
          color: #00d4ff;
          background: rgba(0,212,255,0.12);
          border-color: rgba(0,212,255,0.3);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,212,255,0.18);
        }

        @media (max-width: 600px) {
          .footer-inner {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-inner">

          {/* Logo */}
          <div className="footer-logo">
            <div className="footer-logo-icon"><MdSecurity /></div>
            <span className="footer-logo-text">AB</span>
          </div>

          {/* Copyright */}
          <p className="footer-copy">
            © {new Date().getFullYear()} <span>Abhiram Bheemaraju</span> · All rights reserved.
          </p>

          {/* Socials */}
          <div className="footer-socials">
            <a href="https://github.com/Bh-Abhiram" target="_blank" rel="noopener noreferrer" className="footer-social-btn" title="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/abhiram-bhimaraju" target="_blank" rel="noopener noreferrer" className="footer-social-btn" title="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:bheemarajuabhiram@gmail.com" className="footer-social-btn" title="Email">
              <FaEnvelope />
            </a>
          </div>

        </div>
      </footer>
    </>
  );
}

export default Footer;