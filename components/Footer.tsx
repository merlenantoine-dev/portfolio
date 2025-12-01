export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 mt-10 pt-4 pb-6 text-center text-sm text-neutral-500">
      © {new Date().getFullYear()} Antoine Merlen — Tous droits réservés.
    </footer>
  );
}
