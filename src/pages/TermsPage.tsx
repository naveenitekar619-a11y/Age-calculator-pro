import React from 'react';
import { PageRoute } from '../types';
import { FileText, Mail } from 'lucide-react';
import { AdPlaceholder } from '../components/AdPlaceholder';

interface TermsPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const TermsPage: React.FC<TermsPageProps> = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xs space-y-6">
        <div className="border-b border-slate-100 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-3">
            <FileText className="w-4 h-4" />
            <span>Legal Document</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Terms and Conditions
          </h1>
          <p className="text-xs text-slate-500 mt-2 font-mono">
            Last Updated: [DATE]
          </p>
        </div>

        <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-6">
          <section className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the <strong>Age Calculator</strong> website (&quot;the Service&quot;), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please refrain from using the website.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900">2. Description of Service</h2>
            <p>
              Age Calculator provides a free online mathematical utility for calculating exact age in years, months, days, weeks, and hours based on user-provided dates. All calculations occur client-side in your web browser.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900">3. Permitted &amp; Prohibited Use</h2>
            <p>
              You are permitted to use this calculator for personal, educational, or informational purposes.
            </p>
            <p><strong>Prohibited activities include:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Attempting to disrupt or compromise website security or server availability</li>
              <li>Scraping content or infrastructure with malicious automated bots</li>
              <li>Using the calculator for illegal or fraudulent activities</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900">4. Accuracy Limitations &amp; Disclaimer</h2>
            <p>
              While we strive for 100% mathematical accuracy using standard Gregorian calendar rules, results are provided for general informational purposes only. The website owner does not warrant that results are suitable for legal age verification or government compliance.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900">5. Intellectual Property</h2>
            <p>
              All original text content, design layouts, branding assets, and code structures are protected by copyright and intellectual property laws.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900">6. Third-Party Links &amp; Advertising</h2>
            <p>
              Our website may display advertisements served by Google AdSense or contain links to external third-party websites. We are not responsible for the content, privacy practices, or accuracy of external services.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900">7. Limitation of Liability</h2>
            <p>
              Under no circumstances shall the website owner be liable for any direct, indirect, incidental, or consequential damages resulting from your use of or inability to use this website.
            </p>
          </section>

          <section className="space-y-2 border-t border-slate-100 pt-6">
            <h2 className="text-xl font-bold text-slate-900">8. Legal Contact</h2>
            <p>
              For legal inquiries regarding these Terms and Conditions, please contact:
            </p>
            <p className="font-semibold text-slate-900 flex items-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
              <Mail className="w-4 h-4 text-blue-600" />
              <span>Legal Email: [YOUR EMAIL ADDRESS]</span>
            </p>
          </section>
        </div>
      </div>

      <AdPlaceholder slotId="7001" format="horizontal" />
    </div>
  );
};
