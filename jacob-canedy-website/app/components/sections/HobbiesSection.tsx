'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Dumbbell, Play, ExternalLink, Calendar, Clock, Heart, Leaf, TreePine, Waves, Droplets } from 'lucide-react';
import { useBiome } from '../biophilic/BiomeProvider';
import { RustlingBranch } from '../biophilic/ForestAnimations';

interface Song {
  id: string;
  title: string;
  description: string;
  duration: string;
  releaseDate: string;
  soundcloudUrl?: string;
  genre: string;
}

// Placeholder songs - you can update this when you upload to SoundCloud
const songs: Song[] = [
  {
    id: 'song-1',
    title: 'Coming Soon',
    description: 'New music will be uploaded to SoundCloud soon. Stay tuned for original compositions and productions.',
    duration: '--:--',
    releaseDate: 'TBA',
    genre: 'Electronic',
  }
];

type HobbyCategory = 'music' | 'fitness';

// Hybrid biome decorative element - forest meets water
const StreamParticle: React.FC<{ delay: number; left: string }> = ({ delay, left }) => (
  <motion.div
    className="absolute pointer-events-none"
    style={{
      left,
      top: '50%',
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: `var(--bio-accent)`,
      boxShadow: `0 0 10px var(--bio-accent)`,
    }}
    animate={{
      x: [0, 40, 80],
      y: [0, -15, 5, -10, 0],
      opacity: [0, 0.7, 0],
      scale: [0.5, 1, 0.3],
    }}
    transition={{ duration: 5 + delay * 2, repeat: Infinity, delay: delay * 1.5, ease: 'easeInOut' }}
  />
);

// Floating leaf that drifts across
const DriftingLeaf: React.FC<{ delay: number; top: string }> = ({ delay, top }) => (
  <motion.div
    className="absolute pointer-events-none"
    style={{ top, left: '-30px' }}
    animate={{
      x: [0, 500],
      y: [0, 20, -10, 15, 0],
      rotate: [0, 180, 360],
    }}
    transition={{ duration: 15 + delay * 3, repeat: Infinity, delay: delay * 4, ease: 'easeInOut' }}
  >
    <Leaf size={14} style={{ color: 'var(--bio-primary)', opacity: 0.2 }} />
  </motion.div>
);

const HobbiesSection: React.FC = () => {
  const [activeCategory] = useState<HobbyCategory>('music');
  const { biomeColors } = useBiome();

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className="max-w-5xl mx-auto relative overflow-visible"
    >
      {/* Hybrid biome atmospheric elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10" style={{ top: '-40px', bottom: '-40px', left: '-40px', right: '-40px' }}>
        <StreamParticle delay={0} left="15%" />
        <StreamParticle delay={1} left="40%" />
        <StreamParticle delay={2} left="65%" />
        <StreamParticle delay={3} left="85%" />
        <DriftingLeaf delay={0} top="10%" />
        <DriftingLeaf delay={2} top="40%" />
        <DriftingLeaf delay={4} top="70%" />
      </div>

      {/* Organic header with hybrid elements */}
      <div className="mb-16 relative">
        {/* Overlapping forest-water decoration */}
        <motion.div
          className="absolute -top-6 -right-4 z-10 pointer-events-none"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <TreePine size={48} style={{ color: biomeColors.primary, opacity: 0.12 }} />
        </motion.div>
        <motion.div
          className="absolute -top-2 right-8 z-10 pointer-events-none"
          animate={{ y: [0, -4, 0], x: [0, 3, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        >
          <Droplets size={24} style={{ color: biomeColors.accent, opacity: 0.2 }} />
        </motion.div>

        <motion.div
          className="flex items-center space-x-4 mb-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <RustlingBranch>
            <motion.div
              className="relative"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Heart
                size={40}
                style={{ color: biomeColors.primary }}
              />
              <motion.div
                className="absolute -top-2 -right-2 w-3 h-3 rounded-full"
                style={{ background: biomeColors.accent }}
                animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
            </motion.div>
          </RustlingBranch>
          <h1
            className="text-5xl font-bold"
            style={{
              color: biomeColors.primary,
              fontFamily: 'var(--font-playfair), serif'
            }}
          >
            Hobbies & Interests
          </h1>
        </motion.div>

        {/* Organic animated underline */}
        <motion.div
          className="relative"
          initial={{ width: 0 }}
          animate={{ width: '10rem' }}
          transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
          style={{
            height: '4px',
            background: `linear-gradient(90deg, ${biomeColors.primary}, ${biomeColors.accent}, ${biomeColors.highlight})`,
            borderRadius: '2px',
            boxShadow: `0 2px 8px ${biomeColors.shadow}`
          }}
        />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-lg leading-relaxed max-w-2xl"
          style={{ color: biomeColors.dark }}
        >
          Exploring creativity and staying active through music and fitness.
        </motion.p>
      </div>

      {/* Category indicator - organic tab, not a button bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-12 relative"
      >
        <div className="flex items-center space-x-4">
          <motion.div
            className="flex items-center space-x-3 px-6 py-3"
            style={{
              background: `linear-gradient(135deg, ${biomeColors.primary}, ${biomeColors.secondary || biomeColors.dark})`,
              color: biomeColors.background,
              borderRadius: '1.5rem 1rem 1.5rem 0.75rem',
              boxShadow: `3px 6px 20px ${biomeColors.shadow}`,
            }}
          >
            <Music size={20} />
            <span className="font-medium">Music</span>
          </motion.div>

          {/* Overlapping leaf between tabs */}
          <motion.div
            className="pointer-events-none"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Leaf size={16} style={{ color: biomeColors.accent, opacity: 0.4 }} />
          </motion.div>
        </div>
      </motion.div>

      {/* Content */}
      <AnimatePresence mode="wait">
        {activeCategory === 'music' && (
          <motion.div
            key="music"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Music Section Header */}
            <div className="mb-10 relative">
              {/* Overlapping wave decoration */}
              <motion.div
                className="absolute -right-4 top-0 pointer-events-none z-20"
                animate={{ x: [0, 5, 0], rotate: [0, 3, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Waves size={28} style={{ color: biomeColors.accent, opacity: 0.2 }} />
              </motion.div>

              <h2
                className="text-2xl font-semibold mb-3"
                style={{
                  color: biomeColors.primary,
                  fontFamily: 'var(--font-playfair), serif'
                }}
              >
                Original Music
              </h2>
              <p
                className="text-base leading-relaxed max-w-2xl"
                style={{ color: biomeColors.dark }}
              >
                My musical journey includes composition, production, and sound design.
                Here you&apos;ll find my latest tracks and musical experiments.
              </p>
            </div>

            {/* Songs - organic flowing layout, NOT cards */}
            <div className="space-y-10 mb-16">
              {songs.map((song, index) => (
                <motion.div
                  key={song.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.15 }}
                  className="relative"
                >
                  {/* Overlapping musical note decoration */}
                  <motion.div
                    className="absolute -top-6 left-8 z-20 pointer-events-none"
                    animate={{ y: [0, -5, 0], rotate: [0, 8, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <Music size={24} style={{ color: biomeColors.accent, opacity: 0.25 }} />
                  </motion.div>

                  {/* Overlapping leaf */}
                  <motion.div
                    className="absolute -right-4 top-1/3 z-20 pointer-events-none"
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  >
                    <Leaf size={20} style={{ color: biomeColors.primary, opacity: 0.2 }} />
                  </motion.div>

                  <div
                    className="relative p-8 md:p-10"
                    style={{
                      background: `linear-gradient(150deg, ${biomeColors.background}ee, ${biomeColors.lightAccent}dd, ${biomeColors.background}cc)`,
                      borderRadius: '2rem 3rem 2.5rem 1.5rem',
                      boxShadow: `4px 8px 32px ${biomeColors.shadow}`,
                      border: `1px solid ${biomeColors.accent}30`,
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    {/* Organic texture */}
                    <div
                      className="absolute inset-0 opacity-5 pointer-events-none"
                      style={{
                        backgroundImage: `radial-gradient(circle at 35% 45%, ${biomeColors.primary} 1px, transparent 1px), radial-gradient(circle at 65% 55%, ${biomeColors.accent} 1px, transparent 1px)`,
                        backgroundSize: '45px 45px, 55px 55px',
                        borderRadius: 'inherit',
                      }}
                    />

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <h3
                          className="text-xl font-semibold"
                          style={{
                            color: biomeColors.primary,
                            fontFamily: 'var(--font-playfair), serif'
                          }}
                        >
                          {song.title}
                        </h3>
                        <span
                          className="px-3 py-1 text-xs font-medium"
                          style={{
                            background: `${biomeColors.accent}20`,
                            color: biomeColors.primary,
                            borderRadius: '0.75rem 0.5rem 0.75rem 0.5rem',
                            border: `1px solid ${biomeColors.accent}30`,
                          }}
                        >
                          {song.genre}
                        </span>
                      </div>

                      <p
                        className="text-base leading-relaxed mb-6"
                        style={{ color: biomeColors.dark }}
                      >
                        {song.description}
                      </p>

                      <div className="flex items-center gap-6 mb-6" style={{ color: biomeColors.secondary || biomeColors.dark }}>
                        <div className="flex items-center gap-2 text-sm">
                          <Clock size={14} />
                          <span>{song.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar size={14} />
                          <span>{song.releaseDate}</span>
                        </div>
                      </div>

                      {song.soundcloudUrl ? (
                        <div className="flex gap-3">
                          <motion.button
                            className="flex items-center space-x-2 px-5 py-2.5 text-sm font-medium"
                            style={{
                              background: `linear-gradient(135deg, ${biomeColors.accent}, ${biomeColors.highlight})`,
                              color: biomeColors.dark,
                              borderRadius: '1.25rem 0.75rem 1rem 0.5rem',
                              boxShadow: `3px 6px 16px ${biomeColors.shadow}`,
                            }}
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                          >
                            <Play size={14} />
                            <span>Play</span>
                          </motion.button>
                          <motion.a
                            href={song.soundcloudUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 px-4 py-2.5 text-sm font-medium"
                            style={{
                              background: `${biomeColors.primary}15`,
                              color: biomeColors.primary,
                              borderRadius: '0.75rem 1.25rem 0.5rem 1rem',
                              border: `1px solid ${biomeColors.primary}25`,
                            }}
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                          >
                            <ExternalLink size={14} />
                          </motion.a>
                        </div>
                      ) : (
                        <div
                          className="relative p-6 text-center"
                          style={{
                            background: `${biomeColors.lightAccent}80`,
                            borderRadius: '1.5rem 1rem 1.5rem 1rem',
                            border: `2px dashed ${biomeColors.accent}40`,
                          }}
                        >
                          {/* Overlapping decorative element on placeholder */}
                          <motion.div
                            className="absolute -top-3 left-1/2 -translate-x-1/2 pointer-events-none z-20"
                            animate={{ y: [0, -3, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                          >
                            <Music size={18} style={{ color: biomeColors.accent, opacity: 0.4 }} />
                          </motion.div>

                          <Music size={28} style={{ color: biomeColors.accent, opacity: 0.5 }} className="mx-auto mb-2" />
                          <p className="text-sm" style={{ color: biomeColors.secondary || biomeColors.dark, opacity: 0.7 }}>
                            Track coming soon
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* SoundCloud CTA - organic flowing section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="relative"
            >
              {/* Overlapping decorations */}
              <motion.div
                className="absolute -top-6 right-1/4 pointer-events-none z-20"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <TreePine size={28} style={{ color: biomeColors.primary, opacity: 0.15 }} />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 left-1/3 pointer-events-none z-20"
                animate={{ x: [0, 8, 0], y: [0, -3, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Waves size={24} style={{ color: biomeColors.accent, opacity: 0.2 }} />
              </motion.div>

              <div
                className="relative p-8 md:p-10"
                style={{
                  background: `linear-gradient(160deg, ${biomeColors.lightAccent}cc, ${biomeColors.background}ee, ${biomeColors.highlight}20)`,
                  borderRadius: '1.5rem 2.5rem 2rem 3rem',
                  boxShadow: `4px 8px 24px ${biomeColors.shadow}`,
                  border: `1px solid ${biomeColors.accent}25`,
                  backdropFilter: 'blur(6px)',
                }}
              >
                {/* Organic texture */}
                <div
                  className="absolute inset-0 opacity-5 pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(circle at 50% 40%, ${biomeColors.primary} 1px, transparent 1px)`,
                    backgroundSize: '50px 50px',
                    borderRadius: 'inherit',
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-4">
                    <RustlingBranch>
                      <motion.div
                        className="flex items-center justify-center w-10 h-10"
                        style={{
                          background: `linear-gradient(135deg, ${biomeColors.accent}25, ${biomeColors.highlight}35)`,
                          borderRadius: '40% 60% 50% 30%',
                        }}
                      >
                        <Music size={22} style={{ color: biomeColors.accent }} />
                      </motion.div>
                    </RustlingBranch>
                    <h3
                      className="text-2xl font-semibold"
                      style={{
                        color: biomeColors.primary,
                        fontFamily: 'var(--font-playfair), serif'
                      }}
                    >
                      Follow My Musical Journey
                    </h3>
                  </div>
                  <p
                    className="leading-relaxed text-base max-w-2xl mb-6"
                    style={{ color: biomeColors.dark }}
                  >
                    I&apos;m currently working on new compositions and will be uploading them to SoundCloud soon.
                    My music explores various genres including electronic, ambient, and experimental sounds.
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <motion.button
                      className="flex items-center space-x-2 px-6 py-3 font-medium"
                      style={{
                        background: `linear-gradient(135deg, ${biomeColors.accent}, ${biomeColors.highlight})`,
                        color: biomeColors.dark,
                        borderRadius: '1.5rem 1rem 1.5rem 1rem',
                        boxShadow: `3px 6px 16px ${biomeColors.shadow}`,
                      }}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Music size={18} />
                      <span>Follow on SoundCloud</span>
                    </motion.button>
                    <span
                      className="text-sm"
                      style={{ color: biomeColors.secondary || biomeColors.dark, opacity: 0.7 }}
                    >
                      Get notified when new tracks are released
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Fitness section is hidden as requested (WIP) */}
        {activeCategory === 'fitness' && (
          <motion.div
            key="fitness"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center py-16"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Dumbbell size={48} style={{ color: biomeColors.accent, opacity: 0.5 }} className="mx-auto mb-4" />
            </motion.div>
            <h2
              className="text-2xl font-semibold mb-2"
              style={{
                color: biomeColors.primary,
                fontFamily: 'var(--font-playfair), serif'
              }}
            >
              Fitness Section
            </h2>
            <p style={{ color: biomeColors.dark, opacity: 0.7 }}>
              This section is currently under development.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default HobbiesSection;
