import React from 'react';
import { AgeCalculatorForm } from '../components/AgeCalculatorForm';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { ExamplesSection } from '../components/ExamplesSection';
import { FAQSection } from '../components/FAQSection';
import { PageRoute } from '../types';
import {
  Sparkles,
  Calendar,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Zap,
  Gift,
  HelpCircle,
  ArrowDown,
  Info,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const scrollToCalculator = () => {
    const calcEl = document.getElementById('main-calculator');
    if (calcEl) {
      calcEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="space-y-12 pb-12">
      {/* HERO SECTION */}
      <section className="pt-8 pb-4 text-center max-w-4xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold mb-4 shadow-2xs">
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span>100% Free &amp; Private Age Calculator</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-none mb-4">
          Calculate Your Exact Age
        </h1>

        <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed mb-8">
          Calculate your exact age in years, months and days. Find your next birthday and view detailed age statistics with our free online Age Calculator.
        </p>

        <div className="flex justify-center">
          <button
            onClick={scrollToCalculator}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-xl transition-all flex items-center gap-2.5 text-base active:scale-[0.98]"
          >
            <span>Calculate Your Age</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </section>

      {/* AGE CALCULATOR CARD */}
      <section id="main-calculator" className="scroll-mt-20">
        <AgeCalculatorForm />
      </section>

      {/* FIRST ADVERTISEMENT PLACEHOLDER */}
      <div className="max-w-4xl mx-auto px-4">
        <AdPlaceholder slotId="1001" format="horizontal" />
      </div>

      {/* EDUCATIONAL & EXPLANATION CONTENT */}
      <section className="max-w-4xl mx-auto px-4 space-y-12">
        {/* What Is an Age Calculator? */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
              <Info className="w-6 h-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              What Is an Age Calculator?
            </h2>
          </div>
          <p className="text-slate-600 text-base leading-relaxed">
            An <strong>Age Calculator</strong> is a specialized online utility designed to calculate the exact duration of time elapsed between a person&apos;s date of birth and a specific target date. Rather than relying on approximate mental math or rough estimations, an Age Calculator evaluates calendar dynamics, month length variations, and leap years to deliver an exact breakdown in <strong>years, months, days, weeks, hours, and seconds</strong>.
          </p>
          <p className="text-slate-600 text-base leading-relaxed">
            Whether you need to verify your exact age for official documentation, determine eligibility for age-restricted activities, compute age milestones for loved ones, or simply satisfy curiosity about how many days you have lived, our tool provides instant, error-free results.
          </p>
        </div>

        {/* How to Calculate Your Age */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              How to Calculate Your Age
            </h2>
          </div>

          <p className="text-slate-600">
            Calculating your age with our tool takes only a few seconds. Follow these simple steps:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center text-sm">
                1
              </div>
              <h3 className="font-bold text-slate-900">Enter Date of Birth</h3>
              <p className="text-xs text-slate-600">
                Select your birth day, month, and year using the calendar date picker.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center text-sm">
                2
              </div>
              <h3 className="font-bold text-slate-900">Select Target Date</h3>
              <p className="text-xs text-slate-600">
                Choose the &quot;Calculate Age As Of&quot; date (automatically defaults to today).
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center text-sm">
                3
              </div>
              <h3 className="font-bold text-slate-900">Click Calculate</h3>
              <p className="text-xs text-slate-600">
                Press the blue &quot;Calculate Age&quot; button to execute the calculation.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center text-sm">
                4
              </div>
              <h3 className="font-bold text-slate-900">View Exact Age</h3>
              <p className="text-xs text-slate-600">
                Review your exact age presented in Years, Months, and Days.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center text-sm">
                5
              </div>
              <h3 className="font-bold text-slate-900">Check Next Birthday</h3>
              <p className="text-xs text-slate-600">
                Discover the exact day of the week and days remaining for your next birthday.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center text-sm">
                6
              </div>
              <h3 className="font-bold text-slate-900">View Age Statistics</h3>
              <p className="text-xs text-slate-600">
                Explore total months, weeks, days, and approximate hours/minutes lived.
              </p>
            </div>
          </div>
        </div>

        {/* SECOND ADVERTISEMENT PLACEHOLDER */}
        <AdPlaceholder slotId="1002" format="responsive" />

        {/* How Does the Age Calculator Work? */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl">
              <Clock className="w-6 h-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              How Does the Age Calculator Work?
            </h2>
          </div>

          <p className="text-slate-600 text-base leading-relaxed">
            Standard calendar age calculation is fundamentally different from dividing total elapsed days by 365.25. Because calendar months vary between 28, 29, 30, and 31 days, our Age Calculator employs a true Gregorian calendar iteration algorithm.
          </p>

          <div className="space-y-3 pt-2">
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="p-1.5 bg-blue-100 text-blue-700 rounded-lg shrink-0 mt-0.5">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Year &amp; Month Increments</h3>
                <p className="text-xs text-slate-600 mt-0.5">
                  The algorithm steps forward full calendar years from your birth date, then steps forward full calendar months, dynamically adjusting for short months (e.g. February or 30-day months).
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="p-1.5 bg-indigo-100 text-indigo-700 rounded-lg shrink-0 mt-0.5">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Leap Years &amp; February 29</h3>
                <p className="text-xs text-slate-600 mt-0.5">
                  Leap years add an extra 29th day to February every 4 years (unless divisible by 100 and not 400). For individuals born on February 29, the algorithm recognizes February 28 as the anniversary in non-leap years.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Use Our Age Calculator? */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-2xl">
              <Zap className="w-6 h-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Why Use Our Age Calculator?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-slate-900 text-sm">100% Client-Side Privacy</h3>
                <p className="text-xs text-slate-600 mt-0.5">
                  All calculations happen directly inside your web browser. Your birth date is never uploaded to any server.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
              <Zap className="w-5 h-5 text-amber-600 shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Instant &amp; Fast</h3>
                <p className="text-xs text-slate-600 mt-0.5">
                  Results appear immediately without page refreshes, loading delays, or external API bottlenecks.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-slate-900 text-sm">No Registration Needed</h3>
                <p className="text-xs text-slate-600 mt-0.5">
                  No signup, no passwords, no email collection, and no user accounts required whatsoever.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
              <Gift className="w-5 h-5 text-purple-600 shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Next Birthday Countdown</h3>
                <p className="text-xs text-slate-600 mt-0.5">
                  Know the exact day of the week and days remaining for your upcoming birthday celebration.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* EXAMPLES SECTION */}
        <ExamplesSection />

        {/* BIRTHDAY INFORMATION SECTION */}
        <div className="bg-gradient-to-br from-amber-500 to-orange-600 text-white rounded-3xl p-6 sm:p-8 shadow-lg space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-xs">
              <Gift className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Birthday Countdown &amp; Celebration Stats
            </h2>
          </div>
          <p className="text-amber-100 text-base leading-relaxed">
            Beyond calculating your exact age, our Age Calculator automatically analyzes your next birthday. It computes how many calendar days remain, determines the exact day of the week your birthday will fall on this year or next, and alerts you with a celebratory notification if today happens to be your birthday!
          </p>
        </div>

        {/* THIRD ADVERTISEMENT PLACEHOLDER */}
        <AdPlaceholder slotId="1003" format="responsive" />

        {/* FAQ SECTION */}
        <FAQSection limit={6} />

        <div className="text-center pt-2">
          <button
            onClick={() => onNavigate('/faq')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-colors shadow-md"
          >
            <HelpCircle className="w-4 h-4" />
            <span>View All 12 Frequently Asked Questions</span>
          </button>
        </div>
      </section>
    </div>
  );
};
