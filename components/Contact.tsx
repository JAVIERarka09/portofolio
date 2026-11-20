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
    <section id="contact" className="py-28 px-10 border-t border-slate-800/60 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-14 grid grid-cols-12 gap-12 items-center shadow-2xl">
          
          {/* Kolom Kiri: Info Kontak */}
          <div className="col-span-6">
            <h2 className="text-4xl font-bold tracking-tight mb-4 text-slate-100">
              Mari Berkolaborasi!
            </h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Tertarik bekerja sama dalam proyek web atau sekadar berdiskusi seputar Front-End Development? Kirim pesan langsung melalui formulir di samping.
            </p>
            <div className="space-y-3 text-slate-300">
              <p>📍 Malang, Jawa Timur — SMK Telkom Malang</p>
              <p>📧 javier.arka@email.com</p>
            </div>
          </div>

          {/* Kolom Kanan: Form Aktif */}
          <form onSubmit={handleSubmit} className="col-span-6 space-y-4">
            <input type="hidden" name="subject" value="Pesan Baru dari Website Portofolio Javier" />

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                required
                placeholder="Nama Anda"
                className="w-full px-5 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:border-blue-500"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Email Anda"
                className="w-full px-5 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:border-blue-500"
              />
            </div>

            <textarea
              name="message"
              rows={4}
              required
              placeholder="Tulis pesan Anda di sini..."
              className="w-full px-5 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:border-blue-500"
            ></textarea>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 text-white font-semibold py-4 rounded-xl transition shadow-lg shadow-blue-500/20"
            >
              {status === "submitting" ? "Sedang Mengirim..." : "Kirim Pesan"}
            </button>

            {status === "success" && (
              <p className="text-sm text-emerald-400 font-medium pt-2">
                ✅ Pesan berhasil terkirim ke email Javier! Terima kasih.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-400 font-medium pt-2">
                ❌ Gagal mengirim pesan. Silakan coba beberapa saat lagi.
              </p>
            )}
          </form>

        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-slate-900 flex items-center justify-between text-sm text-slate-500">
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