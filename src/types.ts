export type PageRoute =
  | '/'
  | '/age-calculator'
  | '/how-it-works'
  | '/about'
  | '/faq'
  | '/privacy-policy'
  | '/terms-and-conditions'
  | '/disclaimer';

export interface NextBirthdayInfo {
  nextBirthdayDate: Date;
  formattedDate: string;
  dayOfWeek: string;
  daysRemaining: number;
  monthsRemaining: number;
  daysRemainingInMonth: number;
  isToday: boolean;
  isFeb29Note?: string;
}

export interface AgeCalculationResult {
  years: number;
  months: number;
  days: number;
  totalYears: number;
  totalMonths: number;
  totalWeeks: number;
  totalDays: number;
  approxHours: number;
  approxMinutes: number;
  approxSeconds: number;
  nextBirthday: NextBirthdayInfo;
  dobFormatted: string;
  asOfFormatted: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface AgeExample {
  title: string;
  dob: string;
  asOf: string;
  dobFormatted: string;
  asOfFormatted: string;
  resultString: string;
  description: string;
}

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  advertising: boolean;
  hasResponded: boolean;
}
