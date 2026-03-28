'use client';

import { personal } from '@/app/data/content';
import { MarginAnimations } from './MarginAnimations';
import { SectionNav } from './SectionNav';
import { AboutSection } from './sections/AboutSection';
import { EducationSection } from './sections/EducationSection';
import { WorkSection } from './sections/WorkSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { HobbiesSection } from './sections/HobbiesSection';

export default function MainLayout() {
  return (
    <>
      <MarginAnimations />

      {/* Cover / Hero */}
      <header
        className="relative overflow-hidden"
        style={{
          background: 'var(--pine)',
          color: 'var(--cream)',
          padding: '80px 60px 60px',
        }}
      >
        {/* Ambient gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 60% 40% at 80% 30%, rgba(194,128,64,.18) 0%, transparent 70%),
              radial-gradient(ellipse 40% 60% at 20% 80%, rgba(46,74,53,.4) 0%, transparent 70%)
            `,
          }}
        />

        <div className="relative">
          <div
            className="uppercase tracking-[0.25em] mb-8"
            style={{
              fontSize: '10px',
              fontWeight: 500,
              color: 'var(--amber-light)',
              fontFamily: 'var(--font-dm-sans), sans-serif',
            }}
          >
            Portfolio
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: 'clamp(36px, 5vw, 60px)',
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
            }}
          >
            {personal.name.split(' ')[0]}
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--amber-light)' }}>
              {personal.name.split(' ').slice(1).join(' ')}
            </em>
          </h1>

          {/* Amber rule */}
          <div
            className="my-7"
            style={{ width: '48px', height: '1px', background: 'var(--amber)' }}
          />

          <div
            className="uppercase tracking-[0.08em]"
            style={{
              fontSize: '13px',
              fontWeight: 400,
              color: 'rgba(245,240,232,.55)',
            }}
          >
            Developer &middot; Musician &middot; {personal.location}
          </div>
        </div>
      </header>

      <SectionNav />

      {/* Main content — single scrolling editorial page */}
      <main style={{ maxWidth: '860px', margin: '0 auto', padding: '0 20px 80px' }}>
        <AboutSection />
        <EducationSection />
        <WorkSection />
        <ProjectsSection />
        <HobbiesSection />

        {/* Footer */}
        <footer
          style={{
            marginTop: '120px',
            padding: '28px 0',
            borderTop: '0.5px solid var(--stone-light)',
          }}
        >
          <div className="flex justify-between items-center flex-wrap gap-3">
            <div
              style={{
                fontFamily: 'var(--font-playfair), Georgia, serif',
                fontSize: '14px',
                fontStyle: 'italic',
                color: 'var(--ink-light)',
              }}
            >
              {personal.name}
            </div>
            <div
              style={{
                fontSize: '10px',
                color: 'var(--stone)',
                letterSpacing: '0.1em',
              }}
            >
              {personal.location}
            </div>
          </div>

          {/* Credits */}
          <div
            style={{
              marginTop: '20px',
              fontSize: '11px',
              color: 'var(--stone)',
              lineHeight: 1.6,
            }}
          >
            Design system inspired by{' '}
            <span style={{ color: 'var(--ink-mid)', fontWeight: 500 }}>
              Dylann &amp; Kris Sveen
            </span>{' '}
            / Wrightwood Education Studio
            <br />
            Spec compiled by{' '}
            <span style={{ color: 'var(--ink-mid)', fontWeight: 500 }}>Claude Sonnet 4.6</span>
            {' '}&middot;{' '}
            Built by{' '}
            <span style={{ color: 'var(--ink-mid)', fontWeight: 500 }}>Jacob Canedy</span>
          </div>
        </footer>
      </main>
    </>
  );
}
