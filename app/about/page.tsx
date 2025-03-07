"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

const experiences = [
  {
    title: "Student Coordinator - SciFi Debate",
    company: "White Hat Hackers Club",
    duration: "Technozaare 2025",
    description: "Organized a debate competition on the SciFi Topics.",
  },
  {
    title: "Coordinater - Hackfest",
    company: "NextGen Intelligence Club",
    duration: "2025",
    description: "Help in smoothly organizing the 24hr Hackathon.",
  },
  // Add more experiences
];

const education = [
  {
    degree: "ICSE",
    school: "Stewart School, Bhubaneswar",
    duration: "2008-2022",
    grade: "Percentage: 90%",
  },
  {
    degree: "ISC",
    school: "Stewart School, Bhubaneswar",
    duration: "2022-2024",
    grade: "Percentage: 79.8%",
  },
  {
    degree: "B.Tech in Computer Science with Big Data Analytics",
    school: "SRM Institute of Science and Technology, Chennai",
    duration: "2024-2028",
    grade: "CGPA: 9.14",
  },
];

const clubs = [
  {
    name: "NextGen Intelligence Club",
    role: "Technical Memeber",
    duration: "2025 - Present",
    description: "Help in organizing technical events and workshops.",
  },
  // Add more clubs
];

export default function About() {
  return (
    <section className="min-h-screen text-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            About Me
          </h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-8"></div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-blue-400">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="p-6 bg-gray-800/50 rounded-lg border border-gray-700"
              >
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-gray-400">{edu.school}</p>
                <p className="text-sm text-gray-500">{edu.duration}</p>
                <p className="mt-2 text-gray-300">{edu.grade}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-blue-400">Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="p-6 bg-gray-800/50 rounded-lg border border-gray-700"
              >
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-gray-400">{exp.company}</p>
                <p className="text-sm text-gray-500">{exp.duration}</p>
                <p className="mt-2 text-gray-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Clubs Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-blue-400">
            Clubs & Activities
          </h2>
          <div className="space-y-6">
            {clubs.map((club, index) => (
              <div
                key={index}
                className="p-6 bg-gray-800/50 rounded-lg border border-gray-700"
              >
                <h3 className="text-xl font-semibold">{club.name}</h3>
                <p className="text-gray-400">{club.role}</p>
                <p className="text-sm text-gray-500">{club.duration}</p>
                <p className="mt-2 text-gray-300">{club.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Resume Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center"
        >
          <a
            href="/resume.pdf"
            download
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 
              bg-size-200 bg-pos-0 hover:bg-pos-100 text-white rounded-full font-semibold 
              transition-all duration-500 ease-out
              shadow-[0_4px_20px_-1px_rgba(79,70,229,0.3)]
              hover:shadow-[0_4px_20px_-1px_rgba(79,70,229,0.5)]"
          >
            <span>Download Resume</span>
            <Download className="w-5 h-5" />
            <motion.span
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"
              style={{ filter: "blur(8px)" }}
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
