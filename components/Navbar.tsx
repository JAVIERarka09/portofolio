import Link from "next/link";

export default function Navbar() {
  const navLinks = [
    { name: "Tentang", href: "#about" },
    { name: "Keahlian", href: "#skills" },
    { name: "Proyek", href: "#projects" },
    { name: "Kontak", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#"
          className="font-extrabold text-2xl tracking-tight bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent"
        >
          Javier<span className="text-slate-100">.dev</span>
        </Link>

        {/* Menu Navigasi Desktop */}
        <nav className="flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-slate-300 hover:text-blue-400 transition-colors"
            >
              {link.name}
            </a>
          ))}

          <a
            href="/cv-javier.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold px-5 py-2.5 rounded-xl bg-blue-600/15 text-blue-400 border border-blue-500/30 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
          >
            Unduh CV
          </a>
        </nav>
      </div>
    </header>
  );
}