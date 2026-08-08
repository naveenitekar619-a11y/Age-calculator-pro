import React from 'react';
import { AgeCalculatorForm } from '../components/AgeCalculatorForm';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { ExamplesSection } from '../components/ExamplesSection';
import { FAQSection } from '../components/FAQSection';
import { PageRoute } from '../types';
import { Calculator, Sparkles } from 'lucide-react';

interface CalculatorPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const CalculatorPage: React.FC<CalculatorPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-10">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-400 text-xs font-bold shadow-xs">
          <Calculator className="w-4 h-4 text-blue-400" />
          <span>Free Online Tool</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
          Online Age Calculator
        </h1>
        <p className="text-slate-300 text-base">
          Calculate exact age in years, months, days, total weeks, hours, and find your next birthday countdown instantly.
        </p>
      </div>

      <AgeCalculatorForm id="direct-calculator" />

      <AdPlaceholder slotId="2001" format="horizontal" />

      <ExamplesSection />

      <FAQSection limit={4} />
    </div>
  );
};
