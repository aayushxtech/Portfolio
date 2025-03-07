"use client";

import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        {/* Copyright */}
        <p className="text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Aayush Samal. All Rights Reserved.
        </p>

        {/* Social Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <Link
            href="https://github.com/aayushxtech"
            target="_blank"
            className="hover:text-white transition"
          >
            <Github size={24} />
          </Link>
          <Link
            href="https://linkedin.com/in/aayush-samal"
            target="_blank"
            className="hover:text-white transition"
          >
            <Linkedin size={24} />
          </Link>
        </div>

        {/* Footer Links */}
        <div className="flex space-x-6">
          <Link href="/about" className="hover:text-white text-sm">
            About
          </Link>
          <Link href="/projects" className="hover:text-white text-sm">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-white text-sm">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
