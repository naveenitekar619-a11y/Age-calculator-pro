import React, { useEffect } from 'react';

interface AdPlaceholderProps {
  slotId?: string;
  className?: string;
  format?: 'horizontal' | 'rectangle' | 'responsive';
}

export const AdPlaceholder: React.FC<AdPlaceholderProps> = ({
  slotId = '0000000000',
  className = '',
  format = 'responsive',
}) => {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      // Ignore adsbygoogle errors if adblocker is active or script not loaded
    }
  }, []);

  return (
    <div
      className={`my-6 rounded-xl border border-dashed border-slate-800 bg-slate-900/60 p-4 text-center select-none ${className}`}
      aria-label="Advertisement"
    >
      <div className="flex items-center justify-between text-xs text-slate-500 font-medium mb-2 border-b border-slate-800 pb-1">
        <span>Advertisement</span>
        <span className="text-[10px] uppercase tracking-wider font-mono bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded">
          AdSense
        </span>
      </div>

      <div className="min-h-[90px] flex flex-col items-center justify-center text-slate-500 gap-1 py-1 overflow-hidden">
        <ins
          className="adsbygoogle"
          style={{ display: 'block', width: '100%' }}
          data-ad-client="ca-pub-9802297875883882"
          data-ad-slot={slotId}
          data-ad-format={format}
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
};

