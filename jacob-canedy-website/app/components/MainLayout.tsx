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
import { ForestBackground, ParallaxContainer } from './biophilic/ForestAnimations';

type Section = 'about' | 'education' | 'lessons' | 'tools' | 'hobbies';

const MainLayout: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{ background: 'var(--bio-background)' }}
    >
      {/* Forest Background Animations */}
      <ForestBackground />
      
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
          background: `linear-gradient(135deg, var(--bio-light-accent), var(--bio-background))`,
          boxShadow: 'var(--bio-shadow-medium)',
          borderBottom: `1px solid var(--bio-accent)`
        }}
      >
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-2">
            <TreePine size={24} style={{ color: 'var(--bio-primary)' }} />
            <h1 
              className="text-xl font-bold"
              style={{ 
                color: 'var(--bio-primary)',
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
              background: 'var(--bio-background)',
              color: 'var(--bio-primary)',
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
              style={{ background: 'rgba(26, 20, 16, 0.6)' }}
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

      {/* Main Content with Parallax */}
      <main className="lg:ml-80 min-h-screen pt-16 lg:pt-0 relative z-10">
        <ParallaxContainer speed={0.1} className="absolute inset-0 pointer-events-none">
          <div 
            className="w-full h-full opacity-5"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, var(--bio-moss) 2px, transparent 2px),
                radial-gradient(circle at 75% 75%, var(--bio-trunk) 1px, transparent 1px)
              `,
              backgroundSize: '100px 100px, 150px 150px'
            }}
          />
        </ParallaxContainer>
        
        <div className="relative z-20 p-4 lg:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ 
                duration: 0.6, 
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
    </div>
  );
};

export default MainLayout;