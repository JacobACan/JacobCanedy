'use client';

import { SectionHeader } from '@/app/components/ui/SectionHeader';
import { education } from '@/app/data/content';

export function EducationSection() {
  return (
    <section id="education" style={{ marginTop: '120px' }}>
      <SectionHeader label="02 — Education" title="Academic" italicWord="Background" />

      <div className="space-y-6">
        {education.map((entry) => (
          <div
            key={entry.institution}
            className="rounded-lg"
            style={{ background: 'var(--cream-dark)', padding: '24px 28px' }}
          >
            <div className="flex items-start justify-between gap-4 mb-2">
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-playfair), Georgia, serif',
                    fontSize: '18px',
                    fontWeight: 400,
                    color: 'var(--ink)',
                  }}
                >
                  {entry.institution}
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--ink-light)', marginTop: '4px' }}>
                  {entry.degree} in{' '}
                  <em style={{ fontStyle: 'italic', color: 'var(--forest-mid)' }}>{entry.field}</em>
                  {entry.via && <span> &middot; via {entry.via}</span>}
                </p>
              </div>
              {entry.status === 'in-progress' && (
                <span
                  className="uppercase tracking-[0.1em] rounded-full flex-shrink-0"
                  style={{
                    fontSize: '9px',
                    fontWeight: 500,
                    background: 'rgba(194,128,64,.15)',
                    color: 'var(--rust)',
                    padding: '3px 10px',
                  }}
                >
                  In Progress
                </span>
              )}
            </div>

            <div
              className="flex flex-wrap gap-4 mt-3"
              style={{ fontSize: '12px', color: 'var(--stone)' }}
            >
              <span>{entry.startDate} &ndash; {entry.endDate}</span>
              <span>{entry.location}</span>
              {entry.gpa && <span>GPA: {entry.gpa}</span>}
            </div>

            {entry.coursework && (
              <div className="mt-4 flex flex-wrap gap-2">
                {entry.coursework.map((course) => (
                  <span
                    key={course}
                    className="rounded-full"
                    style={{
                      fontSize: '11px',
                      color: 'var(--ink-light)',
                      background: 'var(--cream)',
                      padding: '3px 10px',
                    }}
                  >
                    {course}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
