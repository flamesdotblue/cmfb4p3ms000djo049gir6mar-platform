import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="relative py-20 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border-4 border-black bg-gradient-to-br from-orange-200 to-rose-200 text-black shadow-[14px_14px_0_0_#000] p-8 sm:p-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black">Let’s build something joyful</h2>
              <p className="mt-2 text-neutral-800 max-w-prose font-medium">
                I’m currently open for senior product design roles and select freelance projects. Drop a line and I’ll reply within 24 hours.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a href="mailto:emily.design@example.com" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-black text-white font-extrabold border-2 border-black shadow-[8px_8px_0_0_#000] hover:-translate-y-0.5 transition-transform min-w-[200px]">
                <Mail className="w-4 h-4" /> Email Emily
              </a>
              <div className="flex items-center gap-2">
                <Social href="https://github.com" label="GitHub">
                  <Github className="w-5 h-5" />
                </Social>
                <Social href="https://linkedin.com" label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </Social>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Social({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white border-2 border-black shadow-[6px_6px_0_0_#000] hover:-translate-y-0.5 transition-transform"
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}
