import React from 'react';
import { cn } from '../../utils/cn';

interface GoldButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
}

export const GoldButton = React.forwardRef<HTMLButtonElement, GoldButtonProps>(
  ({ className, variant = 'primary', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center px-8 py-4 rounded-full font-sans font-medium transition-all duration-300 active:scale-95",
          {
            "bg-[var(--color-gold)] text-black hover:bg-[var(--color-gold-light)] shadow-[0_0_20px_rgba(201,168,76,0.3)] hover:shadow-[0_0_30px_rgba(232,201,106,0.5)]": variant === 'primary',
            "bg-transparent border border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold)]/10": variant === 'outline',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

GoldButton.displayName = 'GoldButton';