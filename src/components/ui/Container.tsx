import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: keyof HTMLElementTagNameMap;
}

/**
 * Page-level horizontal container: 1280px max-width with responsive padding.
 */
export function Container({ children, className = '', as = 'div' }: ContainerProps) {
  const Tag = as as 'div';
  return (
    <Tag className={`mx-auto w-full max-w-[1280px] px-6 md:px-10 lg:px-16 ${className}`}>
      {children}
    </Tag>
  );
}
