"use client";

import DetailsProject from "@/components/DetailsProject";
import Navbar from "@/components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const projets = [
  {
    id: 1,
    title: "Carnet de santé numérique animalier",
    description:
      "Application mobile React Native dédiée au suivi de la santé des animaux : gestion des soins en cours, rappels de rendez-vous, suivi de l’évolution du poids et historique des traitements et soins. Une fonctionnalité de scan d’ordonnance vétérinaire permet de pré-remplir automatiquement les informations.",
    tech: ["React native"],
    code: ["/code-carnet-ui-2.jpg", "/code-carnet-ui-1.jpg", "/code-carnet-back-1.jpg", "/code-carnet-back-2.jpg"],
    imageBefore: "/appli_3.png",
    demo: ["/appli_1.png", "/appli_2.png", "/appli_3.png", "/app_mobile_video.mp4"],
    url: ["https://github.com/DaphneBordel/carnet-sante-animaux-numerique-ui", "https://github.com/DaphneBordel/carnet-sante-animaux-numerique-back"]
  },
  {
    id: 2,
    title: "Site de refonte de la mairie de Pontgouin",
    description:
      "Refonte front-end d’un site de mairie, visant à moderniser l’interface et améliorer l’expérience utilisateur.",
    tech: ["React.js"],
    code: ["/mairie-code-actualites.png"],
    imageBefore: "/mairie-pontgouin-apres.png",
    demo: ["/mairie-pontgouin-avant.png", "/mairie-pontgouin-apres.png"],
    url: ["https://github.com/DaphneBordel/refonte-mairie-pontgouin"]
  },
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">

          {/* TITLE */}
          <h1 className="text-2xl sm:text-4xl font-bold mb-8 sm:mb-12 mt-10 text-center text-gray-900 dark:text-gray-100">
            Mes projets
          </h1>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {projets.map((projet, i) => (
              <motion.div
                key={i}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm hover:shadow-xl overflow-hidden cursor-pointer group transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedProject(projet)}
              >
                {/* IMAGE */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={projet.imageBefore}
                    alt={`Image du projet ${projet.id}`}
                    className="w-full object-top group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition" />
                </div>

                {/* CONTENT */}
                <div className="p-4">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {projet.title}
                  </h2>

                  {/* TECH */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {projet.tech.slice(0, 2).map((t, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 line-clamp-3">
                    {projet.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* MODAL */}
          <AnimatePresence>
            {selectedProject && (
              <motion.div
                className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
              >
                <motion.div
                  className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto p-4 sm:p-6 shadow-xl"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* CLOSE BUTTON */}
                  <button
                    className="absolute top-3 right-4 text-xl text-gray-700 dark:text-gray-300 hover:scale-110 transition"
                    onClick={() => setSelectedProject(null)}
                  >
                    ✕
                  </button>

                  <DetailsProject projet={selectedProject} />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </>
  );
}