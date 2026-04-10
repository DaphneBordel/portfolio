"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import toast from "react-hot-toast";
import confetti from "canvas-confetti";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    website: "" // honeypot
  });

  const [loading, setLoading] = useState(false);
  const email = process.env.NEXT_PUBLIC_EMAIL;

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const fireConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // 🤖 honeypot
    if (form.website) return;

    if (form.message.length < 10) {
      toast.error("Message trop court");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(form),
        headers: { "Content-Type": "application/json" }
      });

      if (!res.ok) throw new Error();

      toast.success("Message envoyé 🚀");
      fireConfetti();

      setForm({
        name: "",
        email: "",
        company: "",
        message: "",
        website: ""
      });

    } catch {
      toast.error("Erreur lors de l’envoi ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 overflow-x-hidden">
      <Navbar />

      {/* BACKGROUND */}
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

      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-16 pt-24">

        <motion.div
          className="w-full max-w-4xl backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 border border-white/20 dark:border-gray-700 rounded-3xl shadow-2xl p-6 sm:p-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >

          <div className="mb-8 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Discutons de votre projet 🚀
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
              Disponible pour missions freelance, CDI ou collaborations
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* 🤖 HONEYPOT invisible */}
            <input
              type="text"
              name="website"
              value={form.website}
              onChange={handleChange}
              className="hidden"
            />

            <div className="grid sm:grid-cols-2 gap-4">
              <input name="name" required value={form.name} onChange={handleChange} placeholder="Nom" className="input" />
              <input name="email" required value={form.email} onChange={handleChange} placeholder="Email" className="input" />
            </div>

            <input name="company" value={form.company} onChange={handleChange} placeholder="Entreprise" className="input" />

            <textarea name="message" required value={form.message} onChange={handleChange} rows={5} placeholder="Votre projet..." className="input" />

            <motion.button
              type="submit"
              disabled={loading}
              whileTap={{ scale: 0.97 }}
              className="w-full py-3 rounded-xl text-white font-medium bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            >
              {loading ? "Envoi..." : "Envoyer 🚀"}
            </motion.button>

          </form>

          <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
            Ou directement :
            <div className="font-medium text-gray-700 dark:text-gray-200">
              <a href={`mailto:${email}`}>{email}</a>
            </div>
          </div>

        </motion.div>
      </main>

      <style jsx>{`
        .input {
          width: 100%;
          padding: 12px;
          border-radius: 12px;
          border: 1px solid rgba(0,0,0,0.1);
          background: rgba(255,255,255,0.6);
        }
        .dark .input {
          background: rgba(31,41,55,0.6);
        }
      `}</style>
    </div>
  );
}