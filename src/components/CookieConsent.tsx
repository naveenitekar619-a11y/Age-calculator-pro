import React, { useState, useEffect } from 'react';
import { ShieldCheck, Cookie, Check, X, Sliders } from 'lucide-react';
import { CookiePreferences } from '../types';

const STORAGE_KEY = 'age_calc_cookie_consent_v1';

export const CookieConsent: React.FC = () => {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    advertising: false,
    hasResponded: false,
  });

  const [showBanner, setShowBanner] = useState(false);
  const [showManageModal, setShowManageModal] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setPreferences(parsed);
        if (!parsed.hasResponded) {
          setShowBanner(true);
        }
      } catch {
        setShowBanner(true);
      }
    } else {
      setShowBanner(true);
    }
  }, []);

  const savePreferences = (updated: CookiePreferences) => {
    const finalPrefs = { ...updated, hasResponded: true };
    setPreferences(finalPrefs);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(finalPrefs));
    setShowBanner(false);
    setShowManageModal(false);
  };

  const handleAcceptAll = () => {
    savePreferences({
      necessary: true,
      analytics: true,
      advertising: true,
      hasResponded: true,
    });
  };

  const handleRejectNonEssential = () => {
    savePreferences({
      necessary: true,
      analytics: false,
      advertising: false,
      hasResponded: true,
    });
  };

  if (!showBanner && !showManageModal) return null;

  return (
    <>
      {/* Cookie Banner */}
      {showBanner && !showManageModal && (
        <div className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 shadow-2xl transition-all">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-3 max-w-3xl">
              <div className="p-2 bg-blue-500/20 text-blue-400 rounded-lg shrink-0 mt-0.5">
                <Cookie className="w-5 h-5" />
              </div>
              <div className="text-sm text-slate-300 leading-relaxed">
                <span className="font-semibold text-slate-100 block mb-0.5">
                  Privacy &amp; Cookie Notice
                </span>
                We use essential cookies to ensure basic website functionality. Age calculations are processed entirely locally in your browser. With your consent, we also use cookies for analytics and non-intrusive personalized advertising.
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 shrink-0 w-full md:w-auto">
              <button
                onClick={() => setShowManageModal(true)}
                className="flex-1 md:flex-initial px-3.5 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors flex items-center justify-center gap-1.5 border border-slate-700"
              >
                <Sliders className="w-3.5 h-3.5" />
                Manage Preferences
              </button>

              <button
                onClick={handleRejectNonEssential}
                className="flex-1 md:flex-initial px-3.5 py-2 text-xs font-semibold text-slate-300 border border-slate-700 hover:bg-slate-800 rounded-lg transition-colors"
              >
                Reject Non-Essential
              </button>

              <button
                onClick={handleAcceptAll}
                className="flex-1 md:flex-initial px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-colors flex items-center justify-center gap-1"
              >
                <Check className="w-3.5 h-3.5" />
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Preference Modal */}
      {showManageModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-slate-900 rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-800 space-y-5 animate-in fade-in zoom-in-95 text-slate-100">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-bold text-slate-100">
                  Cookie &amp; Privacy Preferences
                </h3>
              </div>
              <button
                onClick={() => setShowManageModal(false)}
                className="text-slate-400 hover:text-slate-200 p-1 rounded-lg hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-sm text-slate-300">
              {/* Necessary */}
              <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-slate-100 flex items-center gap-2">
                    <span>Necessary Cookies</span>
                    <span className="text-[10px] bg-blue-500/20 text-blue-300 font-bold px-2 py-0.5 rounded-full uppercase border border-blue-500/30">
                      Always Active
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Required for core website security, theme, and age calculator functionality.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={true}
                  disabled
                  className="w-4 h-4 rounded text-blue-600 accent-blue-600 cursor-not-allowed"
                />
              </div>

              {/* Analytics */}
              <div className="p-3.5 rounded-xl border border-slate-800 flex items-center justify-between hover:bg-slate-800/50 transition-colors">
                <div>
                  <div className="font-semibold text-slate-100">Analytics Cookies</div>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Helps us understand website traffic and performance anonymously.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) =>
                    setPreferences({ ...preferences, analytics: e.target.checked })
                  }
                  className="w-4 h-4 rounded text-blue-600 accent-blue-600 cursor-pointer"
                />
              </div>

              {/* Advertising */}
              <div className="p-3.5 rounded-xl border border-slate-800 flex items-center justify-between hover:bg-slate-800/50 transition-colors">
                <div>
                  <div className="font-semibold text-slate-100">Advertising Cookies</div>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Allows Google AdSense to serve relevant advertisements.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.advertising}
                  onChange={(e) =>
                    setPreferences({ ...preferences, advertising: e.target.checked })
                  }
                  className="w-4 h-4 rounded text-blue-600 accent-blue-600 cursor-pointer"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2 border-t border-slate-800">
              <button
                onClick={() => setShowManageModal(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-slate-200"
              >
                Cancel
              </button>
              <button
                onClick={() => savePreferences(preferences)}
                className="px-5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
