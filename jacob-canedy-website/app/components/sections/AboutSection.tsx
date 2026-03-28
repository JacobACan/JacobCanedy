'use client';

import { SectionHeader } from '@/app/components/ui/SectionHeader';
import { YouTubeEmbed } from '@/app/components/ui/YouTubeEmbed';
import { IntroCover } from '@/app/components/ui/IntroCover';
import { personal } from '@/app/data/content';

export function AboutSection() {
  return (
    <section id="about" style={{ marginTop: '120px' }}>
      <SectionHeader label="01 — About" title="At a" italicWord="Glance" />

      <p style={{ color: 'var(--ink-mid)', marginBottom: '14px', maxWidth: '660px' }}>
        {personal.summary}
        <br />
        {personal.summaryLine2}
      </p>

      {/* Contact links */}
      <div className="flex flex-wrap gap-3 mt-6 mb-8">
        {[
          { label: personal.email, href: `mailto:${personal.email}` },
          { label: personal.phone, href: `tel:${personal.phone}` },
          { label: 'LinkedIn', href: personal.linkedin },
          { label: 'GitHub', href: personal.github },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="transition-opacity hover:opacity-70"
            style={{
              fontSize: '12px',
              fontWeight: 500,
              color: 'var(--forest)',
              borderBottom: '1px solid var(--forest-light)',
              paddingBottom: '2px',
            }}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Video intro */}
      <div>
        <YouTubeEmbed
          videoId={personal.introVideoId}
          title="Hello, I'm Jacob"
          cover={<IntroCover />}
        />
      </div>
    </section>
  );
}
