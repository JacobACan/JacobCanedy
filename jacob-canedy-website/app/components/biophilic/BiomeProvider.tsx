'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { biomeTokens } from '../../styles/biophilic-tokens';
import { BiomeScene } from './BiomeScenes';

type BiomeType = 'forest' | 'sky' | 'sea' | 'underground' | 'hybrid';

interface BiomeContextType {
  currentBiome: BiomeType;
  setBiome: (biome: BiomeType) => void;
  biomeColors: Record<string, string>;
  biomeName: string;
  biomeMood: string;
}

const BiomeContext = createContext<BiomeContextType | undefined>(undefined);

export const useBiome = () => {
  const context = useContext(BiomeContext);
  if (!context) {
    throw new Error('useBiome must be used within a BiomeProvider');
  }
  return context;
};

// Section to biome mapping
const sectionBiomeMap: Record<string, BiomeType> = {
  about: 'forest',
  education: 'sky',
  lessons: 'sea',
  tools: 'underground',
  hobbies: 'hybrid'
};

interface BiomeProviderProps {
  children: React.ReactNode;
  activeSection: string;
}

export const BiomeProvider: React.FC<BiomeProviderProps> = ({ children, activeSection }) => {
  const [currentBiome, setCurrentBiome] = useState<BiomeType>('forest');
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Update biome based on active section
  useEffect(() => {
    const newBiome = sectionBiomeMap[activeSection] || 'forest';
    if (newBiome !== currentBiome) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentBiome(newBiome);
        setIsTransitioning(false);
      }, 300);
    }
  }, [activeSection, currentBiome]);

  // Update CSS variables when biome changes
  useEffect(() => {
    const biomeData = biomeTokens[currentBiome];
    const root = document.documentElement;
    
    // Update CSS custom properties
    Object.entries(biomeData.colors).forEach(([key, value]) => {
      root.style.setProperty(`--bio-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`, value);
    });
  }, [currentBiome]);

  const setBiome = (biome: BiomeType) => {
    if (biome !== currentBiome) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentBiome(biome);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const biomeData = biomeTokens[currentBiome];

  const contextValue: BiomeContextType = {
    currentBiome,
    setBiome,
    biomeColors: biomeData.colors,
    biomeName: biomeData.name,
    biomeMood: biomeData.mood
  };

  return (
    <BiomeContext.Provider value={contextValue}>
      <div className="relative min-h-screen">
        {/* Biome Background Scene */}
        <div className="fixed inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentBiome}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: [0.4, 0, 0.2, 1] 
              }}
              className="absolute inset-0"
            >
              <BiomeScene biome={currentBiome} />
            </motion.div>
          </AnimatePresence>
          
          {/* Transition Overlay */}
          <AnimatePresence>
            {isTransitioning && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 z-10"
                style={{ 
                  background: `radial-gradient(circle, ${biomeData.colors.background} 0%, ${biomeData.colors.dark} 100%)` 
                }}
              />
            )}
          </AnimatePresence>
        </div>

        {/* Content Layer */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </BiomeContext.Provider>
  );
};

// Biome-aware component wrapper
interface BiomeAwareProps {
  children: React.ReactNode;
  className?: string;
}

export const BiomeAware: React.FC<BiomeAwareProps> = ({ children, className = '' }) => {
  const { biomeColors } = useBiome();
  
  return (
    <div 
      className={className}
      style={{
        '--current-primary': biomeColors.primary,
        '--current-secondary': biomeColors.secondary,
        '--current-accent': biomeColors.accent,
        '--current-background': biomeColors.background,
        '--current-highlight': biomeColors.highlight,
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

// Biome transition indicator
export const BiomeIndicator: React.FC = () => {
  const { biomeName, biomeMood, currentBiome } = useBiome();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 z-50 pointer-events-none"
    >
      <div 
        className="px-4 py-2 rounded-xl backdrop-blur-sm border"
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          borderColor: 'var(--bio-accent)',
          color: 'var(--bio-dark)'
        }}
      >
        <div className="text-sm font-medium">{biomeName}</div>
        <div className="text-xs opacity-70">{biomeMood}</div>
      </div>
    </motion.div>
  );
};