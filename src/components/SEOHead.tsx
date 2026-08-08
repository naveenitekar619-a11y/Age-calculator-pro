import React, { useEffect } from 'react';
import { PageRoute } from '../types';

interface SEOHeadProps {
  route: PageRoute;
}

const SEO_MAP: Record<PageRoute, { title: string; description: string }> = {
  '/': {
    title: 'Age Calculator – Calculate Your Exact Age Online',
    description:
      'Calculate your exact age in years, months and days with our free online Age Calculator. Find your next birthday and detailed age statistics quickly and easily.',
  },
  '/age-calculator': {
    title: 'Free Online Age Calculator – Exact Years, Months & Days',
    description:
      'Use our free, fast, and secure Age Calculator tool. Get exact age breakdown in years, months, days, total weeks, hours, and next birthday details.',
  },
  '/how-it-works': {
    title: 'How It Works – Age Calculator Logic & Leap Year Rules',
    description:
      'Learn how calendar-based age calculations work, including leap years, February 29 birthdays, month boundaries, and time statistics.',
  },
  '/about': {
    title: 'About Age Calculator – Simple, Fast & Privacy-First Tool',
    description:
      'Discover the story and purpose behind our free online Age Calculator tool. Client-side processing ensures 100% privacy with zero data storage.',
  },
  '/faq': {
    title: 'Age Calculator FAQ – Frequently Asked Questions',
    description:
      'Find answers to common questions about calculating age in years, months, and days, leap years, February 29 birthdays, and privacy.',
  },
  '/privacy-policy': {
    title: 'Privacy Policy – Age Calculator',
    description:
      'Read our Privacy Policy. We process all date inputs 100% locally in your browser. No personal date of birth data is stored or transmitted.',
  },
  '/terms-and-conditions': {
    title: 'Terms & Conditions – Age Calculator',
    description:
      'Read the Terms and Conditions for using our free online Age Calculator utility website.',
  },
  '/disclaimer': {
    title: 'Disclaimer – Age Calculator',
    description:
      'Important legal disclaimer regarding age calculation results and non-governmental informational status.',
  },
};

export const SEOHead: React.FC<SEOHeadProps> = ({ route }) => {
  useEffect(() => {
    const seoData = SEO_MAP[route] || SEO_MAP['/'];
    document.title = seoData.title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', seoData.description);

    // Set Open Graph Title & Description
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', seoData.title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', seoData.description);
  }, [route]);

  return null;
};
