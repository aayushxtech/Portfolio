"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiFirebase,
  SiDjango,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiSupabase,
  SiFlask,
} from "react-icons/si";

// Define skills data without levels
const skills = [
  {
    category: "Frontend",
    items: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "React", icon: <SiReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Django", icon: <SiDjango /> },
      { name: "Flask", icon: <SiFlask /> },

      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Supabase", icon: <SiSupabase /> },
    ],
  },
];

const About = () => {
  return (
    <section id="about" className="min-h-screen text-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Animated Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Animated Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="text-xl text-gray-300 leading-relaxed mb-12 text-center"
        >
          I&apos;m a passionate Full-Stack Developer with expertise in Next.js,
          React, and AI technologies. I enjoy solving complex problems, building
          scalable applications, and contributing to open-source projects.
          Currently, I&apos;m working on AI-powered solutions to enhance user
          experiences.
        </motion.p>

        {/* Skills Display - Updated without levels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="space-y-12 mb-12"
        >
          {skills.map((skillCategory, categoryIndex) => (
            <div key={skillCategory.category} className="space-y-4">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 * categoryIndex, duration: 0.5 }}
                className="text-2xl font-semibold text-blue-400"
              >
                {skillCategory.category}
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skillCategory.items.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.2 * index + 0.3 * categoryIndex,
                      duration: 0.5,
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 
                      rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 
                      transition-all duration-300 backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl text-blue-400">
                        {skill.icon}
                      </span>
                      <h4 className="text-lg font-medium">{skill.name}</h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Learn More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
          className="text-center mt-16"
        >
          <Link href="/about">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 
                bg-size-200 bg-pos-0 hover:bg-pos-100 text-white rounded-full font-semibold 
                transition-all duration-500 ease-out
                shadow-[0_4px_20px_-1px_rgba(79,70,229,0.3)]
                hover:shadow-[0_4px_20px_-1px_rgba(79,70,229,0.5)]"
            >
              <span className="relative z-10">Learn More</span>
              <motion.span
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"
                style={{ filter: "blur(8px)" }}
              />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
