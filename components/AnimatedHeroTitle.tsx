"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedHeroTitle() {
  const words = ["Welcome.", "Bienvenue."];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 2200); // Change toutes les 2.2 secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.h1
      key={index}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="text-5xl md:text-6xl font-bold mb-6"
    >
      {/** Découpe bicolore */}
      {index === 0 ? (
        <>
            ✦ Wel<span class="text-blue-500">come ✦</span>
        </>
      ) : (
        <>
            ✦ Bien<span class="text-blue-500">venue ✦</span>
        </>
      )}
    </motion.h1>
  );
}
