"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import CodeRain from "../components/CodeRain";
import Navbar from "../components/Navbar";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import profile from "../assets/profile.jpg";

export default function HomePage() {
  const [nameTyped, setNameTyped] = useState(false);

  return (
    <>
      <Navbar />
      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center text-center bg-black text-white px-4 overflow-hidden"
      >
        <CodeRain />
        <div className="relative z-10">
          <img src={profile.src} alt="Profile" className="w-40 h-40 rounded-full mb-4 border-4 border-white" />

          <h1 className="text-4xl md:text-6xl font-bold mb-2">Welcome, I'm</h1>

          <h2 className="text-3xl md:text-5xl font-bold text-blue-500 min-h-[60px]">
            {!nameTyped ? (
              <Typewriter
                words={["Abhiram Bhimaraju"]}
                loop={1}
                cursor
                typeSpeed={100}
                deleteSpeed={0}
                delaySpeed={1000}
                onLoopDone={() => setNameTyped(true)}
              />
            ) : (
              "Abhiram Bhimaraju"
            )}
          </h2>

          <p className="mt-4 text-xl md:text-2xl text-white">
            <Typewriter
              words={["Cybersecurity Enthusiast", "Aspiring Penetration Tester"]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>

          <div className="flex gap-4 mt-6 justify-center">
            <a href="https://github.com/Bh-Abhiram" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} />
            </a>
            <a href="https://linkedin.com/in/abhiram-bhimaraju" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://drive.google.com/file/d/1gBIfY5yg-Tg5tEpL-Xko8vmPxgFfuSzH/view?usp=drive_link"
              download
              className="bg-blue-600 px-4 py-2 rounded text-white font-semibold"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
