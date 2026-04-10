"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const email = process.env.NEXT_PUBLIC_EMAIL;
  console.log("email", email)

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  return (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden bg-gray-100 dark:bg-gray-900">
      <Navbar />

      {/* 🌈 BACKGROUND DESIGN */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute w-[500px] h-[500px] bg-indigo-500 opacity-30 blur-3xl rounded-full top-[-100px] left-[-100px]"
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] bg-pink-500 opacity-30 blur-3xl rounded-full bottom-[-100px] right-[-100px]"
          animate={{ rotate: -360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <main className="flex-1 px-4 sm:px-6 py-16 pt-24 flex items-center justify-center">

        <motion.div
          className="w-full max-w-4xl backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 border border-white/20 dark:border-gray-700 rounded-3xl shadow-2xl p-6 sm:p-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >

          {/* HEADER */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Discutons de votre projet 🚀
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
              Disponible pour missions freelance, CDI ou collaborations
            </p>
          </div>

          {/* SUCCESS */}
          {success && (
            <motion.div
              className="mb-6 p-4 rounded-xl bg-green-100 text-green-700 text-sm text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              ✅ Message envoyé avec succès !
            </motion.div>
          )}

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-5">

            <div className="grid sm:grid-cols-2 gap-4">

              <input
                type="text"
                name="name"
                placeholder="Nom"
                required
                onChange={handleChange}
                className="input"
              />

              <input
                type="email"
                name="email"
                placeholder="Email professionnel"
                required
                onChange={handleChange}
                className="input"
              />

            </div>

            <input
              type="text"
              name="company"
              placeholder="Entreprise (optionnel)"
              onChange={handleChange}
              className="input"
            />

            <textarea
              name="message"
              placeholder="Décrivez votre projet..."
              rows={5}
              required
              onChange={handleChange}
              className="input"
            />

            <motion.button
              type="submit"
              disabled={loading}
              whileTap={{ scale: 0.97 }}
              className="w-full py-3 rounded-xl font-medium text-white 
              bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
              hover:opacity-90 transition disabled:opacity-50"
            >
              {loading ? "Envoi..." : "Envoyer 🚀"}
            </motion.button>
          </form>

          {/* INFOS BONUS */}
          <div className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
            Ou contactez-moi directement :
            <div className="mt-2 font-medium text-gray-700 dark:text-gray-200">
              <a href={`mailto:${process.env.ENV_MAIL}`} className="hover:underline">
                {email} 
              </a>
            </div>
          </div>

        </motion.div>
      </main>

      {/* STYLE INPUT */}
      <style jsx>{`
        .input {
          width: 100%;
          padding: 12px;
          border-radius: 12px;
          border: 1px solid rgba(0,0,0,0.1);
          background: rgba(255,255,255,0.6);
          backdrop-filter: blur(10px);
          outline: none;
          transition: 0.2s;
        }

        .input:focus {
          border-color: #6366f1;
          box-shadow: 0 0 0 2px rgba(99,102,241,0.2);
        }

        .dark .input {
          background: rgba(31,41,55,0.6);
          border: 1px solid rgba(255,255,255,0.1);
        }
      `}</style>
    </div>
  );
}