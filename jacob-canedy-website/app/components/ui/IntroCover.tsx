'use client';

/**
 * Custom SVG cover for the intro video.
 * Uses the WES palette so it sits naturally in the page
 * instead of the cool-blue YouTube thumbnail.
 */
export function IntroCover() {
  return (
    <div className="w-full h-full relative" style={{ background: 'var(--pine)' }}>
      <svg
        viewBox="0 0 800 450"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        <defs>
          {/* Warm amber radial glow */}
          <radialGradient id="amber-glow" cx="65%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#C28040" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#C28040" stopOpacity="0" />
          </radialGradient>

          {/* Forest radial from bottom-left */}
          <radialGradient id="forest-glow" cx="20%" cy="85%" r="60%">
            <stop offset="0%" stopColor="#2E4A35" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#2E4A35" stopOpacity="0" />
          </radialGradient>

          {/* Vignette */}
          <radialGradient id="vignette" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="100%" stopColor="#1D3128" stopOpacity="0.35" />
          </radialGradient>
        </defs>

        {/* Base pine background */}
        <rect width="800" height="450" fill="#1D3128" />

        {/* Mountain silhouette layers */}
        {/* Far mountains — faded forest */}
        <path
          d="M0 320 L80 270 L160 295 L240 250 L320 280 L400 240 L480 265 L560 230 L640 260 L720 245 L800 275 L800 450 L0 450Z"
          fill="#2E4A35"
          opacity="0.35"
        />

        {/* Mid mountains — deeper */}
        <path
          d="M0 360 L60 320 L130 340 L200 300 L280 330 L360 290 L440 315 L520 285 L600 310 L680 295 L760 325 L800 310 L800 450 L0 450Z"
          fill="#2E4A35"
          opacity="0.5"
        />

        {/* Near mountains / tree line */}
        <path
          d="M0 400 L40 370 L80 385 L120 360 L160 375 L200 355 L240 368 L280 350 L320 365 L360 345 L400 358 L440 340 L480 355 L520 348 L560 362 L600 345 L640 358 L680 340 L720 360 L760 350 L800 370 L800 450 L0 450Z"
          fill="#1D3128"
          opacity="0.7"
        />

        {/* Pine tree silhouettes on the ridge */}
        {/* Left cluster */}
        <polygon points="60,370 66,340 72,370" fill="#1D3128" opacity="0.8" />
        <polygon points="80,385 88,345 96,385" fill="#1D3128" opacity="0.85" />
        <polygon points="100,378 106,350 112,378" fill="#1D3128" opacity="0.75" />

        {/* Center cluster */}
        <polygon points="340,345 348,305 356,345" fill="#1D3128" opacity="0.85" />
        <polygon points="360,348 366,315 372,348" fill="#1D3128" opacity="0.8" />
        <polygon points="380,355 386,320 392,355" fill="#1D3128" opacity="0.75" />
        <polygon points="400,358 408,310 416,358" fill="#1D3128" opacity="0.9" />

        {/* Right cluster */}
        <polygon points="620,345 628,305 636,345" fill="#1D3128" opacity="0.8" />
        <polygon points="650,355 656,325 662,355" fill="#1D3128" opacity="0.85" />
        <polygon points="680,340 688,300 696,340" fill="#1D3128" opacity="0.75" />

        {/* Ground / earth tone base */}
        <rect x="0" y="410" width="800" height="40" fill="#3A3629" opacity="0.4" />

        {/* Ambient glows */}
        <rect width="800" height="450" fill="url(#amber-glow)" />
        <rect width="800" height="450" fill="url(#forest-glow)" />
        <rect width="800" height="450" fill="url(#vignette)" />

        {/* Stars / light particles */}
        <circle cx="150" cy="80" r="1.5" fill="#F0D9B0" opacity="0.5" />
        <circle cx="320" cy="50" r="1" fill="#F0D9B0" opacity="0.4" />
        <circle cx="500" cy="90" r="1.5" fill="#F0D9B0" opacity="0.45" />
        <circle cx="650" cy="60" r="1" fill="#D9A05A" opacity="0.35" />
        <circle cx="720" cy="110" r="1.5" fill="#F0D9B0" opacity="0.4" />
        <circle cx="250" cy="120" r="1" fill="#D9A05A" opacity="0.3" />
        <circle cx="580" cy="130" r="1" fill="#F0D9B0" opacity="0.35" />

        {/* Amber rule accent line */}
        <rect x="320" y="175" width="160" height="1" fill="#C28040" opacity="0.6" rx="0.5" />

        {/* Title text */}
        <text
          x="400"
          y="215"
          textAnchor="middle"
          fontFamily="Georgia, 'Playfair Display', serif"
          fontSize="36"
          fontWeight="400"
          fill="#F5F0E8"
          letterSpacing="-0.5"
        >
          Hello, I&apos;m
        </text>
        <text
          x="400"
          y="260"
          textAnchor="middle"
          fontFamily="Georgia, 'Playfair Display', serif"
          fontSize="42"
          fontStyle="italic"
          fontWeight="400"
          fill="#D9A05A"
          letterSpacing="-0.5"
        >
          Jacob
        </text>

        {/* Subtitle */}
        <text
          x="400"
          y="295"
          textAnchor="middle"
          fontFamily="system-ui, 'DM Sans', sans-serif"
          fontSize="10"
          fontWeight="500"
          fill="#F5F0E8"
          opacity="0.45"
          letterSpacing="3"
          style={{ textTransform: 'uppercase' }}
        >
          WATCH THE INTRODUCTION
        </text>
      </svg>
    </div>
  );
}
