'use client';

import { SectionHeader } from '@/app/components/ui/SectionHeader';
import { work } from '@/app/data/content';

export function WorkSection() {
  return (
    <section id="work" style={{ marginTop: '120px' }}>
      <SectionHeader label="03 — Work" title="Professional" italicWord="Experience" />

      <div className="space-y-6">
        {work.map((entry, i) => (
          <div
            key={`${entry.company}-${entry.startDate}`}
            className="rounded-lg"
            style={{ background: 'var(--cream-dark)', padding: '24px 28px' }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-playfair), Georgia, serif',
                fontSize: '18px',
                fontWeight: 400,
                color: 'var(--ink)',
              }}
            >
              {entry.company}
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--forest-mid)', fontStyle: 'italic', marginTop: '2px' }}>
              {entry.role}
            </p>

            <div
              className="flex flex-wrap gap-4 mt-3"
              style={{ fontSize: '12px', color: 'var(--stone)' }}
            >
              <span>{entry.startDate} &ndash; {entry.endDate}</span>
              <span>{entry.location}</span>
            </div>

            <p style={{ fontSize: '14px', color: 'var(--ink-mid)', marginTop: '14px', lineHeight: 1.7, maxWidth: '600px' }}>
              {entry.description}
            </p>

            {/* Stack */}
            <div className="mt-5 flex flex-wrap gap-2">
              {entry.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full"
                  style={{
                    fontSize: '11px',
                    fontWeight: 500,
                    color: 'var(--forest)',
                    background: 'rgba(46,74,53,.1)',
                    padding: '4px 12px',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
