import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

export default function App() {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-black via-[#0f0f0f] to-gray-900 text-white flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,#00f2fe_0%,#4facfe_25%,transparent_70%)] opacity-10 animate-pulse" />
      
      <div className="z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 drop-shadow-[0_0_10px_#f0f]">
          Shahan — The Prodigy Coder 💻
        </h1>

        <TypeAnimation
          sequence={[
            "Cyber Wizard 🔐",
            2000,
            "Future Hacker 🧠",
            2000,
            "Creative Designer 🎨",
            2000,
            "Code Magician 💥",
            2000,
          ]}
          wrapper="span"
          speed={40}
          className="block text-xl md:text-2xl mt-4 text-teal-400"
          repeat={Infinity}
        />

        <p className="mt-6 text-gray-300 max-w-xl mx-auto">
          I'm not just different — I'm **dangerously unique**. I don't follow the path, I make my own.
        </p>

        <div className="mt-6 flex justify-center gap-6 text-2xl">
          <a href="https://github.com/username" target="_blank" rel="noreferrer">
            <FaGithub className="hover:text-purple-500 transition duration-300" />
          </a>
          <a href="https://linkedin.com/in/username" target="_blank" rel="noreferrer">
            <FaLinkedin className="hover:text-blue-500 transition duration-300" />
          </a>
          <a href="https://instagram.com/username" target="_blank" rel="noreferrer">
            <FaInstagram className="hover:text-pink-500 transition duration-300" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-4 text-sm text-gray-500 animate-bounce">
        scroll ↓
      </div>
    </div>
  );
}
