import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import CustomCursor from "../components/CustomCursor";
import ScrollProgress from "../components/ScrollProgress";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Risto Kurniawan | Portfolio",
  description: "Fullstack Developer Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jakarta.variable} ${outfit.variable} font-sans bg-[var(--background)] text-[var(--foreground)] antialiased`}>
        {/* Sembunyikan cursor asli di layar desktop karena digantikan CustomCursor */}
        <style>{`
         @media (min-width: 768px) { body * { cursor: none !important; } }
       `}</style>

        <CustomCursor />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}