import React, { useState } from 'react';
import { FAQItem } from '../types';
import { HelpCircle, ChevronDown, ChevronUp, Search } from 'lucide-react';

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How do I calculate my exact age?',
    answer:
      'Simply select your Date of Birth in the input field, verify or adjust the "Calculate Age As Of" date (which defaults to today), and click the "Calculate Age" button. The calculator will immediately output your age in exact years, months, and days.',
  },
  {
    id: 'faq-2',
    question: 'How is age calculated in years, months and days?',
    answer:
      'Our tool uses precise calendar-based month offsets rather than simple average division. It counts the total full years completed, then counts the full remaining calendar months, and finally determines the exact remaining days based on the length of the specific month being evaluated.',
  },
  {
    id: 'faq-3',
    question: 'Can I calculate my age for a past date?',
    answer:
      'Yes! You can set the "Calculate Age As Of" date to any past date following your birth date. This allows you to find out exactly how old you were on a specific historical milestone, graduation date, or wedding day.',
  },
  {
    id: 'faq-4',
    question: 'Can I calculate my age for a future date?',
    answer:
      'Yes! By entering a future date in the "Calculate Age As Of" field, you can determine how old you or your child will be on a future date, such as retirement day, a milestone anniversary, or an upcoming event.',
  },
  {
    id: 'faq-5',
    question: 'Does the calculator support leap years?',
    answer:
      'Yes, the calculator fully accounts for leap years (years with 366 days, containing February 29). It adjusts month lengths dynamically so that leap year days are counted with 100% mathematical accuracy.',
  },
  {
    id: 'faq-6',
    question: 'How are February 29 birthdays handled?',
    answer:
      'If you were born on February 29 during a leap year, in non-leap years (which have 28 days in February), your annual birthday milestone is celebrated on February 28th. During leap years, the next birthday correctly reflects February 29th.',
  },
  {
    id: 'faq-7',
    question: 'Is the Age Calculator free?',
    answer:
      'Yes, our Age Calculator is 100% free to use. There are no hidden fees, premium tiers, or limits on how many calculations you can perform.',
  },
  {
    id: 'faq-8',
    question: 'Can I use it on my phone?',
    answer:
      'Absolutely. Our website is built with a responsive, mobile-first design that functions smoothly on all iOS, Android, tablet, and desktop devices.',
  },
  {
    id: 'faq-9',
    question: 'Does the calculator store my date of birth?',
    answer:
      'No. All calculations are performed 100% client-side directly within your web browser. Your date of birth and calculation dates are never sent to a server, database, or third-party service.',
  },
  {
    id: 'faq-10',
    question: 'Does the calculator require registration?',
    answer:
      'No. We do not require any user account, registration, login, email address, or personal profile creation. You can use the calculator instantly upon visiting the site.',
  },
  {
    id: 'faq-11',
    question: 'How is my next birthday calculated?',
    answer:
      'The calculator determines the exact date of your next birthday anniversary following the calculation date. It computes the total days remaining, the day of the week it will fall on, and displays a celebration banner if today is your birthday.',
  },
  {
    id: 'faq-12',
    question: 'Are the hours and minutes exact?',
    answer:
      'The hours, minutes, and seconds are approximate estimations derived from total calendar days lived (assuming 24 hours per day). Exact time born (such as 3:15 PM) is not required for standard calendar age calculations.',
  },
];

interface FAQSectionProps {
  id?: string;
  limit?: number;
  showSearch?: boolean;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  id = 'faq-section',
  limit,
  showSearch = true,
}) => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = FAQ_ITEMS.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, limit);

  const toggleAccordion = (faqId: string) => {
    setOpenId(openId === faqId ? null : faqId);
  };

  return (
    <section id={id} className="my-12">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-3">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Got Questions?</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-slate-600 text-sm sm:text-base mt-2">
          Everything you need to know about exact age calculations, calendar rules, and privacy.
        </p>
      </div>

      {showSearch && (
        <div className="max-w-xl mx-auto mb-6 relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search FAQ questions..."
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-2xs"
          />
        </div>
      )}

      <div className="max-w-3xl mx-auto space-y-3">
        {filteredItems.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className="border border-slate-200/90 rounded-2xl bg-white overflow-hidden shadow-2xs transition-all"
            >
              <button
                onClick={() => toggleAccordion(item.id)}
                className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 hover:text-blue-600 focus:outline-none focus:bg-slate-50 transition-colors"
                aria-expanded={isOpen}
              >
                <span className="text-base">{item.question}</span>
                <span className="p-1 rounded-lg bg-slate-100 text-slate-500 shrink-0">
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </span>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-sm text-slate-600 border-t border-slate-100 leading-relaxed bg-slate-50/50">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}

        {filteredItems.length === 0 && (
          <div className="text-center py-8 text-slate-500 text-sm bg-white rounded-2xl border border-slate-200">
            No matching questions found for &quot;{searchQuery}&quot;.
          </div>
        )}
      </div>
    </section>
  );
};
