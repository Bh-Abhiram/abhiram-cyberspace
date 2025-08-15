"use client";
import { useState } from "react";
import { Link } from "react-scroll";
import { FaUserShield, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const sections = ["home", "about", "education", "experience", "skills", "projects", "contact"];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed w-full z-50 bg-black/70 backdrop-blur-md shadow-lg text-white font-medium">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-3">
        {/* Logo */}
        <h1 className="text-2xl font-bold flex items-center gap-2 text-green-400">
          <FaUserShield className="text-blue-400" />
          AB
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm uppercase tracking-wider">
          {sections.map((section) => (
            <li key={section}>
              <Link
                to={section}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer hover:text-green-400 hover:scale-105 transition-all duration-200"
              >
                {section}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden text-xl cursor-pointer z-50" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-black/90 backdrop-blur-sm space-y-6 py-8 text-lg text-white absolute top-full left-0 w-full shadow-md z-40">
          {sections.map((section) => (
            <li key={section}>
              <Link
                to={section}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={closeMenu}
                className="cursor-pointer hover:text-green-400 transition-all duration-200"
              >
                {section}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
