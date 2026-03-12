'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, TreePine } from 'lucide-react';
import Sidebar from './Sidebar';
import AboutSection from './sections/AboutSection';
import EducationSection from './sections/EducationSection';
import LessonsSection from './sections/LessonsSection';
import ToolsSection from './sections/ToolsSection';
import HobbiesSection from './sections/HobbiesSection';
import { BiomeProvider, BiomeIndicator, useBiome } from './biophilic/BiomeProvider';
import { ParallaxContainer } from './biophilic/ForestAnimations';

type Section = 'about' | 'education' | 'lessons' | 'tools' | 'hobbies';

// Inner component that uses biome context
const MainContent: React.FC<{
  activeSection: Section;
  setActiveSection: (section: Section) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}> = ({ activeSection, setActiveSection, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const { biomeColors } = useBiome();

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <AboutSection />;
      case 'education':
        return <EducationSection />;
      case 'lessons':
        return <LessonsSection />;
      case 'tools':
        return <ToolsSection />;
      case 'hobbies':
        return <HobbiesSection />;
      default:
        return <AboutSection />;
    }
  };

  const handleSectionChange = (section: string) => {
    setActiveSection(section as Section);
    setIsMobileMenuOpen(false); // Close mobile menu when section changes
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar 
          activeSection={activeSection} 
          onSectionChange={handleSectionChange} 
        />
      </div>

      {/* Mobile Header */}
      <div 
        className="lg:hidden fixed top-0 left-0 right-0 z-50"
        style={{
          background: `linear-gradient(135deg, ${biomeColors.lightAccent}, ${biomeColors.background})`,
          boxShadow: 'var(--bio-shadow-medium)',
          borderBottom: `1px solid ${biomeColors.accent}`
        }}
      >
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-2">
            <TreePine size={24} style={{ color: biomeColors.primary }} />
            <h1 
              className="text-xl font-bold"
              style={{ 
                color: biomeColors.primary,
                fontFamily: 'var(--font-playfair), serif'
              }}
            >
              Jacob Canedy
            </h1>
          </div>
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl transition-all duration-300"
            style={{
              background: biomeColors.background,
              color: biomeColors.primary,
              boxShadow: 'var(--bio-shadow-soft)'
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: 'var(--bio-shadow-medium)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 z-40"
              style={{ background: `${biomeColors.shadow}` }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: 'tween', duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="lg:hidden fixed top-0 left-0 h-full w-80 z-50"
            >
              <Sidebar 
                activeSection={activeSection} 
                onSectionChange={handleSectionChange} 
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="lg:ml-80 min-h-screen pt-16 lg:pt-0 relative z-10">
        <div className="relative z-20 p-4 lg:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ 
                duration: 0.8, 
                ease: [0.4, 0, 0.2, 1]
              }}
            >
              <ParallaxContainer speed={0.05}>
                {renderSection()}
              </ParallaxContainer>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Biome Indicator */}
      <BiomeIndicator />
    </div>
  );
};

// Main Layout wrapper with BiomeProvider
const MainLayout: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <BiomeProvider activeSection={activeSection}>
      <MainContent
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
    </BiomeProvider>
  );
};

export default MainLayout;