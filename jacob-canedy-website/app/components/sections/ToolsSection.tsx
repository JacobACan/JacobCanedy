'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, Code, Music, Wrench, Gem, Sparkles, Zap } from 'lucide-react';
import { useBiome } from '../biophilic/BiomeProvider';
import { RustlingBranch } from '../biophilic/ForestAnimations';

interface Tool {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  language: string;
  githubUrl: string;
  demoUrl?: string;
  stars: number;
  icon: React.ReactNode;
  features: string[];
  technologies: string[];
}

const tools: Tool[] = [
  {
    id: 'chill-nvim',
    name: 'Chill Nvim',
    description: 'A Neovim plugin that plays ambient background audio to help focus while coding.',
    longDescription: 'Understood nvim lua Documentation and Agentic Programming to create a sharable terminal IDE plugin. A Neovim plugin that plays ambient background audio to help focus while coding.',
    language: 'Lua',
    githubUrl: 'https://github.com/JacobACan/chill_nvim',
    stars: 0,
    icon: <Code size={28} />,
    features: [
      'Ambient background audio',
      'Focus-enhancing plugin',
      'Terminal IDE integration',
      'Agentic programming approach'
    ],
    technologies: ['Lua', 'Neovim', 'Plugin Configuration', 'Agentic Programming']
  },
  {
    id: 'just-intonation',
    name: 'Just Intonation',
    description: 'A webapp to help Musicians play what they hear by ear on the piano.',
    longDescription: 'Developed a webapp to help Musicians play what they hear by ear on the piano. Developed audio playback and Next.js component rendering to allow for interactive non-buggy learning experience for the musician.',
    language: 'TypeScript',
    githubUrl: 'https://github.com/JacobACan/JustIntonation',
    stars: 0,
    icon: <Music size={28} />,
    features: [
      'Interactive ear training',
      'Audio playback system',
      'Next.js component rendering',
      'Piano keyboard interface'
    ],
    technologies: ['TypeScript', 'Next.js', 'React', 'Web Audio API']
  },
  {
    id: 'public-speaking',
    name: 'Public Speaking Website',
    description: 'WordPress site rebuild for client vinceshorter.com',
    longDescription: 'Independently managed complete WordPress site rebuild for client, coordinating domain and hosting. Demonstrated technical problem-solving by diagnosing and resolving theme/plugin compatibility issues through server-level file management and dependency analysis.',
    language: 'TypeScript',
    githubUrl: '',
    demoUrl: 'https://vinceshorter.com',
    stars: 0,
    icon: <Code size={28} />,
    features: [
      'WordPress site rebuild',
      'Theme/plugin compatibility resolution',
      'Server-level file management',
      'Client communication'
    ],
    technologies: ['WordPress', 'PHP', 'JavaScript', 'Domain/Hosting Management']
  },
  {
    id: 'binauralization',
    name: '7.1.4 Binauralization',
    description: 'Processed 12-channel audio into binaural representation using impulse responses.',
    longDescription: 'Measured in-person Impulse Responses at sound lab using a 7.1.4 sound system. Used measurements to process a 12 channel audio file into a binaural representation of the audio on a 12 speaker sound system.',
    language: 'TypeScript',
    githubUrl: '',
    stars: 0,
    icon: <Music size={28} />,
    features: [
      'In-person IR measurements',
      '7.1.4 sound system processing',
      '12-channel to binaural conversion',
      'Professional presentation'
    ],
    technologies: ['Audio Processing', 'Impulse Responses', 'Binaural Audio', 'Spatial Audio']
  },
  {
    id: 'rgba-synth',
    name: 'Audio Software Plugin',
    description: 'Developed an audio synthesizer in C++ using JUCE Framework.',
    longDescription: 'Developed an audio synthesizer in C++ (JUCE Framework). C++ GUI and Audio Processing development.',
    language: 'C++',
    githubUrl: 'https://github.com/JacobACan/RGBA-Synth',
    stars: 3,
    icon: <Music size={28} />,
    features: [
      'Multiple waveform synthesis',
      'Real-time audio processing',
      'C++ GUI development',
      'JUCE Framework'
    ],
    technologies: ['C++', 'JUCE Framework', 'Audio Programming', 'DSP']
  }
];

// Crystal glow decorative element
const CrystalGlow: React.FC<{ left: string; top: string; delay: number; color: string; size: number }> = ({ left, top, delay, color, size }) => (
  <motion.div
    className="absolute pointer-events-none"
    style={{
      left,
      top,
      width: size,
      height: size * 1.6,
      background: `linear-gradient(180deg, ${color}40, ${color}10, transparent)`,
      clipPath: 'polygon(50% 0%, 85% 35%, 70% 100%, 30% 100%, 15% 35%)',
      filter: 'blur(1px)',
    }}
    animate={{
      opacity: [0.3, 0.7, 0.3],
      scale: [0.95, 1.05, 0.95],
    }}
    transition={{ duration: 3 + delay, repeat: Infinity, delay, ease: 'easeInOut' }}
  />
);

// Floating spore particle
const FloatingSpore: React.FC<{ delay: number; left: string }> = ({ delay, left }) => (
  <motion.div
    className="absolute pointer-events-none"
    style={{
      left,
      bottom: '10%',
      width: 4,
      height: 4,
      borderRadius: '50%',
      background: `var(--bio-accent)`,
      boxShadow: `0 0 8px var(--bio-accent)`,
    }}
    animate={{
      y: [0, -300],
      x: [0, Math.sin(delay * 2) * 20, 0],
      opacity: [0, 0.8, 0],
      scale: [0.5, 1, 0.3],
    }}
    transition={{ duration: 6 + delay * 2, repeat: Infinity, delay: delay * 1.2, ease: 'easeOut' }}
  />
);

const ToolsSection: React.FC = () => {
  const { biomeColors } = useBiome();

  const getLanguageAccent = (language: string) => {
    switch (language.toLowerCase()) {
      case 'c++': return biomeColors.accent;
      case 'typescript': return biomeColors.primary;
      case 'lua': return biomeColors.secondary || biomeColors.highlight;
      default: return biomeColors.dark;
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className="max-w-5xl mx-auto relative overflow-visible"
    >
      {/* Underground atmospheric elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10" style={{ top: '-40px', bottom: '-40px', left: '-60px', right: '-60px' }}>
        <CrystalGlow left="5%" top="10%" delay={0} color={biomeColors.accent} size={20} />
        <CrystalGlow left="85%" top="20%" delay={1.5} color={biomeColors.highlight} size={16} />
        <CrystalGlow left="15%" top="55%" delay={3} color={biomeColors.accent} size={24} />
        <CrystalGlow left="90%" top="70%" delay={2} color={biomeColors.primary} size={18} />
        <FloatingSpore delay={0} left="20%" />
        <FloatingSpore delay={1} left="45%" />
        <FloatingSpore delay={2} left="70%" />
        <FloatingSpore delay={3} left="85%" />
      </div>

      {/* Organic header with underground elements */}
      <div className="mb-16 relative">
        {/* Overlapping crystal decoration */}
        <motion.div
          className="absolute -top-4 -right-2 z-10 pointer-events-none"
          animate={{ rotate: [0, 3, -3, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Gem size={56} style={{ color: biomeColors.accent, opacity: 0.15 }} />
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
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Wrench
                size={40}
                style={{ color: biomeColors.primary }}
              />
              <motion.div
                className="absolute -top-2 -right-2 w-3 h-3"
                style={{
                  background: biomeColors.accent,
                  clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                }}
                animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6], rotate: [0, 45, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
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
            Tools & Projects
          </h1>
        </motion.div>

        {/* Organic animated underline - mineral vein */}
        <motion.div
          className="relative"
          initial={{ width: 0 }}
          animate={{ width: '10rem' }}
          transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
          style={{
            height: '4px',
            background: `linear-gradient(90deg, ${biomeColors.primary}, ${biomeColors.accent}, ${biomeColors.highlight})`,
            borderRadius: '2px',
            boxShadow: `0 0 12px ${biomeColors.accent}60`
          }}
        />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-lg leading-relaxed max-w-2xl"
          style={{ color: biomeColors.dark }}
        >
          A collection of tools and projects I&apos;ve built to solve problems and explore new technologies.
        </motion.p>
      </div>

      {/* Projects - staggered organic layout, NOT a grid of cards */}
      <div className="space-y-16 relative">
        {/* Mineral vein connecting line */}
        <motion.div
          className="absolute left-1/2 top-0 bottom-0 w-px hidden lg:block"
          style={{
            background: `linear-gradient(to bottom, transparent, ${biomeColors.accent}40, ${biomeColors.primary}30, ${biomeColors.accent}40, transparent)`,
          }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: 'easeOut' }}
        />

        {tools.map((tool, index) => {
          const isLeft = index % 2 === 0;
          const langColor = getLanguageAccent(tool.language);

          return (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.15, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className={`relative lg:w-[55%] ${isLeft ? 'lg:mr-auto' : 'lg:ml-auto'}`}
            >
              {/* Overlapping crystal/gem decoration */}
              <motion.div
                className={`absolute ${isLeft ? '-right-6' : '-left-6'} -top-6 z-20 pointer-events-none`}
                animate={{
                  rotate: [0, 8, -8, 0],
                  scale: [1, 1.08, 1],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: index * 0.3 }}
              >
                <Sparkles size={28} style={{ color: biomeColors.accent, opacity: 0.3 }} />
              </motion.div>

              {/* Overlapping spore cluster */}
              <motion.div
                className={`absolute ${isLeft ? '-left-3' : '-right-3'} bottom-1/4 z-20 pointer-events-none`}
                animate={{ y: [0, -6, 0], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: index * 0.4 }}
              >
                <div className="flex flex-col gap-1">
                  {[6, 4, 5].map((size, i) => (
                    <motion.div
                      key={i}
                      style={{
                        width: size,
                        height: size,
                        borderRadius: '50%',
                        background: biomeColors.accent,
                        boxShadow: `0 0 ${size * 2}px ${biomeColors.accent}`,
                        marginLeft: i * 3,
                      }}
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Content area - cave formation shape */}
              <div
                className="relative p-8 md:p-10"
                style={{
                  background: `linear-gradient(${isLeft ? '140deg' : '160deg'}, ${biomeColors.background}ee, ${biomeColors.lightAccent}dd, ${biomeColors.background}cc)`,
                  borderRadius: isLeft
                    ? '2rem 3.5rem 2.5rem 1.5rem'
                    : '3.5rem 2rem 1.5rem 2.5rem',
                  boxShadow: `4px 8px 32px ${biomeColors.shadow}`,
                  border: `1px solid ${biomeColors.accent}30`,
                  backdropFilter: 'blur(8px)',
                }}
              >
                {/* Subtle cave texture */}
                <div
                  className="absolute inset-0 opacity-5 pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(circle at 40% 60%, ${biomeColors.accent} 1px, transparent 1px), radial-gradient(circle at 80% 20%, ${biomeColors.primary} 1px, transparent 1px)`,
                    backgroundSize: '35px 35px, 50px 50px',
                    borderRadius: 'inherit',
                  }}
                />

                {/* Crystal glow accent on edge */}
                <motion.div
                  className={`absolute ${isLeft ? 'right-0 top-4' : 'left-0 top-4'} w-1 h-16 pointer-events-none`}
                  style={{
                    background: `linear-gradient(to bottom, transparent, ${biomeColors.accent}60, transparent)`,
                    borderRadius: '50px',
                  }}
                  animate={{ opacity: [0.3, 0.7, 0.3], height: ['4rem', '5rem', '4rem'] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                />

                <div className="relative z-10">
                  {/* Header with icon and name */}
                  <div className="flex items-start space-x-4 mb-4">
                    <motion.div
                      className="flex items-center justify-center w-14 h-14 flex-shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${langColor}20, ${langColor}35)`,
                        borderRadius: '35% 65% 45% 55%',
                        border: `1px solid ${langColor}40`,
                        boxShadow: `0 0 15px ${langColor}20`,
                      }}
                      whileHover={{ scale: 1.08, rotate: 5 }}
                    >
                      <div style={{ color: langColor }}>{tool.icon}</div>
                    </motion.div>

                    <div className="flex-1">
                      <h3
                        className="text-2xl font-bold mb-1"
                        style={{
                          color: biomeColors.primary,
                          fontFamily: 'var(--font-playfair), serif'
                        }}
                      >
                        {tool.name}
                      </h3>
                      <div className="flex items-center gap-3">
                        <span
                          className="px-3 py-1 text-xs font-medium"
                          style={{
                            background: `${langColor}20`,
                            color: langColor,
                            borderRadius: '0.75rem 0.5rem 0.75rem 0.5rem',
                            border: `1px solid ${langColor}30`,
                          }}
                        >
                          {tool.language}
                        </span>
                        {tool.stars > 0 && (
                          <div className="flex items-center gap-1" style={{ color: biomeColors.accent }}>
                            <Star size={14} />
                            <span className="text-sm font-medium">{tool.stars}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    className="text-base leading-relaxed mb-6"
                    style={{ color: biomeColors.dark }}
                  >
                    {tool.longDescription}
                  </p>

                  {/* Features - organic flowing list */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {tool.features.map((feature, featureIndex) => (
                        <motion.span
                          key={featureIndex}
                          className="flex items-center space-x-1.5 px-3 py-1.5 text-sm"
                          style={{
                            background: `${biomeColors.primary}10`,
                            color: biomeColors.dark,
                            borderRadius: '0.75rem 0.5rem 0.75rem 0.5rem',
                            border: `1px solid ${biomeColors.primary}15`,
                          }}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + index * 0.1 + featureIndex * 0.05 }}
                          whileHover={{ scale: 1.03 }}
                        >
                          <motion.div
                            className="w-1.5 h-1.5 flex-shrink-0"
                            style={{
                              background: biomeColors.accent,
                              borderRadius: '50% 30% 60% 40%',
                              boxShadow: `0 0 4px ${biomeColors.accent}`,
                            }}
                          />
                          <span>{feature}</span>
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Technologies - mineral-like tags */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {tool.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-3 py-1 text-xs font-medium"
                          style={{
                            background: `${biomeColors.accent}15`,
                            color: biomeColors.secondary || biomeColors.dark,
                            borderRadius: '12px 8px 12px 8px',
                            border: `1px solid ${biomeColors.accent}25`,
                          }}
                          whileHover={{ scale: 1.05, boxShadow: `0 0 8px ${biomeColors.accent}30` }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Actions - organic buttons */}
                  <div className="flex flex-wrap gap-3">
                    {tool.githubUrl && (
                      <motion.a
                        href={tool.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-5 py-2.5 text-sm font-medium"
                        style={{
                          background: `linear-gradient(135deg, ${biomeColors.primary}, ${biomeColors.dark})`,
                          color: biomeColors.background,
                          borderRadius: '1.25rem 0.75rem 1rem 0.5rem',
                          boxShadow: `3px 6px 16px ${biomeColors.shadow}`,
                        }}
                        whileHover={{ scale: 1.04, boxShadow: `3px 6px 24px ${biomeColors.shadow}` }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <Github size={16} />
                        <span>View Code</span>
                      </motion.a>
                    )}
                    {tool.demoUrl && (
                      <motion.a
                        href={tool.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-5 py-2.5 text-sm font-medium"
                        style={{
                          background: `linear-gradient(135deg, ${biomeColors.accent}, ${biomeColors.highlight})`,
                          color: biomeColors.dark,
                          borderRadius: '0.75rem 1.25rem 0.5rem 1rem',
                          boxShadow: `3px 6px 16px ${biomeColors.shadow}`,
                        }}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </motion.a>
                    )}
                    {!tool.githubUrl && !tool.demoUrl && (
                      <span
                        className="text-sm italic px-4 py-2"
                        style={{
                          color: biomeColors.secondary || biomeColors.dark,
                          opacity: 0.7,
                        }}
                      >
                        School/Personal Project
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Mineral vein accent at bottom */}
              <motion.div
                className="absolute -bottom-2 left-12 right-12 h-0.5 pointer-events-none z-20"
                style={{
                  background: `linear-gradient(90deg, transparent, ${biomeColors.accent}40, transparent)`,
                  boxShadow: `0 0 6px ${biomeColors.accent}30`,
                  borderRadius: '50px',
                }}
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 4, repeat: Infinity, delay: index * 0.3 }}
              />
            </motion.div>
          );
        })}
      </div>

      {/* More Projects CTA - organic flowing section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="mt-20 relative"
      >
        {/* Overlapping crystal decorations */}
        <motion.div
          className="absolute -top-8 left-1/3 pointer-events-none z-20"
          animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Gem size={32} style={{ color: biomeColors.accent, opacity: 0.2 }} />
        </motion.div>

        <motion.div
          className="absolute -bottom-4 right-1/4 pointer-events-none z-20"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        >
          <Sparkles size={24} style={{ color: biomeColors.highlight, opacity: 0.25 }} />
        </motion.div>

        <div
          className="relative p-8 md:p-10 text-center"
          style={{
            background: `linear-gradient(160deg, ${biomeColors.lightAccent}cc, ${biomeColors.background}ee, ${biomeColors.highlight}15)`,
            borderRadius: '2.5rem 1.5rem 3rem 2rem',
            boxShadow: `4px 8px 24px ${biomeColors.shadow}`,
            border: `1px solid ${biomeColors.accent}25`,
            backdropFilter: 'blur(6px)',
          }}
        >
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, ${biomeColors.accent} 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
              borderRadius: 'inherit',
            }}
          />

          <div className="relative z-10">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <RustlingBranch>
                <Zap size={24} style={{ color: biomeColors.accent }} />
              </RustlingBranch>
              <h3
                className="text-2xl font-semibold"
                style={{
                  color: biomeColors.primary,
                  fontFamily: 'var(--font-playfair), serif'
                }}
              >
                More Projects Coming Soon
              </h3>
            </div>
            <p
              className="leading-relaxed text-base max-w-xl mx-auto mb-6"
              style={{ color: biomeColors.dark }}
            >
              I&apos;m always working on new tools and projects. Check out my GitHub profile to see
              the latest updates and contributions to open source projects.
            </p>
            <motion.a
              href="https://github.com/JacobACan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 font-medium"
              style={{
                background: `linear-gradient(135deg, ${biomeColors.primary}, ${biomeColors.dark})`,
                color: biomeColors.background,
                borderRadius: '1.5rem 1rem 1.5rem 1rem',
                boxShadow: `4px 8px 20px ${biomeColors.shadow}`,
              }}
              whileHover={{ scale: 1.05, boxShadow: `4px 8px 28px ${biomeColors.shadow}` }}
              whileTap={{ scale: 0.97 }}
            >
              <Github size={20} />
              <span>Follow on GitHub</span>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ToolsSection;
