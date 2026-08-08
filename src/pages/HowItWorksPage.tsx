import React from 'react';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { PageRoute } from '../types';
import { Clock, Calendar, CheckCircle2, ArrowRight, HelpCircle } from 'lucide-react';

interface HowItWorksPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-10">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
          <Clock className="w-4 h-4 text-blue-600" />
          <span>Technical Logic &amp; Math</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          How the Age Calculator Works
        </h1>
        <p className="text-slate-600 text-base">
          Detailed explanation of calendar calculations, month boundary logic, leap year math, and next birthday algorithms.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-8">
        {/* Section 1: Year Calculation */}
        <div className="space-y-3">
          <div className="flex items-center gap-2.5 text-blue-600 font-bold text-lg">
            <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center text-xs">
              1
            </span>
            <h2>Year Calculation Method</h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-9">
            Year calculation begins by comparing the birth year with the target calculation year. The calculator determines the number of full anniversary years completed between the two dates. If the target month and day have not yet reached the birth month and day in the current year, one year is subtracted to reflect full years lived.
          </p>
        </div>

        {/* Section 2: Month Calculation */}
        <div className="space-y-3">
          <div className="flex items-center gap-2.5 text-blue-600 font-bold text-lg">
            <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center text-xs">
              2
            </span>
            <h2>Month Calculation Method</h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-9">
            After computing full completed years, remaining full calendar months are counted step-by-step. Because Gregorian months vary between 28, 29, 30, and 31 days, the calculator evaluates month lengths dynamically based on the exact month and year being stepped through.
          </p>
        </div>

        {/* Section 3: Day Calculation */}
        <div className="space-y-3">
          <div className="flex items-center gap-2.5 text-blue-600 font-bold text-lg">
            <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center text-xs">
              3
            </span>
            <h2>Day Calculation Method</h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-9">
            Once completed months are tallied, remaining days are calculated. If the calculation day is smaller than the birth day, days from the preceding calendar month are borrowed (using that month&apos;s exact total days, e.g., 31 for January, 28/29 for February).
          </p>
        </div>

        <AdPlaceholder slotId="3001" format="responsive" />

        {/* Section 4: Leap Years & February 29 */}
        <div className="space-y-3">
          <div className="flex items-center gap-2.5 text-blue-600 font-bold text-lg">
            <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center text-xs">
              4
            </span>
            <h2>Leap Years &amp; February 29 Birthdays</h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-9">
            Leap years occur every 4 years (years divisible by 4, except century years not divisible by 400). For individuals born on February 29:
          </p>
          <ul className="list-disc pl-14 text-sm text-slate-600 space-y-1">
            <li>In leap years (366 days), February 29 is used directly as the birthday.</li>
            <li>In non-leap years (365 days), the anniversary defaults to February 28th.</li>
          </ul>
        </div>

        {/* Section 5: Next Birthday Calculation */}
        <div className="space-y-3">
          <div className="flex items-center gap-2.5 text-blue-600 font-bold text-lg">
            <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center text-xs">
              5
            </span>
            <h2>Next Birthday Calculation</h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-9">
            The next birthday is determined by projecting the birth month and day into the current or subsequent year. The algorithm measures total days remaining, translates the date into its corresponding day of the week, and formats the countdown.
          </p>
        </div>

        {/* Section 6: Total Days & Approximate Time */}
        <div className="space-y-3">
          <div className="flex items-center gap-2.5 text-blue-600 font-bold text-lg">
            <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center text-xs">
              6
            </span>
            <h2>Total Days &amp; Approximate Time Units</h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-9">
            Total days lived is calculated by taking the absolute millisecond timestamp difference between the birth date and target date and converting it to calendar days. Approximate hours (total days × 24), minutes (hours × 60), and seconds (minutes × 60) provide additional fun perspective.
          </p>
        </div>
      </div>

      <div className="text-center pt-4">
        <button
          onClick={() => onNavigate('/age-calculator')}
          className="inline-flex items-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md transition-colors"
        >
          <span>Try the Age Calculator Now</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
