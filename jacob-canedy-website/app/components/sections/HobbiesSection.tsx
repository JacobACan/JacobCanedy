'use client';

import { SectionHeader } from '@/app/components/ui/SectionHeader';
import { SpotifyPlayer, type SpotifyTrack } from '@/app/components/ui/SpotifyPlayer';

const artistArt = 'https://image-cdn-fa.spotifycdn.com/image/ab6761610000517477dd84c81b4fdebb3ddb4bda';

const tracks: SpotifyTrack[] = [
  {
    name: 'Hues',
    artist: 'Jacob Canedy',
    albumArt: artistArt,
    previewUrl: 'https://p.scdn.co/mp3-preview/b255d123296e71def48b56d4f0db961f3fad6a50',
  },
  {
    name: 'Over Before I Began',
    artist: 'Jacob Canedy',
    albumArt: artistArt,
    previewUrl: 'https://p.scdn.co/mp3-preview/91331835d6b9e0b59b16b4b9b03b528e99998935',
  },
  {
    name: 'Nature of Love',
    artist: 'Jacob Canedy',
    albumArt: artistArt,
    previewUrl: 'https://p.scdn.co/mp3-preview/8833798ddda6b8fc43d22b14449cee233ef529e0',
  },
  {
    name: 'Lead Myself Away',
    artist: 'Jacob Canedy',
    albumArt: artistArt,
    previewUrl: 'https://p.scdn.co/mp3-preview/ad0c0bbc7f70bf5670247320cf372c734219f63c',
  },
  {
    name: 'Dock of The Bay',
    artist: 'Jacob Canedy',
    albumArt: artistArt,
    previewUrl: 'https://p.scdn.co/mp3-preview/d655e28219146ee565658e00edd06a167b86670a',
  },
  {
    name: 'BTRFLY',
    artist: 'Jacob Canedy',
    albumArt: artistArt,
    previewUrl: 'https://p.scdn.co/mp3-preview/119ac0107758d0ffb9bbf1f33dbd89c1413dc557',
  },
  {
    name: 'Left It All Out in the Open',
    artist: 'Jacob Canedy',
    albumArt: artistArt,
    previewUrl: 'https://p.scdn.co/mp3-preview/fc574c39e7a2f7617b653372e8bb8cc2d71dd1f7',
  },
  {
    name: 'Shooting Star',
    artist: 'Jacob Canedy',
    albumArt: artistArt,
    previewUrl: 'https://p.scdn.co/mp3-preview/980e5e44218555bb1c2f88fc6d5f0ccb4288ff7b',
  },
  {
    name: "When I'm With You",
    artist: 'Jacob Canedy',
    albumArt: artistArt,
    previewUrl: 'https://p.scdn.co/mp3-preview/251c4fba97d5263a9f3f0148b7801ce9724fa464',
  },
  {
    name: 'Chrismas All Year Long',
    artist: 'Jacob Canedy',
    albumArt: artistArt,
    previewUrl: 'https://p.scdn.co/mp3-preview/f738d94da532ac98756fb4f0cad575569960382a',
  },
];

export function HobbiesSection() {
  return (
    <section id="hobbies" style={{ marginTop: '120px' }}>
      <SectionHeader label="05 — Hobbies" title="Beyond the" italicWord="Code" />

      {/* Music */}
      <div className="mb-8">
        <div
          className="uppercase tracking-[0.3em] mb-4"
          style={{ fontSize: '9px', fontWeight: 500, color: 'var(--amber)' }}
        >
          My Music
        </div>

        <SpotifyPlayer tracks={tracks} />

        <div className="flex items-center gap-4 mt-4">
          <a
            href="https://open.spotify.com/artist/1csF3aXBFJhCXUtn8YJit6"
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
            Listen on Spotify
          </a>
        </div>

        <p style={{ fontSize: '14px', color: 'var(--ink-mid)', marginTop: '16px', lineHeight: 1.7, maxWidth: '600px' }}>
          Music production is a creative outlet that complements my software engineering work.
          I produce and mix tracks across multiple genres.
        </p>
      </div>
    </section>
  );
}
