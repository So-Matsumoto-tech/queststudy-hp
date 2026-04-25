import Link from 'next/link';
import type { ReactNode } from 'react';

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  external?: boolean;
  className?: string;
  ariaLabel?: string;
}

/**
 * Primary/secondary CTA button.
 * - primary: parchment fill, navy text (used for the main "try" action)
 * - secondary: outlined, parchment text (used for tertiary actions)
 * - ghost: no border, subtle, for in-prose links that need button hit-area
 */
export function Button({
  href,
  children,
  variant = 'primary',
  external = false,
  className = '',
  ariaLabel,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 px-6 py-3 text-sm md:text-base font-medium tracking-wide transition-all duration-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-brass focus:ring-offset-2 focus:ring-offset-brand-night';

  const styles: Record<NonNullable<ButtonProps['variant']>, string> = {
    primary:
      'bg-brand-parchment text-brand-night hover:bg-brand-brass hover:text-brand-night',
    secondary:
      'border border-brand-parchment/40 text-brand-parchment hover:border-brand-parchment hover:bg-brand-parchment/5',
    ghost:
      'text-brand-parchment/80 hover:text-brand-brass hover:bg-brand-parchment/5',
  };

  const classes = `${base} ${styles[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
