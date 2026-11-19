export default function Projects() {
  const projectsList = [
    {
      title: "website javier digital book ",
      description: "Website peminjaman buku, pengelolaan koleksi karya siswa Rekayasa Perangkat Lunak SMK Telkom Malang.",
      tags: ["Next.js", "Tailwind CSS", ],
      link: "#",
    },
    {
      title: "website pengelolahan sampah",
      description: "Website untuk mengelola dan memantau proses pengolahan sampah di lingkungan sekolah.",
      tags: ["React.js", "Tailwind CSS", "JavaScript"],
      link: "#",
    },
    {
      title: "website sewa Playstation",
      description: "Website untuk menyewa console Playstation dengan sistem pemesanan online dan manajemen stok.",
      tags: ["Next.js", "Tailwind CSS", "Stripe API"],
      link: "#",
    },
    {
      title: "website PDAM",
      description: "Website untuk mengelola layanan PDAM di lingkungan sekolah.",
      tags: ["Next.js", "Tailwind CSS", "Postman API"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-28 px-10 bg-slate-900/40 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <h2 className="text-4xl font-bold tracking-tight mb-3">
            Proyek <span className="text-blue-400">Pilihan</span>
          </h2>
          <p className="text-lg text-slate-400">Kumpulan proyek Front-End yang telah saya kerjakan.</p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {projectsList.map((project, idx) => (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between hover:border-blue-500/50 hover:-translate-y-1 transition-all duration-300 shadow-xl"
            >
              <div>
                <div className="h-44 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-950 border border-slate-800 mb-6 flex items-center justify-center text-slate-600 font-mono text-sm">
                  Preview Proyek #{idx + 1}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-100">{project.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{project.description}</p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center font-semibold text-blue-400 hover:text-blue-300 transition"
                >
                  Lihat Demo & Kode &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}