export default function Education() {
  const educationList = [
    {
      level: "Sekolah Menengah Kejuruan (SMK)",
      school: "SMK Telkom Malang",
      major: "Rekayasa Perangkat Lunak (RPL)",
      year: "2023 — Sekarang (Kelas 12)",
      desc: "Mempelajari pengembangan perangkat lunak, pemrograman web, UI/UX design, dan database.",
    },
    {
      level: "Sekolah Menengah Pertama (SMP)",
      school: "SMP Negeri",
      major: "Reguler",
      year: "2020 — 2023",
      desc: "Aktif dalam pembelajaran dasar ilmu komputer dan kegiatan sekolah.",
    },
    {
      level: "Sekolah Dasar (SD)",
      school: "SD Negeri",
      major: "Reguler",
      year: "2014 — 2020",
      desc: "Menyelesaikan pendidikan dasar dengan baik.",
    },
  ];

  return (
    <section id="education" className="py-28 px-6 md:px-10 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 text-center md:text-left">
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/10 text-blue-400 text-xs md:text-sm font-semibold mb-4 border border-blue-500/20">
            Latar Belakang
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-slate-100">
            Riwayat <span className="text-blue-400">Pendidikan</span>
          </h2>
          <p className="text-base md:text-lg text-slate-400">Perjalanan akademik saya dari Sekolah Dasar hingga SMK Telkom Malang.</p>
        </div>

        <div className="space-y-6">
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 hover:border-blue-500/40 transition shadow-lg"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-100">{edu.level}</h3>
                <span className="text-xs md:text-sm font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 w-fit">
                  {edu.year}
                </span>
              </div>
              <h4 className="text-base md:text-lg font-medium text-blue-400 mb-2">{edu.school} • {edu.major}</h4>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">{edu.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}