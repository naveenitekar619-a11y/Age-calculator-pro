import React from 'react';
import { FileText, X } from 'lucide-react';

interface RobotsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RobotsModal: React.FC<RobotsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">robots.txt Directives</h3>
              <p className="text-xs text-slate-500">Crawling & Indexing Permission Rules</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="my-4">
          <pre className="p-4 bg-slate-900 text-emerald-400 rounded-xl font-mono text-xs leading-relaxed overflow-x-auto">
{`# Robots.txt for Age Calculator
User-agent: *
Allow: /
Allow: /age-calculator
Allow: /how-it-works
Allow: /about
Allow: /faq
Allow: /privacy-policy
Allow: /terms-and-conditions
Allow: /disclaimer

# Sitemap directive
Sitemap: https://[YOUR DOMAIN]/sitemap.xml`}
          </pre>
        </div>

        <div className="border-t border-slate-100 pt-3 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
