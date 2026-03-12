// Multi-Biome Biophilic Design Tokens
export const biomeTokens = {
  forest: {
    name: 'Forest - Ancient Growth',
    colors: {
      primary: '#2D5016',
      secondary: '#8B6F47', 
      accent: '#D4A574',
      background: '#F5F1E8',
      dark: '#1A1410',
      lightAccent: '#E8DCC8',
      highlight: '#C4A57B',
      canopy: '#1F3A0F',
      trunk: '#654832',
      moss: '#4A5D2A',
      sunlight: '#F2E6B3',
      shadow: 'rgba(26, 20, 16, 0.4)',
      highlightGlow: 'rgba(232, 220, 200, 0.8)',
    },
    mood: 'grounded, warm, ancient'
  },
  
  sky: {
    name: 'Sky - Open Horizons',
    colors: {
      primary: '#5B8DBE',
      secondary: '#8FA8D4',
      accent: '#E0B997',
      background: '#F5F8FB',
      dark: '#2C3E50',
      lightAccent: '#E8EBF0',
      highlight: '#D4DFE8',
      clouds: '#FFFFFF',
      horizon: '#B8C5D1',
      wind: '#A8B8C8',
      sunlight: '#F5E6A3',
      shadow: 'rgba(44, 62, 80, 0.25)',
      highlightGlow: 'rgba(232, 235, 240, 0.95)',
    },
    mood: 'peaceful, open, uplifting'
  },
  
  sea: {
    name: 'Sea - Flowing Depths',
    colors: {
      primary: '#0E5A6D',
      secondary: '#1B8B8B',
      accent: '#4DB8A8',
      background: '#E0F2F1',
      dark: '#051C2A',
      lightAccent: '#B2E6E0',
      highlight: '#7FD9D0',
      coral: '#FF6B6B',
      kelp: '#2E7D32',
      bioluminescent: '#00E5FF',
      sunlight: '#B3E5FC',
      shadow: 'rgba(5, 28, 42, 0.45)',
      highlightGlow: 'rgba(178, 230, 224, 0.85)',
    },
    mood: 'tranquil, flowing, energetic'
  },
  
  underground: {
    name: 'Underground - Crystal Depths',
    colors: {
      primary: '#3A3A45',
      secondary: '#6B5B7F',
      accent: '#A8856D',
      background: '#E5E3EB',
      dark: '#1A1820',
      lightAccent: '#D4CDE5',
      highlight: '#9B8BA8',
      crystal: '#00D9A3',
      mineral: '#8E44AD',
      stone: '#5D4E75',
      sunlight: '#E8F5E8',
      shadow: 'rgba(26, 24, 32, 0.5)',
      highlightGlow: 'rgba(127, 217, 196, 0.8)',
    },
    mood: 'introspective, rich, mysterious'
  },
  
  hybrid: {
    name: 'Forest Stream - Creative Flow',
    colors: {
      primary: '#2D5016', // Forest green
      secondary: '#1B8B8B', // Sea teal
      accent: '#D4A574', // Warm earth
      background: '#F0F6F3', // Soft mint
      dark: '#1A1410',
      lightAccent: '#E0F0E8',
      highlight: '#A8D4C8',
      stream: '#4DB8A8',
      moss: '#4A5D2A',
      reflection: '#7FD9D0',
      sunlight: '#F2E6B3',
      shadow: 'rgba(26, 20, 16, 0.35)',
      highlightGlow: 'rgba(168, 212, 200, 0.8)',
    },
    mood: 'harmonious, creative, flowing'
  }
};

// Legacy support - default to forest
export const biophilicTokens = {
  colors: biomeTokens.forest.colors,
  
  // Shadows with realistic light source (top-left)
  shadows: {
    soft: '2px 4px 12px rgba(26, 20, 16, 0.15)',
    medium: '4px 8px 24px rgba(26, 20, 16, 0.25)',
    strong: '8px 16px 48px rgba(26, 20, 16, 0.35)',
    inner: 'inset 2px 2px 8px rgba(26, 20, 16, 0.2)',
    glow: '0 0 20px rgba(232, 220, 200, 0.6)'
  },
  
  // Organic spacing (Fibonacci-inspired)
  spacing: {
    xs: '0.5rem',   // 8px
    sm: '0.75rem',  // 12px
    md: '1.25rem',  // 20px
    lg: '2rem',     // 32px
    xl: '3.25rem',  // 52px
    xxl: '5.25rem'  // 84px
  },
  
  // Natural border radius (no perfect circles)
  borderRadius: {
    sm: '0.375rem',
    md: '0.75rem', 
    lg: '1.25rem',
    xl: '2rem',
    organic: '1rem 1.5rem 1.25rem 0.75rem' // Irregular, natural shape
  },
  
  // Animation timings (natural rhythms)
  animations: {
    // Continuous animations
    fallingLeaves: {
      duration: '6s',
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      delay: 'random(0s, 3s)'
    },
    birdsFlying: {
      duration: '4s', 
      easing: 'cubic-bezier(0.42, 0, 0.58, 1)',
      delay: 'random(0s, 2s)'
    },
    lightRays: {
      duration: '4s',
      easing: 'ease-in-out',
      delay: '0s'
    },
    branchRustle: {
      duration: '3s',
      easing: 'ease-in-out',
      delay: 'random(0s, 1.5s)'
    },
    
    // UI animations
    pageTransition: '0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    hover: '0.3s ease-out',
    focus: '0.2s ease-in-out'
  },
  
  // Parallax multipliers
  parallax: {
    background: 0.1,
    midground: 0.3,
    foreground: 0.6,
    ui: 1.0
  },
  
  // Typography (natural hierarchy)
  typography: {
    fontFamily: {
      primary: 'Inter, system-ui, sans-serif',
      accent: 'Playfair Display, serif' // For headings
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem', 
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem'
    },
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75
    }
  }
};

// CSS Custom Properties for runtime usage
export const biophilicCSSVars = `
  :root {
    --bio-primary: ${biophilicTokens.colors.primary};
    --bio-secondary: ${biophilicTokens.colors.secondary};
    --bio-accent: ${biophilicTokens.colors.accent};
    --bio-background: ${biophilicTokens.colors.background};
    --bio-dark: ${biophilicTokens.colors.dark};
    --bio-light-accent: ${biophilicTokens.colors.lightAccent};
    --bio-highlight: ${biophilicTokens.colors.highlight};
    --bio-canopy: ${biophilicTokens.colors.canopy};
    --bio-trunk: ${biophilicTokens.colors.trunk};
    --bio-moss: ${biophilicTokens.colors.moss};
    --bio-sunlight: ${biophilicTokens.colors.sunlight};
    --bio-shadow: ${biophilicTokens.colors.shadow};
    --bio-highlight-glow: ${biophilicTokens.colors.highlightGlow};
    
    --bio-shadow-soft: ${biophilicTokens.shadows.soft};
    --bio-shadow-medium: ${biophilicTokens.shadows.medium};
    --bio-shadow-strong: ${biophilicTokens.shadows.strong};
    --bio-shadow-inner: ${biophilicTokens.shadows.inner};
    --bio-shadow-glow: ${biophilicTokens.shadows.glow};
  }
`;

export default biophilicTokens;