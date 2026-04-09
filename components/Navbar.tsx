"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav
        className="flex justify-between items-center px-4 sm:px-6 py-4 bg-white dark:bg-gray-900 shadow-md fixed w-full z-50 border-b border-gray-200 dark:border-gray-800"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* LOGO */}
        <div className="font-bold text-lg sm:text-xl text-gray-900 dark:text-gray-100">
          Mon Portfolio
        </div>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex gap-6 text-gray-700 dark:text-gray-300">
          <Link href="/" className="hover:text-indigo-500 transition">
            Accueil
          </Link>
          <Link href="/projets" className="hover:text-indigo-500 transition">
            Projets
          </Link>
          <Link href="/contact" className="hover:text-indigo-500 transition">
            Contact
          </Link>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          {/* BURGER */}
          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="w-5 h-0.5 bg-gray-800 dark:bg-gray-200"></span>
            <span className="w-5 h-0.5 bg-gray-800 dark:bg-gray-200"></span>
            <span className="w-5 h-0.5 bg-gray-800 dark:bg-gray-200"></span>
          </button>
        </div>
      </motion.nav>

      {/* MENU MOBILE */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-screen bg-white dark:bg-gray-900 z-40 flex flex-col items-center justify-center gap-8 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-gray-900 dark:text-gray-100 hover:text-indigo-500"
            >
              Accueil
            </Link>
            <Link
              href="/projets"
              onClick={() => setIsOpen(false)}
              className="text-gray-900 dark:text-gray-100 hover:text-indigo-500"
            >
              Projets
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="text-gray-900 dark:text-gray-100 hover:text-indigo-500"
            >
              Contact
            </Link>

            {/* CLOSE BUTTON */}
            <button
              className="absolute top-6 right-6 text-2xl text-gray-800 dark:text-gray-200"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}