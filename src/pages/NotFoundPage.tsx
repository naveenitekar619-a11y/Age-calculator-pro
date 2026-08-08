import React from 'react';
import { PageRoute } from '../types';
import { AlertCircle, ArrowLeft, Calculator } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-xl mx-auto px-4 py-20 text-center space-y-6">
      <div className="w-16 h-16 bg-red-500/15 text-red-400 rounded-3xl border border-red-500/30 flex items-center justify-center mx-auto shadow-sm">
        <AlertCircle className="w-8 h-8" />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-red-400 bg-red-500/15 border border-red-500/30 px-3 py-1 rounded-full">
          Error 404
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
          Page Not Found
        </h1>
        <p className="text-slate-300 text-base">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>
      </div>

      <div className="pt-4 flex justify-center gap-3">
        <button
          onClick={() => onNavigate('/')}
          className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-md transition-all flex items-center gap-2 text-sm"
        >
          <Calculator className="w-4 h-4" />
          <span>Back to Age Calculator</span>
        </button>
      </div>
    </div>
  );
};
