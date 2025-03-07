import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  longDescription?: string;
  imageUrl: string;
  tech: string[];
  repoUrl?: string;
  liveUrl?: string;
  features?: string[];
  status?: string;
  category?: string;
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  tech,
  repoUrl,
  liveUrl,
  features,
  status,
}: ProjectCardProps) {
  return (
    <div
      className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl 
      backdrop-blur-sm border border-gray-700/50 overflow-hidden transition-all duration-300
      hover:border-gray-600/50 hover:shadow-xl"
    >
      {/* Image Container optimized for mobile screenshots */}
      <div className="relative h-[400px] w-full flex justify-center bg-gradient-to-b from-gray-800 to-gray-900 p-4">
        <div className="relative w-[220px] h-full rounded-2xl overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-contain transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 220px, 220px"
            priority
          />
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent 
          opacity-60 transition-opacity duration-300 group-hover:opacity-80"
        />
        {status && (
          <span
            className="absolute top-4 right-4 px-3 py-1 text-sm bg-blue-500/20 text-blue-400 
            rounded-full border border-blue-500/50 backdrop-blur-sm"
          >
            {status}
          </span>
        )}
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3
            className="text-xl font-semibold bg-clip-text text-transparent 
            bg-gradient-to-r from-blue-400 to-purple-500"
          >
            {title}
          </h3>
          <p className="text-gray-300 mt-2">{description}</p>
        </div>

        {tech && (
          <div className="flex flex-wrap gap-2">
            {tech.map((item, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm bg-gray-800/80 text-gray-300 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        )}

        {features && (
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-gray-400">
              Key Features:
            </h4>
            <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex items-center gap-4 pt-2">
          {repoUrl && (
            <motion.a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/80 
                text-gray-300 rounded-lg hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Code</span>
            </motion.a>
          )}
          {liveUrl && (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-4 py-2 
                bg-gradient-to-r from-blue-500 to-purple-500 
                text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </motion.a>
          )}
        </div>
      </div>
    </div>
  );
}
