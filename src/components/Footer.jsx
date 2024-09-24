import React from "react";
import { FaTwitterX, FaInstagram, FaGithub, FaBehance } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import logo from "../assets/Logo (2).png";

const Footer = () => {
  return (
    <footer className=" text-white py-8">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between">
        {/* Logo and Brand Name */}
        <div className="flex items-center mb-4 md:mb-0">
          <img src={logo} alt="Logo" className="h-10 w-10 mr-3" />
          <span className="text-xl font-semibold text-customBlue2">
            Tesvstheworld
          </span>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a
            href="https://github.com/tesvstheworld"
            className="text-gray-400 hover:text-customBlue2 transition duration-300 ease-in-out"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="h-6 w-6" />
          </a>
          <a
            href="https://x.com/tesvstheworld?s=21"
            className="text-gray-400 hover:text-customBlue2 transition duration-300 ease-in-out"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareXTwitter className="h-6 w-6" />
          </a>
          <a
            href="https://www.instagram.com/tesvstheworld/"
            className="text-gray-400 hover:text-customBlue2 transition duration-300 ease-in-out"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="h-6 w-6" />
          </a>

          <a
            href="https://www.behance.net/tesvstheworld"
            className="text-gray-400 hover:text-customBlue2 transition duration-300 ease-in-out"
            aria-label="Behance"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaBehance className="h-6 w-6" />
          </a>
        </div>

        {/* Links */}
        <div className="text-center md:text-right space-y-2">
          <a
            href="#about"
            className="text-sm text-black pr-2 hover:text-white transition duration-300 ease-in-out"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-sm text-black pr-2 hover:text-white transition duration-300 ease-in-out"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-sm text-black hover:text-white transition duration-300 ease-in-out"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-6 pt-4">
        <p className="text-center text-black text-sm">
          &copy; {new Date().getFullYear()} Tesvstheworld. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
