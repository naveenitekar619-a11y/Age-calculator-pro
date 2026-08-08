import React from 'react';

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
  return (
    <div
      className={`my-6 rounded-xl border border-dashed border-slate-800 bg-slate-900/60 p-4 text-center select-none ${className}`}
      aria-label="Advertisement Placeholder"
    >
      <div className="flex items-center justify-between text-xs text-slate-500 font-medium mb-2 border-b border-slate-800 pb-1">
        <span>Advertisement</span>
        <span className="text-[10px] uppercase tracking-wider font-mono bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded">
          AdSense Ready
        </span>
      </div>

      <div className="min-h-[90px] flex flex-col items-center justify-center text-slate-500 gap-1 py-2">
        <p className="text-xs font-mono text-slate-400">
          google_ad_client = &quot;ca-pub-XXXXXXXXXXXXXXXX&quot;;
        </p>
        <p className="text-[11px] font-mono text-slate-500">
          google_ad_slot = &quot;{slotId}&quot;;
        </p>
        <p className="text-[11px] text-slate-500 italic">
          [ Ad Space Reserved for Google AdSense – Format: {format} ]
        </p>
      </div>
    </div>
  );
};
