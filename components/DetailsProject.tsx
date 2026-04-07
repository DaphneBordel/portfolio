"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface Projet {
  title: string;
  description: string;
  demo: string[];
  tech: string[];
  code: string[];
}

export default function DetailsProject({ projet }: { projet: Projet }) {
  console.log("projet", projet);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="max-w-12xl mx-auto px-6 py-16">

      {/* HERO */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {projet.title}
        </h1>

        {/* Tech badges */}
        <div className="flex flex-wrap mb-6">
          {projet.tech?.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-indigo-100 text-indigo-600 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 p-15'>
          {projet.demo?.map((el, i) => {
            const extension = el.split('.')[1];
            console.log('extension', extension);
            if (extension === 'png') {
              return (
                <motion.img
                  key={i}
                  src={el}
                  alt={`Image n°${i} du projet ${projet.title}`}
                  className="w-full object-cover rounded-2xl shadow-lg cursor-pointer"
                  whileHover={{ scale: 1.03 }}
                  onClick={() => setSelectedImage(el)}
                />
              )
            } else if (extension === 'mp4') {
              console.log("ici", el);
              return (
                <motion.video
                  controls
                  preload="none"
                  className="object-cover rounded-2xl shadow-lg cursor-pointer"
                  height={500} width={'auto'}
                >
                  <source src={el} type="video/mp4" />
                  <track
                    src="/path/to/captions.vtt"

                    kind="subtitles"
                    srcLang="en"
                    label="English"
                  />
                  Your browser does not support the video tag.
                </motion.video>
              )
            }
          })}
        </div>
      </motion.div>

      {/* DESCRIPTION */}
      <motion.div
        className="mb-12 max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Description</h2>
        <p className="text-gray-600 leading-relaxed">
          {projet.description}
        </p>
      </motion.div>

      {/* CODE / CAPTURES */}
      {projet.code?.length > 0 && (
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Extraits de code</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projet.code.map((img, i) => (
              <motion.div
                key={i}
                className="overflow-hidden rounded-xl bg-gray-900 p-2 shadow-lg"
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
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/90 z-50 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <div className="min-h-screen flex items-start justify-center p-6">

            <motion.img
              src={selectedImage}
              alt="Zoom"
              className="w-auto h-auto max-w-[75%] rounded-xl shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />

            {/* bouton fermer */}
            <button
              className="fixed top-6 right-6 text-white text-3xl z-50"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>

          </div>
        </motion.div>
      )}
    </div>
  );
}