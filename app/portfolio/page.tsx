"use client";

import { motion } from "framer-motion";
import { Globe, Code, Layout } from "lucide-react";

const projects = [
  {
    title: "Portfolio Next.js",
    desc: "Mon site personnel moderne en Next.js, React et Tailwind. Architecture clean, animations et design dark premium.",
    icon: <Globe size={24} className="text-blue-400" />,
  },
  {
    title: "Dashboard Data (Prototype)",
    desc: "Structure front-end propre, composants réutilisables, logique d’état avec gestion des données mockées.",
    icon: <Layout size={24} className="text-purple-400" />,
  },
  {
    title: "Composants React (UI Kit)",
    desc: "Kit personnel avec boutons, inputs, cartes, modales et animations — base pour futurs projets web.",
    icon: <Code size={24} className="text-green-400" />,
  },
];

export default function PortfolioPage() {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">

      {/* Titre */}
      <h1 className="text-4xl font-bold mb-6 text-center">
        Mes projets web
      </h1>

      <p className="text-neutral-300 text-center max-w-xl mx-auto mb-14">
        Je débute la constitution de mon portfolio web. Voici quelques projets 
        représentatifs de ma maîtrise des technologies modernes.
      </p>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-8">

        {projects.map((p, index) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition"
          >
            {/* Icône + titre */}
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-lg bg-neutral-950 border border-neutral-800 flex items-center justify-center">
                {p.icon}
              </div>
              <h2 className="text-lg font-semibold">{p.title}</h2>
            </div>

            {/* Description */}
            <p className="text-neutral-400 text-sm leading-relaxed">
              {p.desc}
            </p>

            {/* Bouton */}
            <button className="mt-4 text-sm text-blue-400 hover:text-blue-300 transition">
              En savoir plus →
            </button>
          </motion.div>
        ))}

      </div>

    </section>
  );
}
