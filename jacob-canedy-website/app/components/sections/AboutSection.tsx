'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TreePine, Leaf, Mail, Phone, Linkedin, Github, Sprout, Code, Music, Dumbbell, Coffee, Zap, Cpu, Sun } from 'lucide-react';
import { RustlingBranch } from '../biophilic/ForestAnimations';
import { VideoIntroduction } from '../biophilic/VideoIntroduction';
import { useBiome } from '../biophilic/BiomeProvider';

const AboutSection: React.FC = () => {
  const { biomeColors } = useBiome();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
    }
  };

  const contentItems = [
    {
      icon: <Code size={24} />,
      title: 'Full-Stack Development',
      description: 'Building web applications with .NET, Vue, React, and modern JavaScript frameworks. Passionate about creating intuitive user experiences and clean architecture.',
      color: 'var(--bio-primary)'
    },
    {
      icon: <Music size={24} />,
      title: 'Audio Engineering',
      description: 'Developing audio plugins and music tools, expanding musicianship for myself and others. Merging technology with creativity to build tools that inspire.',
      color: 'var(--bio-accent)'
    },
    {
      icon: <Dumbbell size={24} />,
      title: 'Fitness & Wellness',
      description: 'Passionate about physical fitness and helping others achieve their health goals. I believe in the connection between body and mind.',
      color: 'var(--bio-moss)'
    },
    {
      icon: <Coffee size={24} />,
      title: 'Continuous Learning',
      description: 'Always exploring new technologies and expanding knowledge in emerging fields like Agentic Programming and AI-driven development.',
      color: 'var(--bio-secondary)'
    }
  ];

  const skillCategories = [
    {
      title: 'Languages',
      skills: ['C#', 'TypeScript', 'SQL', 'JavaScript'],
      icon: <Code size={20} />,
      color: 'var(--bio-primary)'
    },
    {
      title: 'Frameworks',
      skills: ['Next.js', 'React', 'Vue.js', 'ASP.NET MVC'],
      icon: <Zap size={20} />,
      color: 'var(--bio-accent)'
    },
    {
      title: 'Specialties',
      skills: ['Agentic Programming', 'Audio Plugins', 'UI/UX Design'],
      icon: <Cpu size={20} />,
      color: 'var(--bio-moss)'
    }
  ];

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-4xl mx-auto relative"
    >
      {/* Atmospheric decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10" style={{ top: '-40px', bottom: '-40px', left: '-60px', right: '-60px' }}>
        {/* Floating leaves */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={`leaf-${i}`}
            className="absolute"
            style={{ top: `${15 + i * 30}%`, left: '-30px' }}
            animate={{
              x: [0, 400 + i * 100],
              y: [0, 30, -15, 20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 18 + i * 4, repeat: Infinity, delay: i * 5, ease: 'easeInOut' }}
          >
            <Leaf size={12 + i * 2} style={{ color: biomeColors.primary, opacity: 0.15 }} />
          </motion.div>
        ))}
      </div>

      {/* Header Section */}
      <motion.div variants={itemVariants} className="mb-12 relative">
        {/* Overlapping tree decoration */}
        <motion.div
          className="absolute -top-8 -right-6 z-10 pointer-events-none"
          animate={{ rotate: [0, 3, -3, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <TreePine size={72} style={{ color: biomeColors.primary, opacity: 0.08 }} />
        </motion.div>

        <div className="flex items-center space-x-4 mb-6">
          <RustlingBranch>
            <motion.div
              className="relative"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <TreePine
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
            className="text-4xl md:text-5xl font-bold"
            style={{
              color: biomeColors.primary,
              fontFamily: 'var(--font-playfair), serif'
            }}
          >
            About Me
          </h1>
        </div>

        <motion.div
          className="relative"
          initial={{ width: 0 }}
          animate={{ width: '8rem' }}
          transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
          style={{
            height: '4px',
            background: `linear-gradient(90deg, ${biomeColors.primary}, ${biomeColors.accent})`,
            borderRadius: '2px',
            boxShadow: `0 2px 8px ${biomeColors.shadow}`
          }}
        >
          <motion.div
            className="absolute -right-1 -top-1 w-2 h-2 rounded-full"
            style={{ background: biomeColors.accent }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>

      {/* Professional Background - Highlighted at top */}
      <motion.div variants={itemVariants} className="mb-10">
        <div
          className="relative p-6 md:p-8"
          style={{
            background: `linear-gradient(145deg, ${biomeColors.background}ee, ${biomeColors.lightAccent}dd, ${biomeColors.background}cc)`,
            borderRadius: '1.5rem 2.5rem 2rem 1rem',
            boxShadow: `3px 6px 20px ${biomeColors.shadow}`,
            border: `1px solid ${biomeColors.accent}30`,
            backdropFilter: 'blur(6px)',
          }}
        >
          {/* Organic texture */}
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 30% 40%, ${biomeColors.primary} 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
              borderRadius: 'inherit',
            }}
          />

          <div className="relative z-10 flex items-center space-x-3 mb-3">
            <Sprout size={24} style={{ color: 'var(--bio-moss)' }} />
            <h2 
              className="text-xl font-semibold"
              style={{ 
                color: biomeColors.primary,
                fontFamily: 'var(--font-playfair), serif'
              }}
            >
              Software Engineering Student at RIT
            </h2>
          </div>
          
          <p 
            className="text-base leading-relaxed ml-11"
            style={{ color: biomeColors.secondary }}
          >
            Previous experience at Emerson Ridgid Tools working on customer-facing and internal applications. 
            Currently pursuing my degree while building real-world projects that combine my passion for technology, music, and fitness.
          </p>
        </div>
      </motion.div>

      {/* Contact Info */}
      <motion.div variants={itemVariants} className="relative mb-12">
        {/* Overlapping sprout decoration */}
        <motion.div
          className="absolute -top-4 left-1/2 pointer-events-none z-20"
          animate={{ y: [0, -3, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Sprout size={20} style={{ color: biomeColors.accent, opacity: 0.3 }} />
        </motion.div>

        <div
          className="relative p-5 md:p-6"
          style={{
            background: `linear-gradient(145deg, ${biomeColors.background}ee, ${biomeColors.lightAccent}dd, ${biomeColors.background}cc)`,
            borderRadius: '1.5rem 2.5rem 2rem 1rem',
            boxShadow: `3px 6px 20px ${biomeColors.shadow}`,
            border: `1px solid ${biomeColors.accent}30`,
            backdropFilter: 'blur(6px)',
          }}
        >
          <div className="relative z-10 flex flex-wrap gap-3">
            {[
              { href: 'mailto:jcanedy19@gmail.com', icon: <Mail size={18} />, label: 'jcanedy19@gmail.com' },
              { href: 'tel:3308032754', icon: <Phone size={18} />, label: '330-803-2754' },
              { href: 'https://www.linkedin.com/in/JacobCan/', icon: <Linkedin size={18} />, label: 'LinkedIn', external: true },
              { href: 'https://github.com/JacobACan/', icon: <Github size={18} />, label: 'GitHub', external: true },
            ].map((contact, i) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.external ? '_blank' : undefined}
                rel={contact.external ? 'noopener noreferrer' : undefined}
                className="flex items-center space-x-2 px-4 py-2.5"
                style={{
                  background: `${biomeColors.primary}10`,
                  color: biomeColors.primary,
                  borderRadius: '1rem 0.75rem 1.25rem 0.5rem',
                  border: `1px solid ${biomeColors.accent}30`,
                }}
                whileHover={{
                  scale: 1.04,
                  boxShadow: `2px 4px 12px ${biomeColors.shadow}`,
                }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.08 }}
              >
                {contact.icon}
                <span className="text-sm font-medium">{contact.label}</span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Overlapping leaf at bottom-right */}
        <motion.div
          className="absolute -bottom-3 right-8 pointer-events-none z-20"
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Leaf size={18} style={{ color: biomeColors.primary, opacity: 0.2 }} />
        </motion.div>
      </motion.div>

      {/* Video Introduction Section */}
      <motion.div variants={itemVariants} className="mb-12 relative">
        {/* Overlapping forest elements around video */}
        <motion.div
          className="absolute -top-8 left-4 pointer-events-none z-20"
          animate={{ rotate: [0, 5, -5, 0], y: [0, -3, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <TreePine size={32} style={{ color: biomeColors.primary, opacity: 0.12 }} />
        </motion.div>

        <VideoIntroduction
          youtubeId="jrnyY-UAAhk"
          title="Hello I'm Jacob"
          description="Hi, My name is Jacob, I'm a creative Software Developer out of Rochester Institute of Technology with a passion for not only developing cool ideas, but also expanding mine and other people's Musicianship and Fitness. Welcome to the website and I hope that you're able to learn a little bit more about me and what I love doing."
        />
      </motion.div>

      {/* Interest Areas - Vertical Cards */}
      <motion.div variants={itemVariants} className="mb-12">
        <div className="flex items-center justify-center space-x-3 mb-8">
          <RustlingBranch>
            <Sun size={28} style={{ color: 'var(--bio-accent)' }} />
          </RustlingBranch>
          <h2 
            className="text-2xl md:text-3xl font-semibold text-center"
            style={{ 
              color: biomeColors.primary,
              fontFamily: 'var(--font-playfair), serif'
            }}
          >
            What I Love
          </h2>
          <RustlingBranch>
            <TreePine size={28} style={{ color: 'var(--bio-moss)' }} />
          </RustlingBranch>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contentItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              {/* Organic background glow */}
              <div 
                className="absolute -inset-3 opacity-15 -z-10 group-hover:opacity-25 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(ellipse at center, ${item.color} 0%, transparent 70%)`,
                  borderRadius: '50%',
                  filter: 'blur(15px)'
                }}
              />
              
              <div 
                className="p-6"
                style={{
                  background: `linear-gradient(145deg, ${biomeColors.background}, ${biomeColors.lightAccent}40)`,
                  borderRadius: '1.5rem 2rem 1.25rem 0.75rem',
                  border: `1px solid ${item.color}25`,
                  boxShadow: `2px 4px 16px ${biomeColors.shadow}`
                }}
              >
                {/* Icon with organic background */}
                <motion.div
                  className="inline-flex items-center justify-center w-12 h-12 mb-4 relative"
                  style={{
                    background: `linear-gradient(135deg, ${item.color}20, ${item.color}35)`,
                    borderRadius: '40% 60% 50% 30%',
                    border: `2px solid ${item.color}40`
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div style={{ color: item.color }}>
                    {item.icon}
                  </div>
                </motion.div>

                <h3 
                  className="text-lg font-semibold mb-2"
                  style={{ 
                    color: biomeColors.primary,
                    fontFamily: 'var(--font-playfair), serif'
                  }}
                >
                  {item.title}
                </h3>

                <p 
                  className="text-sm leading-relaxed"
                  style={{ color: biomeColors.secondary }}
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Technical Expertise */}
      <motion.div variants={itemVariants} className="mb-8">
        <div className="flex items-center justify-center space-x-3 mb-6">
          <RustlingBranch>
            <TreePine size={28} style={{ color: 'var(--bio-primary)' }} />
          </RustlingBranch>
          <h2 
            className="text-2xl md:text-3xl font-semibold text-center"
            style={{ 
              color: biomeColors.primary,
              fontFamily: 'var(--font-playfair), serif'
            }}
          >
            Technical Expertise
          </h2>
          <RustlingBranch>
            <Zap size={28} style={{ color: 'var(--bio-accent)' }} />
          </RustlingBranch>
        </div>

        <div 
          className="p-6 md:p-8"
          style={{
            background: `linear-gradient(145deg, ${biomeColors.background}ee, ${biomeColors.lightAccent}dd, ${biomeColors.background}cc)`,
            borderRadius: '2rem 3rem 2rem 1rem',
            boxShadow: `4px 8px 24px ${biomeColors.shadow}`,
            border: `1px solid ${biomeColors.accent}25`,
          }}
        >
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.15, duration: 0.5 }}
              >
                <div 
                  className="inline-flex items-center justify-center w-14 h-14 mb-4"
                  style={{
                    background: `linear-gradient(135deg, ${category.color}20, ${category.color}35)`,
                    borderRadius: '30% 70% 40% 60%',
                    border: `2px solid ${category.color}50`
                  }}
                >
                  <div style={{ color: category.color }}>
                    {category.icon}
                  </div>
                </div>

                <h4 
                  className="text-base font-semibold mb-3"
                  style={{ color: biomeColors.primary }}
                >
                  {category.title}
                </h4>

                <div className="flex flex-wrap justify-center gap-2 max-w-40">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1.5 text-sm font-medium"
                      style={{
                        background: `${category.color}20`,
                        color: category.color,
                        borderRadius: '12px 8px 12px 8px',
                        border: `1px solid ${category.color}35`
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + index * 0.15 + skillIndex * 0.08, duration: 0.4 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom decorative element */}
      <motion.div 
        variants={itemVariants}
        className="flex justify-center items-center space-x-2 mt-8"
        style={{ color: biomeColors.primary, opacity: 0.3 }}
      >
        <Leaf size={14} />
        <Leaf size={10} />
        <Leaf size={6} />
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;
