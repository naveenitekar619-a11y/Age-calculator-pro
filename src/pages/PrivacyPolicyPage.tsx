import React from 'react';
import { PageRoute } from '../types';
import { ShieldCheck, Mail, Calendar, Lock } from 'lucide-react';
import { AdPlaceholder } from '../components/AdPlaceholder';

interface PrivacyPolicyPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xs space-y-6">
        <div className="border-b border-slate-100 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-3">
            <ShieldCheck className="w-4 h-4" />
            <span>Legal Document</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-500 mt-2 font-mono">
            Last Updated: [DATE]
          </p>
        </div>

        <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-6">
          <section className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900">1. Introduction</h2>
            <p>
              Welcome to <strong>Age Calculator</strong> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We respect your privacy and are committed to protecting personal information. This Privacy Policy outlines how our online Age Calculator website operates and how we handle user data.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900">
              2. Client-Side Browser Processing (No Date Storage)
            </h2>
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-1 my-3">
              <strong className="flex items-center gap-1.5 font-bold text-sm">
                <Lock className="w-4 h-4 text-emerald-600" />
                100% Local Browser Calculation Guarantee
              </strong>
              <p className="text-xs text-emerald-800">
                When you enter your Date of Birth or Target Calculation Date into our calculator, all mathematical processing occurs entirely locally inside your device&apos;s web browser using client-side JavaScript. Your birth date is NEVER transmitted to our web server, uploaded to a database, or shared with third parties.
              </p>
            </div>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900">3. Information We Collect</h2>
            <p>
              We do not collect personally identifiable information (PII) such as your name, home address, phone number, email address, or official identification.
            </p>
            <p>
              Like most websites, our web server may automatically log standard non-personally identifiable technical diagnostic data, including:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>IP address (anonymized where applicable)</li>
              <li>Browser type and version</li>
              <li>Device operating system</li>
              <li>Referring web page URL</li>
              <li>Date and time of site access</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900">4. Cookies &amp; Local Storage</h2>
            <p>
              We use standard browser local storage (`localStorage`) solely to remember your cookie consent preferences (such as whether you accepted or customized cookies) so that you are not repeatedly prompted on future visits.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900">
              5. Advertising &amp; Google AdSense
            </h2>
            <p>
              This website may display advertisements served by Google AdSense and third-party advertising partners to keep our services free.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Google and third-party vendors use cookies (such as the DoubleClick cookie) to serve non-intrusive ads based on a user&apos;s prior visits to this or other websites.
              </li>
              <li>
                Google&apos;s use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the Internet.
              </li>
              <li>
                Users may opt out of personalized advertising by visiting{' '}
                <a
                  href="https://www.google.com/settings/ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline font-semibold"
                >
                  Google Ads Settings
                </a>
                .
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900">6. Third-Party Services</h2>
            <p>
              We may utilize standard web analytics or performance monitoring tools (such as Google Analytics) to measure aggregate website traffic and performance. These services operate under their respective privacy policies.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900">7. Data Security</h2>
            <p>
              Because we do not store, retain, or transmit user date-of-birth data on our servers, there is no database risk regarding your personal age data on our infrastructure.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900">8. Children&apos;s Privacy</h2>
            <p>
              Our website is a general audience utility and is suitable for users of all ages. We do not knowingly collect personal information from children under the age of 13.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900">9. Policy Changes</h2>
            <p>
              We reserve the right to update this Privacy Policy periodically. Any revisions will be reflected on this page with an updated &quot;Last Updated&quot; date.
            </p>
          </section>

          <section className="space-y-2 border-t border-slate-100 pt-6">
            <h2 className="text-xl font-bold text-slate-900">10. Contact Information</h2>
            <p>
              If you have any questions or concerns regarding this Privacy Policy, please contact our privacy compliance team at:
            </p>
            <p className="font-semibold text-slate-900 flex items-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
              <Mail className="w-4 h-4 text-blue-600" />
              <span>Privacy Email: [YOUR EMAIL ADDRESS]</span>
            </p>
          </section>
        </div>
      </div>

      <AdPlaceholder slotId="6001" format="horizontal" />
    </div>
  );
};
