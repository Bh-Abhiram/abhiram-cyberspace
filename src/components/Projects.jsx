// src/components/Projects.jsx
"use client";
import { useState } from "react";
import CodeRain from "./CodeRain";

const personalProjects = [
  {
    title: "Metasploit Framework for Windows",
    description:
      "Using Metasploit Framework for exploitation, payload generation, and vulnerability testing.",
    liveDemo: "",
    github: "",
  },
  {
    title: "SQLMap",
    description:
      "Automated SQL injection testing with SQLMap, demonstrating database extraction and exploitation.",
    liveDemo: "",
    github: "",
  },
  {
    title: "Nmap",
    description:
      "Network scanning and reconnaissance using Nmap to identify open ports, services, and OS details.",
    liveDemo: "",
    github: "",
  },
  {
    title: "Hydra",
    description:
      "Brute force attack demonstration using Hydra to test login credentials security.",
    liveDemo: "",
    github: "",
  },
  {
    title: "Medusa",
    description:
      "Credential brute force testing with Medusa against different network services.",
    liveDemo: "",
    github: "",
  },
  {
    title: "Slowloris",
    description:
      "Denial-of-Service (DoS) attack demonstration using Slowloris to exhaust server resources.",
    liveDemo: "",
    github: "",
  },
  {
    title: "Hping3",
    description:
      "Custom packet crafting and network testing using Hping3 for security assessments.",
    liveDemo: "",
    github: "",
  },
  {
    title: "DVWA",
    description:
      "Damn Vulnerable Web Application demonstration to practice common web security vulnerabilities.",
    liveDemo: "",
    github: "",
  },
];


// Academic Projects
const academicProjects = [
  {
    title: "Fake login Form and server setup for Reflected XSS attacks",
    description:
      "Fake server setup to catch the victim credentials via fake login form",
    date: "Dec 2024 - Apr 2025",
    tech: ["HTML", "CSS", "NodeJS"],
    github: "https://github.com/Bh-Abhiram/xss-fake-server",
  },
  {
    title: "Demonstration and Mitigation of Reflected XSS attacks",
    description:
      "Demonstrated Reflected XSS attacks and implemented effective prevention techniques to secure web applications.",
    date: "Dec 2024 - Apr 2025",
    tech: ["React", "Node.js", "MySQL", "Reflected XSS"],
    github: "https://github.com/Bh-Abhiram/reflected-xss",
  },
  {
    title: "Fake login Form and server setup for Stored XSS attacks",
    description:
      "Fake server setup to catch the victim credentials via fake login form",
    date: "Dec 2024 - Apr 2025",
    tech: ["HTML", "CSS", "NodeJS"],
    github: "https://github.com/Bh-Abhiram/fake-form",
  },
  {
    title: "Demonstration and Mitigation of Stored XSS attacks",
    description:
      "Demonstrated Stored XSS attacks and implemented effective prevention techniques to secure web applications.",
    date: "Dec 2024 - Apr 2025",
    tech: ["React", "Node.js", "MySQL", "Stored XSS"],
    github: "https://github.com/Bh-Abhiram/stored-xss",
  },
  {
    title: "Defense Against SQL Injection",
    description:
      "Developed a platform to practically demonstrate SQL Injection (SQLi) and implemented prevention techniques to secure web apps.",
    date: "Jul 2024 - Nov 2024",
    tech: ["React", "Node.js", "MySQL", "SQLMap", "Kali Linux"],
    github: "https://github.com/Bh-Abhiram/SQL-injection",
  },
  {
    title: "Code Space",
    description:
      "Platform for writing, storing, and executing code in multiple languages, with user-based coding tasks.",
    date: "Jun 2024 - Jul 2024",
    tech: ["React", "Node.js", "MongoDB", "Compiler Integration"],
    github: "https://github.com/Bh-Abhiram/CodeSpace",
  },
  {
    title: "Disease Prediction Using Python",
    description:
      "Tool to predict various diseases based on symptoms and datasets using user input.",
    date: "Jan 2024 - Jun 2024",
    tech: [
      "Python",
      "Django",
      "pandas",
      "numpy",
      "scikit-learn",
      "random tree forest",
      "decision trees",
    ],
    github: "https://github.com/Bh-Abhiram/Disease-Predictor",
  },
  {
    title: "Teach Track",
    description:
      "Feedback platform for better communication between students and teachers.",
    date: "Aug 2023 - Dec 2023",
    tech: ["ReactJS", "NodeJS", "MongoDB"],
    github: "https://github.com/Bh-Abhiram/Teach-Track",
  },
  {
    title: "Authent",
    description:
      "Implemented Two-Factor Authentication using TOTP to enhance security.",
    date: "Mar 2023 - Jul 2023",
    tech: ["React", "Node.js", "MongoDB", "Speakeasy", "TOTP setup"],
    github: "https://github.com/Bh-Abhiram/Authent",
  },
];

function Projects() {
  const [activeTab, setActiveTab] = useState("academic");
  const data = activeTab === "personal" ? personalProjects : academicProjects;

  return (
    <section
      id="projects"
      className="relative min-h-screen py-20 px-6 flex items-center justify-center"
    >
      <CodeRain />
      <div className="relative z-10 w-full max-w-6xl text-white">
        <h2 className="text-4xl font-bold text-center mb-8">📂 Projects</h2>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("academic")}
            className={`px-4 py-2 rounded font-semibold transition cursor-pointer ${
              activeTab === "academic"
                ? "bg-green-600"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            Academic Projects
          </button>
          <button
            onClick={() => setActiveTab("personal")}
            className={`px-4 py-2 rounded font-semibold transition cursor-pointer ${
              activeTab === "personal"
                ? "bg-green-600"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            Personal Projects
          </button>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-green-500 pl-6 space-y-8">
          {data.map((project, index) => (
            <div key={index} className="relative">
              {/* Timeline Dot */}
              <div className="absolute -left-[10px] top-1 w-4 h-4 bg-green-500 rounded-full border border-white"></div>

              <div className="bg-black/70 p-6 rounded-lg shadow-lg border border-green-500">
                <h3 className="text-2xl font-semibold text-green-400">
                  {project.title}
                </h3>

                {/* Date for Academic Projects */}
                {"date" in project && (
                  <p className="text-sm text-gray-400 mb-2">{project.date}</p>
                )}

                <p className="text-sm text-gray-300 mb-3">
                  {project.description}
                </p>

                {/* Tech Stack for Academic Projects */}
                {"tech" in project && (
                  <p className="text-sm text-gray-400 mb-4">
                    <strong>Tech:</strong> {project.tech.join(", ")}
                  </p>
                )}

                {/* Live Demo Button for Personal Projects */}
                {"liveDemo" in project && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded transition mr-3"
                  >
                    Live Demo
                  </a>
                )}

                {/* GitHub / Show Code Button */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded transition"
                >
                  {activeTab === "personal" ? "Show Code" : "View Code"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
