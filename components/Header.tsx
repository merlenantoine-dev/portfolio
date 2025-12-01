"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Accueil" },
    { href: "/apps", label: "Mes apps" },
    { href: "/services", label: "Mes services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="text-lg font-semibold tracking-tight">
        &lt;A<span className="text-blue-500">M</span>/&gt;
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <div key={l.href} className="relative">
                <Link
                  href={l.href}
                  className={`text-sm transition ${
                    active
                      ? "text-neutral-50"
                      : "text-neutral-400 hover:text-neutral-100"
                  }`}
                >
                  {l.label}
                </Link>
                {active && (
                  <motion.div
                    layoutId="active-underline"
                    className="absolute left-0 right-0 -bottom-1 h-[2px] bg-blue-500 rounded-full"
                  />
                )}
              </div>
            );
          })}
        </nav>

        {/* Mobile right side */}
        <button
          className="md:hidden text-neutral-300 hover:text-neutral-50 transition"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-neutral-800 bg-neutral-950"
          >
            <div className="flex flex-col px-4 py-4 space-y-3">
              {links.map((l) => {
                const active = pathname === l.href;
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`text-base ${
                      active
                        ? "text-blue-400"
                        : "text-neutral-300 hover:text-neutral-50"
                    }`}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
