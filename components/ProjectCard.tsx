"use client";

import { motion } from "framer-motion";

export default function ProjectCard({
  title,
  description,
  tech,
  image
}: {
  title: string;
  description: string;
  tech: string[];
  image: string;
}) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md p-5 
      hover:shadow-xl transition-all duration-300 h-full flex flex-col"
      whileHover={{ scale: 1.03 }}
    >
      {/* IMAGE */}
      {image !== "" && (
        <img
          src={image}
          alt={title}
          className="rounded-md mb-4 w-full h-40 object-cover object-top"
        />
      )}

      {/* CONTENT */}
      <div className="flex flex-col flex-1">
        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
          {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm line-clamp-3">
          {description}
        </p>

        {/* PUSH TECH EN BAS */}
        <div className="mt-auto pt-3 flex flex-wrap gap-2">
          {tech.map((t, i) => (
            <span
              key={i}
              className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}