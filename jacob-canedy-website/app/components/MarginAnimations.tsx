'use client';

/**
 * Stop-motion-feel ambient animations that live in the page margins.
 * Visible only on wider screens where the margins are present.
 *
 * Per WES spec: 8–12fps (CSS steps()), physical materials
 * (leaves, musical notes, dust motes), warm palette, unhurried pacing.
 */

/* ── SVG leaf shapes (paper-cutout style) ── */

function Leaf({ color, size = 14 }: { color: string; size?: number }) {
  return (
    <svg width={size} height={size * 1.3} viewBox="0 0 14 18" fill="none">
      <path
        d="M7 0 C3 3, 0 8, 2 14 C3 16, 5 18, 7 18 C9 18, 11 16, 12 14 C14 8, 11 3, 7 0Z"
        fill={color}
      />
      <line x1="7" y1="3" x2="7" y2="15" stroke={color} strokeWidth="0.5" opacity="0.4" />
    </svg>
  );
}

function MusicalNote({ color }: { color: string }) {
  return (
    <svg width="12" height="16" viewBox="0 0 12 16" fill="none">
      <circle cx="4" cy="13" r="3" fill={color} />
      <line x1="7" y1="2" x2="7" y2="13" stroke={color} strokeWidth="1.5" />
      <path d="M7 2 C9 1, 11 2, 11 4 C11 6, 9 6, 7 5" fill={color} />
    </svg>
  );
}

function DustMote({ color, size = 3 }: { color: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 4 4">
      <circle cx="2" cy="2" r="2" fill={color} />
    </svg>
  );
}

function PineNeedle({ color }: { color: string }) {
  return (
    <svg width="18" height="3" viewBox="0 0 18 3" fill="none">
      <path d="M0 1.5 Q9 0, 18 1.5" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function MarginAnimations() {
  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none hidden xl:block"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    >
      {/* ── LEFT MARGIN ── */}

      {/* Falling leaves — staggered, slow, stop-motion feel */}
      <div className="margin-leaf" style={{ left: '4%', animationDelay: '0s', animationDuration: '18s' }}>
        <Leaf color="var(--forest-light)" size={14} />
      </div>
      <div className="margin-leaf" style={{ left: '8%', animationDelay: '6s', animationDuration: '22s' }}>
        <Leaf color="var(--amber)" size={11} />
      </div>
      <div className="margin-leaf" style={{ left: '12%', animationDelay: '13s', animationDuration: '20s' }}>
        <Leaf color="var(--dusty-rose)" size={10} />
      </div>

      {/* Dust motes — amber warmth, drifting upward like studio light */}
      <div className="margin-mote" style={{ left: '6%', bottom: '20%', animationDelay: '0s', animationDuration: '14s' }}>
        <DustMote color="var(--amber-pale)" size={3} />
      </div>
      <div className="margin-mote" style={{ left: '10%', bottom: '40%', animationDelay: '5s', animationDuration: '16s' }}>
        <DustMote color="var(--amber-light)" size={2} />
      </div>
      <div className="margin-mote" style={{ left: '3%', bottom: '60%', animationDelay: '9s', animationDuration: '12s' }}>
        <DustMote color="var(--stone-light)" size={4} />
      </div>

      {/* Pine needle — slow tumble */}
      <div className="margin-needle" style={{ left: '7%', animationDelay: '4s', animationDuration: '24s' }}>
        <PineNeedle color="var(--forest-mid)" />
      </div>

      {/* ── RIGHT MARGIN ── */}

      {/* Falling leaves */}
      <div className="margin-leaf" style={{ right: '5%', left: 'auto', animationDelay: '3s', animationDuration: '20s' }}>
        <Leaf color="var(--amber)" size={12} />
      </div>
      <div className="margin-leaf" style={{ right: '9%', left: 'auto', animationDelay: '10s', animationDuration: '19s' }}>
        <Leaf color="var(--forest-light)" size={13} />
      </div>
      <div className="margin-leaf" style={{ right: '13%', left: 'auto', animationDelay: '16s', animationDuration: '23s' }}>
        <Leaf color="var(--rust)" size={9} />
      </div>

      {/* Musical notes — slow float */}
      <div className="margin-note" style={{ right: '6%', left: 'auto', animationDelay: '2s', animationDuration: '16s' }}>
        <MusicalNote color="var(--amber-pale)" />
      </div>
      <div className="margin-note" style={{ right: '11%', left: 'auto', animationDelay: '8s', animationDuration: '20s' }}>
        <MusicalNote color="var(--stone-light)" />
      </div>

      {/* Dust motes */}
      <div className="margin-mote" style={{ right: '4%', left: 'auto', bottom: '30%', animationDelay: '3s', animationDuration: '15s' }}>
        <DustMote color="var(--amber-pale)" size={3} />
      </div>
      <div className="margin-mote" style={{ right: '8%', left: 'auto', bottom: '55%', animationDelay: '7s', animationDuration: '13s' }}>
        <DustMote color="var(--amber-light)" size={2} />
      </div>

      {/* Pine needle */}
      <div className="margin-needle" style={{ right: '6%', left: 'auto', animationDelay: '11s', animationDuration: '26s' }}>
        <PineNeedle color="var(--forest)" />
      </div>
    </div>
  );
}
