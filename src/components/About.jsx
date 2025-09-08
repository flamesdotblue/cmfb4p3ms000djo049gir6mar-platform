import React from 'react';
import { Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section className="relative py-20 bg-neutral-900/40 border-y border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        <div className="lg:col-span-2">
          <h2 className="text-3xl sm:text-4xl font-black flex items-center gap-3">
            About Emily <Sparkles className="w-6 h-6 text-orange-300" />
          </h2>
          <p className="mt-4 text-neutral-300 max-w-prose">
            I’m a product and UX designer who thrives on systems thinking and charming details. My happy place: turning messy constraints into crisp flows that respect users’ time. I balance research-driven clarity with playful aesthetics so products feel both trustworthy and alive.
          </p>
          <p className="mt-3 text-neutral-300 max-w-prose">
            Outside work, you’ll find me sketching storyboards, testing new typefaces, and hunting the best croissant in the neighborhood.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-extrabold uppercase text-sm tracking-wide text-neutral-400">Favorite tools</h3>
          <div className="flex flex-wrap gap-2">
            {['Figma','FigJam','Framer','Notion','Maze','Play','Storybook','Jira'].map((t) => (
              <span key={t} className="px-3 py-1 rounded-lg border-2 border-black bg-white text-black font-extrabold shadow-[6px_6px_0_0_#000]">
                {t}
              </span>
            ))}
          </div>

          <h3 className="mt-6 font-extrabold uppercase text-sm tracking-wide text-neutral-400">Superpowers</h3>
          <ul className="space-y-2 text-sm text-neutral-200">
            <li>• Rapid research that actually informs decisions</li>
            <li>• Interaction design with motion as a first-class citizen</li>
            <li>• Design systems that are human and scalable</li>
            <li>• Clear storytelling from problem to impact</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
