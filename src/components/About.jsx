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
  I am <span className="font-semibold">Bhimaraju Abhiram</span>, an Aspiring Cyber Security Professional with hands-on 
  experience in penetration testing, vulnerability assessment, and network defense. I have practical expertise in using 
  advanced security tools such as <span className="text-green-400">Nmap</span> for network scanning, 
  <span className="text-green-400"> Burp Suite</span> and <span className="text-green-400">OWASP ZAP</span> for web vulnerability testing, 
  <span className="text-green-400"> DVWA</span> for lab-based exploitation practice, 
  <span className="text-green-400"> Hping3</span> and <span className="text-green-400">Slowloris</span> for DoS testing, 
  <span className="text-green-400"> Metasploit Framework</span> for exploitation, 
  <span className="text-green-400"> SQLMap</span> for database testing, 
  <span className="text-green-400"> Hydra</span> and <span className="text-green-400">Medusa</span> for password attacks, 
  <span className="text-green-400"> Nikto</span> for web server scanning, 
  <span className="text-green-400"> Wireshark</span> for packet analysis, and 
  <span className="text-green-400"> Splunk Enterprise</span> for SOC operations and log monitoring.
</p>

<p className="text-lg leading-relaxed mt-4">
  I have a strong passion for both <span className="font-semibold">offensive security</span> — identifying and exploiting vulnerabilities — 
  and <span className="font-semibold">defensive security</span> — monitoring, detecting, and responding to incidents. My goal is to 
  continuously sharpen my skills, adapt to evolving threats, and contribute to building 
  <span className="text-green-400 font-semibold"> secure, resilient digital infrastructures</span> through proactive defense 
  and in-depth penetration testing.
</p>
      </div>
    </section>
  );
}

export default About;
