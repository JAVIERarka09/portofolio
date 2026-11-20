export default function Skills() {
  const hardSkills = ["Next.js", "React.js", "Tailwind CSS", "TypeScript", "JavaScript", "HTML5 & CSS3", "Git & GitHub"];
  const softSkills = ["Problem Solving", "Kerjasama Tim", "Manajemen Waktu", "Komunikasi Efektif", "Adaptabilitas"];

  return (
    <section id="skills" className="py-28 px-6 md:px-10 bg-slate-900/30 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 text-center md:text-left">
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/10 text-blue-400 text-xs md:text-sm font-semibold mb-4 border border-blue-500/20">
            Keahlian & Kompetensi
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-slate-100">
            Keahlian <span className="text-blue-400">Teknis & Non-Teknis</span>
          </h2>
          <p className="text-base md:text-lg text-slate-400">Teknologi dan kemampuan yang saya kuasai di bidang RPL.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Hard Skills */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-xl">
            <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-6 flex items-center gap-3">
              <span className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </span>
              Hard Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {hardSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 font-medium text-sm md:text-base"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-xl">
            <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-6 flex items-center gap-3">
              <span className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </span>
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 font-medium text-sm md:text-base"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}