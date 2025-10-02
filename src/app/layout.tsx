import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const navigation: ReadonlyArray<{ href: string; label: string }> = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/tasks", label: "Tasks" },
  { href: "/about", label: "About" },
];

export const metadata: Metadata = {
  title: "Jon Shutt | Portfolio",
  description: "Personal portfolio showcasing selected web projects and experience.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const year = new Date().getFullYear();

  return (
    <html lang="en">
      <body
        className={`relative ${geistSans.variable} ${geistMono.variable} min-h-screen overflow-x-hidden bg-[#131722] text-slate-100 antialiased`}
      >
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="aurora-layer" />
          <div className="aurora-layer aurora-layer--alt" />
          <div className="tech-blueprint" />
        </div>

        <div className="relative flex min-h-screen flex-col">
          <header className="border-b border-white/10 bg-slate-950/60 backdrop-blur-xl">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6 sm:px-8">
              <Link href="/" className="text-lg font-semibold tracking-tight text-slate-100">
                Jon Shutt
              </Link>
              <nav className="flex items-center gap-6 text-sm font-medium text-slate-200/80">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-full px-3 py-1 transition hover:bg-white/10 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </header>

          <main className="flex-1">
            <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 sm:py-24">
              {children}
            </div>
          </main>

          <footer className="border-t border-white/10 bg-slate-950/60 backdrop-blur-xl">
            <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-6 text-sm text-slate-400 sm:px-8 sm:flex-row sm:items-center sm:justify-between">
              <p>© {year} Jon Shutt. All rights reserved.</p>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
                Building thoughtful web experiences.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
