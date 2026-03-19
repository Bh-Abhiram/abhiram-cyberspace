"use client";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setStatus({ type: "success", msg: "Message sent! I'll get back to you soon." });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ type: "error", msg: data.error || "Something went wrong." });
      }
    } catch {
      setStatus({ type: "error", msg: "Error sending message. Check your connection." });
    }
    setLoading(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@300;400;500&display=swap');

        .ct-section {
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

        /* ── Background ── */
        .ct-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 100%);
          pointer-events: none;
        }
        .ct-orb-a {
          position: absolute; border-radius: 50%; pointer-events: none; filter: blur(110px);
          width: 520px; height: 520px;
          background: radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 70%);
          top: -120px; left: -140px;
          animation: ctOrb 14s ease-in-out infinite;
        }
        .ct-orb-b {
          position: absolute; border-radius: 50%; pointer-events: none; filter: blur(100px);
          width: 420px; height: 420px;
          background: radial-gradient(circle, rgba(0,60,200,0.12) 0%, transparent 70%);
          bottom: -80px; right: -100px;
          animation: ctOrb 18s ease-in-out infinite reverse;
        }
        .ct-orb-c {
          position: absolute; border-radius: 50%; pointer-events: none; filter: blur(80px);
          width: 260px; height: 260px;
          background: radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%);
          top: 50%; right: 10%;
          animation: ctOrb 22s ease-in-out infinite;
        }
        @keyframes ctOrb {
          0%,100% { transform: translate(0,0); }
          50%      { transform: translate(20px,-20px); }
        }

        /* ── Wrap — centered ── */
        .ct-wrap {
          position: relative; z-index: 10;
          max-width: 580px; width: 100%;
          display: flex; flex-direction: column; align-items: center;
          text-align: center;
        }

        /* ── Eyebrow ── */
        .ct-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.68rem; color: #00d4ff;
          letter-spacing: 0.16em; text-transform: uppercase;
          margin-bottom: 1rem;
        }
        .ct-eyebrow-line { width: 32px; height: 1px; background: #00d4ff; opacity: 0.45; }

        /* ── Heading ── */
        .ct-heading {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 800; line-height: 1.08;
          letter-spacing: -0.02em;
          margin: 0 0 0.7rem;
          background: linear-gradient(135deg, #fff 35%, #00d4ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ct-subheading {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.78rem; color: #4a7090;
          letter-spacing: 0.06em;
          margin-bottom: 2.8rem;
        }

        /* ── Card ── */
        .ct-card {
          position: relative;
          width: 100%;
          background: rgba(8, 20, 34, 0.8);
          border: 1px solid rgba(0,212,255,0.14);
          border-radius: 20px;
          padding: 2.4rem;
          backdrop-filter: blur(16px);
          overflow: hidden;
          box-shadow: 0 24px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,212,255,0.04);
        }

        /* top glow line */
        .ct-card::before {
          content: '';
          position: absolute;
          top: -1px; left: 15%; right: 15%; height: 2px;
          background: linear-gradient(90deg, transparent, rgba(0,212,255,0.6), transparent);
          border-radius: 2px;
        }

        /* corner accents */
        .ct-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 50%; transform: translateX(-50%);
          width: 50%; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0,212,255,0.15), transparent);
        }

        /* decorative corner bracket top-left */
        .ct-corner-tl, .ct-corner-tr {
          position: absolute;
          width: 16px; height: 16px;
          pointer-events: none;
        }
        .ct-corner-tl {
          top: 12px; left: 12px;
          border-top: 1px solid rgba(0,212,255,0.35);
          border-left: 1px solid rgba(0,212,255,0.35);
          border-radius: 2px 0 0 0;
        }
        .ct-corner-tr {
          top: 12px; right: 12px;
          border-top: 1px solid rgba(0,212,255,0.35);
          border-right: 1px solid rgba(0,212,255,0.35);
          border-radius: 0 2px 0 0;
        }

        /* ── Two-col name+email row ── */
        .ct-row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        /* ── Form layout ── */
        .ct-form { display: flex; flex-direction: column; gap: 1.2rem; text-align: left; }

        .ct-field { display: flex; flex-direction: column; gap: 7px; }

        .ct-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.6rem; color: #00d4ff;
          letter-spacing: 0.14em; text-transform: uppercase;
          display: flex; align-items: center; gap: 5px;
        }
        .ct-label-line {
          flex: 1; height: 1px;
          background: linear-gradient(90deg, rgba(0,212,255,0.15), transparent);
        }

        /* ── Input / Textarea ── */
        .ct-input, .ct-textarea {
          width: 100%; box-sizing: border-box;
          background: rgba(0, 212, 255, 0.03);
          border: 1px solid rgba(0,212,255,0.12);
          border-radius: 10px;
          padding: 12px 16px;
          color: #e8f4ff;
          font-family: 'Syne', sans-serif;
          font-size: 0.88rem;
          outline: none;
          transition: border-color 0.25s, box-shadow 0.25s, background 0.25s;
        }
        .ct-input::placeholder, .ct-textarea::placeholder {
          color: #2a4a5e; font-style: italic;
        }
        .ct-input:focus, .ct-textarea:focus {
          border-color: rgba(0,212,255,0.5);
          box-shadow: 0 0 0 3px rgba(0,212,255,0.08), inset 0 0 20px rgba(0,212,255,0.03);
          background: rgba(0,212,255,0.06);
        }
        .ct-textarea {
          resize: none; min-height: 140px; line-height: 1.7;
        }

        /* ── Status ── */
        .ct-status {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem; letter-spacing: 0.05em;
          padding: 11px 16px; border-radius: 9px;
          display: flex; align-items: center; gap: 8px;
          animation: ctFadeIn 0.3s ease both;
        }
        @keyframes ctFadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ct-status.success {
          color: #34d399;
          background: rgba(52,211,153,0.07);
          border: 1px solid rgba(52,211,153,0.2);
        }
        .ct-status.error {
          color: #ff6b6b;
          background: rgba(255,107,107,0.07);
          border: 1px solid rgba(255,107,107,0.2);
        }
        .ct-status-dot-s { width:6px;height:6px;border-radius:50%;background:#34d399;box-shadow:0 0 6px #34d399;flex-shrink:0; }
        .ct-status-dot-e { width:6px;height:6px;border-radius:50%;background:#ff6b6b;box-shadow:0 0 6px #ff6b6b;flex-shrink:0; }

        /* ── Submit ── */
        .ct-submit {
          display: inline-flex; align-items: center; justify-content: center; gap: 9px;
          width: 100%; height: 50px;
          border-radius: 12px;
          background: linear-gradient(135deg, #0077bb 0%, #00d4ff 100%);
          color: #020c14;
          font-family: 'Syne', sans-serif;
          font-weight: 800; font-size: 0.85rem;
          letter-spacing: 0.1em; text-transform: uppercase;
          border: none; cursor: pointer;
          transition: filter 0.2s, box-shadow 0.2s, transform 0.2s;
          box-shadow: 0 4px 24px rgba(0,212,255,0.35), inset 0 1px 0 rgba(255,255,255,0.15);
          position: relative; overflow: hidden;
          margin-top: 0.4rem;
        }
        .ct-submit::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.12), transparent);
          border-radius: inherit;
        }
        .ct-submit:hover:not(:disabled) {
          filter: brightness(1.1);
          box-shadow: 0 8px 32px rgba(0,212,255,0.5);
          transform: translateY(-2px);
        }
        .ct-submit:active:not(:disabled) { transform: translateY(0); }
        .ct-submit:disabled {
          opacity: 0.55; cursor: not-allowed;
          filter: none; transform: none;
        }

        /* loading spinner */
        .ct-spinner {
          width: 14px; height: 14px;
          border: 2px solid rgba(2,12,20,0.3);
          border-top-color: #020c14;
          border-radius: 50%;
          animation: ctSpin 0.7s linear infinite;
        }
        @keyframes ctSpin {
          to { transform: rotate(360deg); }
        }

        /* ── Responsive ── */
        @media (max-width: 500px) {
          .ct-section  { padding: 5.5rem 1rem 4rem; }
          .ct-card     { padding: 1.6rem 1.4rem; }
          .ct-row-2    { grid-template-columns: 1fr; }
        }
      `}</style>

      <section id="contact" className="ct-section">
        <div className="ct-grid" />
        <div className="ct-orb-a" />
        <div className="ct-orb-b" />
        <div className="ct-orb-c" />

        <div className="ct-wrap">
          {/* Eyebrow */}
          <div className="ct-eyebrow">
            <span className="ct-eyebrow-line" />
            Contact
            <span className="ct-eyebrow-line" />
          </div>

          {/* Heading */}
          <h2 className="ct-heading">Get In Touch</h2>
          <p className="ct-subheading"> Drop a message — I'll respond as soon as possible.</p>

          {/* Card */}
          <div className="ct-card">
            <span className="ct-corner-tl" />
            <span className="ct-corner-tr" />

            <form className="ct-form" onSubmit={handleSubmit}>

              {/* Name + Email row */}
              <div className="ct-row-2">
                <div className="ct-field">
                  <label className="ct-label">Full Name <span className="ct-label-line" /></label>
                  <input
                    className="ct-input"
                    type="text" name="name" required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="ct-field">
                  <label className="ct-label">Email <span className="ct-label-line" /></label>
                  <input
                    className="ct-input"
                    type="email" name="email" required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Message */}
              <div className="ct-field">
                <label className="ct-label">Message <span className="ct-label-line" /></label>
                <textarea
                  className="ct-textarea"
                  name="message" required
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              {/* Status */}
              {status && (
                <div className={`ct-status ${status.type}`}>
                  {status.type === "success"
                    ? <span className="ct-status-dot-s" />
                    : <span className="ct-status-dot-e" />
                  }
                  {status.msg}
                </div>
              )}

              {/* Submit */}
              <button type="submit" className="ct-submit" disabled={loading}>
                {loading ? (
                  <><span className="ct-spinner" /> Sending...</>
                ) : (
                  <><FaPaperPlane style={{ fontSize: "0.78rem" }} /> Send Message</>
                )}
              </button>

            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;