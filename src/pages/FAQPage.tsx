import React from 'react';
import { FAQSection } from '../components/FAQSection';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { PageRoute } from '../types';

interface FAQPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const FAQPage: React.FC<FAQPageProps> = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <FAQSection showSearch={true} />

      <AdPlaceholder slotId="5001" format="horizontal" />
    </div>
  );
};
