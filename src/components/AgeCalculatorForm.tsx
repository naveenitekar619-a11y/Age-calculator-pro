import React, { useState } from 'react';
import {
  Calendar as CalendarIcon,
  RotateCcw,
  Sparkles,
  Clock,
  Cake,
  AlertCircle,
  Copy,
  Check,
  Share2,
} from 'lucide-react';
import { AgeCalculationResult } from '../types';
import {
  calculateAge,
  formatDateInput,
  validateDateInputs,
} from '../utils/ageCalculator';
import { AdPlaceholder } from './AdPlaceholder';

interface AgeCalculatorFormProps {
  id?: string;
  className?: string;
}

export const AgeCalculatorForm: React.FC<AgeCalculatorFormProps> = ({
  id = 'calculator-card',
  className = '',
}) => {
  const todayStr = formatDateInput(new Date());

  const [dob, setDob] = useState<string>('1994-03-15');
  const [asOfDate, setAsOfDate] = useState<string>(todayStr);

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [result, setResult] = useState<AgeCalculationResult | null>(() => {
    const val = validateDateInputs('1994-03-15', todayStr);
    if (val.isValid) {
      return calculateAge('1994-03-15', todayStr);
    }
    return null;
  });

  const [copied, setCopied] = useState(false);

  const handleCalculate = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setErrorMessage(null);

    const val = validateDateInputs(dob, asOfDate);
    if (!val.isValid) {
      setErrorMessage(val.error);
      setResult(null);
      return;
    }

    const calculated = calculateAge(dob, asOfDate);
    setResult(calculated);
  };

  const handleReset = () => {
    setDob('');
    setAsOfDate(todayStr);
    setErrorMessage(null);
    setResult(null);
  };

  const handleCopyResult = () => {
    if (!result) return;
    const text = `I am ${result.years} Years, ${result.months} Months, ${result.days} Days old! (Calculated using Age Calculator)`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id={id}
      className={`bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl p-6 sm:p-8 max-w-4xl mx-auto ${className}`}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-blue-600 text-white rounded-2xl shadow-md shadow-blue-500/20">
          <CalendarIcon className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-100 tracking-tight">
            Age Calculator
          </h2>
          <p className="text-sm text-slate-400">
            Enter your date of birth and calculation date to get exact results
          </p>
        </div>
      </div>

      {/* Form Controls */}
      <form onSubmit={handleCalculate} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Date of Birth */}
          <div className="space-y-2">
            <label
              htmlFor="dob-input"
              className="block text-sm font-semibold text-slate-200"
            >
              Date of Birth <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <input
                id="dob-input"
                type="date"
                value={dob}
                onChange={(e) => {
                  setDob(e.target.value);
                  setErrorMessage(null);
                }}
                className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-800/90 text-slate-100 font-medium focus:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-base [color-scheme:dark]"
                required
              />
            </div>
            <p className="text-xs text-slate-400">Select your birth date</p>
          </div>

          {/* Calculate Age As Of */}
          <div className="space-y-2">
            <label
              htmlFor="asof-input"
              className="block text-sm font-semibold text-slate-200"
            >
              Calculate Age As Of
            </label>
            <div className="relative">
              <input
                id="asof-input"
                type="date"
                value={asOfDate}
                onChange={(e) => {
                  setAsOfDate(e.target.value);
                  setErrorMessage(null);
                }}
                className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-800/90 text-slate-100 font-medium focus:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-base [color-scheme:dark]"
              />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xs text-slate-400">Default is today&apos;s date</p>
              <button
                type="button"
                onClick={() => setAsOfDate(todayStr)}
                className="text-xs font-semibold text-blue-400 hover:text-blue-300 hover:underline"
              >
                Set to Today
              </button>
            </div>
          </div>
        </div>

        {/* Friendly Error Validation */}
        {errorMessage && (
          <div className="p-4 rounded-xl bg-red-950/60 border border-red-800/80 text-red-300 text-sm flex items-start gap-3 animate-in fade-in">
            <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <div className="font-medium">{errorMessage}</div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <button
            type="submit"
            className="w-full sm:w-auto flex-1 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3.5 px-6 rounded-xl shadow-md shadow-blue-600/25 hover:shadow-lg transition-all flex items-center justify-center gap-2 text-base active:scale-[0.99]"
          >
            <Sparkles className="w-5 h-5" />
            Calculate Age
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-slate-700 text-slate-300 font-semibold hover:bg-slate-800 hover:text-white transition-colors flex items-center justify-center gap-2 text-base"
          >
            <RotateCcw className="w-4 h-4 text-slate-400" />
            Reset
          </button>
        </div>

        {/* AdSense Ad Placement directly after Reset Button */}
        <AdPlaceholder slotId="3001-after-reset" format="responsive" className="mt-4 mb-0" />
      </form>

      {/* RESULTS SECTION */}
      {result && (
        <div className="mt-8 pt-8 border-t border-slate-800 space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
          {/* Main Exact Age Card */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-6 sm:p-8 rounded-2xl shadow-xl relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 w-36 h-36 bg-white/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-blue-200">
                  Calculated Result
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-0.5">
                  Your Exact Age
                </h3>
              </div>

              <button
                onClick={handleCopyResult}
                className="bg-white/20 hover:bg-white/30 text-white px-3.5 py-2 rounded-xl text-xs font-semibold backdrop-blur-xs transition-all flex items-center gap-1.5"
                title="Copy result to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-300" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Result</span>
                  </>
                )}
              </button>
            </div>

            <div className="my-2">
              <div className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                {result.years} <span className="text-2xl font-bold text-blue-200">Years</span>,{' '}
                {result.months} <span className="text-2xl font-bold text-blue-200">Months</span>,{' '}
                {result.days} <span className="text-2xl font-bold text-blue-200">Days</span>
              </div>
            </div>

            <p className="text-xs text-blue-100 mt-3 pt-3 border-t border-white/15">
              Born on <strong className="text-white">{result.dobFormatted}</strong> • Age calculated as of{' '}
              <strong className="text-white">{result.asOfFormatted}</strong>
            </p>
          </div>

          {/* Next Birthday Card */}
          <div className="bg-slate-800/80 border border-amber-500/30 p-6 rounded-2xl shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-amber-500 text-slate-950 rounded-xl shadow-xs">
                <Cake className="w-5 h-5 font-bold" />
              </div>
              <h3 className="text-xl font-bold text-slate-100">
                Your Next Birthday
              </h3>
            </div>

            {result.nextBirthday.isToday ? (
              <div className="bg-amber-500 text-slate-950 p-4 rounded-xl text-center shadow-md animate-bounce">
                <span className="text-2xl font-black block">
                  Happy Birthday! 🎉🎂
                </span>
                <span className="text-sm font-medium mt-1 block">
                  Wishing you a wonderful year ahead!
                </span>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-slate-900/90 p-4 rounded-xl border border-amber-500/20">
                  <span className="block text-xs font-medium text-slate-400">
                    Next Birthday Date
                  </span>
                  <span className="text-lg font-bold text-slate-100 mt-1 block">
                    {result.nextBirthday.formattedDate}
                  </span>
                </div>

                <div className="bg-slate-900/90 p-4 rounded-xl border border-amber-500/20">
                  <span className="block text-xs font-medium text-slate-400">
                    Days Remaining
                  </span>
                  <span className="text-xl font-extrabold text-amber-400 mt-1 block">
                    {result.nextBirthday.daysRemaining} Days
                  </span>
                  <span className="text-xs text-slate-400">
                    ({result.nextBirthday.monthsRemaining}m {result.nextBirthday.daysRemainingInMonth}d)
                  </span>
                </div>

                <div className="bg-slate-900/90 p-4 rounded-xl border border-amber-500/20">
                  <span className="block text-xs font-medium text-slate-400">
                    Day of the Week
                  </span>
                  <span className="text-lg font-bold text-slate-100 mt-1 block">
                    {result.nextBirthday.dayOfWeek}
                  </span>
                </div>
              </div>
            )}

            {result.nextBirthday.isFeb29Note && (
              <p className="text-xs text-amber-300 mt-3 font-medium bg-amber-500/10 p-2.5 rounded-lg border border-amber-500/30">
                {result.nextBirthday.isFeb29Note}
              </p>
            )}
          </div>

          {/* Grid: Total Age & Time Lived */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Total Age Card */}
            <div className="bg-slate-800/60 border border-slate-700/80 p-6 rounded-2xl shadow-xs">
              <div className="flex items-center gap-2 mb-4 text-slate-100 font-bold text-lg">
                <CalendarIcon className="w-5 h-5 text-blue-400" />
                <h3>Total Age Summary</h3>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-slate-700/60 text-sm">
                  <span className="text-slate-400 font-medium">Total Years:</span>
                  <span className="font-bold text-slate-100">
                    {result.totalYears} Years
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-700/60 text-sm">
                  <span className="text-slate-400 font-medium">Total Months:</span>
                  <span className="font-bold text-slate-100">
                    {result.totalMonths.toLocaleString()} Months
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-700/60 text-sm">
                  <span className="text-slate-400 font-medium">Total Weeks:</span>
                  <span className="font-bold text-slate-100">
                    {result.totalWeeks.toLocaleString()} Weeks
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 text-sm">
                  <span className="text-slate-400 font-medium">Total Days:</span>
                  <span className="font-bold text-slate-100">
                    {result.totalDays.toLocaleString()} Days
                  </span>
                </div>
              </div>
            </div>

            {/* Time Lived Card */}
            <div className="bg-slate-800/60 border border-slate-700/80 p-6 rounded-2xl shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4 text-slate-100 font-bold text-lg">
                  <Clock className="w-5 h-5 text-indigo-400" />
                  <h3>Time Lived Breakdown</h3>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-slate-700/60 text-sm">
                    <span className="text-slate-400 font-medium">Approx. Hours:</span>
                    <span className="font-bold text-slate-100">
                      {result.approxHours.toLocaleString()} Hours
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-700/60 text-sm">
                    <span className="text-slate-400 font-medium">Approx. Minutes:</span>
                    <span className="font-bold text-slate-100">
                      {result.approxMinutes.toLocaleString()} Minutes
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 text-sm">
                    <span className="text-slate-400 font-medium">Approx. Seconds:</span>
                    <span className="font-bold text-slate-100 font-mono text-xs sm:text-sm">
                      {result.approxSeconds.toLocaleString()} Seconds
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-slate-400 italic mt-4 pt-3 border-t border-slate-700/60">
                * Hours, minutes and seconds are approximate values calculated from calendar days.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
