import React from 'react';
import { PageRoute } from '../types';
import { FileCode, X, ExternalLink } from 'lucide-react';

interface SitemapModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (route: PageRoute) => void;
}

const SITEMAP_URLS: { loc: PageRoute; title: string; priority: string; changefreq: string }[] = [
  { loc: '/', title: 'Home Page & Age Calculator', priority: '1.0', changefreq: 'daily' },
  { loc: '/age-calculator', title: 'Age Calculator Utility', priority: '0.9', changefreq: 'weekly' },
  { loc: '/how-it-works', title: 'How Age Calculation Works', priority: '0.8', changefreq: 'monthly' },
  { loc: '/about', title: 'About Age Calculator', priority: '0.7', changefreq: 'monthly' },
  { loc: '/faq', title: 'Frequently Asked Questions', priority: '0.8', changefreq: 'weekly' },
  { loc: '/privacy-policy', title: 'Privacy Policy', priority: '0.5', changefreq: 'yearly' },
  { loc: '/terms-and-conditions', title: 'Terms & Conditions', priority: '0.5', changefreq: 'yearly' },
  { loc: '/disclaimer', title: 'Legal Disclaimer', priority: '0.5', changefreq: 'yearly' },
];

export const SitemapModal: React.FC<SitemapModalProps> = ({ isOpen, onClose, onNavigate }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl border border-slate-200 max-h-[85vh] flex flex-col">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
              <FileCode className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Website Sitemap (sitemap.xml)
              </h3>
              <p className="text-xs text-slate-500">
                Search Engine Indexing Hierarchy & Canonical Structure
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto my-4 space-y-3 pr-1">
          <div className="p-3 bg-slate-900 text-slate-200 rounded-xl font-mono text-xs overflow-x-auto">
            <p className="text-blue-400">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</p>
            <p className="text-purple-300">&lt;urlset xmlns=&quot;http://www.sitemaps.org/schemas/sitemap/0.9&quot;&gt;</p>
            {SITEMAP_URLS.map((u, i) => (
              <div key={i} className="pl-4 my-1 border-l border-slate-800">
                <p>&lt;url&gt;</p>
                <p className="pl-4 text-emerald-300">&lt;loc&gt;[YOUR DOMAIN]{u.loc}&lt;/loc&gt;</p>
                <p className="pl-4 text-amber-300">&lt;changefreq&gt;{u.changefreq}&lt;/changefreq&gt;</p>
                <p className="pl-4 text-pink-300">&lt;priority&gt;{u.priority}&lt;/priority&gt;</p>
                <p>&lt;/url&gt;</p>
              </div>
            ))}
            <p className="text-purple-300">&lt;/urlset&gt;</p>
          </div>

          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider pt-2">
            Interactive Navigation Index
          </h4>

          <div className="space-y-2">
            {SITEMAP_URLS.map((u) => (
              <div
                key={u.loc}
                className="p-3 rounded-xl border border-slate-200 hover:bg-slate-50 flex items-center justify-between text-sm transition-colors"
              >
                <div>
                  <span className="font-semibold text-slate-900 block">{u.title}</span>
                  <span className="text-xs font-mono text-slate-500">{u.loc}</span>
                </div>
                <button
                  onClick={() => {
                    onNavigate(u.loc);
                    onClose();
                  }}
                  className="px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold text-xs rounded-lg flex items-center gap-1"
                >
                  <span>Visit</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-slate-100 pt-3 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-lg"
          >
            Close Sitemap
          </button>
        </div>
      </div>
    </div>
  );
};
