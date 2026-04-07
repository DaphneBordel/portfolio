"use client";

import { motion } from "framer-motion";

export default function ProjectCard({ title, description, tech, image }: {title: string, description: string, tech: string[], image: string}) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 min-h-80 "
      whileHover={{ scale: 1.05 }}
    >
      {image !== '' && <img src={image} alt={title} className="rounded-md mb-4" />}
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tech.map((t, i) => (
          <span key={i} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}