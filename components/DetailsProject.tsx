"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Projet {
  title: string;
  description: string;
  demo: string[];
  tech: string[];
  code: string[];
}

export default function DetailsProject({ projet }: { projet: Projet }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">

      {/* HERO */}
      <motion.div
        className="mb-10 sm:mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          {projet.title}
        </h1>

        {/* TECH */}
        <div className="flex flex-wrap gap-2 mb-6">
          {projet.tech?.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 text-xs sm:text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* MEDIA */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {projet.demo?.map((el, i) => {
            const extension = el.split(".").pop();

            if (extension === "png" || extension === "jpg" || extension === "jpeg") {
              return (
                <motion.img
                  key={i}
                  src={el}
                  alt={`Image ${i} du projet ${projet.title}`}
                  className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-md cursor-pointer hover:shadow-xl transition"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedImage(el)}
                />
              );
            }

            if (extension === "mp4") {
              return (
                <motion.video
                  key={i}
                  controls
                  preload="none"
                  className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-md"
                >
                  <source src={el} type="video/mp4" />
                  Your browser does not support the video tag.
                </motion.video>
              );
            }

            return null;
          })}
        </div>
      </motion.div>

      {/* DESCRIPTION */}
      <motion.div
        className="mb-10 sm:mb-12 max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Description
        </h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
          {projet.description}
        </p>
      </motion.div>

      {/* CODE */}
      {projet.code?.length > 0 && (
        <motion.div
          className="mb-10 sm:mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
            Extraits de code
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {projet.code.map((img, i) => (
              <motion.div
                key={i}
                className="overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-2 shadow-md hover:shadow-xl transition"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={img}
                  alt={`Code ${i}`}
                  className="rounded-lg cursor-pointer"
                  onClick={() => setSelectedImage(img)}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* MODAL IMAGE */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Zoom"
              className="max-w-full max-h-[85vh] rounded-xl shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            />

            {/* CLOSE */}
            <button
              className="absolute top-4 right-4 text-white text-2xl sm:text-3xl"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}