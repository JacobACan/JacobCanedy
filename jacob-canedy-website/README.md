# Jacob Canedy Personal Website

A modern, responsive personal website built with Next.js, TypeScript, and Tailwind CSS featuring a vertical sidebar navigation and smooth animations.

## Features

### Navigation Structure
- **About** - Personal introduction and overview
- **Education** - Academic background and certifications
- **Lessons** - Teaching services offered
  - Music Lessons (Theory, Composition, Production)
  - Fitness Coaching (Strength Training, Functional Fitness)
- **Tools** - Showcase of created projects
  - RGBA Synth (C++ audio synthesis tool)
  - Just Intonation (TypeScript music learning tool)
  - Chill Nvim (Lua Neovim configuration)
- **Hobbies** - Personal interests
  - Music (SoundCloud integration ready)
  - Fitness (Currently hidden - WIP)

### Technical Features
- ✅ Responsive design (desktop and mobile)
- ✅ Smooth animations with Framer Motion
- ✅ Collapsible sidebar navigation
- ✅ Mobile-friendly hamburger menu
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ GitHub integration for tools section

## Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd jacob-canedy-website

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The website will be available at `http://localhost:3000`

### Build for Production
```bash
pnpm build
pnpm start
```

## Project Structure

```
app/
├── components/
│   ├── Sidebar.tsx              # Main navigation sidebar
│   ├── MainLayout.tsx           # Main layout wrapper
│   └── sections/
│       ├── AboutSection.tsx     # About page content
│       ├── EducationSection.tsx # Education page content
│       ├── LessonsSection.tsx   # Lessons page content
│       ├── ToolsSection.tsx     # Tools page content
│       └── HobbiesSection.tsx   # Hobbies page content
├── globals.css                  # Global styles
├── layout.tsx                   # Root layout
└── page.tsx                     # Home page
```

## Customization

### Adding New Sections
1. Create a new component in `app/components/sections/`
2. Add the section to the navigation in `Sidebar.tsx`
3. Update the section type and render logic in `MainLayout.tsx`

### Updating Content
- **Education**: Edit the `educationData` array in `EducationSection.tsx`
- **Lessons**: Modify the `musicLessons` and `fitnessLessons` arrays in `LessonsSection.tsx`
- **Tools**: Update the `tools` array in `ToolsSection.tsx`
- **Music**: Add SoundCloud URLs to the `songs` array in `HobbiesSection.tsx`

### Styling
The website uses Tailwind CSS. You can customize:
- Colors by updating the Tailwind config
- Animations by modifying Framer Motion properties
- Layout by adjusting the responsive classes

## Technologies Used

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **pnpm** - Package manager

## Future Enhancements

- [ ] Add SoundCloud integration for music playback
- [ ] Complete fitness section with workout tracking
- [ ] Add contact form functionality
- [ ] Implement blog section
- [ ] Add dark mode toggle
- [ ] Performance optimizations

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

This project is for personal use. Feel free to use it as inspiration for your own website!
