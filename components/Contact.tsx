"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "b4c35e9b-f707-4eff-ad41-5672024e06ef");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-28 px-6 md:px-10 border-t border-slate-800/60 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 md:p-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center shadow-2xl">
          
          {/* Kolom Kiri: Info Kontak */}
          <div className="lg:col-span-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-slate-100">
              Mari Berkolaborasi!
            </h2>
            <p className="text-base md:text-lg text-slate-400 mb-8 leading-relaxed">
              Tertarik bekerja sama dalam proyek web atau sekadar berdiskusi seputar Front-End Development? Kirim pesan langsung melalui formulir di samping.
            </p>
            <div className="space-y-4 text-slate-300 text-sm md:text-base">
              <div className="flex items-center gap-3.5">
                <span className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <span>Malang, Jawa Timur — SMK Telkom Malang</span>
              </div>

              <div className="flex items-center gap-3.5">
                <span className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <span>javier.arka@email.com</span>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Form Aktif */}
          <form onSubmit={handleSubmit} className="lg:col-span-6 space-y-4 w-full">
            <input type="hidden" name="subject" value="Pesan Baru dari Website Portofolio Javier" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                required
                placeholder="Nama Anda"
                className="w-full px-5 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm md:text-base focus:outline-none focus:border-blue-500"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Email Anda"
                className="w-full px-5 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm md:text-base focus:outline-none focus:border-blue-500"
              />
            </div>

            <textarea
              name="message"
              rows={4}
              required
              placeholder="Tulis pesan Anda di sini..."
              className="w-full px-5 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm md:text-base focus:outline-none focus:border-blue-500"
            ></textarea>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 text-white font-semibold py-4 rounded-xl transition shadow-lg shadow-blue-500/20 text-sm md:text-base flex items-center justify-center gap-2"
            >
              <span>{status === "submitting" ? "Sedang Mengirim..." : "Kirim Pesan"}</span>
              {status !== "submitting" && (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              )}
            </button>

            {status === "success" && (
              <div className="flex items-center gap-2.5 text-sm text-emerald-400 font-medium pt-2">
                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Pesan berhasil terkirim ke email Javier! Terima kasih.</span>
              </div>
            )}

            {status === "error" && (
              <div className="flex items-center gap-2.5 text-sm text-red-400 font-medium pt-2">
                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Gagal mengirim pesan. Silakan coba beberapa saat lagi.</span>
              </div>
            )}
          </form>

        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500 text-center sm:text-left">
          <p>© 2026 Javier Arka Zora Pagsidan. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-slate-300 transition">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-slate-300 transition">LinkedIn</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-slate-300 transition">Instagram</a>
          </div>
        </footer>
      </div>
    </section>
  );
}