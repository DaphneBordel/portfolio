"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="pt-24 px-6 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Contactez-moi</h2>
        <motion.form
          className="flex flex-col gap-4 bg-white p-6 rounded-xl shadow"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <input type="text" placeholder="Nom" className="border p-2 rounded"/>
          <input type="email" placeholder="Email" className="border p-2 rounded"/>
          <textarea placeholder="Message" className="border p-2 rounded"/>
          <button className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition">Envoyer</button>
        </motion.form>
      </div>
    </>
  );
}