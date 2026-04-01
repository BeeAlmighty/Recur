import React from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'gold' | 'dark';
}

export function Badge({ children, className, variant = 'gold', ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "px-3 py-1 text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-full shadow-lg",
        {
          "bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-light)] text-black": variant === 'gold',
          "bg-[#181818] border border-[var(--color-gold)]/30 text-[var(--color-gold)]": variant === 'dark',
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}