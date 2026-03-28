'use client';

import { SectionHeader } from '@/app/components/ui/SectionHeader';
import { YouTubeEmbed } from '@/app/components/ui/YouTubeEmbed';
import { projects } from '@/app/data/content';

export function ProjectsSection() {
  return (
    <section id="projects" style={{ marginTop: '120px' }}>
      <SectionHeader label="04 — Projects" title="Things I've" italicWord="Built" />

      <div className="space-y-16">
        {projects.map((project, i) => (
          <div key={project.name}>
            {/* Project number label */}
            <div className="flex items-center gap-3 mb-4">
              <span
                style={{
                  fontFamily: 'var(--font-playfair), Georgia, serif',
                  fontSize: '32px',
                  fontStyle: 'italic',
                  color: 'var(--amber-pale)',
                  lineHeight: 1,
                }}
              >
                {i + 1}
              </span>
              <div style={{ flex: 1, height: '0.5px', background: 'var(--stone-light)' }} />
            </div>

            <div
              className="rounded-lg overflow-hidden"
              style={{ border: '0.5px solid rgba(0,0,0,.08)' }}
            >
              {/* Video embed if available */}
              {project.youtubeId && (
                <YouTubeEmbed videoId={project.youtubeId} title={project.name} />
              )}

              <div style={{ padding: '24px 28px', background: 'var(--cream-dark)' }}>
                {/* Header */}
                <div className="flex items-center justify-between gap-3 mb-2">
                  <h3
                  style={{
                    fontFamily: 'var(--font-playfair), Georgia, serif',
                    fontSize: '18px',
                    fontWeight: 400,
                    color: 'var(--ink)',
                  }}
                >
                  {project.name}
                </h3>
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
                  {project.language}
                </span>
              </div>

              {/* Description */}
              <p style={{ fontSize: '14px', color: 'var(--ink-mid)', lineHeight: 1.7, maxWidth: '600px', marginBottom: '14px' }}>
                {project.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.features.map((f) => (
                  <span
                    key={f}
                    className="rounded-full"
                    style={{
                      fontSize: '11px',
                      color: 'var(--ink-light)',
                      background: 'var(--cream)',
                      padding: '3px 10px',
                    }}
                  >
                    {f}
                  </span>
                ))}
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full"
                    style={{
                      fontSize: '11px',
                      fontWeight: 500,
                      color: 'var(--forest)',
                      background: 'rgba(46,74,53,.1)',
                      padding: '4px 12px',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full transition-opacity hover:opacity-80"
                    style={{
                      fontSize: '12px',
                      fontWeight: 500,
                      color: 'var(--cream)',
                      background: 'var(--pine)',
                      padding: '8px 18px',
                    }}
                  >
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full transition-opacity hover:opacity-80"
                    style={{
                      fontSize: '12px',
                      fontWeight: 500,
                      color: 'var(--cream)',
                      background: 'var(--amber)',
                      padding: '8px 18px',
                    }}
                  >
                    Demo
                  </a>
                )}
              </div>
            </div>
          </div>
          </div>
        ))}
      </div>
    </section>
  );
}
