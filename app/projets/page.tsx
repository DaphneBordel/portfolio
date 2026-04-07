"use client";

import DetailsProject from "@/components/DetailsProject";
import Navbar from "@/components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const projets = [
  {
    id: 1,
    title: "Carnet de santé numérique animalier",
    description: "Application mobile React Native dédiée au suivi de la santé des animaux : gestion des soins en cours, rappels de rendez-vous, suivi de l’évolution du poids et historique des traitements et soins. Une fonctionnalité de scan d’ordonnance vétérinaire permet de pré- remplir automatiquement les informations, simplifiant ainsi la saisie pour l’utilisateur.",
    tech: ["React native"],
    code: ['/sam-code-nest.png', '/sam-code-react.png'],
    imageBefore: '/appli_3.png',
    demo: ['/appli_1.png', '/appli_2.png', '/appli_3.png', '/app_mobile_video.mp4'],
  },
  {
    id: 2,
    title: "Site de refonte de la mairie de Pontgouin (Eure et Loir)",
    description: "Refonte front-end d’un site de mairie, visant à moderniser l’interface et améliorer l’expérience utilisateur.",
    tech: ["React.js"],
    code: ['/mairie-code-actualites.png'],
    imageBefore:'/mairie-pontgouin-apres.png',
    demo: ["/mairie-pontgouin-avant.png","/mairie-pontgouin-apres.png"],
  }
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
  <>
    <Navbar />
    <div className="max-w-6xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold mb-12 mt-10 text-center">
        Mes projets
      </h1>

      {/* GRID PROJETS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projets.map((projet, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer group"
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelectedProject(projet)}
          >

            {/* IMAGE */}
            <div className="relative max-h-100 overflow-hidden">
              <img src={projet.imageBefore} alt={`Image du projet ${projet.id}`} />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition" />
            </div>

            {/* CONTENU */}
            <div className="p-4">
              <h2 className="text-lg font-semibold">
                {projet.title}
              </h2>
              {/* BADGE TECHNO */}
              <div className="flex gap-2 mt-2">
                {projet.tech.slice(0, 2).map((t, i) => (
                  <span key={i} className="text-xs bg-gray-200 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-2">
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
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto p-6"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* bouton fermer */}
              <button
                className="absolute top-4 right-6 text-2xl"
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
  </>
  );
}