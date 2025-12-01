"use client";

import { motion } from "framer-motion";
import AnimatedHeroTitle from "@/components/AnimatedHeroTitle";
import { ChevronRight, Smartphone, Code2, Palette, Layers, Rocket, Wrench } from "lucide-react";
import Image from "next/image";

// ---------------------------
// Services (6 items)
// ---------------------------
const services = [
  {
    icon: <Smartphone size={26} className="text-blue-400" />,
    title: "Développement Mobile",
    desc: "Apps performantes en React Native : offline, navigation, animations, UI moderne.",
    color: "blue",
  },
  {
    icon: <Code2 size={26} className="text-purple-400" />,
    title: "Développement Web",
    desc: "Sites Next.js rapides, SEO-friendly, propres et scalables.",
    color: "purple",
  },
  {
    icon: <Palette size={26} className="text-green-400" />,
    title: "UI / UX Design",
    desc: "Interfaces soignées et ergonomiques basées sur le design moderne.",
    color: "green",
  },
  {
    icon: <Layers size={26} className="text-orange-400" />,
    title: "Architecture & Performance",
    desc: "Code maintenable, structure propre, optimisations et scalabilité.",
    color: "orange",
  },
  {
    icon: <Rocket size={26} className="text-pink-400" />,
    title: "Accompagnement Produit",
    desc: "User stories, conception, priorisation et stratégie produit.",
    color: "pink",
  },
  {
    icon: <Wrench size={26} className="text-yellow-400" />,
    title: "Maintenance & Support",
    desc: "Évolutions, corrections et support continu.",
    color: "yellow",
  },
];

// ---------------------------
// Homepage
// ---------------------------
export default function HomePage() {
  return (
    <section className="pt-24 pb-20">

      {/* ----------------------- */}
      {/* HERO */}
      {/* ----------------------- */}
      <div className="text-center max-w-3xl mx-auto px-4">
        <AnimatedHeroTitle />


        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-neutral-300 text-lg max-w-xl mx-auto mb-8"
        >
          Je crée des applications web et mobiles performantes, élégantes et pensées pour offrir une expérience utilisateur exceptionnelle.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3"
        >
          <a
            href="/apps"
            className="px-6 py-3 bg-blue-600 rounded-lg text-white hover:bg-blue-500 transition flex items-center gap-2"
          >
            Voir mes apps <ChevronRight size={18} />
          </a>
          <a
            href="/services"
            className="px-6 py-3 border border-neutral-700 rounded-lg text-neutral-200 hover:bg-neutral-900 transition"
          >
            Mes services
          </a>
        </motion.div>
      </div>

      {/* Logos stack */}
      <div className="mt-10 flex justify-center gap-2 text-xs text-neutral-400">
        {["React", "React Native", "Next.js", "TypeScript", "Tailwind"].map((t) => (
          <span key={t} className="px-3 py-1 rounded-lg bg-neutral-900 border border-neutral-800">
            {t}
          </span>
        ))}
      </div>

      {/* ----------------------- */}
      {/* SERVICES */}
      {/* ----------------------- */}
      <div className="mt-28 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Services</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-neutral-950 border border-neutral-800 rounded-lg">
                  {s.icon}
                </div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ----------------------- */}
      {/* ABOUT */}
      {/* ----------------------- */}
      <div className="mt-28 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">À propos</h2>
        <p className="text-neutral-300 text-base leading-relaxed">
          Je suis <span className="text-neutral-100 font-medium">Antoine Merlen</span>, développeur spécialisé en 
          <span className="text-neutral-100 font-medium"> React & React Native</span>.  
          Je conçois des expériences fluides, modernes, performantes et centrées sur les utilisateurs.
        </p>
      </div>

      {/* ----------------------- */}
      {/* TIMELINE */}
      {/* ----------------------- */}
      <div className="mt-20 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Mon parcours</h2>

        <div className="relative border-l border-neutral-800 ml-4 space-y-10">

          {[
            {
              title: "Développeur Back-end",
              desc: "Java, API, conception de solutions métier.",
            },
            {
              title: "AMOA / PO Technico-fonctionnel",
              desc: "Cadrage, user stories, pilotage, tests, livraison.",
            },
            {
              title: "Spécialisation React / RN",
              desc: "UI moderne, animations, performance, expérience utilisateur.",
            },
            {
              title: "Freelance",
              desc: "Création d’apps web & mobile pour particuliers et entreprises.",
            },
          ].map((step, i) => (
            <div key={i} className="pl-6 relative">
              <div className="absolute -left-2 top-1 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-neutral-400 text-sm mt-1">{step.desc}</p>
            </div>
          ))}

        </div>
      </div>

      {/* ----------------------- */}
      {/* METHODOLOGIE */}
      {/* ----------------------- */}
      <div className="mt-28 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Ma façon de travailler</h2>

        <div className="grid md:grid-cols-3 gap-8 text-left">

          {[
            {
              color: "blue",
              title: "Vision",
              desc: "Construire des expériences intuitives et modernes.",
            },
            {
              color: "violet",
              title: "Méthode",
              desc: "Code propre, composants réutilisables, animations pertinentes.",
            },
            {
              color: "orange",
              title: "Objectifs",
              desc: "Créer des apps robustes, élégantes et utiles.",
            },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition"
            >
              <h3 className="text-xl font-semibold mb-3">{c.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}

        </div>
      </div>

      {/* ----------------------- */}
      {/* APPS EN VEDETTE */}
      {/* ----------------------- */}
      <div className="mt-28 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Apps en vedette</h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            { title: "ToDo List Pro", img: "/apps/todolist.png" },
            { title: "Ma Cave à Vins", img: "/apps/cave.png" },
            { title: "Timer Broker", img: "/apps/timer.png" },
          ].map((app, i) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-neutral-900 border border-neutral-800 p-4 rounded-xl hover:border-neutral-700 transition"
            >
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-neutral-800">
                <Image src={app.img} fill alt={app.title} className="object-cover" />
              </div>
              <h3 className="text-lg font-semibold">{app.title}</h3>
              <p className="text-neutral-400 text-sm mt-1">Aperçu rapide du projet.</p>
            </motion.div>
          ))}

        </div>
      </div>

    </section>
  );
}
