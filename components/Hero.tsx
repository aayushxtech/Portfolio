"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen text-white px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 w-full">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center md:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Hi, I&apos;m{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Aayush Samal
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-300 mb-8"
          >
            Full-Stack Developer | AI Enthusiast | App Developer
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
            className="flex flex-col md:flex-row gap-4 justify-center md:justify-start"
          >
            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 
                  bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-full font-semibold 
                  transition-all duration-500 ease-out
                  shadow-[0_4px_20px_-1px_rgba(79,70,229,0.3)]
                  hover:shadow-[0_4px_20px_-1px_rgba(79,70,229,0.5)]"
              >
                <span className="relative z-10">View Projects</span>
                <motion.span
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"
                  style={{ filter: "blur(8px)" }}
                />
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full font-semibold text-white 
                  border-2 border-gray-700 hover:border-gray-600 
                  transition-all duration-300 hover:shadow-lg"
              >
                Contact Me
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Character Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex items-center justify-center"
        >
          <div
            className="w-[300px] h-[400px] rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 
            backdrop-blur-sm border border-gray-700/50 flex items-center justify-center"
          >
            <Image
              src="/3D-model.jpg"
              alt="3D Model"
              width={500}
              height={300}
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ delay: 1, duration: 0.8 }}
        onClick={() => {
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-sm font-medium text-gray-400">Scroll Down</span>
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
