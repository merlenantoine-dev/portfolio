"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const apps = [
  {
    title: "ToDo List Pro",
    desc: "Gestion de tâches avec stockage local et UI fluide.",
    img: "/apps/todolist.png",
  },
  {
    title: "Ma Cave à Vins",
    desc: "Organise et consulte ta cave à vins facilement.",
    img: "/apps/cave.png",
  },
  {
    title: "Timer Broker",
    desc: "Visualisation temporelle avec frise chronologique.",
    img: "/apps/timer.png",
  },
];

export default function AppsPage() {
  return (
    <section className="py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Mes applications mobiles
      </h1>

      <div className="grid gap-8 md:grid-cols-3">
        {apps.map((app, index) => (
          <motion.div
            key={app.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 flex flex-col"
          >
            <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-neutral-800">
              <Image
                src={app.img}
                alt={app.title}
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-lg font-semibold mb-2">{app.title}</h2>
            <p className="text-sm text-neutral-300 mb-4 flex-1">{app.desc}</p>
            <button className="mt-auto text-sm text-blue-400 hover:text-blue-300">
              Voir plus →
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
