'use client';

import { useState, type ReactNode } from 'react';

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  autoEmbed?: boolean;
  className?: string;
  /** Custom cover element rendered instead of the YouTube thumbnail */
  cover?: ReactNode;
}

export function YouTubeEmbed({ videoId, title, autoEmbed = false, className = '', cover }: YouTubeEmbedProps) {
  const [loaded, setLoaded] = useState(autoEmbed);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  if (loaded) {
    return (
      <div className={`relative w-full aspect-video ${className}`}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=${autoEmbed ? 0 : 1}&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          style={{ borderRadius: '8px', border: '0.5px solid rgba(0,0,0,.08)' }}
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => setLoaded(true)}
      className={`relative w-full aspect-video group cursor-pointer overflow-hidden ${className}`}
      style={{ borderRadius: '8px', border: '0.5px solid rgba(0,0,0,.08)' }}
      aria-label={`Play video: ${title}`}
    >
      {cover ? (
        /* Custom cover graphic */
        <div className="absolute inset-0">{cover}</div>
      ) : (
        /* Default: YouTube thumbnail with warm overlays */
        <>
          <img
            src={thumbnailUrl}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {/* Amber wash overlay */}
          <div
            className="absolute inset-0 group-hover:opacity-60 transition-opacity"
            style={{
              opacity: 0.4,
              background: 'linear-gradient(160deg, rgba(194,128,64,.35) 0%, transparent 45%, rgba(46,74,53,.25) 100%)',
            }}
          />
          {/* Vignette */}
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse 90% 90% at 50% 50%, transparent 40%, rgba(0,0,0,.4) 100%)',
            }}
          />
        </>
      )}

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="flex items-center justify-center rounded-full group-hover:scale-105 transition-transform"
          style={{
            width: '56px',
            height: '56px',
            background: 'rgba(245,240,232,.9)',
            boxShadow: '0 4px 20px rgba(0,0,0,.2)',
          }}
        >
          <svg width="20" height="22" viewBox="0 0 20 22" fill="var(--pine)">
            <polygon points="3,0 20,11 3,22" />
          </svg>
        </div>
      </div>

      {/* Title */}
      <div
        className="absolute bottom-0 left-0 right-0 px-5 py-3"
        style={{
          fontFamily: 'var(--font-playfair), Georgia, serif',
          fontSize: '14px',
          fontStyle: 'italic',
          color: 'var(--cream)',
          background: cover
            ? 'linear-gradient(transparent, rgba(29,49,40,.5))'
            : 'linear-gradient(transparent, rgba(0,0,0,.6))',
        }}
      >
        {title}
      </div>
    </button>
  );
}
