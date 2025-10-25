// src/components/About.jsx
import CodeRain from "./CodeRain";

function About() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex items-center justify-center px-4 py-16"
    >
      {/* Code Rain Background */}
      <CodeRain />

      {/* Main Content */}
      <div className="relative z-10 text-center text-white max-w-4xl bg-black/60 p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-extrabold mb-4 tracking-wide">About Me</h2>

        <p className="text-lg leading-relaxed mt-4">
          I’m <span className="font-semibold">Abhiram Bhimaraju</span>, a B.Tech graduate in Computer Science and Engineering (Cybersecurity) from Malla Reddy University, with a strong passion for web application and network penetration testing.
        </p>

        <p className="text-lg leading-relaxed mt-4">
          During my internship in Technical Risk Office, I developed practical, hands-on experience in networking, cryptography, network security, the OWASP Top 10, and the WSTG. I have practiced web and network testing on platforms such as <span className="text-green-400">TryHackMe</span>, <span className="text-green-400">PortSwigger Web Security Labs</span>, <span className="text-green-400">Cybrary</span>, and <span className="text-green-400">DVWA</span>, and have used tools including <span className="text-green-400">Kali Linux</span>, <span className="text-green-400">Burp Suite</span>, <span className="text-green-400">Metasploit Framework</span>, <span className="text-green-400">SQLMap</span>, <span className="text-green-400">Nmap</span>, and <span className="text-green-400">Wireshark</span> in lab-based and simulated environments.
        </p>
      </div>
    </section>
  );
}

export default About;
