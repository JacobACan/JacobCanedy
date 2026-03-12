'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Falling Leaves Component
export const FallingLeaves: React.FC = () => {
  const [leaves, setLeaves] = useState<Array<{ id: number; delay: number; x: number; size: number; color: string }>>([]);

  useEffect(() => {
    const leafColors = ['#8B6F47', '#D4A574', '#C4A57B', '#654832'];
    const newLeaves = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      delay: Math.random() * 6,
      x: Math.random() * 100,
      size: 0.5 + Math.random() * 0.5,
      color: leafColors[Math.floor(Math.random() * leafColors.length)]
    }));
    setLeaves(newLeaves);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute"
          style={{
            left: `${leaf.x}%`,
            top: '-20px',
          }}
          animate={{
            y: ['0vh', '110vh'],
            rotate: [0, 360],
            x: [0, Math.sin(leaf.id) * 50]
          }}
          transition={{
            duration: 6 + Math.random() * 2,
            repeat: Infinity,
            delay: leaf.delay,
            ease: 'linear'
          }}
        >
          <svg
            width={`${leaf.size * 20}px`}
            height={`${leaf.size * 24}px`}
            viewBox="0 0 20 24"
            fill="none"
          >
            <path
              d="M10 2C6 2 2 6 2 12C2 18 6 22 10 22C14 22 18 18 18 12C18 6 14 2 10 2Z"
              fill={leaf.color}
              opacity="0.8"
            />
            <path
              d="M10 2L10 22"
              stroke={leaf.color}
              strokeWidth="1"
              opacity="0.6"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

// Flying Birds Component
export const FlyingBirds: React.FC = () => {
  const [birds, setBirds] = useState<Array<{ id: number; delay: number; y: number; size: number }>>([]);

  useEffect(() => {
    const newBirds = Array.from({ length: 3 }, (_, i) => ({
      id: i,
      delay: Math.random() * 8,
      y: 20 + Math.random() * 30,
      size: 0.8 + Math.random() * 0.4
    }));
    setBirds(newBirds);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      {birds.map((bird) => (
        <motion.div
          key={bird.id}
          className="absolute"
          style={{
            top: `${bird.y}%`,
            left: '-50px',
          }}
          animate={{
            x: ['0vw', '110vw'],
            y: [0, -20, -10, -30, -15]
          }}
          transition={{
            duration: 12 + Math.random() * 4,
            repeat: Infinity,
            delay: bird.delay,
            ease: 'easeInOut'
          }}
        >
          <svg
            width={`${bird.size * 24}px`}
            height={`${bird.size * 16}px`}
            viewBox="0 0 24 16"
            fill="none"
          >
            <motion.path
              d="M2 8C6 4 10 6 12 8C14 6 18 4 22 8"
              stroke="var(--bio-dark)"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              animate={{
                d: [
                  "M2 8C6 4 10 6 12 8C14 6 18 4 22 8",
                  "M2 8C6 12 10 10 12 8C14 10 18 12 22 8",
                  "M2 8C6 4 10 6 12 8C14 6 18 4 22 8"
                ]
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

// Light Rays Component
export const LightRays: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
      {Array.from({ length: 5 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute bg-gradient-to-b from-transparent via-yellow-200/20 to-transparent"
          style={{
            left: `${20 + i * 15}%`,
            top: '0',
            width: '60px',
            height: '100vh',
            transform: 'rotate(15deg)',
            transformOrigin: 'top center'
          }}
          animate={{
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.5,
            ease: 'easeInOut'
          }}
        />
      ))}
    </div>
  );
};

// Branch Rustling Component (for sidebar)
export const RustlingBranch: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      animate={{
        rotate: [0, 0.5, -0.5, 0]
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: Math.random() * 2
      }}
    >
      {children}
    </motion.div>
  );
};

// Parallax Container
interface ParallaxContainerProps {
  children: React.ReactNode;
  speed: number; // 0.1 to 1.0
  className?: string;
}

export const ParallaxContainer: React.FC<ParallaxContainerProps> = ({ 
  children, 
  speed, 
  className = '' 
}) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className={className}
      style={{
        transform: `translateY(${scrollY * speed}px)`
      }}
    >
      {children}
    </motion.div>
  );
};

// Main Forest Background Component
export const ForestBackground: React.FC = () => {
  return (
    <>
      <LightRays />
      <FallingLeaves />
      <FlyingBirds />
    </>
  );
};