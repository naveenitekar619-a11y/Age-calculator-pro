import React, { useState } from 'react';
import { Calendar, ShieldCheck, FileText, FileCode, Lock } from 'lucide-react';
import { PageRoute } from '../types';
import { SitemapModal } from './SitemapModal';
import { RobotsModal } from './RobotsModal';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [sitemapOpen, setSitemapOpen] = useState(false);
  const [robotsOpen, setRobotsOpen] = useState(false);

  const mainLinks: { label: string; route: PageRoute }[] = [
    { label: 'Home', route: '/' },
    { label: 'Age Calculator', route: '/age-calculator' },
    { label: 'How It Works', route: '/how-it-works' },
    { label: 'About', route: '/about' },
    { label: 'FAQ', route: '/faq' },
  ];

  const legalLinks: { label: string; route: PageRoute }[] = [
    { label: 'Privacy Policy', route: '/privacy-policy' },
    { label: 'Terms & Conditions', route: '/terms-and-conditions' },
    { label: 'Disclaimer', route: '/disclaimer' },
  ];

  return (
    <>
      <footer className="bg-slate-950 text-slate-300 border-t border-slate-800/80 pt-12 pb-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800/80">
            {/* Brand Column */}
            <div className="md:col-span-1 space-y-3">
              <button
                onClick={() => onNavigate('/')}
                className="flex items-center gap-2.5 text-left focus:outline-none group"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-md shadow-blue-600/30">
                  <Calendar className="w-5 h-5" />
                </div>
                <span className="text-xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                  Age Calculator
                </span>
              </button>
              <p className="text-sm text-slate-400 leading-relaxed">
                Calculate your age quickly and easily with our free, client-side, privacy-focused online tool.
              </p>
              <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium pt-1">
                <Lock className="w-3.5 h-3.5" />
                <span>100% Client-Side Local Calculation</span>
              </div>
            </div>

            {/* Main Navigation Column */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                Quick Navigation
              </h3>
              <ul className="space-y-2.5 text-sm">
                {mainLinks.map((item) => (
                  <li key={item.route}>
                    <button
                      onClick={() => onNavigate(item.route)}
                      className="text-slate-300 hover:text-white hover:underline transition-colors text-left"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links Column */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                Legal &amp; Compliance
              </h3>
              <ul className="space-y-2.5 text-sm">
                {legalLinks.map((item) => (
                  <li key={item.route}>
                    <button
                      onClick={() => onNavigate(item.route)}
                      className="text-slate-300 hover:text-white hover:underline transition-colors text-left"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* SEO & Infrastructure */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                SEO &amp; AdSense Ready
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">
                Built with mobile-first responsive architecture, semantic metadata, and Google AdSense placeholder containers.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <button
                  onClick={() => setSitemapOpen(true)}
                  className="px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 flex items-center gap-1.5 transition-colors"
                >
                  <FileCode className="w-3.5 h-3.5 text-blue-400" />
                  <span>Sitemap.xml</span>
                </button>
                <button
                  onClick={() => setRobotsOpen(true)}
                  className="px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 flex items-center gap-1.5 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Robots.txt</span>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Copyright & Placeholders info */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <div>© 2026 Age Calculator. All rights reserved.</div>
            <div className="text-[11px] text-slate-400 bg-slate-900/80 px-3 py-1 rounded-md border border-slate-800">
              Site Configuration Placeholders: [WEBSITE OWNER NAME] • [YOUR EMAIL ADDRESS] • [YOUR DOMAIN]
            </div>
          </div>
        </div>
      </footer>

      <SitemapModal
        isOpen={sitemapOpen}
        onClose={() => setSitemapOpen(false)}
        onNavigate={onNavigate}
      />

      <RobotsModal isOpen={robotsOpen} onClose={() => setRobotsOpen(false)} />
    </>
  );
};
