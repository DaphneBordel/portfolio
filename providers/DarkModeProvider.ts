'use client';
import { createContext, useState } from "react";

export const DarkModeContext = createContext(null);

export default function DarkModeProvider() {
    const [darkMode, setDarkMode] = useState<boolean>(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }
}