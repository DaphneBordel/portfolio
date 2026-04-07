"use client";
// pages/index.tsx
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { FaReact, FaJsSquare, FaNode } from "react-icons/fa";

const skills = [
  { name: "React.js", icon: <FaReact className="text-blue-500 w-6 h-6" />, level: 90 },
  { name: "Next.js", icon: <FaReact className="text-gray-800 w-6 h-6" />, level: 85 },
  { name: "Nest.js", icon: <FaNode className="text-red-600 w-6 h-6" />, level: 75 },
  { name: "React Native", icon: <FaReact className="text-green-500 w-6 h-6" />, level: 80 },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400 w-6 h-6" />, level: 95 },
];

const projectsPreview = [
  { title: "Reporting commercial", description: 'création d\'un outil modulable pour afficher des données statistiques (ex: nombre de connexion,... ) selon un graphique choisi.', tech: ["React.js"], image: '' },
  { title: "Outil de vente marketing mobile", description: 'développement de composants mobiles indépendants (galerie photo adaptable, notifications push, géolocalisation,...)', tech: ["React Native"], image: '' },
  { title: "Outil de gestion et de suivi", description: "suivi d'interventions techniciens sur sites protégés : mise à jour en temps réel des données envoyées par le technicien, géolocalisation des équipes et affectations automatiques des incidents en fonction de la disponibilité des agents et de leur géolocalisation.", tech: ["React.js"], image: '' },
  { title: "Application mobile client", description: "outil pour informer et prévenir des risques en milieu festif (notifications push, géolocalisation et structures d'aides à proximité, affichage de données de prévention)", tech: ["React Native"], image: '' }
];

export default function Home() {
  return (
    <div className="flex flex-col overflow-hidden">
      <Navbar />

      <main className="flex-1 grid grid-rows-[auto_auto_1fr_auto] gap-6 p-6 mt-15">

        {/* TOP : HERO + SKILLS */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* HERO */}
          <div className="relative rounded-2xl p-8 text-white overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">

            {/* blobs */}
            <motion.div className="absolute w-72 h-72 bg-purple-400 opacity-30 blur-3xl rounded-full top-0 left-0"
              animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} />

            <h1 className="text-3xl font-bold mb-2">
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

            <p className="mt-4 text-sm ">Bac + 3, Licence professionnelle Web et Mobile - IUT Orléans la Source</p>

            <p className="mt-8 mb-8 text-sm opacity-90 max-w-md italic text-center">
              Créer des applications, c’est concevoir des expériences intuitives qui simplifient la vie.
            </p>

            <div className="mt-4 flex gap-3">
              <a href="/projets" className="px-4 py-2 bg-white text-indigo-600 rounded text-sm">
                Projets
              </a>
              <a href="/contact" className="px-4 py-2 bg-white/20 rounded text-sm">
                Contact
              </a>
            </div>

            {/* image */}
            <img
              src="/moi2.png"
              className="absolute top-10 right-4 w-32 md:w-40"
            />
          </div>

          {/* SKILLS */}
          <div>
            <h2 className="text-gray-500 dark:text-gray-400 mb-2 italic">Langages maîtrisés</h2>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, i) => (
                <motion.div
                  key={i}
                  className="bg-white p-4 rounded-xl shadow flex flex-col items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {skill.icon}
                  <span className="text-sm mt-2">{skill.name}</span>
                  <div className="w-full bg-gray-200 h-2 rounded mt-2">
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
        <h2 className="text-gray-500 dark:text-gray-400 italic">Projets professionnels</h2>
        <div className="grid grid-cols-4 gap-4">
          {projectsPreview.map((p, i) => (
            <motion.div key={i} whileHover={{ scale: 1.03 }}>
              <ProjectCard {...p} />
            </motion.div>
          ))}
        </div>

      </main>

      <Footer />
    </div>
  );
}
