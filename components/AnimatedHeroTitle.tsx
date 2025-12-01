"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedHeroTitle() {
  const words = ["Welcome.", "Bienvenue."];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.h1
        key={index}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4 }}
        className="text-5xl md:text-6xl font-bold mb-6"
      >
        {index === 0 ? (
          <>
            Wel<span className="text-blue-500">come.</span>
          </>
        ) : (
          <>
            Bien<span className="text-blue-500">venue.</span>
          </>
        )}
      </motion.h1>
    </AnimatePresence>
  );
}
