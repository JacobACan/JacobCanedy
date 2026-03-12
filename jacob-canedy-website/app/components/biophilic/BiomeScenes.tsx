'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Forest Scene - Ancient Growth
export const ForestScene: React.FC = () => {
  const [leaves, setLeaves] = useState<Array<{ id: number; delay: number; x: number; size: number; color: string }>>([]);

  useEffect(() => {
    const leafColors = ['#8B6F47', '#D4A574', '#C4A57B', '#654832'];
    const newLeaves = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      delay: Math.random() * 8,
      x: Math.random() * 100,
      size: 0.4 + Math.random() * 0.6,
      color: leafColors[Math.floor(Math.random() * leafColors.length)]
    }));
    setLeaves(newLeaves);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Tree Silhouettes */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`tree-${i}`}
            className="absolute bottom-0"
            style={{
              left: `${i * 25 - 10}%`,
              width: '200px',
              height: '100vh',
              background: `linear-gradient(to top, #1F3A0F 0%, transparent 60%)`,
              clipPath: 'polygon(45% 100%, 55% 100%, 52% 20%, 48% 20%)',
              opacity: 0.1 + (i * 0.05)
            }}
            animate={{
              transform: [`translateY(0px) rotate(${-1 + i * 0.5}deg)`, `translateY(-5px) rotate(${1 - i * 0.5}deg)`, `translateY(0px) rotate(${-1 + i * 0.5}deg)`]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      {/* Canopy Layer */}
      <div className="absolute top-0 left-0 right-0 h-1/3">
        <div 
          className="w-full h-full opacity-20"
          style={{
            background: `radial-gradient(ellipse at center top, #2D5016 0%, transparent 70%)`,
          }}
        />
      </div>

      {/* Dappled Light Rays */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`light-${i}`}
          className="absolute"
          style={{
            left: `${15 + i * 12}%`,
            top: '0',
            width: '80px',
            height: '70vh',
            background: `linear-gradient(to bottom, rgba(242, 230, 179, 0.3) 0%, rgba(242, 230, 179, 0.1) 50%, transparent 100%)`,
            transform: `rotate(${8 + i * 3}deg)`,
            transformOrigin: 'top center'
          }}
          animate={{
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 5 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.8,
            ease: 'easeInOut'
          }}
        />
      ))}

      {/* Falling Leaves */}
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
            rotate: [0, 360 + Math.random() * 180],
            x: [0, Math.sin(leaf.id) * 60]
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: leaf.delay,
            ease: 'linear'
          }}
        >
          <svg
            width={`${leaf.size * 16}px`}
            height={`${leaf.size * 20}px`}
            viewBox="0 0 16 20"
            fill="none"
          >
            <path
              d="M8 2C5 2 2 5 2 10C2 15 5 18 8 18C11 18 14 15 14 10C14 5 11 2 8 2Z"
              fill={leaf.color}
              opacity="0.7"
            />
            <path
              d="M8 2L8 18"
              stroke={leaf.color}
              strokeWidth="0.5"
              opacity="0.5"
            />
          </svg>
        </motion.div>
      ))}

      {/* Forest Floor Mist */}
      <div className="absolute bottom-0 left-0 right-0 h-32">
        <motion.div
          className="w-full h-full opacity-30"
          style={{
            background: `linear-gradient(to top, rgba(232, 220, 200, 0.4) 0%, transparent 100%)`,
          }}
          animate={{
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </div>
    </div>
  );
};

// Sky Scene - Open Horizons
export const SkyScene: React.FC = () => {
  const [clouds, setClouds] = useState<Array<{ id: number; x: number; y: number; size: number; speed: number }>>([]);

  useEffect(() => {
    const newClouds = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 120 - 20,
      y: 10 + Math.random() * 40,
      size: 0.6 + Math.random() * 0.8,
      speed: 0.3 + Math.random() * 0.4
    }));
    setClouds(newClouds);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Sky Gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, 
            #87CEEB 0%, 
            #B8C5D1 30%, 
            #E8EBF0 70%, 
            #F5F8FB 100%)`
        }}
      />

      {/* Distant Mountains */}
      <div className="absolute bottom-0 left-0 right-0 h-1/4">
        {[...Array(4)].map((_, i) => (
          <div
            key={`mountain-${i}`}
            className="absolute bottom-0"
            style={{
              left: `${i * 30 - 10}%`,
              width: '400px',
              height: `${60 + i * 20}px`,
              background: `linear-gradient(to top, rgba(139, 168, 212, ${0.3 - i * 0.05}) 0%, transparent 100%)`,
              clipPath: `polygon(0% 100%, ${20 + i * 10}% ${30 + i * 10}%, ${40 + i * 15}% ${20 + i * 5}%, ${60 + i * 10}% ${40 + i * 8}%, 100% 100%)`,
            }}
          />
        ))}
      </div>

      {/* Floating Clouds */}
      {clouds.map((cloud) => (
        <motion.div
          key={cloud.id}
          className="absolute"
          style={{
            left: `${cloud.x}%`,
            top: `${cloud.y}%`,
          }}
          animate={{
            x: ['0vw', '120vw']
          }}
          transition={{
            duration: 60 / cloud.speed,
            repeat: Infinity,
            ease: 'linear'
          }}
        >
          <svg
            width={`${cloud.size * 120}px`}
            height={`${cloud.size * 60}px`}
            viewBox="0 0 120 60"
            fill="none"
          >
            <ellipse cx="30" cy="40" rx="25" ry="15" fill="rgba(255, 255, 255, 0.8)" />
            <ellipse cx="50" cy="35" rx="30" ry="20" fill="rgba(255, 255, 255, 0.9)" />
            <ellipse cx="70" cy="40" rx="25" ry="15" fill="rgba(255, 255, 255, 0.8)" />
            <ellipse cx="90" cy="45" rx="20" ry="12" fill="rgba(255, 255, 255, 0.7)" />
          </svg>
        </motion.div>
      ))}

      {/* Flying Birds */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`bird-${i}`}
          className="absolute"
          style={{
            top: `${20 + i * 8}%`,
            left: '-50px',
          }}
          animate={{
            x: ['0vw', '110vw'],
            y: [0, -15, -5, -25, -10]
          }}
          transition={{
            duration: 25 + i * 5,
            repeat: Infinity,
            delay: i * 3,
            ease: 'easeInOut'
          }}
        >
          <svg
            width="32px"
            height="20px"
            viewBox="0 0 32 20"
            fill="none"
          >
            <motion.path
              d="M4 10C8 6 12 8 16 10C20 8 24 6 28 10"
              stroke="rgba(44, 62, 80, 0.6)"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              animate={{
                d: [
                  "M4 10C8 6 12 8 16 10C20 8 24 6 28 10",
                  "M4 10C8 14 12 12 16 10C20 12 24 14 28 10",
                  "M4 10C8 6 12 8 16 10C20 8 24 6 28 10"
                ]
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          </svg>
        </motion.div>
      ))}

      {/* Gentle Wind Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`wind-${i}`}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: 'rgba(255, 255, 255, 0.6)',
            top: `${30 + Math.random() * 40}%`,
            left: '-10px'
          }}
          animate={{
            x: ['0vw', '110vw'],
            y: [0, Math.sin(i) * 20]
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            delay: i * 2,
            ease: 'linear'
          }}
        />
      ))}
    </div>
  );
};

// Sea Scene - Flowing Depths
export const SeaScene: React.FC = () => {
  const [bubbles, setBubbles] = useState<Array<{ id: number; x: number; size: number; speed: number }>>([]);

  useEffect(() => {
    const newBubbles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: 0.3 + Math.random() * 0.7,
      speed: 0.5 + Math.random() * 1
    }));
    setBubbles(newBubbles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Ocean Gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, 
            #4DB8A8 0%, 
            #1B8B8B 30%, 
            #0E5A6D 70%, 
            #051C2A 100%)`
        }}
      />

      {/* Underwater Light Caustics */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`caustic-${i}`}
          className="absolute"
          style={{
            left: `${i * 15 - 5}%`,
            top: '0',
            width: '100px',
            height: '100vh',
            background: `linear-gradient(to bottom, 
              rgba(179, 229, 252, 0.3) 0%, 
              rgba(179, 229, 252, 0.1) 50%, 
              transparent 100%)`,
            transform: `rotate(${-10 + i * 3}deg) skew(${i * 2}deg)`,
            transformOrigin: 'top center'
          }}
          animate={{
            opacity: [0.2, 0.6, 0.2],
            transform: [
              `rotate(${-10 + i * 3}deg) skew(${i * 2}deg)`,
              `rotate(${-5 + i * 3}deg) skew(${i * 2 + 2}deg)`,
              `rotate(${-10 + i * 3}deg) skew(${i * 2}deg)`
            ]
          }}
          transition={{
            duration: 4 + i * 0.3,
            repeat: Infinity,
            delay: i * 0.5,
            ease: 'easeInOut'
          }}
        />
      ))}

      {/* Coral Formations */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`coral-${i}`}
            className="absolute bottom-0"
            style={{
              left: `${i * 18}%`,
              width: '60px',
              height: `${80 + i * 20}px`,
              background: `linear-gradient(to top, 
                rgba(255, 107, 107, 0.6) 0%, 
                rgba(77, 184, 168, 0.4) 50%, 
                transparent 100%)`,
              borderRadius: '50% 50% 0 0',
              opacity: 0.7
            }}
            animate={{
              transform: [
                `scaleY(1) rotate(${-2 + i}deg)`,
                `scaleY(1.1) rotate(${2 - i}deg)`,
                `scaleY(1) rotate(${-2 + i}deg)`
              ]
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      {/* Kelp Forest */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`kelp-${i}`}
          className="absolute bottom-0"
          style={{
            left: `${5 + i * 12}%`,
            width: '8px',
            height: `${200 + i * 50}px`,
            background: `linear-gradient(to top, 
              rgba(46, 125, 50, 0.8) 0%, 
              rgba(46, 125, 50, 0.4) 70%, 
              transparent 100%)`,
            borderRadius: '4px',
            transformOrigin: 'bottom center'
          }}
          animate={{
            transform: [
              `rotate(${-5 + i * 2}deg)`,
              `rotate(${5 - i * 2}deg)`,
              `rotate(${-5 + i * 2}deg)`
            ]
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      ))}

      {/* Rising Bubbles */}
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full"
          style={{
            left: `${bubble.x}%`,
            bottom: '-20px',
            width: `${bubble.size * 12}px`,
            height: `${bubble.size * 12}px`,
            background: 'rgba(255, 255, 255, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.5)'
          }}
          animate={{
            y: [0, -window.innerHeight - 100],
            x: [0, Math.sin(bubble.id) * 30],
            scale: [1, 1.2, 0.8]
          }}
          transition={{
            duration: 8 / bubble.speed,
            repeat: Infinity,
            delay: bubble.id * 0.5,
            ease: 'easeOut'
          }}
        />
      ))}

      {/* School of Fish */}
      <motion.div
        className="absolute"
        style={{ top: '40%', left: '-200px' }}
        animate={{
          x: ['0vw', '120vw'],
          y: [0, -30, 20, -10, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`fish-${i}`}
            className="absolute"
            style={{
              left: `${i * 15}px`,
              top: `${Math.sin(i) * 20}px`,
            }}
            animate={{
              y: [0, Math.sin(i + Date.now() * 0.001) * 10]
            }}
            transition={{
              duration: 2 + i * 0.2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
              <ellipse cx="10" cy="6" rx="8" ry="4" fill="rgba(77, 184, 168, 0.8)" />
              <path d="M2 6L0 4L0 8Z" fill="rgba(77, 184, 168, 0.8)" />
            </svg>
          </motion.div>
        ))}
      </motion.div>

      {/* Bioluminescent Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`bio-${i}`}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: 'rgba(0, 229, 255, 0.8)',
            boxShadow: '0 0 10px rgba(0, 229, 255, 0.6)',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.5,
            ease: 'easeInOut'
          }}
        />
      ))}
    </div>
  );
};

// Underground Scene - Crystal Depths
export const UndergroundScene: React.FC = () => {
  const [crystals, setCrystals] = useState<Array<{ id: number; x: number; y: number; size: number; color: string }>>([]);

  useEffect(() => {
    const crystalColors = ['#00D9A3', '#8E44AD', '#9B8BA8', '#A8856D'];
    const newCrystals = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: 20 + Math.random() * 60,
      size: 0.3 + Math.random() * 0.7,
      color: crystalColors[Math.floor(Math.random() * crystalColors.length)]
    }));
    setCrystals(newCrystals);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Cave Gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at center, 
            rgba(93, 78, 117, 0.3) 0%, 
            rgba(58, 58, 69, 0.6) 50%, 
            rgba(26, 24, 32, 0.9) 100%)`
        }}
      />

      {/* Rock Formations */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={`rock-${i}`}
            className="absolute"
            style={{
              left: `${i * 20 - 5}%`,
              top: `${60 + i * 5}%`,
              width: `${100 + i * 30}px`,
              height: `${80 + i * 20}px`,
              background: `linear-gradient(135deg, 
                rgba(107, 91, 127, 0.4) 0%, 
                rgba(58, 58, 69, 0.6) 100%)`,
              borderRadius: `${20 + i * 10}% ${30 + i * 5}% ${25 + i * 8}% ${15 + i * 12}%`,
              opacity: 0.6
            }}
          />
        ))}
      </div>

      {/* Glowing Crystals */}
      {crystals.map((crystal) => (
        <motion.div
          key={crystal.id}
          className="absolute"
          style={{
            left: `${crystal.x}%`,
            top: `${crystal.y}%`,
            width: `${crystal.size * 20}px`,
            height: `${crystal.size * 30}px`,
          }}
          animate={{
            opacity: [0.6, 1, 0.6],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 3 + crystal.id * 0.2,
            repeat: Infinity,
            delay: crystal.id * 0.3,
            ease: 'easeInOut'
          }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 20 30"
            fill="none"
          >
            <polygon
              points="10,2 15,10 12,28 8,28 5,10"
              fill={crystal.color}
              opacity="0.8"
            />
            <polygon
              points="10,2 15,10 12,28 8,28 5,10"
              fill="none"
              stroke={crystal.color}
              strokeWidth="0.5"
              opacity="0.6"
            />
          </svg>
          <div
            className="absolute inset-0 rounded-full blur-sm"
            style={{
              background: crystal.color,
              opacity: 0.3,
              transform: 'scale(1.5)'
            }}
          />
        </motion.div>
      ))}

      {/* Underground Stream */}
      <div className="absolute bottom-0 left-0 right-0 h-16">
        <motion.div
          className="w-full h-full"
          style={{
            background: `linear-gradient(90deg, 
              transparent 0%, 
              rgba(77, 184, 168, 0.4) 20%, 
              rgba(77, 184, 168, 0.6) 50%, 
              rgba(77, 184, 168, 0.4) 80%, 
              transparent 100%)`,
            borderRadius: '50% 50% 0 0'
          }}
          animate={{
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </div>

      {/* Floating Spores */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`spore-${i}`}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: 'rgba(0, 217, 163, 0.6)',
            boxShadow: '0 0 6px rgba(0, 217, 163, 0.4)',
            left: `${Math.random() * 100}%`,
            bottom: '-10px'
          }}
          animate={{
            y: [0, -window.innerHeight - 50],
            x: [0, Math.sin(i) * 40],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            delay: i * 1.5,
            ease: 'easeOut'
          }}
        />
      ))}

      {/* Mineral Veins */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`vein-${i}`}
          className="absolute"
          style={{
            left: `${20 + i * 20}%`,
            top: `${10 + i * 15}%`,
            width: '2px',
            height: `${200 + i * 100}px`,
            background: `linear-gradient(to bottom, 
              rgba(168, 133, 109, 0.8) 0%, 
              rgba(168, 133, 109, 0.4) 50%, 
              transparent 100%)`,
            transform: `rotate(${15 + i * 10}deg)`
          }}
          animate={{
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      ))}
    </div>
  );
};

// Hybrid Scene - Forest Stream
export const HybridScene: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Split Background */}
      <div className="absolute inset-0 flex">
        {/* Forest Side */}
        <div 
          className="w-1/2 h-full"
          style={{
            background: `linear-gradient(135deg, 
              rgba(45, 80, 22, 0.3) 0%, 
              rgba(139, 111, 71, 0.2) 100%)`
          }}
        />
        {/* Water Side */}
        <div 
          className="w-1/2 h-full"
          style={{
            background: `linear-gradient(225deg, 
              rgba(77, 184, 168, 0.3) 0%, 
              rgba(27, 139, 139, 0.2) 100%)`
          }}
        />
      </div>

      {/* Flowing Stream */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-32 h-full"
          style={{
            background: `linear-gradient(to bottom, 
              rgba(77, 184, 168, 0.6) 0%, 
              rgba(77, 184, 168, 0.8) 50%, 
              rgba(77, 184, 168, 0.6) 100%)`,
            borderRadius: '50px'
          }}
          animate={{
            opacity: [0.6, 0.9, 0.6],
            width: ['120px', '140px', '120px']
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </div>

      {/* Forest Elements on Left */}
      <div className="absolute left-0 top-0 w-1/2 h-full">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`tree-${i}`}
            className="absolute bottom-0"
            style={{
              left: `${i * 30}%`,
              width: '60px',
              height: `${300 + i * 50}px`,
              background: `linear-gradient(to top, 
                rgba(31, 58, 15, 0.6) 0%, 
                transparent 70%)`,
              borderRadius: '30px 30px 0 0'
            }}
            animate={{
              transform: [`rotate(${-2 + i}deg)`, `rotate(${2 - i}deg)`, `rotate(${-2 + i}deg)`]
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      {/* Water Elements on Right */}
      <div className="absolute right-0 top-0 w-1/2 h-full">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`bubble-${i}`}
            className="absolute rounded-full"
            style={{
              right: `${10 + i * 15}%`,
              bottom: '-20px',
              width: `${8 + i * 2}px`,
              height: `${8 + i * 2}px`,
              background: 'rgba(127, 217, 208, 0.4)',
              border: '1px solid rgba(127, 217, 208, 0.6)'
            }}
            animate={{
              y: [0, -window.innerHeight - 100],
              x: [0, Math.sin(i) * 20]
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              delay: i * 0.8,
              ease: 'easeOut'
            }}
          />
        ))}
      </div>

      {/* Connecting Elements */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`connect-${i}`}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: 'rgba(168, 212, 200, 0.8)',
            left: `${45 + Math.random() * 10}%`,
            top: `${20 + i * 15}%`,
            boxShadow: '0 0 8px rgba(168, 212, 200, 0.6)'
          }}
          animate={{
            scale: [0.5, 1.2, 0.5],
            opacity: [0.4, 1, 0.4]
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.6,
            ease: 'easeInOut'
          }}
        />
      ))}
    </div>
  );
};

// Biome Scene Selector
interface BiomeSceneProps {
  biome: 'forest' | 'sky' | 'sea' | 'underground' | 'hybrid';
}

export const BiomeScene: React.FC<BiomeSceneProps> = ({ biome }) => {
  switch (biome) {
    case 'forest':
      return <ForestScene />;
    case 'sky':
      return <SkyScene />;
    case 'sea':
      return <SeaScene />;
    case 'underground':
      return <UndergroundScene />;
    case 'hybrid':
      return <HybridScene />;
    default:
      return <ForestScene />;
  }
};