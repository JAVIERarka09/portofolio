import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Javier Arka Zora Pagsidan | Front-End Developer",
  description: "Portofolio resmi Javier Arka Zora Pagsidan, Front-End Developer dan siswa SMK Telkom Malang.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      {/* Diubah ke latar putih/abu terang dengan teks gelap */}
      <body className={`${inter.className} bg-white text-slate-800 antialiased selection:bg-blue-600 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}