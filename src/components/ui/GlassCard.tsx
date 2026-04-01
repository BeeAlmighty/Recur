import React from 'react';
import { cn } from '../../utils/cn';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'featured' | 'dark';
  children: React.ReactNode;
}

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "backdrop-blur-glass rounded-2xl border overflow-hidden",
          {
            "bg-white/5 border-white/10": variant === 'default',
            "bg-gold/5 border-gold/40": variant === 'featured',
            "bg-[var(--color-surface-1)] border-white/5": variant === 'dark',
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassCard.displayName = 'GlassCard';