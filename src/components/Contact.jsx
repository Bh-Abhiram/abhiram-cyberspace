// src/components/Contact.jsx
"use client";
import CodeRain from "./CodeRain";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "networking",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("✅ Message sent successfully! I’ll get back to you soon.");
        setFormData({ name: "", email: "", service: "networking", message: "" });
      } else {
        setStatus("❌ Failed to send message. Please try again later.");
      }
    } catch (error) {
      setStatus("❌ Error sending message. Check your internet connection.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="relative min-h-screen py-20 px-6 flex items-center justify-center">
      <CodeRain />

      <div className="relative z-10 bg-black/80 border border-green-500 shadow-lg backdrop-blur-lg text-white w-full max-w-3xl p-10 rounded-xl">
        <h2 className="text-4xl font-bold mb-6 text-center text-green-400">📡 Contact Me Securely</h2>
        <p className="text-center text-gray-300 mb-8 text-sm">
          Let’s connect! Whether it’s <span className="text-green-400">penetration testing</span>,
          <span className="text-green-400"> vulnerability assessment</span>, or
          <span className="text-green-400"> cybersecurity consultation</span>, I’m here to help.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-left mb-1 font-semibold">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent border border-green-400 focus:border-white px-4 py-2 rounded-md outline-none transition-all duration-300"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-left mb-1 font-semibold">Email Address</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border border-green-400 focus:border-white px-4 py-2 rounded-md outline-none transition-all duration-300"
              placeholder="example@domain.com"
            />
          </div>

          {/* Service */}
          <div>
            <label className="block text-left mb-1 font-semibold">Service Type</label>
            <select
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              className="w-full bg-black border border-green-400 focus:border-white px-4 py-2 rounded-md outline-none transition-all duration-300"
            >
              <option value="networking">Networking</option>
              <option value="understanding_cryptography">Basic Cryptography</option>
              <option value="crypto_algorithms">Advanced Cryptographic Algorithms</option>
              <option value="vulnerability_assessment">Vulnerability Assessment</option>
              <option value="penetration_testing">Penetration Testing</option>
              <option value="malware_analysis">Practical Malware Analysis</option>
              <option value="web_dev_training">Web Development Training</option>
              <option value="mern_web_design">Websites Development using MERN</option>
              <option value="vul_web_app_dev">Vulnerable Web Application Developement</option>
              <option value="splunk_training">Splunk for Beginners</option>
              <option value="kali_linux">Kali Linux for beginners</option>
              <option value="tools_demo_for_penetration_testing">Penetration Testing Tools</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-left mb-1 font-semibold">Your Message</label>
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full bg-transparent border border-green-400 focus:border-white px-4 py-2 rounded-md outline-none resize-none transition-all duration-300"
              placeholder="Write your message securely..."
            />
          </div>

          {/* Status Message */}
          {status && <p className="text-center text-sm">{status}</p>}

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className={`${
                loading ? "bg-gray-500" : "bg-green-500 hover:bg-green-700"
              } text-black font-bold px-6 py-2 rounded-md transition-all cursor-pointer duration-300`}
            >
              {loading ? "Sending..." : "Send Secure Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
