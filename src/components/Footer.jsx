// src/components/Footer.jsx
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-16 relative z-10 shadow-inner">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 max-w-6xl mx-auto">
        {/* Social Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a
            href="https://github.com/Bh-Abhiram"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-transform transform hover:scale-110"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://linkedin.com/in/abhiram-bhimaraju"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-transform transform hover:scale-110"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="mailto:bheemarajuabhiram@gmail.com"
            className="hover:text-red-400 transition-transform transform hover:scale-110"
          >
            <FaEnvelope size={22} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} <span className="text-white font-semibold">Abhiram Bhimaraju</span> | All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
