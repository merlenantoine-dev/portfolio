"use client";

import { useState } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;

  setLoading(true);
  setSuccess(false);
  setError(false);

  try {
    await emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      form,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );

    setSuccess(true);
    form.reset();
  } catch (err) {
    console.error(err);
    setError(true);
  } finally {
    setLoading(false);
  }
};


  return (
    <section className="py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Contact
      </h1>

      <p className="text-neutral-300 text-center max-w-xl mx-auto mb-12">
        Une question, un projet, une collaboration ?  
        N’hésite pas à me contacter — je réponds rapidement.
      </p>

      {/* Liens */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16">
        <a
          href="https://www.linkedin.com/in/antoine-merlen"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-5 py-4 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition text-neutral-200"
        >
          <Linkedin size={20} className="text-blue-400" />
          <div>
            <span className="font-medium">LinkedIn</span>
            <span className="block text-neutral-400 text-sm">
              Profil professionnel
            </span>
          </div>
        </a>

        <a
          href="https://github.com/merlenantoine-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-5 py-4 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition text-neutral-200"
        >
          <Github size={20} className="text-blue-400" />
          <div>
            <span className="font-medium">GitHub</span>
            <span className="block text-neutral-400 text-sm">
              Mes projets
            </span>
          </div>
        </a>

        <a
          href="/cv-antoine-merlen.pdf"
          download
          className="flex items-center gap-3 px-5 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 transition text-white"
        >
          <Send size={20} />
          <div>
            <span className="font-medium">Mon CV</span>
            <span className="block text-blue-100 text-sm">
              Télécharger
            </span>
          </div>
        </a>
      </div>

      {/* Formulaire */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8">
        <h2 className="text-2xl font-semibold mb-6">
          Envoyer un message
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Nom */}
          <div>
            <label className="block mb-1 text-sm text-neutral-400">
              Nom
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Ton nom"
              className="w-full bg-neutral-950 border border-neutral-800 text-neutral-200 p-3 rounded-lg focus:border-blue-600 outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm text-neutral-400">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Ton email"
              className="w-full bg-neutral-950 border border-neutral-800 text-neutral-200 p-3 rounded-lg focus:border-blue-600 outline-none"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1 text-sm text-neutral-400">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Ton message"
              className="w-full bg-neutral-950 border border-neutral-800 text-neutral-200 p-3 rounded-lg focus:border-blue-600 outline-none resize-none"
            />
          </div>

          {/* Bouton */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 mt-4 bg-blue-600 hover:bg-blue-500 transition text-white font-medium px-5 py-3 rounded-lg disabled:opacity-50"
          >
            <Send size={18} />
            {loading ? "Envoi..." : "Envoyer"}
          </button>

          {success && (
            <div className="mt-4 rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-3 text-green-400 text-sm">
              Merci pour votre message.
              Je vous répondrai rapidement.
            </div>
          )}

          {error && (
            <p className="text-red-500 text-sm mt-2">
              Une erreur est survenue. Réessaie plus tard.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
