"use client";

import { Code2, Smartphone, Palette, Layers, Rocket, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: <Smartphone size={28} className="text-blue-400" />,
    title: "Développement Mobile",
    desc: "Apps performantes en React Native : offline, animations, navigation, stockage, UI moderne.",
  },
  {
    icon: <Code2 size={28} className="text-purple-400" />,
    title: "Développement Web",
    desc: "Sites web Next.js rapides, modernes, SEO-friendly et optimisés pour tous supports.",
  },
  {
    icon: <Palette size={28} className="text-green-400" />,
    title: "UI / UX Design",
    desc: "Conception d’interfaces propres, cohérentes et intuitives, basées sur une logique UX moderne.",
  },
  {
    icon: <Layers size={28} className="text-orange-400" />,
    title: "Architecture & Performance",
    desc: "Code scalable, architecture propre, optimisation des performances front & mobile.",
  },
  {
    icon: <Rocket size={28} className="text-pink-400" />,
    title: "Accompagnement Produit",
    desc: "Aide à la conception, priorisation, cahiers des charges, user stories & stratégie produit.",
  },
  {
    icon: <Wrench size={28} className="text-yellow-400" />,
    title: "Maintenance & Support",
    desc: "Correction, évolutions, mises à jour, optimisation continue et support technique.",
  },
];

export default function ServicesPage() {
  return (
    <section className="py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Mes Services</h1>
      
      <p className="text-neutral-300 text-center max-w-2xl mx-auto mb-16">
        Voici ce que je propose en tant que développeur React / React Native :
        du développement complet, de la conception à la mise en production,
        avec un accompagnement professionnel et un design moderne.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-neutral-950 border border-neutral-800 flex items-center justify-center">
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
