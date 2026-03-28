export const personal = {
  name: 'Jacob Canedy',
  location: 'Rochester, NY',
  phone: '330-803-2754',
  email: 'jcanedy19@gmail.com',
  linkedin: 'https://www.linkedin.com/in/JacobCan/',
  github: 'https://github.com/JacobACan',
  introVideoId: 'jrnyY-UAAhk',
  summary:
    'Software Engineer with a passion for solving musical problems.',
  summaryLine2:
    'Currently pursuing a Master\'s in AI while building tools that blend creativity with technology.',
};

export const skills = {
  languages: ['C#', 'TypeScript', 'SQL', 'JavaScript'],
  frameworks: ['Next.js', 'React', 'Vue.js', 'ASP.NET MVC'],
  specialties: ['Agentic Programming', 'Audio Plugins', 'UI/UX Design'],
};

export const interests = [
  {
    title: 'Full-Stack Development',
    description: 'Building web applications with .NET, Vue, and React',
  },
  {
    title: 'Audio Engineering',
    description: 'Developing audio plugins and music production tools',
  },
  {
    title: 'Fitness & Wellness',
    description: 'Physical health and helping others achieve fitness goals',
  },
  {
    title: 'Continuous Learning',
    description: 'AI-driven development and Agentic Programming',
  },
];

export interface EducationEntry {
  institution: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  status: 'completed' | 'in-progress';
  gpa?: string;
  via?: string;
  coursework?: string[];
}

export const education: EducationEntry[] = [
  {
    institution: 'Rochester Institute of Technology',
    degree: 'Bachelor of Science',
    field: 'Software Engineering',
    location: 'Rochester, NY',
    startDate: 'Sep 2021',
    endDate: 'Aug 2025',
    status: 'completed',
    gpa: '3.31',
    coursework: ['Software Engineering', 'Data Structures', 'Algorithms'],
  },
  {
    institution: 'Woolf University',
    degree: 'Master of Science',
    field: 'Artificial Intelligence',
    location: 'Online',
    startDate: '2025',
    endDate: 'Present',
    status: 'in-progress',
    via: 'Udacity',
  },
];

export interface WorkEntry {
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  highlights: string[];
  stack: string[];
}

export const work: WorkEntry[] = [
  {
    company: 'Emerson (Ridgid Tool Corp)',
    role: 'Software Engineer Intern',
    location: 'Elyria, OH',
    startDate: 'May 2024',
    endDate: 'Aug 2024',
    description:
      'Developed customer-facing features for Ridgid/Greenlee.com public-facing e-commerce sites.',
    highlights: [
      'Developed customer order tracking features for Ridgid/Greenlee.com',
      'Expanded full-stack skills implementing back-end logic in SQL/C# and front-end UI using Vue and TypeScript',
      'Presented project updates to senior engineers, demonstrating progress and technical problem-solving',
    ],
    stack: ['ASP.NET MVC', 'C#', 'SQL', 'Vue.js', 'TypeScript'],
  },
  {
    company: 'Emerson (Ridgid Tool Corp)',
    role: 'Software Engineer Intern',
    location: 'Elyria, OH',
    startDate: 'Aug 2023',
    endDate: 'Dec 2023',
    description:
      'Worked on internal CRM applications for the Ridgid and Greenlee product lines.',
    highlights: [
      'Built and maintained internal CRM tooling for the Ridgid/Greenlee business units',
      'Engaged in pair programming with senior engineers on a cross-cultural team to debug and enhance system functionality',
      'Full-stack development across backend and frontend',
    ],
    stack: ['ASP.NET MVC', 'C#', 'SQL', 'Vue.js', 'JavaScript'],
  },
];

export interface Project {
  name: string;
  language: string;
  description: string;
  features: string[];
  tech: string[];
  github?: string;
  demo?: string;
  youtubeId?: string;
}

export const projects: Project[] = [
  {
    name: 'RGBA Synth',
    language: 'C++',
    description:
      'A synthesizer built with the JUCE Framework featuring multiple waveform synthesis and real-time audio processing.',
    features: ['Multiple waveform synthesis', 'Real-time audio processing', 'JUCE Framework'],
    tech: ['C++', 'JUCE', 'DSP', 'Audio Programming'],
    github: 'https://github.com/JacobACan/RGBA-Synth',
    youtubeId: '-txnQ5YiqIs',
  },
  {
    name: 'Just Intonation',
    language: 'TypeScript',
    description:
      'A webapp for musicians to play by ear on piano with interactive ear training and audio playback.',
    features: ['Interactive ear training', 'Audio playback', 'Piano keyboard interface'],
    tech: ['TypeScript', 'Next.js', 'React', 'Web Audio API'],
    github: 'https://github.com/JacobACan/JustIntonation',
    youtubeId: '2gp9Q6NdhjE',
  },
  {
    name: 'Chill Nvim',
    language: 'Lua',
    description:
      'A Neovim plugin for ambient background audio while coding, enhancing focus in terminal IDEs.',
    features: ['Terminal IDE integration', 'Ambient audio', 'Focus-enhancing'],
    tech: ['Lua', 'Neovim', 'Agentic Programming'],
    github: 'https://github.com/JacobACan/chill_nvim',
  },
  {
    name: 'Public Speaking Website',
    language: 'WordPress',
    description:
      'A WordPress site rebuild for a public speaking client, handling theme/plugin compatibility and server management.',
    features: ['Theme compatibility', 'Plugin management', 'Server administration'],
    tech: ['WordPress', 'PHP', 'JavaScript', 'Domain/Hosting'],
    demo: 'https://vinceshorter.com',
  },
  {
    name: '7.1.4 Binauralization',
    language: 'Audio',
    description:
      '12-channel to binaural audio conversion using in-person impulse response measurements and spatial audio processing.',
    features: ['IR measurements', 'Spatial audio processing', '12-channel conversion'],
    tech: ['Audio Processing', 'Impulse Responses', 'Spatial Audio'],
  },
];
