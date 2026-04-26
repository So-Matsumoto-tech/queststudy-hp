'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'article';
}

export default function RevealOnView({
  children,
  delay = 0,
  className,
  as: Tag = 'div',
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            obs.disconnect();
            break;
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const style: React.CSSProperties | undefined =
    delay > 0 ? { transitionDelay: `${delay}ms` } : undefined;

  return (
    <Tag
      ref={ref as never}
      className={`v2-reveal${shown ? ' is-shown' : ''}${
        className ? ` ${className}` : ''
      }`}
      style={style}
    >
      {children}
    </Tag>
  );
}
