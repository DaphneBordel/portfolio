import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 pt-12 pb-6 mt-15">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Mini CTA */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-2">Travaillons ensemble !</h3>
          <p className="mb-4">Contactez-moi pour vos projets web ou mobiles.</p>
          <a
            href="mailto:tonemail@example.com"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Envoyer un message
          </a>
        </motion.div>

        {/* Réseaux sociaux */}
        <motion.div
          className="flex justify-center gap-6 mb-6 text-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a href="https://github.com/tonpseudo" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-white transition" />
          </a>
          <a href="https://www.linkedin.com/in/tonpseudo" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-500 transition" />
          </a>
          <a href="mailto:tonemail@example.com">
            <FaEnvelope className="hover:text-red-500 transition" />
          </a>
        </motion.div>

        {/* Copyright */}
        <motion.p
          className="text-gray-400 text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          © {new Date().getFullYear()} Daphné Bordel – Tous droits réservés
        </motion.p>
      </div>
    </footer>
  );
}