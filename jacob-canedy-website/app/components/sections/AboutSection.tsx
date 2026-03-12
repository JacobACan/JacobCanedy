'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Music, Dumbbell, Coffee, Leaf, Sprout, TreePine, Sun } from 'lucide-react';
import { RustlingBranch } from '../biophilic/ForestAnimations';

const AboutSection: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className="max-w-5xl mx-auto relative"
    >
      {/* Organic header with forest elements */}
      <div className="mb-12 relative">
        <motion.div
          className="flex items-center space-x-4 mb-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <RustlingBranch>
            <TreePine 
              size={40} 
              style={{ color: 'var(--bio-primary)' }}
            />
          </RustlingBranch>
          <h1 
            className="text-5xl font-bold"
            style={{ 
              color: 'var(--bio-primary)',
              fontFamily: 'var(--font-playfair), serif'
            }}
          >
            About Me
          </h1>
        </motion.div>
        
        <motion.div 
          className="relative"
          initial={{ width: 0 }}
          animate={{ width: '8rem' }}
          transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
          style={{
            height: '4px',
            background: `linear-gradient(90deg, var(--bio-primary), var(--bio-accent))`,
            borderRadius: '2px',
            boxShadow: 'var(--bio-shadow-soft)'
          }}
        >
          <motion.div
            className="absolute -right-1 -top-1 w-2 h-2 rounded-full"
            style={{ background: 'var(--bio-moss)' }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </div>

      {/* Main content with organic layout */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative"
        >
          {/* Organic background shape */}
          <div 
            className="absolute -inset-4 opacity-10 -z-10"
            style={{
              background: `linear-gradient(135deg, var(--bio-moss), var(--bio-accent))`,
              borderRadius: '2rem 3rem 2.5rem 1.5rem',
              transform: 'rotate(-2deg)'
            }}
          />
          
          <div 
            className="p-8 relative"
            style={{
              background: `linear-gradient(135deg, var(--bio-background), var(--bio-light-accent))`,
              borderRadius: '1.5rem 2.5rem 2rem 1rem',
              boxShadow: 'var(--bio-shadow-medium)',
              border: `1px solid var(--bio-accent)`
            }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <Sprout size={28} style={{ color: 'var(--bio-moss)' }} />
              <h2 
                className="text-3xl font-semibold"
                style={{ 
                  color: 'var(--bio-primary)',
                  fontFamily: 'var(--font-playfair), serif'
                }}
              >
                Hello, I'm Jacob
              </h2>
            </div>
            
            <p 
              className="leading-relaxed mb-6 text-lg"
              style={{ color: 'var(--bio-dark)' }}
            >
              I'm a passionate developer and musician who loves creating innovative solutions 
              and exploring the intersection of technology and creativity. My journey spans 
              across software development, music production, and continuous learning.
            </p>
            
            <p 
              className="leading-relaxed text-lg"
              style={{ color: 'var(--bio-secondary)' }}
            >
              When I'm not coding, you'll find me composing music, working out, or diving 
              deep into new technologies that push the boundaries of what's possible.
            </p>
            
            {/* Decorative elements */}
            <div className="flex items-center space-x-2 mt-6">
              <Leaf size={16} style={{ color: 'var(--bio-moss)' }} />
              <span 
                className="text-sm italic"
                style={{ color: 'var(--bio-moss)' }}
              >
                Growing through code, music, and movement
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex justify-center items-center"
        >
          <RustlingBranch>
            <div 
              className="relative w-72 h-72 flex items-center justify-center"
              style={{
                background: `conic-gradient(from 45deg, var(--bio-primary), var(--bio-moss), var(--bio-accent), var(--bio-secondary), var(--bio-primary))`,
                borderRadius: '50% 40% 60% 30%',
                boxShadow: 'var(--bio-shadow-strong), var(--bio-shadow-glow)',
                animation: 'gentleFloat 6s ease-in-out infinite'
              }}
            >
              <div 
                className="w-56 h-56 flex items-center justify-center"
                style={{
                  background: 'var(--bio-background)',
                  borderRadius: '40% 50% 30% 60%',
                  boxShadow: 'var(--bio-shadow-inner)'
                }}
              >
                <span 
                  className="text-7xl font-bold"
                  style={{ 
                    color: 'var(--bio-primary)',
                    fontFamily: 'var(--font-playfair), serif',
                    textShadow: '2px 2px 4px var(--bio-shadow)'
                  }}
                >
                  JC
                </span>
              </div>
              
              {/* Floating elements around the circle */}
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 rounded-full"
                  style={{
                    background: 'var(--bio-moss)',
                    top: '50%',
                    left: '50%',
                    transformOrigin: `${60 + i * 20}px 0px`
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 8 + i * 2,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                />
              ))}
            </div>
          </RustlingBranch>
        </motion.div>
      </div>

      {/* What I Do section with organic cards */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <div className="flex items-center space-x-3 mb-8">
          <Sun size={32} style={{ color: 'var(--bio-accent)' }} />
          <h3 
            className="text-3xl font-semibold"
            style={{ 
              color: 'var(--bio-primary)',
              fontFamily: 'var(--font-playfair), serif'
            }}
          >
            What I Do
          </h3>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Code size={32} />,
              title: 'Development',
              description: 'Building modern web applications and tools',
              color: 'var(--bio-primary)'
            },
            {
              icon: <Music size={32} />,
              title: 'Music',
              description: 'Composing and producing original music',
              color: 'var(--bio-accent)'
            },
            {
              icon: <Dumbbell size={32} />,
              title: 'Fitness',
              description: 'Staying active and healthy',
              color: 'var(--bio-moss)'
            },
            {
              icon: <Coffee size={32} />,
              title: 'Learning',
              description: 'Continuously exploring new technologies',
              color: 'var(--bio-secondary)'
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
              className="group relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, var(--bio-background), var(--bio-light-accent))`,
                borderRadius: '1.5rem 2rem 1.25rem 1rem',
                boxShadow: 'var(--bio-shadow-soft)',
                border: `1px solid var(--bio-accent)`,
                padding: '2rem'
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: 'var(--bio-shadow-medium)',
                transition: { duration: 0.3 }
              }}
            >
              {/* Organic background pattern */}
              <div 
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `radial-gradient(circle at 30% 40%, ${item.color} 2px, transparent 2px)`,
                  backgroundSize: '30px 30px'
                }}
              />
              
              <RustlingBranch>
                <div 
                  className="mb-4 transition-colors duration-300"
                  style={{ color: item.color }}
                >
                  {item.icon}
                </div>
              </RustlingBranch>
              
              <h4 
                className="text-xl font-semibold mb-3"
                style={{ 
                  color: 'var(--bio-primary)',
                  fontFamily: 'var(--font-inter), sans-serif'
                }}
              >
                {item.title}
              </h4>
              
              <p 
                className="text-sm leading-relaxed"
                style={{ color: 'var(--bio-secondary)' }}
              >
                {item.description}
              </p>
              
              {/* Decorative leaf */}
              <motion.div
                className="absolute bottom-4 right-4 opacity-20"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Leaf size={20} style={{ color: item.color }} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;