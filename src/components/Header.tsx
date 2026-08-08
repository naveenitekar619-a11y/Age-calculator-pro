import React, { useState } from 'react';
import { Calendar, Menu, X, Clock, HelpCircle, Info, Calculator, Home } from 'lucide-react';
import { PageRoute } from '../types';

interface HeaderProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; route: PageRoute; icon: React.ReactNode }[] = [
    { label: 'Home', route: '/', icon: <Home className="w-4 h-4" /> },
    { label: 'Age Calculator', route: '/age-calculator', icon: <Calculator className="w-4 h-4" /> },
    { label: 'How It Works', route: '/how-it-works', icon: <Clock className="w-4 h-4" /> },
    { label: 'About', route: '/about', icon: <Info className="w-4 h-4" /> },
    { label: 'FAQ', route: '/faq', icon: <HelpCircle className="w-4 h-4" /> },
  ];

  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800/80 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('/')}
          className="flex items-center gap-2.5 text-left group focus:outline-none"
          aria-label="Age Calculator Home"
        >
          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:bg-blue-500 transition-colors">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <span className="block text-xl font-bold tracking-tight text-slate-100 group-hover:text-blue-400 transition-colors">
              Age Calculator
            </span>
            <span className="block text-[11px] font-medium text-slate-400 leading-3">
              Exact Age Utility
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = currentRoute === item.route;
            return (
              <button
                key={item.route}
                onClick={() => handleNavClick(item.route)}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                  isActive
                    ? 'bg-blue-600/20 text-blue-400 font-semibold border border-blue-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <span className={isActive ? 'text-blue-400' : 'text-slate-400'}>{item.icon}</span>
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 py-3 space-y-1 shadow-lg">
          {navItems.map((item) => {
            const isActive = currentRoute === item.route;
            return (
              <button
                key={item.route}
                onClick={() => handleNavClick(item.route)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-base font-medium flex items-center gap-3 transition-colors ${
                  isActive
                    ? 'bg-blue-600/20 text-blue-400 font-semibold border border-blue-500/30'
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                <span className={isActive ? 'text-blue-400' : 'text-slate-400'}>{item.icon}</span>
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
