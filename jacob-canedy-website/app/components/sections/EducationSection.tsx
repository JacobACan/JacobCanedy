'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, Cloud, Wind, Sun, Bird } from 'lucide-react';
import { useBiome } from '../biophilic/BiomeProvider';
import { RustlingBranch } from '../biophilic/ForestAnimations';

interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  achievements?: string[];
}

const educationData: EducationItem[] = [
  {
    id: 'rit',
    institution: 'Rochester Institute of Technology',
    degree: 'Bachelor of Science',
    field: 'Software Engineering',
    startDate: 'Sep 2021',
    endDate: 'Aug 2025',
    location: 'Rochester, NY',
    description: 'Focus on software engineering principles, algorithms, and practical application development.',
    achievements: [
      'GPA: 3.31',
      'Relevant coursework in Software Engineering, Data Structures, and Algorithms'
    ]
  }
];

// Decorative drifting cloud component
const DriftingCloud: React.FC<{ delay: number; top: string; size: number; opacity: number }> = ({ delay, top, size, opacity }) => (
  <motion.div
    className="absolute pointer-events-none"
    style={{ top, right: '-120px' }}
    animate={{ x: [0, -1200] }}
    transition={{ duration: 25 + delay * 5, repeat: Infinity, delay, ease: 'linear' }}
  >
    <Cloud size={size} style={{ color: 'var(--bio-highlight)', opacity }} />
  </motion.div>
);

// Decorative floating bird
const FloatingBird: React.FC<{ delay: number; top: string }> = ({ delay, top }) => (
  <motion.div
    className="absolute pointer-events-none"
    style={{ top, left: '-40px' }}
    animate={{
      x: [0, 800],
      y: [0, -30, 10, -20, 0],
    }}
    transition={{ duration: 12 + delay * 3, repeat: Infinity, delay: delay * 2, ease: 'easeInOut' }}
  >
    <Bird size={16} style={{ color: 'var(--bio-dark)', opacity: 0.3 }} />
  </motion.div>
);

// Sun ray decorative element that overlaps content
const SunRay: React.FC<{ angle: number; delay: number }> = ({ angle, delay }) => (
  <motion.div
    className="absolute top-0 right-0 pointer-events-none z-10"
    style={{
      width: '300px',
      height: '3px',
      background: `linear-gradient(90deg, transparent, var(--bio-accent), transparent)`,
      transformOrigin: 'right top',
      transform: `rotate(${angle}deg)`,
      borderRadius: '2px',
      opacity: 0,
    }}
    animate={{ opacity: [0, 0.4, 0] }}
    transition={{ duration: 4, repeat: Infinity, delay, ease: 'easeInOut' }}
  />
);

const EducationSection: React.FC = () => {
  const { biomeColors } = useBiome();

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className="max-w-5xl mx-auto relative overflow-visible"
    >
      {/* Atmospheric decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10" style={{ top: '-40px', bottom: '-40px', left: '-60px', right: '-60px' }}>
        <DriftingCloud delay={0} top="5%" size={64} opacity={0.15} />
        <DriftingCloud delay={4} top="25%" size={48} opacity={0.1} />
        <DriftingCloud delay={8} top="60%" size={56} opacity={0.12} />
        <FloatingBird delay={1} top="15%" />
        <FloatingBird delay={3} top="45%" />
      </div>

      {/* Organic header with sky elements */}
      <div className="mb-16 relative">
        {/* Overlapping sun decoration */}
        <motion.div
          className="absolute -top-8 -right-6 z-10 pointer-events-none"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        >
          <Sun size={80} style={{ color: biomeColors.accent, opacity: 0.12 }} />
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
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <GraduationCap
                size={40}
                style={{ color: biomeColors.primary }}
              />
              {/* Floating accent particle */}
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
            Education
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
        >
          <motion.div
            className="absolute -right-1 -top-1 w-2 h-2 rounded-full"
            style={{ background: biomeColors.accent }}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-lg leading-relaxed max-w-2xl"
          style={{ color: biomeColors.secondary || biomeColors.dark }}
        >
          Building a strong foundation in software engineering through rigorous academic study and hands-on experience.
        </motion.p>
      </div>

      {/* Education content - organic flowing layout instead of cards */}
      <div className="space-y-16 relative">
        {/* Vertical flowing line connecting content */}
        <motion.div
          className="absolute left-8 top-0 bottom-0 w-0.5 hidden md:block"
          style={{
            background: `linear-gradient(to bottom, transparent, ${biomeColors.accent}, ${biomeColors.primary}, ${biomeColors.accent}, transparent)`,
            borderRadius: '50px',
          }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, delay: 0.6, ease: 'easeOut' }}
        />

        {educationData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.3, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="relative md:pl-20"
          >
            {/* Timeline node - organic shape */}
            <motion.div
              className="absolute left-4 top-4 w-9 h-9 hidden md:flex items-center justify-center z-10"
              style={{
                background: `linear-gradient(135deg, ${biomeColors.primary}, ${biomeColors.accent})`,
                borderRadius: '40% 60% 50% 30%',
                boxShadow: `0 0 20px ${biomeColors.shadow}, 0 0 40px ${biomeColors.highlightGlow}`
              }}
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <GraduationCap size={18} style={{ color: biomeColors.background }} />
            </motion.div>

            {/* Main content area - organic shape, NOT a card */}
            <div className="relative">
              {/* Overlapping decorative cloud that partially covers content */}
              <motion.div
                className="absolute -top-10 -right-8 z-20 pointer-events-none"
                animate={{ x: [0, 8, 0], y: [0, -3, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Cloud size={48} style={{ color: biomeColors.highlight, opacity: 0.25 }} />
              </motion.div>

              {/* Organic background shape - not a rectangle */}
              <div
                className="relative p-8 md:p-10"
                style={{
                  background: `linear-gradient(145deg, ${biomeColors.background}ee, ${biomeColors.lightAccent}dd, ${biomeColors.background}cc)`,
                  borderRadius: '2rem 3rem 2.5rem 1.5rem',
                  boxShadow: `4px 8px 32px ${biomeColors.shadow}`,
                  border: `1px solid ${biomeColors.accent}40`,
                  backdropFilter: 'blur(8px)',
                }}
              >
                {/* Subtle organic texture overlay */}
                <div
                  className="absolute inset-0 opacity-5 pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(circle at 25% 35%, ${biomeColors.primary} 1px, transparent 1px), radial-gradient(circle at 75% 65%, ${biomeColors.accent} 1px, transparent 1px)`,
                    backgroundSize: '40px 40px, 60px 60px',
                    borderRadius: '2rem 3rem 2.5rem 1.5rem',
                  }}
                />

                {/* Institution name with organic styling */}
                <div className="relative z-10">
                  <h3
                    className="text-2xl md:text-3xl font-bold mb-2"
                    style={{
                      color: biomeColors.primary,
                      fontFamily: 'var(--font-playfair), serif'
                    }}
                  >
                    {item.institution}
                  </h3>

                  <h4
                    className="text-xl font-medium mb-4"
                    style={{ color: biomeColors.secondary || biomeColors.dark }}
                  >
                    {item.degree} in {item.field}
                  </h4>

                  {/* Meta info with organic pill shapes */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    <motion.div
                      className="flex items-center space-x-2 px-4 py-2"
                      style={{
                        background: `${biomeColors.primary}15`,
                        borderRadius: '1rem 0.75rem 1.25rem 0.5rem',
                        border: `1px solid ${biomeColors.primary}25`,
                        color: biomeColors.primary,
                      }}
                      whileHover={{ scale: 1.03 }}
                    >
                      <Calendar size={16} />
                      <span className="text-sm font-medium">{item.startDate} - {item.endDate}</span>
                    </motion.div>

                    <motion.div
                      className="flex items-center space-x-2 px-4 py-2"
                      style={{
                        background: `${biomeColors.accent}20`,
                        borderRadius: '0.75rem 1.25rem 0.5rem 1rem',
                        border: `1px solid ${biomeColors.accent}30`,
                        color: biomeColors.dark,
                      }}
                      whileHover={{ scale: 1.03 }}
                    >
                      <MapPin size={16} />
                      <span className="text-sm font-medium">{item.location}</span>
                    </motion.div>
                  </div>

                  {/* Description with organic text flow */}
                  <p
                    className="text-base leading-relaxed mb-8 max-w-2xl"
                    style={{ color: biomeColors.dark }}
                  >
                    {item.description}
                  </p>

                  {/* Achievements - organic flowing list, not a card */}
                  {item.achievements && item.achievements.length > 0 && (
                    <div className="relative">
                      {/* Overlapping wind decoration */}
                      <motion.div
                        className="absolute -left-6 top-1/2 -translate-y-1/2 pointer-events-none z-20"
                        animate={{ x: [0, 6, 0], rotate: [0, 10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        <Wind size={20} style={{ color: biomeColors.accent, opacity: 0.4 }} />
                      </motion.div>

                      <div className="flex items-center space-x-3 mb-4">
                        <motion.div
                          className="flex items-center justify-center w-8 h-8"
                          style={{
                            background: `linear-gradient(135deg, ${biomeColors.accent}30, ${biomeColors.highlight}40)`,
                            borderRadius: '35% 65% 45% 55%',
                          }}
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{ duration: 5, repeat: Infinity }}
                        >
                          <Award size={18} style={{ color: biomeColors.accent }} />
                        </motion.div>
                        <h5
                          className="font-semibold text-lg"
                          style={{
                            color: biomeColors.primary,
                            fontFamily: 'var(--font-playfair), serif'
                          }}
                        >
                          Key Achievements
                        </h5>
                      </div>

                      <div className="space-y-3 ml-4">
                        {item.achievements.map((achievement, achievementIndex) => (
                          <motion.div
                            key={achievementIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 + achievementIndex * 0.15 }}
                            className="flex items-start space-x-3"
                          >
                            {/* Organic bullet */}
                            <motion.div
                              className="w-2.5 h-2.5 mt-2 flex-shrink-0"
                              style={{
                                background: `linear-gradient(135deg, ${biomeColors.primary}, ${biomeColors.accent})`,
                                borderRadius: '40% 60% 50% 30%',
                              }}
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 3, repeat: Infinity, delay: achievementIndex * 0.5 }}
                            />
                            <span
                              className="text-base leading-relaxed"
                              style={{ color: biomeColors.dark }}
                            >
                              {achievement}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Overlapping decorative element at bottom - wind streak */}
              <motion.div
                className="absolute -bottom-4 left-12 right-12 h-1 pointer-events-none z-20"
                style={{
                  background: `linear-gradient(90deg, transparent, ${biomeColors.accent}40, ${biomeColors.highlight}30, transparent)`,
                  borderRadius: '50px',
                }}
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Continuous Learning - organic flowing section, NOT a card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="mt-20 relative"
      >
        {/* Overlapping decorative clouds */}
        <motion.div
          className="absolute -top-6 left-1/4 pointer-events-none z-20"
          animate={{ x: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Cloud size={40} style={{ color: biomeColors.highlight, opacity: 0.2 }} />
        </motion.div>

        <motion.div
          className="absolute -bottom-4 right-1/3 pointer-events-none z-20"
          animate={{ x: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        >
          <Wind size={28} style={{ color: biomeColors.accent, opacity: 0.2 }} />
        </motion.div>

        <div
          className="relative p-8 md:p-10"
          style={{
            background: `linear-gradient(160deg, ${biomeColors.lightAccent}cc, ${biomeColors.background}ee, ${biomeColors.highlight}22)`,
            borderRadius: '1.5rem 2.5rem 2rem 3rem',
            boxShadow: `4px 8px 24px ${biomeColors.shadow}`,
            border: `1px solid ${biomeColors.accent}30`,
            backdropFilter: 'blur(6px)',
          }}
        >
          {/* Organic texture */}
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 60% 40%, ${biomeColors.primary} 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
              borderRadius: '1.5rem 2.5rem 2rem 3rem',
            }}
          />

          <div className="relative z-10">
            <div className="flex items-center space-x-3 mb-4">
              <RustlingBranch>
                <motion.div
                  className="flex items-center justify-center w-10 h-10"
                  style={{
                    background: `linear-gradient(135deg, ${biomeColors.primary}20, ${biomeColors.accent}30)`,
                    borderRadius: '35% 65% 50% 40%',
                  }}
                >
                  <Sun size={22} style={{ color: biomeColors.accent }} />
                </motion.div>
              </RustlingBranch>
              <h3
                className="text-2xl font-semibold"
                style={{
                  color: biomeColors.primary,
                  fontFamily: 'var(--font-playfair), serif'
                }}
              >
                Continuous Learning
              </h3>
            </div>
            <p
              className="leading-relaxed text-base max-w-2xl"
              style={{ color: biomeColors.dark }}
            >
              Beyond formal education, I&apos;m committed to lifelong learning. I regularly engage with
              online courses, technical documentation, and hands-on projects to stay current with
              emerging technologies and best practices in software development.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default EducationSection;
