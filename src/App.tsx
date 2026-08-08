import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { SEOHead } from './components/SEOHead';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { HomePage } from './pages/HomePage';
import { CalculatorPage } from './pages/CalculatorPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { AboutPage } from './pages/AboutPage';
import { FAQPage } from './pages/FAQPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { DisclaimerPage } from './pages/DisclaimerPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  const getInitialRoute = (): PageRoute => {
    const path = window.location.pathname as PageRoute;
    const validRoutes: PageRoute[] = [
      '/',
      '/age-calculator',
      '/how-it-works',
      '/about',
      '/faq',
      '/privacy-policy',
      '/terms-and-conditions',
      '/disclaimer',
    ];
    if (validRoutes.includes(path)) {
      return path;
    }
    // If exact path is unknown but exists, return 404 or normalize
    return path;
  };

  const [currentRoute, setCurrentRoute] = useState<PageRoute>(getInitialRoute);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname as PageRoute;
      setCurrentRoute(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (route: PageRoute) => {
    if (window.location.pathname !== route) {
      window.history.pushState({}, '', route);
    }
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPageComponent = () => {
    switch (currentRoute) {
      case '/':
        return <HomePage onNavigate={handleNavigate} />;
      case '/age-calculator':
        return <CalculatorPage onNavigate={handleNavigate} />;
      case '/how-it-works':
        return <HowItWorksPage onNavigate={handleNavigate} />;
      case '/about':
        return <AboutPage onNavigate={handleNavigate} />;
      case '/faq':
        return <FAQPage onNavigate={handleNavigate} />;
      case '/privacy-policy':
        return <PrivacyPolicyPage onNavigate={handleNavigate} />;
      case '/terms-and-conditions':
        return <TermsPage onNavigate={handleNavigate} />;
      case '/disclaimer':
        return <DisclaimerPage onNavigate={handleNavigate} />;
      default:
        return <NotFoundPage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans antialiased selection:bg-blue-600 selection:text-white">
      <SEOHead route={currentRoute} />

      {/* Navigation Header */}
      <Header currentRoute={currentRoute} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {renderPageComponent()}
      </main>

      {/* Site Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
