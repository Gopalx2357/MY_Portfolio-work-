import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gopal Yadav | Full Stack & Software Developer",
  description:
    "Portfolio of Gopal Yadav — B.Tech student at ABES Engineering College passionate about Full Stack Web Development, C++, DSA, and AI Applications.",
  keywords: [
    "Gopal Yadav",
    "Full Stack Developer",
    "Software Developer",
    "ABES Engineering College",
    "React",
    "Next.js",
    "Tailwind CSS",
    "C++",
    "DSA",
  ],
  authors: [{ name: "Gopal Yadav" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans bg-[#07070c] text-gray-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200 min-h-screen relative overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
