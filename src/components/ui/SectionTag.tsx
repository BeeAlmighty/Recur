import React from 'react';
import { cn } from '../../utils/cn';

interface SectionTagProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  showPulse?: boolean;
}

export function SectionTag({ children, className, showPulse = true, ...props }: SectionTagProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-gold)]/30 bg-[var(--color-gold)]/10 text-[var(--color-gold)] text-sm font-medium',
        className,
      )}
      {...props}
    >
      {showPulse && <span className="w-2 h-2 rounded-full bg-[var(--color-gold)] animate-pulse" />}
      {children}
    </div>
  );
}
