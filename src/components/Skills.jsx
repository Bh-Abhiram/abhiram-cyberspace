// src/components/Skills.jsx
"use client";

import { useState } from "react";
import CodeRain from "./CodeRain";

const skills = [
  "Networking", "Cryptography","Vulnerability Assessment","Web Application Penetration Testing",
  "Ipv4 Subnetting", "Network Security", "MERN Stack", "MySQL Basics",
];

const tools = [
  "Git & GitHub", "VS Code", "Kali Linux",
  "Burp Suite Basic level", "Metasploit Framework", "SQLMap", "Nmap", "Wireshark",
  "Hydra", "Medusa", "Splunk Enterprise","Slowloris","Hping3", "nikto", "DVWA",
];

function Skills() {
  const [showSkills, setShowSkills] = useState(true);

  return (
    <section
      id="skills"
      className="relative min-h-screen py-20 px-6 flex items-center justify-center"
    >
      <CodeRain />

      <div className="relative z-10 w-full max-w-5xl text-white text-center">
        <h2 className="text-4xl font-bold mb-8">
          {showSkills ? "🧠 Skills Known" : "🛠️ Tools Known"}
        </h2>

        {/* Toggle Switch */}
        <div className="flex items-center justify-center mb-10">
          <span className="mr-3 font-semibold">Skills</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              checked={!showSkills}
              onChange={() => setShowSkills(!showSkills)}
            />
            <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:bg-green-500 transition-all duration-300"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 transform peer-checked:translate-x-5"></div>
          </label>
          <span className="ml-3 font-semibold">Tools</span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-sm">
          {(showSkills ? skills : tools).map((item, idx) => (
            <div
              key={idx}
              className="bg-black/70 border border-green-500 rounded-lg py-3 px-2 hover:scale-105 transition-all shadow"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
