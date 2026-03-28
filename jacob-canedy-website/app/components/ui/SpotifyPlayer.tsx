'use client';

import { useState, useRef, useEffect } from 'react';

export interface SpotifyTrack {
  name: string;
  artist: string;
  albumArt?: string;
  previewUrl: string;
}

interface SpotifyPlayerProps {
  tracks: SpotifyTrack[];
}

export function SpotifyPlayer({ tracks }: SpotifyPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const current = tracks[currentIndex];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };
    const onEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      if (currentIndex < tracks.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    };

    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('ended', onEnded);
    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('ended', onEnded);
    };
  }, [currentIndex, tracks.length]);

  const loadAndPlay = (index: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    const track = tracks[index];
    if (!track) return;
    audio.src = track.previewUrl;
    setProgress(0);
    audio.play().catch(() => setIsPlaying(false));
    setIsPlaying(true);
  };

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      if (!audio.src) {
        loadAndPlay(currentIndex);
      } else {
        audio.play().catch(() => {});
        setIsPlaying(true);
      }
    }
  };

  const selectTrack = (index: number) => {
    setCurrentIndex(index);
    loadAndPlay(index);
  };

  if (tracks.length === 0) {
    return (
      <div
        className="rounded-lg text-center"
        style={{
          padding: '32px',
          background: 'var(--cream-dark)',
          borderLeft: '3px solid var(--amber)',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-playfair), Georgia, serif',
            fontSize: '16px',
            fontStyle: 'italic',
            color: 'var(--ink-light)',
          }}
        >
          No tracks available yet
        </p>
        <p style={{ fontSize: '12px', color: 'var(--stone)', marginTop: '8px' }}>
          Spotify integration coming soon.
        </p>
      </div>
    );
  }

  return (
    <div
      className="rounded-lg overflow-hidden"
      style={{ border: '0.5px solid rgba(0,0,0,.08)', background: 'var(--cream)' }}
    >
      <audio ref={audioRef} preload="none" />

      {/* Now playing */}
      <div
        className="flex items-center gap-4"
        style={{ padding: '16px 20px', background: 'var(--cream-dark)' }}
      >
        {current.albumArt && (
          <img
            src={current.albumArt}
            alt={current.name}
            width={48}
            height={48}
            className="rounded"
            style={{ border: '0.5px solid rgba(0,0,0,.08)' }}
          />
        )}
        <div className="flex-1 min-w-0">
          <p
            className="truncate"
            style={{
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: '14px',
              color: 'var(--ink)',
            }}
          >
            {current.name}
          </p>
          <p className="truncate" style={{ fontSize: '12px', color: 'var(--stone)', marginTop: '2px' }}>
            {current.artist}
          </p>
        </div>
        <button
          onClick={togglePlay}
          className="flex-shrink-0 flex items-center justify-center rounded-full cursor-pointer transition-opacity hover:opacity-80"
          style={{
            width: '40px',
            height: '40px',
            background: 'var(--pine)',
          }}
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <svg width="12" height="14" viewBox="0 0 12 14" fill="var(--cream)">
              <rect x="1" y="1" width="3" height="12" />
              <rect x="8" y="1" width="3" height="12" />
            </svg>
          ) : (
            <svg width="12" height="14" viewBox="0 0 12 14" fill="var(--cream)">
              <polygon points="2,0 12,7 2,14" />
            </svg>
          )}
        </button>
      </div>

      {/* Progress bar */}
      <div style={{ height: '2px', background: 'var(--cream-dark)' }}>
        <div
          style={{
            height: '100%',
            width: `${progress}%`,
            background: 'var(--amber)',
            transition: 'none',
          }}
        />
      </div>

      {/* Track list */}
      <div className="max-h-48 overflow-y-auto">
        {tracks.map((track, i) => (
          <button
            key={i}
            onClick={() => selectTrack(i)}
            className="w-full text-left flex items-center gap-3 cursor-pointer transition-colors hover:opacity-80"
            style={{
              padding: '10px 20px',
              fontSize: '13px',
              background: i === currentIndex ? 'var(--cream-dark)' : 'transparent',
              color: 'var(--ink-mid)',
              borderBottom: '0.5px solid var(--cream-dark)',
            }}
          >
            <span
              className="w-5 text-center flex-shrink-0"
              style={{ fontSize: '11px', color: 'var(--stone)' }}
            >
              {i === currentIndex && isPlaying ? '>' : i + 1}
            </span>
            <span className="truncate flex-1">{track.name}</span>
            <span className="flex-shrink-0" style={{ fontSize: '11px', color: 'var(--stone)' }}>
              0:30
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
