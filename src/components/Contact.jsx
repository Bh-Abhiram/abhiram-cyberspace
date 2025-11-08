// src/components/Contact.jsx
"use client";
import CodeRain from "./CodeRain";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
      setStatus(data.success ? "✅ Message sent successfully!" : `❌ ${data.error}`);
      if (data.success) setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("❌ Error sending message. Check your internet connection.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="relative min-h-screen py-20 px-6 flex items-center justify-center">
      <CodeRain />

      <div className="relative z-10 bg-black/80 border border-green-500 shadow-lg backdrop-blur-lg text-white w-full max-w-3xl p-10 rounded-xl">
        <h2 className="text-4xl font-bold mb-6 text-center text-green-400">📡 Contact Me</h2>
        <p className="text-center text-gray-300 mb-8 text-sm">
          Send me your queries and I’ll get back to you via email and WhatsApp.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
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

          <div>
            <label className="block text-left mb-1 font-semibold">Your Message</label>
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full bg-transparent border border-green-400 focus:border-white px-4 py-2 rounded-md outline-none resize-none transition-all duration-300"
              placeholder="Write your message..."
            />
          </div>

          {status && <p className="text-center text-sm mt-2">{status}</p>}

          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className={`${loading ? "bg-gray-500" : "bg-green-500 hover:bg-green-700"} text-black font-bold px-6 py-2 rounded-md transition-all duration-300 cursor-pointer`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
