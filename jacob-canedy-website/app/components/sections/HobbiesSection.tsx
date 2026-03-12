'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Dumbbell, Play, ExternalLink, Calendar, Clock } from 'lucide-react';

interface Song {
  id: string;
  title: string;
  description: string;
  duration: string;
  releaseDate: string;
  soundcloudUrl?: string;
  genre: string;
}

// Placeholder songs - you can update this when you upload to SoundCloud
const songs: Song[] = [
  {
    id: 'song-1',
    title: 'Coming Soon',
    description: 'New music will be uploaded to SoundCloud soon. Stay tuned for original compositions and productions.',
    duration: '--:--',
    releaseDate: 'TBA',
    genre: 'Electronic',
  }
];

interface WorkoutLog {
  id: string;
  date: string;
  type: string;
  duration: string;
  notes: string;
}

// This section is hidden as requested (WIP)
const workoutLogs: WorkoutLog[] = [];

type HobbyCategory = 'music' | 'fitness';

const HobbiesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<HobbyCategory>('music');

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
          Hobbies & Interests
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
          Exploring creativity and staying active through music and fitness.
        </motion.p>
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
          <span>Music</span>
        </button>
        {/* Fitness tab is commented out since it's WIP and should be hidden */}
        {/* 
        <button
          onClick={() => setActiveCategory('fitness')}
          className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
            activeCategory === 'fitness'
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <Dumbbell size={20} />
          <span>Fitness</span>
        </button>
        */}
      </motion.div>

      {/* Content */}
      <AnimatePresence mode="wait">
        {activeCategory === 'music' && (
          <motion.div
            key="music"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Music Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Original Music</h2>
              <p className="text-gray-600 mb-6">
                My musical journey includes composition, production, and sound design. 
                Here you'll find my latest tracks and musical experiments.
              </p>
            </div>

            {/* Songs Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {songs.map((song, index) => (
                <motion.div
                  key={song.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{song.title}</h3>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                      {song.genre}
                    </span>
                  </div>

                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">{song.description}</p>

                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      <span>{song.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      <span>{song.releaseDate}</span>
                    </div>
                  </div>

                  {song.soundcloudUrl ? (
                    <div className="flex space-x-2">
                      <button className="flex items-center space-x-2 bg-orange-500 text-white px-3 py-2 rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium flex-1">
                        <Play size={14} />
                        <span>Play</span>
                      </button>
                      <a
                        href={song.soundcloudUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-gray-600 text-white px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
                      >
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  ) : (
                    <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                      <Music className="mx-auto text-gray-400 mb-2" size={24} />
                      <p className="text-gray-500 text-sm">Track coming soon</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* SoundCloud Integration */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-6 border border-orange-100"
            >
              <div className="flex items-center mb-3">
                <Music className="text-orange-600 mr-2" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">Follow My Musical Journey</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                I'm currently working on new compositions and will be uploading them to SoundCloud soon. 
                My music explores various genres including electronic, ambient, and experimental sounds.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
                <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium mb-2 sm:mb-0">
                  Follow on SoundCloud
                </button>
                <span className="text-gray-600">Get notified when new tracks are released</span>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Fitness section is hidden as requested (WIP) */}
        {activeCategory === 'fitness' && (
          <motion.div
            key="fitness"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="text-center py-12"
          >
            <Dumbbell className="mx-auto text-gray-400 mb-4" size={48} />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Fitness Section</h2>
            <p className="text-gray-600">This section is currently under development.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default HobbiesSection;