"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      className="flex justify-between items-center p-6 bg-white shadow-md fixed w-full z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="font-bold text-xl">Mon Portfolio</div>
      <div className="flex gap-6">
        <Link href="/">Accueil</Link>
        <Link href="/projets">Projets personnels</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </motion.nav>
  );
}