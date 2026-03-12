'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, GitFork, Code, Music, Wrench } from 'lucide-react';

interface Tool {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  language: string;
  githubUrl: string;
  demoUrl?: string;
  stars: number;
  icon: React.ReactNode;
  features: string[];
  technologies: string[];
}

const tools: Tool[] = [
  {
    id: 'rgba-synth',
    name: 'RGBA Synth',
    description: 'A retro feeling synth sound creator using sawtooth, square, saw, and sin waves.',
    longDescription: 'RGBA Synth allows you to create a retro feeling synth sound by combining together sawtooth, square, saw, and sin waves. Through the use of a few sliders controlling each of their presence within the final output, you can create unique and nostalgic sounds.',
    language: 'C++',
    githubUrl: 'https://github.com/JacobACan/RGBA-Synth',
    stars: 3,
    icon: <Music size={32} />,
    features: [
      'Multiple waveform synthesis',
      'Real-time audio processing',
      'Intuitive slider controls',
      'Retro sound aesthetics'
    ],
    technologies: ['C++', 'Audio Programming', 'DSP']
  },
  {
    id: 'just-intonation',
    name: 'Just Intonation',
    description: 'Learn how to play what you hear - a music learning tool.',
    longDescription: 'Just Intonation is an educational tool designed to help musicians develop their ear training skills and understand the mathematical relationships in music. It focuses on pure intervals and harmonic relationships.',
    language: 'TypeScript',
    githubUrl: 'https://github.com/JacobACan/JustIntonation',
    stars: 0,
    icon: <Music size={32} />,
    features: [
      'Interactive ear training',
      'Pure interval exploration',
      'Mathematical music theory',
      'Educational interface'
    ],
    technologies: ['TypeScript', 'React', 'Web Audio API']
  },
  {
    id: 'chill-nvim',
    name: 'Chill Nvim',
    description: 'Make your nvim session super chill with this configuration.',
    longDescription: 'Chill Nvim is a carefully crafted Neovim configuration that prioritizes a calm, distraction-free coding environment. It includes thoughtfully selected plugins and settings to enhance productivity while maintaining a zen-like coding experience.',
    language: 'Lua',
    githubUrl: 'https://github.com/JacobACan/chill_nvim',
    stars: 0,
    icon: <Code size={32} />,
    features: [
      'Minimalist design',
      'Productivity-focused plugins',
      'Smooth animations',
      'Distraction-free environment'
    ],
    technologies: ['Lua', 'Neovim', 'Plugin Configuration']
  }
];

const ToolsSection: React.FC = () => {
  const getLanguageColor = (language: string) => {
    switch (language.toLowerCase()) {
      case 'c++': return 'bg-blue-100 text-blue-800';
      case 'typescript': return 'bg-blue-100 text-blue-800';
      case 'lua': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto"
    >
      <div className="mb-8">
        <motion.h1 
          className="text-4xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          Tools & Projects
        </motion.h1>
        <motion.div 
          className="w-24 h-1 bg-blue-600 rounded"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-gray-600 mt-4 text-lg"
        >
          A collection of tools and projects I've built to solve problems and explore new technologies.
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {tools.map((tool, index) => (
          <motion.div
            key={tool.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="text-blue-600">{tool.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{tool.name}</h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLanguageColor(tool.language)}`}>
                      {tool.language}
                    </span>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Star size={14} className="mr-1" />
                      <span>{tool.stars}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-700 mb-4 leading-relaxed">{tool.longDescription}</p>

            {/* Features */}
            <div className="mb-4">
              <h4 className="font-medium text-gray-900 mb-2">Key Features</h4>
              <ul className="grid grid-cols-2 gap-1">
                {tool.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gray-700 flex items-start">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="mb-6">
              <h4 className="font-medium text-gray-900 mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {tool.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-3">
              <motion.a
                href={tool.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={16} />
                <span>View Code</span>
              </motion.a>
              {tool.demoUrl && (
                <motion.a
                  href={tool.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-100 text-center"
      >
        <div className="flex items-center justify-center mb-3">
          <Wrench className="text-blue-600 mr-2" size={24} />
          <h3 className="text-xl font-semibold text-gray-900">More Projects Coming Soon</h3>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          I'm always working on new tools and projects. Check out my GitHub profile to see 
          the latest updates and contributions to open source projects.
        </p>
        <motion.a
          href="https://github.com/JacobACan"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          whileHover={{ scale: 1.05 }}
        >
          <Github size={20} />
          <span>Follow on GitHub</span>
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default ToolsSection;