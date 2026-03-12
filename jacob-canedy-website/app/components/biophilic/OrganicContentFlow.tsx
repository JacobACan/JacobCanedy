'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Music, Dumbbell, Coffee, Leaf, Sprout, Sun, Cpu, TreePine, Zap } from 'lucide-react';
import { RustlingBranch } from './ForestAnimations';

interface ContentItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  position: { x: string; y: string };
  delay: number;
}

interface SkillCategory {
  title: string;
  skills: string[];
  icon: React.ReactNode;
  color: string;
  position: { x: string; y: string };
  delay: number;
}

export const OrganicContentFlow: React.FC = () => {
  const contentItems: ContentItem[] = [
    {
      icon: <Code size={28} />,
      title: 'Full-Stack Development',
      description: 'Building web applications with .NET, Vue, React, and modern JavaScript frameworks',
      color: 'var(--bio-primary)',
      position: { x: '10%', y: '20%' },
      delay: 0.2
    },
    {
      icon: <Music size={28} />,
      title: 'Audio Engineering',
      description: 'Developing audio plugins and music tools, expanding musicianship for myself and others',
      color: 'var(--bio-accent)',
      position: { x: '75%', y: '15%' },
      delay: 0.4
    },
    {
      icon: <Dumbbell size={28} />,
      title: 'Fitness & Wellness',
      description: 'Passionate about physical fitness and helping others achieve their health goals',
      color: 'var(--bio-moss)',
      position: { x: '15%', y: '60%' },
      delay: 0.6
    },
    {
      icon: <Coffee size={28} />,
      title: 'Continuous Learning',
      description: 'Always exploring new technologies and expanding knowledge in emerging fields',
      color: 'var(--bio-secondary)',
      position: { x: '70%', y: '65%' },
      delay: 0.8
    }
  ];

  const skillCategories: SkillCategory[] = [
    {
      title: 'Languages',
      skills: ['C#', 'TypeScript', 'SQL', 'JavaScript'],
      icon: <Code size={24} />,
      color: 'var(--bio-primary)',
      position: { x: '20%', y: '35%' },
      delay: 1.0
    },
    {
      title: 'Frameworks',
      skills: ['Next.js', 'React', 'Vue.js', 'ASP.NET MVC'],
      icon: <Zap size={24} />,
      color: 'var(--bio-accent)',
      position: { x: '60%', y: '40%' },
      delay: 1.2
    },
    {
      title: 'Specialties',
      skills: ['Agentic Programming', 'Audio Plugins', 'UI/UX Design'],
      icon: <Cpu size={24} />,
      color: 'var(--bio-moss)',
      position: { x: '40%', y: '80%' },
      delay: 1.4
    }
  ];

  return (
    <div className="relative min-h-screen py-16">
      {/* Organic flowing background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Tree trunk-like vertical flow */}
        <motion.div
          className="absolute left-1/2 top-0 w-1 h-full opacity-20"
          style={{
            background: `linear-gradient(to bottom, transparent, var(--bio-secondary), var(--bio-primary), var(--bio-secondary), transparent)`,
            transform: 'translateX(-50%) rotate(2deg)',
            borderRadius: '50px'
          }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        />

        {/* Branch-like connecting lines */}
        {contentItems.map((item, index) => (
          <motion.div
            key={`branch-${index}`}
            className="absolute opacity-10"
            style={{
              left: item.position.x,
              top: item.position.y,
              width: '200px',
              height: '2px',
              background: `linear-gradient(to right, ${item.color}, transparent)`,
              borderRadius: '1px',
              transformOrigin: 'left center',
              transform: `rotate(${index % 2 === 0 ? 15 : -15}deg)`
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: item.delay + 0.5, duration: 1, ease: 'easeOut' }}
          />
        ))}

        {/* Floating organic particles */}
        {Array.from({ length: 12 }, (_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 rounded-full opacity-30"
            style={{
              background: i % 3 === 0 ? 'var(--bio-moss)' : i % 3 === 1 ? 'var(--bio-accent)' : 'var(--bio-primary)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.sin(i) * 10, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.3, 1]
            }}
            transition={{
              duration: 4 + (i * 0.3),
              repeat: Infinity,
              delay: i * 0.2,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      {/* Main content items positioned organically */}
      {contentItems.map((item, index) => (
        <motion.div
          key={item.title}
          className="absolute max-w-xs"
          style={{
            left: item.position.x,
            top: item.position.y,
            transform: 'translate(-50%, -50%)'
          }}
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: item.delay, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <RustlingBranch>
            <div className="relative group">
              {/* Organic background glow */}
              <div 
                className="absolute -inset-4 opacity-20 -z-10 group-hover:opacity-30 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(ellipse at center, ${item.color} 0%, transparent 70%)`,
                  borderRadius: '50%',
                  filter: 'blur(15px)'
                }}
              />
              
              {/* Content container */}
              <div className="text-center p-6">
                {/* Icon with organic background */}
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 mb-4 relative"
                  style={{
                    background: `linear-gradient(135deg, ${item.color}15, ${item.color}25)`,
                    borderRadius: '40% 60% 50% 30%',
                    border: `2px solid ${item.color}40`
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div style={{ color: item.color }}>
                    {item.icon}
                  </div>
                  
                  {/* Floating accent dot */}
                  <motion.div
                    className="absolute -top-1 -right-1 w-3 h-3 rounded-full"
                    style={{ background: item.color }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  />
                </motion.div>

                {/* Title */}
                <h3 
                  className="text-xl font-semibold mb-3"
                  style={{ 
                    color: 'var(--bio-primary)',
                    fontFamily: 'var(--font-playfair), serif'
                  }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p 
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--bio-secondary)' }}
                >
                  {item.description}
                </p>

                {/* Decorative leaf */}
                <motion.div
                  className="mt-4 flex justify-center"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                >
                  <Leaf size={16} style={{ color: item.color, opacity: 0.6 }} />
                </motion.div>
              </div>
            </div>
          </RustlingBranch>
        </motion.div>
      ))}

      {/* Skills section with organic clustering */}
      <motion.div
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <div className="flex items-center justify-center space-x-3 mb-8">
          <RustlingBranch>
            <Sun size={32} style={{ color: 'var(--bio-accent)' }} />
          </RustlingBranch>
          <h2 
            className="text-3xl font-semibold text-center"
            style={{ 
              color: 'var(--bio-primary)',
              fontFamily: 'var(--font-playfair), serif'
            }}
          >
            Technical Expertise
          </h2>
          <RustlingBranch>
            <TreePine size={32} style={{ color: 'var(--bio-moss)' }} />
          </RustlingBranch>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-4xl">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: category.delay, duration: 0.6 }}
            >
              <RustlingBranch>
                <div 
                  className="inline-flex items-center justify-center w-12 h-12 mb-3"
                  style={{
                    background: `linear-gradient(135deg, ${category.color}20, ${category.color}30)`,
                    borderRadius: '30% 70% 40% 60%',
                    border: `1px solid ${category.color}50`
                  }}
                >
                  <div style={{ color: category.color }}>
                    {category.icon}
                  </div>
                </div>
              </RustlingBranch>

              <h4 
                className="text-lg font-semibold mb-3"
                style={{ color: 'var(--bio-primary)' }}
              >
                {category.title}
              </h4>

              <div className="flex flex-wrap justify-center gap-2 max-w-48">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1 text-xs font-medium"
                    style={{
                      background: `${category.color}20`,
                      color: category.color,
                      borderRadius: '12px 8px 12px 8px',
                      border: `1px solid ${category.color}30`
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: category.delay + (skillIndex * 0.1), duration: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Professional background section */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-md text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 1 }}
      >
        <div className="relative">
          {/* Organic background */}
          <div 
            className="absolute -inset-8 opacity-5 -z-10"
            style={{
              background: `conic-gradient(from 45deg, var(--bio-primary), var(--bio-moss), var(--bio-accent), var(--bio-secondary), var(--bio-primary))`,
              borderRadius: '50% 30% 60% 40%',
              filter: 'blur(20px)'
            }}
          />
          
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sprout size={20} style={{ color: 'var(--bio-moss)' }} />
            <h3 
              className="text-lg font-medium"
              style={{ 
                color: 'var(--bio-primary)',
                fontFamily: 'var(--font-playfair), serif'
              }}
            >
              Software Engineering Student at RIT
            </h3>
            <Sprout size={20} style={{ color: 'var(--bio-moss)', transform: 'scaleX(-1)' }} />
          </div>
          
          <p 
            className="text-sm leading-relaxed opacity-80"
            style={{ color: 'var(--bio-secondary)' }}
          >
            Previous experience at Emerson Ridgid Tools working on customer-facing and internal applications
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default OrganicContentFlow;