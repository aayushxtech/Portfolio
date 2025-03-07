"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { Github } from "lucide-react";
import { useState } from "react";

// Add categories to your project data
const projects = [
  {
    title: "SAKSHaM",
    description:
      "React Native app for community support & collaboration with real-time updates.",
    category: "Mobile",
    longDescription:
      "A mobile application designed to connect communities and facilitate real-time collaboration. Features include live chat, event management, and resource sharing.",
    tech: ["React Native", "Firebase", "Redux", "Express"],
    repoUrl: "https://github.com/aayushxtech/HACKFEST2k25",
    imageUrl: "/projects/saksham.png",
    features: [
      "Event organization and management",
      "Resource sharing platform",
      "Community engagement tools",
    ],
  },
  {
    title: "FinanceAI",
    description:
      "AI-powered financial native app assistant for personal finance.",
    category: "AI/ML",
    longDescription:
      "An intelligent financial assistant that helps users manage their personal finances through AI-driven insights and recommendations.",
    tech: ["React Native", "Gemini", "Firebase"],
    repoUrl: "https://github.com/yourusername/financeai",
    imageUrl: "/financeai.jpg",
    features: [
      "AI-powered expense tracking",
      "Personalized financial insights",
      "Budget optimization",
      "Investment recommendations",
      "Chatbot support",
    ],
    status: "Under Development",
  },
  // Add more projects with categories
];

const categories = ["All", "Web", "Mobile", "AI/ML"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter((project) =>
    activeCategory === "All" ? true : project.category === activeCategory
  );

  return (
    <section className="min-h-screen text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            My Projects
          </h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-4">
            Here are some of my featured projects that showcase my skills and
            passion for development. Each project represents a unique challenge
            and learning experience.
          </p>
          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            <span>View more projects on GitHub</span>
          </motion.a>
        </motion.div>

        {/* Project Categories */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-all duration-200
                ${
                  activeCategory === category
                    ? "text-white border-blue-500 bg-blue-500/10"
                    : "text-gray-400 border-gray-700 hover:text-white hover:border-blue-500"
                } border`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
                ease: "easeOut",
              }}
              layout
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-4">
            Interested in collaborating or learning more about my projects?
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 
              rounded-full font-semibold text-white hover:opacity-90 transition-opacity duration-200"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
