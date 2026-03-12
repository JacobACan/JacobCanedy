'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize2, Leaf, TreePine } from 'lucide-react';
import { RustlingBranch } from './ForestAnimations';

interface VideoIntroductionProps {
  videoSrc?: string;
  youtubeId?: string;
  title?: string;
  description?: string;
}

export const VideoIntroduction: React.FC<VideoIntroductionProps> = ({
  videoSrc,
  youtubeId,
  title = "Hello I'm Jacob",
  description = "Hi, My name is Jacob, I'm a creative Software Developer out of Rochester Institute of Technology with a passion for not only developing cool ideas, but also expanding mine and other people's Musicianship and Fitness. Welcome to the website and I hope that you're able to learn a little bit more about me and what I love doing."
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const isYouTube = !!youtubeId;

  useEffect(() => {
    if (isYouTube) {
      setIsLoaded(true);
    } else {
      const video = videoRef.current;
      if (video) {
        const handleLoadedData = () => setIsLoaded(true);
        video.addEventListener('loadeddata', handleLoadedData);
        return () => video.removeEventListener('loadeddata', handleLoadedData);
      }
    }
  }, [isYouTube]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (video) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className="relative w-full max-w-2xl mx-auto"
    >
      {/* Organic background frame with forest elements */}
      <div 
        className="absolute -inset-6 opacity-15 -z-10"
        style={{
          background: `conic-gradient(from 45deg, var(--bio-primary), var(--bio-moss), var(--bio-accent), var(--bio-secondary), var(--bio-primary))`,
          borderRadius: '3rem 4rem 2.5rem 3.5rem',
          transform: 'rotate(-1deg)',
          filter: 'blur(1px)'
        }}
      />

      {/* Main video container with organic shape */}
      <div 
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, var(--bio-background), var(--bio-light-accent))`,
          borderRadius: '2rem 3rem 2.5rem 1.5rem',
          boxShadow: 'var(--bio-shadow-strong), var(--bio-shadow-glow)',
          border: `2px solid var(--bio-accent)`
        }}
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        {/* Decorative forest elements around the frame */}
        <RustlingBranch>
          <motion.div
            className="absolute -top-4 -left-4 z-20"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <TreePine size={32} style={{ color: 'var(--bio-moss)' }} />
          </motion.div>
        </RustlingBranch>

        <RustlingBranch>
          <motion.div
            className="absolute -bottom-3 -right-3 z-20"
            animate={{ rotate: [0, -3, 3, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
          >
            <Leaf size={24} style={{ color: 'var(--bio-accent)' }} />
          </motion.div>
        </RustlingBranch>

        {/* Floating particles around video */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full opacity-30"
            style={{
              background: 'var(--bio-moss)',
              top: `${20 + (i * 12)}%`,
              left: `${10 + (i * 15)}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 3 + (i * 0.5),
              repeat: Infinity,
              delay: i * 0.3,
              ease: 'easeInOut'
            }}
          />
        ))}

        {/* Video element */}
        <div className="relative aspect-video">
          {isYouTube ? (
            <iframe
              ref={iframeRef}
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=0&mute=0&controls=1&rel=0&modestbranding=1`}
              className="w-full h-full"
              style={{ borderRadius: '1.5rem 2.5rem 2rem 1rem' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={title}
            />
          ) : (
            <video
              ref={videoRef}
              src={videoSrc}
              className="w-full h-full object-cover"
              style={{ borderRadius: '1.5rem 2.5rem 2rem 1rem' }}
              muted={isMuted}
              loop
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />
          )}

          {/* Loading overlay */}
          <AnimatePresence>
            {!isLoaded && (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, var(--bio-background), var(--bio-light-accent))`,
                  borderRadius: '1.5rem 2.5rem 2rem 1rem'
                }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                >
                  <TreePine size={48} style={{ color: 'var(--bio-primary)' }} />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Video controls overlay - only for non-YouTube videos */}
          <AnimatePresence>
            {!isYouTube && showControls && isLoaded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  background: 'rgba(0, 0, 0, 0.3)',
                  borderRadius: '1.5rem 2.5rem 2rem 1rem'
                }}
              >
                {/* Play/Pause button */}
                <motion.button
                  onClick={togglePlay}
                  className="p-4 rounded-full mr-4"
                  style={{
                    background: 'var(--bio-primary)',
                    color: 'var(--bio-sunlight)',
                    boxShadow: 'var(--bio-shadow-medium)'
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                </motion.button>

                {/* Mute button */}
                <motion.button
                  onClick={toggleMute}
                  className="p-3 rounded-full mr-4"
                  style={{
                    background: 'var(--bio-accent)',
                    color: 'var(--bio-sunlight)',
                    boxShadow: 'var(--bio-shadow-soft)'
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </motion.button>

                {/* Fullscreen button */}
                <motion.button
                  onClick={toggleFullscreen}
                  className="p-3 rounded-full"
                  style={{
                    background: 'var(--bio-moss)',
                    color: 'var(--bio-sunlight)',
                    boxShadow: 'var(--bio-shadow-soft)'
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Maximize2 size={20} />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Content overlay with title and description */}
        <div className="p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <RustlingBranch>
                <Leaf size={24} style={{ color: 'var(--bio-moss)' }} />
              </RustlingBranch>
              <h2 
                className="text-3xl font-semibold"
                style={{ 
                  color: 'var(--bio-primary)',
                  fontFamily: 'var(--font-playfair), serif'
                }}
              >
                {title}
              </h2>
              <RustlingBranch>
                <Leaf size={24} style={{ color: 'var(--bio-moss)', transform: 'scaleX(-1)' }} />
              </RustlingBranch>
            </div>
            
            <p 
              className="leading-relaxed text-lg max-w-xl mx-auto"
              style={{ color: 'var(--bio-secondary)' }}
            >
              {description}
            </p>
          </motion.div>
        </div>

        {/* Organic border accent */}
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"
          style={{
            width: '60px',
            height: '8px',
            background: `linear-gradient(90deg, var(--bio-primary), var(--bio-accent), var(--bio-moss))`,
            borderRadius: '4px',
            boxShadow: 'var(--bio-shadow-soft)'
          }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <motion.div
            className="absolute -right-2 -top-1 w-3 h-3 rounded-full"
            style={{ background: 'var(--bio-moss)' }}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
        </motion.div>
      </div>

      {/* Ambient glow effect */}
      <motion.div
        className="absolute inset-0 -z-20 opacity-20"
        style={{
          background: `radial-gradient(ellipse at center, var(--bio-accent) 0%, transparent 70%)`,
          borderRadius: '50%',
          filter: 'blur(20px)'
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </motion.div>
  );
};

export default VideoIntroduction;