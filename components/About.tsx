export default function About() {
  return (
    <section id="about" className="py-28 px-6 md:px-10 bg-slate-900/20">
      <div className="max-w-4xl mx-auto text-center md:text-left">
        <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/10 text-blue-400 text-xs md:text-sm font-semibold mb-4 border border-blue-500/20">
          Tentang Saya
        </span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-slate-100">
          Mengenal Lebih Dekat <span className="text-blue-400">Javier Arka</span>
        </h2>
        <div className="space-y-4 text-slate-400 text-base md:text-lg leading-relaxed">
          <p>
            Halo! Saya adalah seorang pelajar kelas 12 jurusan <strong className="text-slate-200">Rekayasa Perangkat Lunak (RPL) di SMK Telkom Malang</strong>. Saya memiliki ketertarikan mendalam pada dunia pengembangan antarmuka web modern sebagai seorang <strong className="text-slate-200">Front-End Developer</strong>.
          </p>
          <p>
            Saya berfokus pada penulisan kode yang bersih, efisien, serta membangun pengalaman pengguna (UX) yang interaktif menggunakan teknologi terkini seperti Next.js dan Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
}