'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  GraduationCap, 
  BookOpen, 
  Wrench, 
  Heart,
  Music,
  Dumbbell,
  ChevronDown,
  ChevronRight,
  Github,
  ExternalLink,
  Leaf,
  TreePine
} from 'lucide-react';
import { RustlingBranch } from './biophilic/ForestAnimations';
import { useBiome } from './biophilic/BiomeProvider';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href?: string;
  subItems?: NavItem[];
  hidden?: boolean;
}

const navigationItems: NavItem[] = [
  {
    id: 'about',
    label: 'About',
    icon: <User size={20} />,
    href: '#about'
  },
  {
    id: 'education',
    label: 'Education',
    icon: <GraduationCap size={20} />,
    href: '#education'
  },
  {
    id: 'lessons',
    label: 'Lessons',
    icon: <BookOpen size={20} />,
    subItems: [
      {
        id: 'lessons-music',
        label: 'Music',
        icon: <Music size={18} />,
        href: '#lessons/music'
      },
      {
        id: 'lessons-fitness',
        label: 'Fitness',
        icon: <Dumbbell size={18} />,
        href: '#lessons/fitness'
      }
    ]
  },
  {
    id: 'tools',
    label: 'Tools',
    icon: <Wrench size={20} />,
    subItems: [
      {
        id: 'rgba-synth',
        label: 'RGBA Synth',
        icon: <Music size={18} />,
        href: 'https://github.com/JacobACan/RGBA-Synth'
      },
      {
        id: 'just-intonation',
        label: 'Just Intonation',
        icon: <Music size={18} />,
        href: 'https://github.com/JacobACan/JustIntonation'
      },
      {
        id: 'chill-nvim',
        label: 'Chill Nvim',
        icon: <Wrench size={18} />,
        href: 'https://github.com/JacobACan/chill_nvim'
      }
    ]
  },
  {
    id: 'hobbies',
    label: 'Hobbies',
    icon: <Heart size={20} />,
    subItems: [
      {
        id: 'hobbies-music',
        label: 'Music',
        icon: <Music size={18} />,
        href: '#hobbies/music'
      },
      {
        id: 'hobbies-fitness',
        label: 'Fitness',
        icon: <Dumbbell size={18} />,
        href: '#hobbies/fitness',
        hidden: true // WIP - hidden for now
      }
    ]
  }
];

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const { biomeColors } = useBiome();

  const toggleExpanded = (itemId: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }
    setExpandedItems(newExpanded);
  };

  const handleItemClick = (item: NavItem) => {
    if (item.subItems) {
      toggleExpanded(item.id);
    } else if (item.href) {
      if (item.href.startsWith('http')) {
        // External link
        window.open(item.href, '_blank');
      } else {
        // Internal navigation
        onSectionChange(item.id);
      }
    }
  };

  const renderNavItem = (item: NavItem, level: number = 0) => {
    if (item.hidden) return null;

    const isExpanded = expandedItems.has(item.id);
    const isActive = activeSection === item.id;
    const hasSubItems = item.subItems && item.subItems.length > 0;

    return (
      <div key={item.id} className="w-full">
        <RustlingBranch>
          <motion.button
            onClick={() => handleItemClick(item)}
            className={`
              w-full flex items-center justify-between px-4 py-3 text-left
              transition-all duration-300 group relative overflow-hidden
              ${level > 0 ? 'ml-4 pl-6' : ''}
            `}
            style={{
              borderRadius: level > 0 ? '0.75rem 1.25rem 1rem 0.5rem' : '1rem 1.5rem 1.25rem 0.75rem',
              background: isActive 
                ? `linear-gradient(135deg, var(--bio-primary), var(--bio-moss))`
                : 'var(--bio-background)',
              color: isActive ? 'var(--bio-sunlight)' : 'var(--bio-dark)',
              boxShadow: isActive 
                ? 'var(--bio-shadow-medium), var(--bio-shadow-glow)' 
                : 'var(--bio-shadow-soft)',
              border: `1px solid ${isActive ? 'var(--bio-highlight)' : 'var(--bio-accent)'}`
            }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: 'var(--bio-shadow-medium)',
              background: isActive 
                ? `linear-gradient(135deg, var(--bio-primary), var(--bio-moss))`
                : `linear-gradient(135deg, var(--bio-light-accent), var(--bio-background))`
            }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Organic background pattern */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle at 30% 40%, var(--bio-moss) 1px, transparent 1px)`,
                backgroundSize: '20px 20px'
              }}
            />
            
            <div className="flex items-center space-x-3 relative z-10">
              <motion.span 
                className="transition-colors duration-300"
                style={{ 
                  color: isActive ? 'var(--bio-sunlight)' : 'var(--bio-secondary)'
                }}
                whileHover={{ scale: 1.1 }}
              >
                {item.icon}
              </motion.span>
              <span 
                className="font-medium transition-colors duration-300"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                {item.label}
              </span>
              {item.href?.startsWith('http') && (
                <ExternalLink 
                  size={14} 
                  className="opacity-60" 
                  style={{ color: isActive ? 'var(--bio-sunlight)' : 'var(--bio-secondary)' }}
                />
              )}
            </div>
            
            {hasSubItems && (
              <motion.span
                animate={{ rotate: isExpanded ? 90 : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                style={{ color: isActive ? 'var(--bio-sunlight)' : 'var(--bio-secondary)' }}
              >
                <ChevronRight size={16} />
              </motion.span>
            )}
          </motion.button>
        </RustlingBranch>

        <AnimatePresence>
          {hasSubItems && isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0, y: -10 }}
              animate={{ height: 'auto', opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-3 space-y-2 relative">
                {/* Connecting branch line */}
                <div 
                  className="absolute left-6 top-0 bottom-0 w-0.5 opacity-30"
                  style={{ background: 'var(--bio-secondary)' }}
                />
                {item.subItems?.map(subItem => renderNavItem(subItem, level + 1))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <motion.aside
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="fixed left-0 top-0 h-full w-80 z-50 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, 
          ${biomeColors.lightAccent} 0%, 
          ${biomeColors.background} 30%, 
          ${biomeColors.lightAccent} 100%)`,
        boxShadow: 'var(--bio-shadow-strong)',
        borderRight: `1px solid ${biomeColors.accent}`
      }}
    >
      {/* Forest texture overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, ${biomeColors.secondary} 2px, transparent 2px),
            radial-gradient(circle at 80% 70%, ${biomeColors.primary} 1px, transparent 1px),
            radial-gradient(circle at 40% 80%, ${biomeColors.accent} 1.5px, transparent 1.5px)
          `,
          backgroundSize: '60px 60px, 40px 40px, 80px 80px'
        }}
      />
      
      <div className="relative flex flex-col h-full">
        {/* Header with organic shape */}
        <div className="p-6 relative">
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              background: `linear-gradient(45deg, var(--bio-moss), var(--bio-accent))`,
              borderRadius: '0 0 2rem 1.5rem',
              boxShadow: 'var(--bio-shadow-inner)'
            }}
          />
          <div className="relative z-10">
            <RustlingBranch>
              <motion.div
                className="flex items-center space-x-3 mb-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <TreePine size={28} style={{ color: 'var(--bio-primary)' }} />
                <h1 
                  className="text-2xl font-bold"
                  style={{ 
                    color: 'var(--bio-primary)',
                    fontFamily: 'var(--font-playfair), serif'
                  }}
                >
                  Jacob Canedy
                </h1>
              </motion.div>
            </RustlingBranch>
            <motion.p 
              className="text-base"
              style={{ color: 'var(--bio-secondary)' }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Developer & Musician
            </motion.p>
            <motion.div
              className="flex items-center space-x-1 mt-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Leaf size={14} style={{ color: 'var(--bio-moss)' }} />
              <span 
                className="text-sm italic"
                style={{ color: 'var(--bio-moss)' }}
              >
                Growing through code & sound
              </span>
            </motion.div>
          </div>
        </div>

        {/* Navigation with organic spacing */}
        <nav className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-3">
            {navigationItems.map(item => renderNavItem(item))}
          </div>
        </nav>

        {/* Footer with natural border */}
        <div 
          className="p-4 relative"
          style={{
            borderTop: `2px solid var(--bio-accent)`,
            background: `linear-gradient(45deg, var(--bio-light-accent), var(--bio-background))`
          }}
        >
          <motion.a
            href="https://github.com/JacobACan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 p-3 rounded-xl transition-all duration-300"
            style={{
              color: 'var(--bio-secondary)',
              background: 'var(--bio-background)',
              boxShadow: 'var(--bio-shadow-soft)'
            }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: 'var(--bio-shadow-medium)'
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Github size={20} />
            <span className="font-medium">GitHub Profile</span>
          </motion.a>
        </div>
      </div>
    </motion.aside>
  );
};

export default Sidebar;