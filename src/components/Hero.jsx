import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket, Star, BadgeCheck, Download, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-[88vh] sm:min-h-[92vh] isolate">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-900/20 via-neutral-950/70 to-neutral-950" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 sm:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500 text-black font-semibold border-2 border-black shadow-[6px_6px_0_0_#000]">
              <Rocket className="w-4 h-4" />
              Neo‑Brutal UX
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
              Emily — Product & UX Designer
            </h1>
            <p className="text-neutral-300 text-lg max-w-prose">
              I design playful, accessible, and business-smart experiences. Bold aesthetics, serious research, delightful micro-interactions.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a href="#work" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-orange-400 text-black font-bold border-2 border-black shadow-[6px_6px_0_0_#000] hover:translate-x-0.5 hover:-translate-y-0.5 transition-transform">
                See Case Studies
                <Star className="w-4 h-4" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-neutral-100 text-black font-bold border-2 border-black shadow-[6px_6px_0_0_#000] hover:translate-x-0.5 hover:-translate-y-0.5 transition-transform">
                Contact
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <ResumeMockup />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function ResumeMockup() {
  return (
    <div className="mx-auto lg:mx-0 max-w-[540px] w-full">
      <div className="relative rotate-[-2.5deg]">
        <div className="absolute -top-4 -left-4 rotate-3">
          <Sticker text="Hire Me" color="bg-orange-400" />
        </div>
        <div className="absolute -bottom-4 -right-4 -rotate-6">
          <Sticker text="UX ♥ Users" color="bg-pink-400" />
        </div>
        <div className="rounded-2xl border-4 border-black bg-white text-neutral-900 shadow-[12px_12px_0_0_#000] overflow-hidden">
          <div className="px-6 sm:px-8 py-6 border-b-4 border-black flex items-center justify-between bg-gradient-to-br from-orange-100 to-white">
            <div>
              <h3 className="text-2xl font-black tracking-tight">Emily Park</h3>
              <p className="text-neutral-600 font-semibold">Senior Product & UX Designer</p>
            </div>
            <div className="flex items-center gap-2 text-orange-600">
              <BadgeCheck className="w-6 h-6" />
              <span className="font-bold">Available</span>
            </div>
          </div>

          <div className="p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="sm:col-span-2 space-y-4">
              <SectionTitle>Experience</SectionTitle>
              <ResumeRow
                role="Lead UX Designer"
                company="NovaPay"
                period="2022 — 2025"
                points={["Led redesign that increased activation by 27%","Shipped design system v2 across 5 platforms","Mentored 4 designers, ran weekly crits"]}
              />
              <ResumeRow
                role="Product Designer"
                company="Orbit Health"
                period="2019 — 2022"
                points={["Reduced task time by 35% via IA overhaul","Built research repo and insights taxonomy"]}
              />
            </div>
            <div className="space-y-4">
              <SectionTitle>Skills</SectionTitle>
              <SkillTags tags={["UX Research","Interaction","IA","Design Systems","Prototyping","Accessibility","Figma","Framer"]} />
              <SectionTitle>Contact</SectionTitle>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Email:</span> emily.design@example.com</p>
                <p><span className="font-semibold">Location:</span> Remote • NYC</p>
              </div>
              <div className="pt-2 flex flex-wrap gap-3">
                <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black text-white border-2 border-black shadow-[6px_6px_0_0_#000] hover:-translate-y-0.5 transition-transform">
                  <Download className="w-4 h-4" /> Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <h4 className="font-extrabold text-base uppercase tracking-wide text-neutral-800">{children}</h4>
  );
}

function ResumeRow({ role, company, period, points }) {
  return (
    <div className="p-3 rounded-xl border-2 border-neutral-800 bg-neutral-50">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-black">{role}</p>
          <p className="text-sm text-neutral-600">{company}</p>
        </div>
        <span className="text-xs font-bold px-2 py-1 rounded-md border border-neutral-800 bg-white">{period}</span>
      </div>
      <ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-neutral-700">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
}

function Sticker({ text, color = 'bg-orange-400' }) {
  return (
    <div className={`px-3 py-1.5 rounded-full ${color} text-black border-2 border-black font-extrabold shadow-[6px_6px_0_0_#000]`}>
      {text}
    </div>
  );
}
