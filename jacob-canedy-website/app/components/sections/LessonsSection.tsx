'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Dumbbell, Clock, Users, Star, BookOpen } from 'lucide-react';

interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  price: string;
  features: string[];
}

const musicLessons: Lesson[] = [
  {
    id: 'music-theory',
    title: 'Music Theory Fundamentals',
    description: 'Learn the building blocks of music including scales, chords, and harmony.',
    duration: '60 minutes',
    level: 'Beginner',
    price: '$50/session',
    features: [
      'Scale construction and modes',
      'Chord progressions and voice leading',
      'Rhythm and time signatures',
      'Ear training exercises'
    ]
  },
  {
    id: 'composition',
    title: 'Digital Music Composition',
    description: 'Create your own music using modern digital audio workstations and techniques.',
    duration: '90 minutes',
    level: 'Intermediate',
    price: '$75/session',
    features: [
      'DAW workflow and setup',
      'MIDI programming and editing',
      'Sound design and synthesis',
      'Mixing and arrangement'
    ]
  },
  {
    id: 'production',
    title: 'Advanced Music Production',
    description: 'Master the art of professional music production and audio engineering.',
    duration: '120 minutes',
    level: 'Advanced',
    price: '$100/session',
    features: [
      'Advanced mixing techniques',
      'Mastering fundamentals',
      'Studio acoustics',
      'Professional workflow'
    ]
  }
];

const fitnessLessons: Lesson[] = [
  {
    id: 'strength-basics',
    title: 'Strength Training Basics',
    description: 'Build a solid foundation with proper form and progressive overload principles.',
    duration: '45 minutes',
    level: 'Beginner',
    price: '$40/session',
    features: [
      'Proper lifting technique',
      'Program design basics',
      'Safety and injury prevention',
      'Nutrition fundamentals'
    ]
  },
  {
    id: 'functional-fitness',
    title: 'Functional Fitness',
    description: 'Develop real-world strength and mobility for daily activities.',
    duration: '60 minutes',
    level: 'Intermediate',
    price: '$55/session',
    features: [
      'Movement pattern training',
      'Mobility and flexibility',
      'Bodyweight exercises',
      'Sport-specific training'
    ]
  }
];

type LessonCategory = 'music' | 'fitness';

const LessonsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<LessonCategory>('music');

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const currentLessons = activeCategory === 'music' ? musicLessons : fitnessLessons;

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
          Lessons & Coaching
        </motion.h1>
        <motion.div 
          className="w-24 h-1 bg-blue-600 rounded"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        />
      </div>

      {/* Category Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex space-x-4 mb-8"
      >
        <button
          onClick={() => setActiveCategory('music')}
          className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
            activeCategory === 'music'
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <Music size={20} />
          <span>Music Lessons</span>
        </button>
        <button
          onClick={() => setActiveCategory('fitness')}
          className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
            activeCategory === 'fitness'
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <Dumbbell size={20} />
          <span>Fitness Coaching</span>
        </button>
      </motion.div>

      {/* Lessons Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {currentLessons.map((lesson, index) => (
            <motion.div
              key={lesson.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{lesson.title}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(lesson.level)}`}>
                  {lesson.level}
                </span>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">{lesson.description}</p>

              <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Clock size={16} className="mr-1" />
                  <span>{lesson.duration}</span>
                </div>
                <div className="text-lg font-semibold text-blue-600">{lesson.price}</div>
              </div>

              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                  <BookOpen size={16} className="mr-1" />
                  What You'll Learn
                </h4>
                <ul className="space-y-1">
                  {lesson.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-700 flex items-start">
                      <Star size={12} className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Book Session
              </button>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-100"
      >
        <div className="flex items-center mb-3">
          <Users className="text-blue-600 mr-2" size={24} />
          <h3 className="text-xl font-semibold text-gray-900">Ready to Start Learning?</h3>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          Whether you're looking to dive into music production or improve your fitness, 
          I'm here to help you achieve your goals with personalized instruction and proven methods.
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium mb-2 sm:mb-0">
            Schedule Consultation
          </button>
          <span className="text-gray-600">Free 15-minute discovery call available</span>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default LessonsSection;