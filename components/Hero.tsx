import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 px-10">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-12 gap-12 items-center">
        
        {/* Kolom Kiri: Teks & CTA */}
        <div className="col-span-7 text-left">
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold mb-6 border border-blue-500/20">
            SMK Telkom Malang • Rekayasa Perangkat Lunak
          </span>

          <h1 className="text-6xl font-extrabold tracking-tight leading-tight mb-6">
            Hi, Saya <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Javier Arka Zora Pagsidan
            </span>
          </h1>

          <p className="text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
            Seorang <strong className="text-slate-100">Front-End Developer</strong> yang berfokus membangun antarmuka web modern yang cepat, interaktif, dan presisi.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition shadow-lg shadow-blue-500/25 text-base"
            >
              Lihat Proyek Saya
            </a>
            <a
              href="#contact"
              className="border border-slate-700 hover:border-slate-500 hover:bg-slate-900 text-slate-200 font-semibold px-8 py-4 rounded-xl transition text-base"
            >
              Hubungi Saya
            </a>
          </div>
        </div>

        {/* Kolom Kanan: Tempat Foto Profil */}
        <div className="col-span-5 flex justify-end">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition duration-500"></div>
            <div className="relative w-96 h-[440px] rounded-3xl overflow-hidden border-2 border-slate-800 bg-slate-900 shadow-2xl">
              <Image
                src="/arka gemini.png"
                alt="Javier Arka Zora Pagsidan"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}