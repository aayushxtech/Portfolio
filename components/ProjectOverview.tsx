"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    title: "SAKSHaM",
    description:
      "React Native app for community support & collaboration. (Developed during HACKFEST2k25.)",
    link: "/projects",
  },
  {
    title: "Unsaid",
    description:
      "A React Js web platform to teach Sex-ed to all age groups. (Developed during Xyntra'25.)",
    link: "/projects",
  },
];

const ProjectsOverview = () => {
  return (
    <section id="projects" className="min-h-screen text-white py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Animated Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl 
                backdrop-blur-sm border border-gray-700/50 shadow-lg 
                hover:shadow-xl hover:border-gray-600/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300 text-lg">{project.description}</p>
            </motion.div>
          ))}
        </div>

        {/* View More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="text-center mt-16"
        >
          <Link href="/projects">
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
              <span className="relative z-10">View More Projects</span>
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

export default ProjectsOverview;
