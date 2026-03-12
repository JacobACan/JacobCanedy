// Biophilic Design Tokens - Forest Biome
export const biophilicTokens = {
  // Forest - Earthy Tones Palette
  colors: {
    primary: '#2D5016',
    secondary: '#8B6F47', 
    accent: '#D4A574',
    background: '#F5F1E8',
    dark: '#1A1410',
    lightAccent: '#E8DCC8',
    highlight: '#C4A57B',
    
    // Extended palette for depth
    canopy: '#1F3A0F',
    trunk: '#654832',
    moss: '#4A5D2A',
    sunlight: '#F2E6B3',
    shadow: 'rgba(26, 20, 16, 0.4)',
    highlightGlow: 'rgba(232, 220, 200, 0.8)',
    
    // Semantic colors
    success: '#4A5D2A',
    warning: '#D4A574',
    error: '#8B4A47',
    info: '#6B7F5F'
  },
  
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