export default function About() {
  return (
    <section id="about" className="py-28 px-10 bg-slate-900/40 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <h2 className="text-4xl font-bold tracking-tight mb-3">
            Tentang <span className="text-blue-400">Saya</span>
          </h2>
          <p className="text-lg text-slate-400">Latar belakang pendidikan dan fokus pengembangan diri.</p>
        </div>

        <div className="grid grid-cols-12 gap-10 items-stretch">
          <div className="col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-10 shadow-xl flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4 text-slate-100">
              SMK Telkom Malang — Jurusan RPL
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed mb-5">
              Halo! Nama saya <strong className="text-white">Javier Arka Zora Pagsidan</strong>. Saya merupakan siswa aktif di SMK Telkom Malang pada kompetensi keahlian <span className="text-blue-400 font-semibold">Rekayasa Perangkat Lunak (RPL)</span>.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              Saya memiliki ketertarikan mendalam pada bidang <strong>Front-End Development</strong>, mengubah rancangan UI/UX menjadi aplikasi web yang hidup dengan performa tinggi dan kode yang terstruktur rapi.
            </p>
          </div>

          <div className="col-span-5 flex flex-col gap-6 justify-between">
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl flex-1">
              <h4 className="text-xl font-bold text-blue-400 mb-2">🎯 Fokus Utama</h4>
              <p className="text-slate-400 leading-relaxed">
                Mengembangkan antarmuka pengguna berbasis komponen modern dengan React, Next.js, dan Tailwind CSS.
              </p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl flex-1">
              <h4 className="text-xl font-bold text-indigo-400 mb-2">🚀 Tujuan Karir</h4>
              <p className="text-slate-400 leading-relaxed">
                Menjadi Front-End Engineer berstandar industri yang mampu membangun produk digital bermanfaat bagi banyak pengguna.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}