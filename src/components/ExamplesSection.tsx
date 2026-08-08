import React from 'react';
import { AgeExample } from '../types';
import { Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';

const EXAMPLES: AgeExample[] = [
  {
    title: 'Standard Age Calculation',
    dob: '1994-03-15',
    asOf: '2026-08-08',
    dobFormatted: '15 March 1994',
    asOfFormatted: '8 August 2026',
    resultString: '32 Years, 4 Months, 24 Days',
    description:
      'Calculates exact elapsed years from March 1994 to March 2026 (32 years), full months from March to July (4 months), and remaining days in August (24 days).',
  },
  {
    title: 'Same Birthday Celebration',
    dob: '2000-05-20',
    asOf: '2026-05-20',
    dobFormatted: '20 May 2000',
    asOfFormatted: '20 May 2026',
    resultString: '26 Years, 0 Months, 0 Days',
    description:
      'When the calculation date matches your birth month and day exactly, the months and days remain zero, indicating an exact year milestone and a birthday today! 🎉',
  },
  {
    title: 'Leap Year / February 29 Birthday',
    dob: '2000-02-29',
    asOf: '2026-08-08',
    dobFormatted: '29 February 2000',
    asOfFormatted: '8 August 2026',
    resultString: '26 Years, 5 Months, 10 Days',
    description:
      'Born on February 29 in a leap year. In non-leap years (like 2026), the anniversary date defaults to February 28, preserving accurate year advancement.',
  },
];

export const ExamplesSection: React.FC = () => {
  return (
    <section className="my-12 bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8">
      <div className="max-w-3xl mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-3">
          <Calendar className="w-3.5 h-3.5" />
          <span>Educational Guidance</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
          Age Calculation Examples
        </h2>
        <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
          Explore real-world calculation scenarios illustrating how calendar-based month offsets, birthday anniversaries, and leap year days operate in practice.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {EXAMPLES.map((ex, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg">
                  Example #{idx + 1}
                </span>
                <span className="text-xs text-slate-400 font-mono">Sample Data</span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-3">{ex.title}</h3>

              <div className="space-y-2 text-xs bg-slate-50 p-3 rounded-xl border border-slate-100 mb-4">
                <div className="flex justify-between items-center text-slate-600">
                  <span>Date of Birth:</span>
                  <strong className="text-slate-900">{ex.dobFormatted}</strong>
                </div>
                <div className="flex justify-between items-center text-slate-600">
                  <span>Calculation Date:</span>
                  <strong className="text-slate-900">{ex.asOfFormatted}</strong>
                </div>
              </div>

              <div className="p-3 bg-emerald-50 border border-emerald-200/80 rounded-xl mb-3">
                <span className="block text-[11px] font-bold uppercase text-emerald-800 mb-0.5">
                  Result
                </span>
                <span className="text-base font-extrabold text-emerald-950">
                  {ex.resultString}
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">{ex.description}</p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-400 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Verified Calendar Calculation</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
