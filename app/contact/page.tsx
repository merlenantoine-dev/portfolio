"use client";

import { Mail, Linkedin, Github, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact</h1>

      <p className="text-neutral-300 text-center max-w-xl mx-auto mb-12">
        Une question, un projet, une collaboration ?  
        N’hésite pas à me contacter — je réponds rapidement.
      </p>

      {/* Section liens directs + CV */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16">

        {/* Email */}
        <a
          href="mailto:antoine.merlen@gmail.com"
          className="flex items-center gap-3 px-5 py-4 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition text-neutral-200"
        >
          <Mail size={20} className="text-blue-400" />
          <div className="flex flex-col">
            <span className="font-medium">Email</span>
            <span className="text-neutral-400 text-sm">Contact direct</span>
          </div>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com"
          target="_blank"
          className="flex items-center gap-3 px-5 py-4 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition text-neutral-200"
        >
          <Linkedin size={20} className="text-blue-400" />
          <div className="flex flex-col">
            <span className="font-medium">LinkedIn</span>
            <span className="text-neutral-400 text-sm">Profil professionnel</span>
          </div>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com"
          target="_blank"
          className="flex items-center gap-3 px-5 py-4 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition text-neutral-200"
        >
          <Github size={20} className="text-blue-400" />
          <div className="flex flex-col">
            <span className="font-medium">GitHub</span>
            <span className="text-neutral-400 text-sm">Mes projets</span>
          </div>
        </a>

        {/* CV */}
        <a
          href="/cv-antoine-merlen.pdf"  // 👉 Mets ici le vrai chemin de ton CV
          download
          className="flex items-center gap-3 px-5 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 transition text-white"
        >
          <Send size={20} className="text-white opacity-90" />
          <div className="flex flex-col">
            <span className="font-medium">Mon CV</span>
            <span className="text-blue-100 text-sm">Télécharger</span>
          </div>
        </a>

      </div>


      {/* Formulaire */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8">
        <h2 className="text-2xl font-semibold mb-6">Envoyer un message</h2>

        <form className="space-y-4">

          {/* Nom */}
          <div>
            <label className="block mb-1 text-sm text-neutral-400">Nom</label>
            <input
              type="text"
              placeholder="Ton nom"
              className="w-full bg-neutral-950 border border-neutral-800 text-neutral-200 p-3 rounded-lg focus:border-blue-600 outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm text-neutral-400">Email</label>
            <input
              type="email"
              placeholder="Ton email"
              className="w-full bg-neutral-950 border border-neutral-800 text-neutral-200 p-3 rounded-lg focus:border-blue-600 outline-none"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1 text-sm text-neutral-400">Message</label>
            <textarea
              placeholder="Ton message"
              rows={5}
              className="w-full bg-neutral-950 border border-neutral-800 text-neutral-200 p-3 rounded-lg focus:border-blue-600 outline-none resize-none"
            ></textarea>
          </div>

          {/* Bouton */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 mt-4 bg-blue-600 hover:bg-blue-500 transition text-white font-medium px-5 py-3 rounded-lg"
          >
            <Send size={18} />
            Envoyer
          </button>

        </form>
      </div>

    </section>
  );
}
