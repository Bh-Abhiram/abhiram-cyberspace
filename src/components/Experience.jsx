// src/components/Experience.jsx
import CodeRain from "./CodeRain";

function Experience() {
  const experienceData = [
    {
      id: 1,
      role: "Technical and Risk Operations Intern",
      organization: "PrimEra Medical Technologies",
      year: "Oct 2024 - Jan 2025",
      skills: ["Networking","Cryptography","Network Security","Subnetting basics"],
      logo: "https://img.icons8.com/ios-filled/50/hacker.png",
    },
    {
      id: 2,
      role: "Security Analyst Intern",
      organization: "Oasis Infobyte",
      year: "June 2025 – July 2025",
      skills: ["Nmap", "DVWA", "Slowloris", "Metasploitable2", "Hping3"],
      logo: "https://img.icons8.com/ios-filled/50/hacker.png",
    },
    {
      id: 3,
      role: "Penetration Testing",
      organization: "Self Learning",
      year: "Ongoing",
      skills: ["Burp Suite", "OWASP Top 10", "SQL Injection", "Kali Linux", "XSS", "DoS","Password Cracking","Cryptographic algorithms"],
      logo: "https://img.icons8.com/ios-filled/50/anonymous-mask.png",
    },
  ];

  return (
    <section
      id="experience"
      className="relative w-full min-h-screen px-6 py-20 flex items-center justify-center"
    >
      <CodeRain />

      <div className="relative z-10 max-w-4xl w-full text-white">
        <h2 className="text-4xl font-bold mb-12 text-center">💼 Experience Timeline</h2>
        <div className="border-l-4 border-green-500 pl-6 space-y-10">
          {experienceData.map((exp) => (
            <div key={exp.id} className="flex items-start gap-4 relative group">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center shadow-md">
                <img src={exp.logo} alt={`${exp.role} logo`} className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-green-400">{exp.role}</h3>
                <p className="text-lg">{exp.organization}</p>
                <p className="text-sm text-gray-300 italic">{exp.year}</p>
                <p className="text-sm text-gray-400 mt-1">
                  Skills:{" "}
                  <span className="text-white">
                    {exp.skills.join(", ")}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
