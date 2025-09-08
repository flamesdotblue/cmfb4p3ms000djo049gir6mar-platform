import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';

const projects = [
  {
    title: 'NovaPay Onboarding',
    tag: 'Fintech • UX',
    color: 'bg-orange-300',
    desc: 'Activation up 27% with a trust-first flow, progressive data capture, and playful cues.'
  },
  {
    title: 'Orbit Health IA Redesign',
    tag: 'Health • IA',
    color: 'bg-red-300',
    desc: 'Reduced cognitive load by 35% via task-centered navigation and semantic labels.'
  },
  {
    title: 'MetroTickets Kiosk',
    tag: 'Public • Accessibility',
    color: 'bg-amber-300',
    desc: 'Big targets, screen-reader flows, and bilingual UX for busy stations.'
  },
  {
    title: 'Loop Design System',
    tag: 'DesignOps',
    color: 'bg-lime-300',
    desc: 'Tokenized primitives and usage recipes. 5 platforms, one flexible language.'
  },
  {
    title: 'Groove Music Mobile',
    tag: 'Consumer • Motion',
    color: 'bg-teal-300',
    desc: 'Haptic micro-interactions and state choreography for joyful browsing.'
  },
  {
    title: 'Civic Forms Simplified',
    tag: 'Gov • Forms',
    color: 'bg-violet-300',
    desc: 'Plain language, smart defaults, and inline validation that just helps.'
  }
];

export default function Projects() {
  return (
    <section className="relative pt-20 pb-16 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black">Selected Work</h2>
            <p className="text-neutral-400">A sprinkle of case studies. Ask for full decks.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-orange-300 font-bold">
            <Star className="w-4 h-4" />
            <span>Impact focused</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#contact"
              initial={{ y: 12, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className={`group relative rounded-2xl border-4 border-black ${p.color} text-black shadow-[10px_10px_0_0_#000] p-5 hover:-translate-y-1 transition-transform`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase tracking-wide bg-black text-white px-2 py-1 rounded-md">
                  {p.tag}
                </span>
                <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100" />
              </div>
              <h3 className="mt-3 text-xl font-black">{p.title}</h3>
              <p className="mt-2 text-sm font-medium opacity-80">{p.desc}</p>
              <div className="mt-4 inline-flex items-center gap-2 text-xs font-extrabold underline underline-offset-4">
                View case study
                <span aria-hidden>→</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
