'use client';

import { useEffect, useState } from 'react';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'work', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'hobbies', label: 'Hobbies' },
];

export function SectionNav() {
  const [active, setActive] = useState('about');

  // Track which section is in view
  useEffect(() => {
    const sectionEls = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: '-60px 0px -60% 0px', threshold: 0 },
    );

    sectionEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 56;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav
      className="sticky top-0 z-30"
      style={{
        background: 'var(--cream)',
        borderBottom: '0.5px solid var(--stone-light)',
      }}
    >
      <div
        className="flex items-center gap-1 overflow-x-auto"
        style={{
          maxWidth: '860px',
          margin: '0 auto',
          padding: '0 20px',
        }}
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="cursor-pointer whitespace-nowrap transition-colors"
            style={{
              padding: '14px 16px',
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase' as const,
              color: active === item.id ? 'var(--amber)' : 'var(--stone)',
              borderBottom: active === item.id ? '2px solid var(--amber)' : '2px solid transparent',
              background: 'transparent',
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
