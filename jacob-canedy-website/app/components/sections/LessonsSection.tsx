'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Code, Waves, Droplets, Shell, Anchor } from 'lucide-react';
import { useBiome } from '../biophilic/BiomeProvider';
import { RustlingBranch } from '../biophilic/ForestAnimations';

interface WorkExperience {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  highlights: string[];
}

const workExperience: WorkExperience[] = [
  {
    id: 'best-buy',
    company: 'Best Buy | Geek Squad',
    role: 'Seasonal Home Theatre Installation Cadet',
    location: 'Rochester, NY',
    startDate: 'Nov 2025',
    endDate: 'Jan 2026',
    description: 'Provided seamless client experience by advising on product placement and recommendations regarding products, services, and content.',
    highlights: [
      'Advised clients on product placement and made recommendations for home theatre setup',
      'Worked independently and as part of a two-person team',
      'Managed inventory and vehicle maintenance in partnership with other agents'
    ]
  },
  {
    id: 'emerson',
    company: 'Emerson',
    role: 'Software Engineer Intern',
    location: 'Elyria, OH',
    startDate: 'Aug 2023',
    endDate: 'Dec 2023 / May 2024 - Aug 2024',
    description: 'Developed customer order tracking features for Ridgid/Greenlee.com using ASP.NET MVC, C#, SQL, and Vue.js.',
    highlights: [
      'Developed customer order tracking features for Ridgid/Greenlee.com using ASP.NET MVC, C#, SQL, and Vue.js',
      'Engaged in pair programming with senior engineers on a cross-cultural team to debug and enhance system functionality',
      'Expanded full-stack skills by implementing both back-end logic in SQL/C# and front-end UI using Vue and JavaScript/TypeScript',
      'Presented project updates to senior engineers, demonstrating progress and technical problem-solving skills'
    ]
  }
];

// Rising bubble decorative element
const RisingBubble: React.FC<{ delay: number; left: string; size: number }> = ({ delay, left, size }) => (
  <motion.div
    className="absolute pointer-events-none"
    style={{
      left,
      bottom: '-20px',
      width: size,
      height: size,
      borderRadius: '50%',
      border: `1px solid var(--bio-accent)`,
      background: `radial-gradient(circle at 30% 30%, var(--bio-highlight-glow), transparent)`,
    }}
    animate={{
      y: [0, -600],
      x: [0, Math.sin(delay) * 30, 0],
      opacity: [0, 0.5, 0.3, 0],
      scale: [0.5, 1, 0.8],
    }}
    transition={{ duration: 8 + delay * 2, repeat: Infinity, delay: delay * 1.5, ease: 'easeOut' }}
  />
);

// Underwater current wave line
const CurrentLine: React.FC<{ top: string; delay: number }> = ({ top, delay }) => (
  <motion.div
    className="absolute left-0 right-0 pointer-events-none"
    style={{
      top,
      height: '2px',
      background: `linear-gradient(90deg, transparent, var(--bio-accent), var(--bio-highlight), var(--bio-accent), transparent)`,
      opacity: 0.15,
      borderRadius: '50px',
    }}
    animate={{
      x: ['-5%', '5%', '-5%'],
      opacity: [0.1, 0.2, 0.1],
    }}
    transition={{ duration: 6, repeat: Infinity, delay, ease: 'easeInOut' }}
  />
);

const LessonsSection: React.FC = () => {
  const { biomeColors } = useBiome();

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className="max-w-5xl mx-auto relative overflow-visible"
    >
      {/* Underwater atmospheric elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10" style={{ top: '-40px', bottom: '-40px', left: '-40px', right: '-40px' }}>
        <RisingBubble delay={0} left="10%" size={12} />
        <RisingBubble delay={1.5} left="30%" size={8} />
        <RisingBubble delay={3} left="55%" size={14} />
        <RisingBubble delay={2} left="75%" size={10} />
        <RisingBubble delay={4} left="90%" size={6} />
        <CurrentLine top="20%" delay={0} />
        <CurrentLine top="50%" delay={2} />
        <CurrentLine top="80%" delay={4} />
      </div>

      {/* Organic header with sea elements */}
      <div className="mb-16 relative">
        {/* Overlapping wave decoration */}
        <motion.div
          className="absolute -top-6 -right-4 z-10 pointer-events-none"
          animate={{ rotate: [0, 8, -8, 0], y: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Waves size={64} style={{ color: biomeColors.accent, opacity: 0.15 }} />
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
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Briefcase
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
            Work Experience
          </h1>
        </motion.div>

        {/* Organic animated underline - wave-like */}
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
      </div>

      {/* Work Experience - flowing underwater timeline */}
      <div className="relative space-y-20">
        {/* Flowing vertical current line */}
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

        {/* Bioluminescent particles along the timeline */}
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={`glow-${i}`}
            className="absolute left-6 w-4 h-4 rounded-full hidden md:block pointer-events-none"
            style={{
              top: `${15 + i * 25}%`,
              background: `radial-gradient(circle, ${biomeColors.accent}, transparent)`,
              filter: 'blur(3px)',
            }}
            animate={{
              opacity: [0.2, 0.7, 0.2],
              scale: [0.8, 1.3, 0.8],
            }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.8 }}
          />
        ))}

        {workExperience.map((job, index) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.3, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="relative md:pl-20"
          >
            {/* Timeline node - organic coral-like shape */}
            <motion.div
              className="absolute left-4 top-6 w-9 h-9 hidden md:flex items-center justify-center z-10"
              style={{
                background: `linear-gradient(135deg, ${biomeColors.primary}, ${biomeColors.accent})`,
                borderRadius: '50% 30% 60% 40%',
                boxShadow: `0 0 20px ${biomeColors.shadow}, 0 0 30px ${biomeColors.highlightGlow}`
              }}
              animate={{ rotate: [0, 8, -8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Anchor size={16} style={{ color: biomeColors.background }} />
            </motion.div>

            {/* Main content - organic flowing shape */}
            <div className="relative">
              {/* Overlapping shell decoration that partially covers content */}
              <motion.div
                className="absolute -top-8 right-8 z-20 pointer-events-none"
                animate={{ rotate: [0, 5, -3, 0], y: [0, -4, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Shell size={36} style={{ color: biomeColors.accent, opacity: 0.25 }} />
              </motion.div>

              {/* Overlapping bubble cluster */}
              <motion.div
                className="absolute -left-4 top-1/3 z-20 pointer-events-none"
                animate={{ y: [0, -8, 0], x: [0, 3, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: index * 0.5 }}
              >
                <Droplets size={24} style={{ color: biomeColors.highlight, opacity: 0.3 }} />
              </motion.div>

              {/* Content area - organic shape */}
              <div
                className="relative p-8 md:p-10"
                style={{
                  background: `linear-gradient(${index % 2 === 0 ? '145deg' : '165deg'}, ${biomeColors.background}ee, ${biomeColors.lightAccent}dd, ${biomeColors.background}cc)`,
                  borderRadius: index % 2 === 0
                    ? '2rem 3rem 2.5rem 1.5rem'
                    : '3rem 2rem 1.5rem 2.5rem',
                  boxShadow: `4px 8px 32px ${biomeColors.shadow}`,
                  border: `1px solid ${biomeColors.accent}35`,
                  backdropFilter: 'blur(8px)',
                }}
              >
                {/* Subtle underwater texture */}
                <div
                  className="absolute inset-0 opacity-5 pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(ellipse at 30% 50%, ${biomeColors.accent} 1px, transparent 1px), radial-gradient(ellipse at 70% 30%, ${biomeColors.primary} 1px, transparent 1px)`,
                    backgroundSize: '45px 45px, 55px 55px',
                    borderRadius: 'inherit',
                  }}
                />

                <div className="relative z-10">
                  {/* Company name */}
                  <h3
                    className="text-2xl md:text-3xl font-bold mb-1"
                    style={{
                      color: biomeColors.primary,
                      fontFamily: 'var(--font-playfair), serif'
                    }}
                  >
                    {job.company}
                  </h3>

                  {/* Role */}
                  <h4
                    className="text-lg font-medium mb-4"
                    style={{ color: biomeColors.secondary || biomeColors.dark }}
                  >
                    {job.role}
                  </h4>

                  {/* Meta info - organic pill shapes */}
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
                      <span className="text-sm font-medium">{job.startDate} - {job.endDate}</span>
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
                      <span className="text-sm font-medium">{job.location}</span>
                    </motion.div>
                  </div>

                  {/* Description */}
                  <p
                    className="text-base leading-relaxed mb-8 max-w-2xl"
                    style={{ color: biomeColors.dark }}
                  >
                    {job.description}
                  </p>

                  {/* Highlights - flowing list */}
                  {job.highlights && job.highlights.length > 0 && (
                    <div className="relative">
                      {/* Overlapping wave accent */}
                      <motion.div
                        className="absolute -right-6 top-0 pointer-events-none z-20"
                        animate={{ x: [0, 5, 0], rotate: [0, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        <Waves size={20} style={{ color: biomeColors.accent, opacity: 0.3 }} />
                      </motion.div>

                      <div className="flex items-center space-x-3 mb-4">
                        <motion.div
                          className="flex items-center justify-center w-8 h-8"
                          style={{
                            background: `linear-gradient(135deg, ${biomeColors.accent}30, ${biomeColors.highlight}40)`,
                            borderRadius: '50% 30% 60% 40%',
                          }}
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{ duration: 5, repeat: Infinity }}
                        >
                          <Code size={18} style={{ color: biomeColors.primary }} />
                        </motion.div>
                        <h5
                          className="font-semibold text-lg"
                          style={{
                            color: biomeColors.primary,
                            fontFamily: 'var(--font-playfair), serif'
                          }}
                        >
                          Key Contributions
                        </h5>
                      </div>

                      <div className="space-y-3 ml-4">
                        {job.highlights.map((highlight, highlightIndex) => (
                          <motion.div
                            key={highlightIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 + index * 0.2 + highlightIndex * 0.1 }}
                            className="flex items-start space-x-3"
                          >
                            {/* Organic coral-like bullet */}
                            <motion.div
                              className="w-2.5 h-2.5 mt-2 flex-shrink-0"
                              style={{
                                background: `linear-gradient(135deg, ${biomeColors.primary}, ${biomeColors.accent})`,
                                borderRadius: '50% 30% 60% 40%',
                              }}
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 3, repeat: Infinity, delay: highlightIndex * 0.4 }}
                            />
                            <span
                              className="text-base leading-relaxed"
                              style={{ color: biomeColors.dark }}
                            >
                              {highlight}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Overlapping current streak at bottom */}
              <motion.div
                className="absolute -bottom-3 left-16 right-16 h-0.5 pointer-events-none z-20"
                style={{
                  background: `linear-gradient(90deg, transparent, ${biomeColors.accent}50, ${biomeColors.highlight}40, transparent)`,
                  borderRadius: '50px',
                }}
                animate={{ opacity: [0.2, 0.5, 0.2], x: ['-2%', '2%', '-2%'] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default LessonsSection;
