'use client';

interface SectionHeaderProps {
  label: string;
  title: string;
  italicWord?: string;
}

export function SectionHeader({ label, title, italicWord }: SectionHeaderProps) {
  return (
    <div className="mb-6">
      <div
        className="uppercase tracking-[0.3em] mb-3"
        style={{
          fontSize: '9px',
          fontWeight: 500,
          color: 'var(--amber)',
        }}
      >
        {label}
      </div>
      <h2
        style={{
          fontFamily: 'var(--font-playfair), Georgia, serif',
          fontSize: '28px',
          fontWeight: 400,
          lineHeight: 1.2,
          color: 'var(--ink)',
          paddingBottom: '16px',
          borderBottom: '0.5px solid var(--stone-light)',
        }}
      >
        {title}
        {italicWord && (
          <em style={{ fontStyle: 'italic', color: 'var(--forest-mid)' }}>
            {' '}{italicWord}
          </em>
        )}
      </h2>
    </div>
  );
}
