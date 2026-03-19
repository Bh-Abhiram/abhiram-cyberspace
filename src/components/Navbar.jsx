"use client";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaUserShield, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const sections = ["home", "about", "education", "experience", "skills", "projects", "contact"];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@300;400;500&display=swap');

        :root {
          --cyan: #00d4ff;
          --cyan-dim: rgba(0, 212, 255, 0.12);
          --bg: #050a10;
          --surface: rgba(5, 10, 16, 0.85);
          --border: rgba(0, 212, 255, 0.15);
          --muted: #7aa0bb;
        }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          font-family: 'JetBrains Mono', monospace;
          transition: background 0.3s, border-color 0.3s, box-shadow 0.3s;
          background: transparent;
          border-bottom: 1px solid transparent;
        }
        .navbar.scrolled {
          background: var(--surface);
          border-bottom-color: var(--border);
          box-shadow: 0 4px 30px rgba(0, 212, 255, 0.06);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }

        .navbar-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 1.5rem;
          height: 62px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* Logo */
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 9px;
          text-decoration: none;
          cursor: pointer;
          user-select: none;
        }
        .nav-logo-icon {
          width: 34px;
          height: 34px;
          border-radius: 8px;
          background: var(--cyan-dim);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--cyan);
          font-size: 0.95rem;
          transition: box-shadow 0.2s, background 0.2s;
        }
        .nav-logo:hover .nav-logo-icon {
          background: rgba(0, 212, 255, 0.2);
          box-shadow: 0 0 14px rgba(0, 212, 255, 0.3);
        }
        .nav-logo-text {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.15rem;
          letter-spacing: 0.04em;
          background: linear-gradient(135deg, #fff 30%, var(--cyan) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Desktop links */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 2px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav-links li a,
        .nav-links li span {
          display: block;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 0.68rem;
          font-weight: 400;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--muted);
          cursor: pointer;
          text-decoration: none;
          transition: color 0.2s, background 0.2s;
          white-space: nowrap;
        }
        .nav-links li a:hover,
        .nav-links li span:hover,
        .nav-links li .active-link {
          color: var(--cyan);
          background: var(--cyan-dim);
        }

        /* Mobile toggle */
        .nav-toggle {
          display: none;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 8px;
          background: var(--cyan-dim);
          border: 1px solid var(--border);
          color: var(--cyan);
          font-size: 1rem;
          cursor: pointer;
          z-index: 110;
          transition: background 0.2s, box-shadow 0.2s;
          flex-shrink: 0;
        }
        .nav-toggle:hover {
          background: rgba(0, 212, 255, 0.2);
          box-shadow: 0 0 12px rgba(0, 212, 255, 0.25);
        }

        /* Mobile menu */
        .mobile-menu {
          position: absolute;
          top: 62px;
          left: 0;
          width: 100%;
          background: rgba(5, 10, 16, 0.97);
          border-bottom: 1px solid var(--border);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          list-style: none;
          margin: 0;
          padding: 1.2rem 1.5rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 4px;
          z-index: 99;
          animation: slideDown 0.22s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .mobile-menu li a,
        .mobile-menu li span {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          border-radius: 8px;
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--muted);
          cursor: pointer;
          text-decoration: none;
          transition: color 0.2s, background 0.2s;
          border: 1px solid transparent;
        }
        .mobile-menu li a:hover,
        .mobile-menu li span:hover {
          color: var(--cyan);
          background: var(--cyan-dim);
          border-color: var(--border);
        }
        .mobile-menu-idx {
          font-size: 0.6rem;
          color: rgba(0, 212, 255, 0.4);
          min-width: 18px;
        }

        @media (max-width: 768px) {
          .nav-links  { display: none; }
          .nav-toggle { display: flex; }
        }

        @media (max-width: 480px) {
          .navbar-inner { padding: 0 1rem; }
        }
      `}</style>

      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="navbar-inner">
          {/* Logo */}
          <div className="nav-logo">
            <div className="nav-logo-icon">
              <FaUserShield />
            </div>
            <span className="nav-logo-text">AB</span>
          </div>

          {/* Desktop Menu */}
          <ul className="nav-links">
            {sections.map((section) => (
              <li key={section}>
                <Link
                  to={section}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-62}
                  activeClass="active-link"
                >
                  {section}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <div className="nav-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="mobile-menu">
            {sections.map((section, i) => (
              <li key={section}>
                <Link
                  to={section}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-62}
                  onClick={closeMenu}
                >
                  <span className="mobile-menu-idx">0{i + 1}</span>
                  {section}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </>
  );
}

export default Navbar;