import React from 'react';
import { Calendar, Lock } from 'lucide-react';
import { PageRoute } from '../types';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
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
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800/80 pt-10 pb-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-slate-800/80">
          {/* Brand Column */}
          <div className="space-y-3">
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
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>© 2026 Age Calculator. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};
