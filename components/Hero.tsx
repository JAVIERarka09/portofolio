import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-28 pb-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Kolom Teks (Full di HP, 7 kolom di Desktop) */}
        <div className="lg:col-span-7 text-center lg:text-left">
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/10 text-blue-400 text-xs md:text-sm font-semibold mb-6 border border-blue-500/20">
            SMK Telkom Malang • Rekayasa Perangkat Lunak
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            Hi, Saya <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Javier Arka Zora Pagsidan
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
            Seorang <strong className="text-slate-100">Front-End Developer</strong> yang berfokus membangun antarmuka web modern yang cepat, interaktif, dan presisi.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5">
            <a
              href="#projects"
              className="w-full sm:w-auto text-center bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition shadow-lg shadow-blue-500/25 text-base"
            >
              Lihat Proyek Saya
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto text-center border border-slate-700 hover:border-slate-500 hover:bg-slate-900 text-slate-200 font-semibold px-8 py-4 rounded-xl transition text-base"
            >
              Hubungi Saya
            </a>
          </div>
        </div>

        {/* Kolom Foto Profil (Tengah di HP, Kanan di Desktop) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative group w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[440px]">
            <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition duration-500"></div>
            <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-slate-800 bg-slate-900 shadow-2xl">
              <Image
                src="/Desain tanpa judul.png"
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