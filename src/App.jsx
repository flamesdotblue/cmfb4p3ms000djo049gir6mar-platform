import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-orange-500 selection:text-black">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/60 border-b border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
          <a href="#home" className="font-black tracking-tight text-xl sm:text-2xl text-white">Emily<span className="text-orange-400">.UX</span></a>
          <nav className="hidden sm:flex items-center gap-4 text-sm">
            <a href="#work" className="px-3 py-1 rounded-lg border-2 border-neutral-700 bg-neutral-900 hover:border-orange-400 hover:text-orange-300 transition">Work</a>
            <a href="#about" className="px-3 py-1 rounded-lg border-2 border-neutral-700 bg-neutral-900 hover:border-orange-400 hover:text-orange-300 transition">About</a>
            <a href="#contact" className="px-3 py-1 rounded-lg border-2 border-neutral-700 bg-neutral-900 hover:border-orange-400 hover:text-orange-300 transition">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home"><Hero /></section>
        <section id="work"><Projects /></section>
        <section id="about"><About /></section>
        <section id="contact"><Contact /></section>
      </main>

      <footer className="py-8 border-t border-neutral-800 bg-neutral-900/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-400">
          <p>© {new Date().getFullYear()} Emily — Built with love and a hint of chaos.</p>
          <div className="flex items-center gap-3">
            <a href="#home" className="underline underline-offset-4 hover:text-orange-300">Back to top</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
