import React from 'react';
import { PageRoute } from '../types';
import { Info, ShieldCheck, Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import { AdPlaceholder } from '../components/AdPlaceholder';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-10">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-400 text-xs font-bold">
          <Info className="w-4 h-4 text-blue-400" />
          <span>About Our Service</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
          About Age Calculator
        </h1>
        <p className="text-slate-300 text-base">
          A dedicated, free online utility built for fast, accurate, and private age calculations.
        </p>
      </div>

      <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-100">Our Purpose</h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Welcome to <strong>Age Calculator</strong>. This website was created to provide a simple, reliable, fast, and privacy-respecting online utility for computing exact age in years, months, and days.
          </p>
          <p className="text-slate-300 text-base leading-relaxed">
            Many online age tools are cluttered with pop-up advertisements, require user registration, or upload personal birth dates to external databases. We believe an age calculator should be clean, free, immediate, and 100% private.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-blue-500/10 border border-blue-500/30 space-y-2">
          <div className="flex items-center gap-2 text-blue-300 font-bold">
            <ShieldCheck className="w-5 h-5 text-blue-400" />
            <h3>Website Ownership &amp; Management</h3>
          </div>
          <p className="text-xs text-blue-200 leading-relaxed">
            This website is owned and operated by <strong>Age Calculator Team</strong>. We are committed to maintaining an open, accessible utility for visitors worldwide.
          </p>
        </div>

        <div className="space-y-4 pt-2">
          <h2 className="text-2xl font-bold text-slate-100">Key Principles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl border border-slate-800 bg-slate-800/60 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-slate-100 text-sm">Privacy First</h3>
                <p className="text-xs text-slate-300 mt-1">
                  All age calculations take place client-side within your browser JavaScript engine. We never transmit or store your date of birth.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl border border-slate-800 bg-slate-800/60 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-slate-100 text-sm">Zero Accounts</h3>
                <p className="text-xs text-slate-300 mt-1">
                  No signups, passwords, or personal profiles are required. Open the website and calculate immediately.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl border border-slate-800 bg-slate-800/60 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-slate-100 text-sm">Mathematical Accuracy</h3>
                <p className="text-xs text-slate-300 mt-1">
                  Handles exact Gregorian month length variations, leap years, February 29 anniversaries, and future countdowns.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl border border-slate-800 bg-slate-800/60 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-slate-100 text-sm">Mobile Responsive</h3>
                <p className="text-xs text-slate-300 mt-1">
                  Optimized for fast loading on iPhones, Android smartphones, tablets, laptops, and desktop computers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AdPlaceholder slotId="4001" format="responsive" />
    </div>
  );
};
