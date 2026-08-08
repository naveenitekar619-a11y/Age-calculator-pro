import { AgeCalculationResult, NextBirthdayInfo } from '../types';

/**
 * Checks if a year is a leap year in the Gregorian calendar.
 */
export function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

/**
 * Gets the maximum number of days in a given month of a year.
 * Month is 0-indexed (0 = Jan, 1 = Feb, ..., 11 = Dec).
 */
export function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

/**
 * Adds full calendar years to a date, clamping to month end if necessary.
 */
export function addYears(date: Date, years: number): Date {
  const targetYear = date.getFullYear() + years;
  const targetMonth = date.getMonth();
  const maxDays = getDaysInMonth(targetYear, targetMonth);
  const targetDay = Math.min(date.getDate(), maxDays);
  return new Date(
    targetYear,
    targetMonth,
    targetDay,
    date.getHours(),
    date.getMinutes(),
    date.getSeconds()
  );
}

/**
 * Adds full calendar months to a date, clamping to month end if necessary.
 */
export function addMonths(date: Date, months: number): Date {
  const totalMonths = date.getMonth() + months;
  const targetYear = date.getFullYear() + Math.floor(totalMonths / 12);
  const targetMonth = ((totalMonths % 12) + 12) % 12;
  const maxDays = getDaysInMonth(targetYear, targetMonth);
  const targetDay = Math.min(date.getDate(), maxDays);
  return new Date(
    targetYear,
    targetMonth,
    targetDay,
    date.getHours(),
    date.getMinutes(),
    date.getSeconds()
  );
}

/**
 * Adds days to a date.
 */
export function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

/**
 * Validates DOB and AsOf inputs.
 */
export function validateDateInputs(
  dobStr: string,
  asOfStr: string
): { isValid: boolean; error: string | null } {
  if (!dobStr) {
    return { isValid: false, error: 'Please enter your date of birth.' };
  }
  if (!asOfStr) {
    return { isValid: false, error: 'Please enter a calculation date.' };
  }

  const dob = new Date(dobStr + 'T00:00:00');
  const asOf = new Date(asOfStr + 'T00:00:00');

  if (isNaN(dob.getTime())) {
    return { isValid: false, error: 'Please enter a valid date of birth.' };
  }
  if (isNaN(asOf.getTime())) {
    return { isValid: false, error: 'Please enter a valid calculation date.' };
  }

  // Check if DOB is in the future relative to system today
  const now = new Date();
  const todayOnly = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  if (dob > todayOnly) {
    return { isValid: false, error: 'Date of birth cannot be in the future.' };
  }

  if (asOf < dob) {
    return {
      isValid: false,
      error: 'Calculation date cannot be earlier than the date of birth.',
    };
  }

  return { isValid: true, error: null };
}

/**
 * Calculates exact age and related metrics.
 */
export function calculateAge(dobStr: string, asOfStr: string): AgeCalculationResult {
  const dob = new Date(dobStr + 'T00:00:00');
  const asOf = new Date(asOfStr + 'T00:00:00');

  // Strip time components for pure date comparison
  const dobClean = new Date(dob.getFullYear(), dob.getMonth(), dob.getDate());
  const asOfClean = new Date(asOf.getFullYear(), asOf.getMonth(), asOf.getDate());

  // Calculate exact Years, Months, Days
  let tempDate = new Date(dobClean);
  let years = 0;
  while (addYears(tempDate, 1) <= asOfClean) {
    tempDate = addYears(tempDate, 1);
    years++;
  }

  let months = 0;
  while (addMonths(tempDate, 1) <= asOfClean) {
    tempDate = addMonths(tempDate, 1);
    months++;
  }

  let days = 0;
  while (addDays(tempDate, 1) <= asOfClean) {
    tempDate = addDays(tempDate, 1);
    days++;
  }

  // Total breakdowns
  const diffMs = asOfClean.getTime() - dobClean.getTime();
  const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const totalMonths = years * 12 + months;
  const totalYears = parseFloat((totalDays / 365.2425).toFixed(2));
  const totalWeeks = Math.floor(totalDays / 7);

  const approxHours = totalDays * 24;
  const approxMinutes = approxHours * 60;
  const approxSeconds = approxMinutes * 60;

  // Next Birthday Calculation
  const nextBirthdayInfo = calculateNextBirthday(dobClean, asOfClean);

  // Formatted date strings
  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return {
    years,
    months,
    days,
    totalYears,
    totalMonths,
    totalWeeks,
    totalDays,
    approxHours,
    approxMinutes,
    approxSeconds,
    nextBirthday: nextBirthdayInfo,
    dobFormatted: dateFormatter.format(dobClean),
    asOfFormatted: dateFormatter.format(asOfClean),
  };
}

/**
 * Calculates details for the next upcoming birthday after asOf Date.
 */
export function calculateNextBirthday(dob: Date, asOf: Date): NextBirthdayInfo {
  const isFeb29Birth = dob.getMonth() === 1 && dob.getDate() === 29;

  // Check if today is birthday
  const isSameMonthAndDay =
    asOf.getMonth() === dob.getMonth() && asOf.getDate() === dob.getDate();

  // If Feb 29 birth in non-leap year, celebrate on Feb 28
  const isFeb29TodayInNonLeap =
    isFeb29Birth &&
    !isLeapYear(asOf.getFullYear()) &&
    asOf.getMonth() === 1 &&
    asOf.getDate() === 28;

  const isToday = isSameMonthAndDay || isFeb29TodayInNonLeap;

  let nextYear = asOf.getFullYear();
  let candidateMonth = dob.getMonth();
  let candidateDay = dob.getDate();

  if (isFeb29Birth && !isLeapYear(nextYear)) {
    candidateDay = 28;
  }

  let candidateDate = new Date(nextYear, candidateMonth, candidateDay);

  if (candidateDate < asOf) {
    nextYear++;
    candidateDay = dob.getDate();
    if (isFeb29Birth && !isLeapYear(nextYear)) {
      candidateDay = 28;
    }
    candidateDate = new Date(nextYear, candidateMonth, candidateDay);
  }

  const diffMs = candidateDate.getTime() - asOf.getTime();
  const daysRemaining = Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));

  // Compute months & days breakdown for remaining time
  let tempRem = new Date(asOf);
  let monthsRemaining = 0;
  while (addMonths(tempRem, 1) <= candidateDate) {
    tempRem = addMonths(tempRem, 1);
    monthsRemaining++;
  }
  let daysRemainingInMonth = 0;
  while (addDays(tempRem, 1) <= candidateDate) {
    tempRem = addDays(tempRem, 1);
    daysRemainingInMonth++;
  }

  const dayOfWeek = candidateDate.toLocaleDateString('en-US', { weekday: 'long' });
  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  let isFeb29Note: string | undefined = undefined;
  if (isFeb29Birth) {
    if (!isLeapYear(nextYear)) {
      isFeb29Note = `Note: Since ${nextYear} is not a leap year, your birthday is celebrated on February 28.`;
    } else {
      isFeb29Note = `Note: ${nextYear} is a leap year, so your birthday falls on February 29!`;
    }
  }

  return {
    nextBirthdayDate: candidateDate,
    formattedDate: dateFormatter.format(candidateDate),
    dayOfWeek,
    daysRemaining,
    monthsRemaining,
    daysRemainingInMonth,
    isToday,
    isFeb29Note,
  };
}

/**
 * Formats a YYYY-MM-DD string from a Date object.
 */
export function formatDateInput(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}
