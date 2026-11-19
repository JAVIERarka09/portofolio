export default function Education() {
  const educationList = [
    {
      level: "Sekolah Menengah Kejuruan (SMK)",
      schoolName: "SMK Telkom Malang",
      major: "Rekayasa Perangkat Lunak (RPL)",
      period: "2024 — Sekarang",
      description: "Fokus mendalami pengembangan Front-End Web, pemrograman berorientasi objek, struktur data, serta kolaborasi proyek perangkat lunak.",
      status: "Aktif",
    },
    {
      level: "Sekolah Menengah Pertama (SMP)",
      schoolName: "MTS MODERN AL-RIFA'IE 2 GONDANGLEGI",
      major: "Reguler",
      period: "2021 — 2024",
      description: "Menyelesaikan pendidikan menengah pertama dengan aktif mengikuti berbagai kegiatan sekolah.",
      status: "Lulus",
    },
    {
      level: "Sekolah Dasar (SD)",
      schoolName: "SDN BUMIAYU 4 MALANG", 
      major: "Reguler",
      period: "2015 — 2021",
      description: "Menyelesaikan pendidikan dasar dan membangun fondasi kedisiplinan serta semangat belajar.",
      status: "Lulus",
    },
  ];

  return (
    <section id="education" className="py-28 px-10 bg-slate-950 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-16">
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold mb-4 border border-blue-500/20">
            Latar Belakang Akademik
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight mb-3 text-slate-100">
            Riwayat <span className="text-blue-400">Pendidikan</span>
          </h2>
          <p className="text-lg text-slate-400">
            Jejak langkah perjalanan sekolah saya dari tingkat dasar hingga kejuruan saat ini.
          </p>
        </div>

        {/* Timeline Grid / List */}
        <div className="space-y-6">
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800 hover:border-blue-500/50 p-8 rounded-3xl transition-all duration-300 shadow-xl grid grid-cols-12 gap-6 items-center"
            >
              {/* Kolom Kiri: Jenjang & Status */}
              <div className="col-span-4">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3 inline-block">
                  {edu.status}
                </span>
                <h3 className="text-2xl font-bold text-slate-100 mb-1">
                  {edu.schoolName}
                </h3>
                <p className="text-sm font-medium text-slate-400">{edu.level}</p>
              </div>

              {/* Kolom Tengah: Jurusan & Periode */}
              <div className="col-span-4 border-l border-slate-800 pl-6">
                <p className="text-blue-400 font-semibold mb-1">{edu.major}</p>
                <p className="text-sm text-slate-400 font-mono">{edu.period}</p>
              </div>

              {/* Kolom Kanan: Deskripsi */}
              <div className="col-span-4 border-l border-slate-800 pl-6">
                <p className="text-sm text-slate-400 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}