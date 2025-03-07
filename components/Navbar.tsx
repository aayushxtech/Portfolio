"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import React from "react";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-gray-950/75 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <div className="flex items-center space-x-3">
          <Link href={"/"}>
            <Image
              src="/Logo.png"
              alt="logo"
              className="w-8 h-8 hover:opacity-80 transition-opacity"
              width={8}
              height={8}
            />
          </Link>
          <Link
            href="/"
            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 hover:opacity-80 transition-opacity"
          >
            Aayush Samal
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-base transition-all duration-200 font-medium hover:text-blue-400 ${
                pathname === link.href
                  ? "text-white border-b-2 border-blue-500 pb-1"
                  : "text-gray-400"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 transition-colors duration-200"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-950/75 backdrop-blur-md border-t border-gray-800">
          <div className="flex flex-col space-y-2 py-4 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-lg py-2 px-4 rounded-lg transition-all duration-200 ${
                  pathname === link.href
                    ? "font-semibold text-white bg-blue-500/10 border-l-2 border-blue-500"
                    : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
