export default function Skills() {
  const hardSkills = [
    { name: "HTML5 & Semantic Web", level: "Mahir", percent: "w-[90%]", color: "from-orange-500 to-red-500" },
    { name: "CSS3 & Tailwind CSS", level: "Mahir", percent: "w-[90%]", color: "from-teal-400 to-blue-500" },
    { name: "JavaScript (ES6+)", level: "Menengah", percent: "w-[40%]", color: "from-yellow-400 to-amber-500" },
    { name: "React.js", level: "Menengah", percent: "w-[80%]", color: "from-cyan-400 to-blue-500" },
    { name: "Next.js (App Router)", level: "Menengah", percent: "w-[90%]", color: "from-slate-200 to-slate-400" },
    { name: "Git & GitHub Workflow", level: "Menengah", percent: "w-[80%]", color: "from-orange-600 to-red-600" },
  ];

  const softSkills = [
    {
      title: "Problem Solving",
      desc: "Terbiasa menganalisis bug, mencari solusi logis, dan memecahkan masalah logika pemrograman.",
    },
    {
      title: "Kerjasama Tim (Teamwork)",
      desc: "Aktif berkolaborasi dalam proyek kelompok di sekolah (RPL) menggunakan sistem version control Git.",
    },
    {
      title: "Manajemen Waktu",
      desc: "Mampu membagi waktu antara tugas akademik sekolah dan target pengembangan proyek coding.",
    },
    {
      title: "Adaptasi Cepat",
      desc: "Antusias dan cepat belajar teknologi, framework, atau tools baru di dunia web development.",
    },
  ];

  return (
    <section id="skills" className="py-28 px-10 bg-slate-900/40 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-16">
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold mb-4 border border-blue-500/20">
            Kompetensi & Keahlian
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight mb-3 text-slate-100">
            Hard Skills & <span className="text-blue-400">Soft Skills</span>
          </h2>
          <p className="text-lg text-slate-400">
            Kombinasi kemampuan teknis pemrograman dan keterampilan pendukung yang saya kembangkan di SMK Telkom Malang.
          </p>
        </div>

        {/* HARD SKILLS */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-slate-200 mb-8 flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-blue-500"></span>
            Hard Skills (Keahlian Teknis)
          </h3>

          <div className="grid grid-cols-3 gap-6">
            {hardSkills.map((skill) => (
              <div
                key={skill.name}
                className="bg-slate-900 border border-slate-800 hover:border-blue-500/50 p-7 rounded-2xl transition-all duration-300 group shadow-xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-bold text-slate-100 group-hover:text-blue-400 transition">
                    {skill.name}
                  </span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-800 text-slate-300">
                    {skill.level}
                  </span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${skill.color} ${skill.percent} rounded-full`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SOFT SKILLS */}
        <div>
          <h3 className="text-2xl font-bold text-slate-200 mb-8 flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-indigo-500"></span>
            Soft Skills (Keterampilan Interpersonal)
          </h3>

          <div className="grid grid-cols-2 gap-6">
            {softSkills.map((soft, idx) => (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 hover:border-indigo-500/50 p-8 rounded-2xl transition-all duration-300 shadow-xl"
              >
                <h4 className="text-xl font-bold text-slate-100 mb-3 flex items-center gap-2">
                  {soft.title}
                </h4>
                <p className="text-slate-400 leading-relaxed">
                  {soft.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}