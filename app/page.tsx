"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { FaReact, FaJsSquare, FaNode } from "react-icons/fa";

const skills = [
  { name: "React.js", icon: <FaReact className="text-blue-500 w-10 h-10" />, level: 90 },
  { name: "Next.js", icon: <FaReact className="text-gray-800 dark:text-gray-200 w-10 h-10" />, level: 85 },
  { name: "Nest.js", icon: <FaNode className="text-red-600 w-10 h-10" />, level: 75 },
  { name: "React Native", icon: <FaReact className="text-green-500 w-10 h-10" />, level: 80 },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400 w-10 h-10" />, level: 95 },
];

const projectsPreview = [
  { title: "Reporting commercial", description: "création d'un outil modulable...", tech: ["React.js"], image: "" },
  { title: "Outil de vente marketing mobile", description: "développement de composants mobiles...", tech: ["React Native"], image: "" },
  { title: "Outil de gestion et de suivi", description: "suivi d'interventions techniciens...", tech: ["React.js"], image: "" },
  { title: "Application mobile client", description: "outil pour informer et prévenir...", tech: ["React Native"], image: "" }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pb-20 bg-gray-100 dark:bg-gray-900 transition-colors">
      <Navbar />

      <main className="flex-1 mb-20 px-4 sm:px-6 py-10 sm:py-16 mt-10 space-y-10">

        {/* HERO + SKILLS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* HERO */}
          <div className="relative rounded-2xl p-6 sm:p-8 text-white overflow-hidden 
          bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
          dark:from-indigo-700 dark:via-purple-700 dark:to-pink-700">

            {/* blob */}
            <motion.div
              className="absolute w-60 h-60 sm:w-72 sm:h-72 bg-purple-400 opacity-30 blur-3xl rounded-full top-0 left-0 pointer-events-none"
            />

            <h1 className="text-2xl sm:text-3xl font-bold mb-2">
              Daphné Bordel
            </h1>

            <TypeAnimation
              sequence={[
                "Développeuse Web", 2000,
                "Développeuse Mobile", 2000,
                "Spécialisée JavaScript", 2000
              ]}
              repeat={Infinity}
              className="text-sm opacity-90"
            />

            <p className="mt-4 text-sm">
              Bac + 3, Licence professionnelle Web et Mobile - IUT Orléans
            </p>

            <p className="mt-6 sm:mt-8 mb-6 text-sm opacity-90 max-w-md italic">
              Créer des applications, c’est concevoir des expériences intuitives.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="/projets" className="px-4 py-2 bg-white text-indigo-600 rounded text-sm hover:scale-105 transition">
                Projets
              </a>
              <a href="/contact" className="px-4 py-2 bg-white/20 rounded text-sm hover:bg-white/30 transition">
                Contact
              </a>
            </div>

            {/* IMAGE */}
            <img
              src="/moi2.png"
              className="hidden sm:block absolute bottom-0 right-4 w-28 sm:w-36 md:w-40"
            />
          </div>

          {/* SKILLS */}
          <div>
            <h2 className="text-gray-500 dark:text-gray-400 mb-1 italic">
              Langages maîtrisés
            </h2>

            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {skills.map((skill, i) => (
                <motion.div
                  key={i}
                  className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-3 sm:p-4 rounded-xl shadow-sm hover:shadow-lg transition"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {skill.icon}

                  <span className="text-xs sm:text-sm mt-2 block text-gray-800 dark:text-gray-200">
                    {skill.name}
                  </span>

                  <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded mt-2">
                    <motion.div
                      className="bg-blue-600 h-2 rounded"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* PROJETS */}
        <div>
          <h2 className="text-gray-500 dark:text-gray-400 italic mb-4">
            Projets professionnels
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {projectsPreview.map((p, i) => (
              <motion.div key={i} whileHover={{ scale: 1.03 }}>
                <ProjectCard {...p} />
              </motion.div>
            ))}
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}