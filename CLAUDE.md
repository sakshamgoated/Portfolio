# Portfolio Website - Saksham Sharma

## Project Overview
Personal portfolio website for **Saksham Sharma** (Learner | CS | DS | CE).
Showcases projects, skills, blog posts, and contact info.

## Tech Stack
- **Framework:** React 18.3 + TypeScript
- **Build Tool:** Vite 5
- **Styling:** Tailwind CSS 3.4 + custom CSS animations (see `src/index.css`)
- **Icons:** Lucide React
- **Routing:** State-based page switching in `App.tsx` (not React Router routes, despite the dependency)
- **Font:** Inter (loaded via Google Fonts)

## Commands
```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run lint     # ESLint
npm run preview  # Preview production build
```

## Project Structure
```
src/
  components/       # Reusable UI components
    Hero.tsx         # Hero section - particles, mouse glow, floating shapes
    Navigation.tsx   # Responsive navbar with glassmorphism
    BlogSection.tsx  # Blog post cards
    Footer.tsx       # Site footer
  pages/
    HomePage.tsx     # Hero + blog section
    AboutPage.tsx    # Skills with progress bars (frontend/backend/tools)
    ProjectsPage.tsx # Project showcase cards
  data/
    mockData.ts      # All content data (blog posts, projects, skills)
  types/
    index.ts         # TypeScript interfaces (BlogPost, Project, Skill)
  App.tsx            # Root component, state-based page routing
  main.tsx           # Entry point
  index.css          # Global styles, animations, glassmorphism utilities
```

## Design System

### Color Palette
- **Background:** Slate 900 (`#0f172a`)
- **Primary accent:** Violet 400-600 (`#8b5cf6` range)
- **Secondary accent:** Cyan 400-600 (`#06b6d4` range)
- **Text:** White + Gray 300/400 for secondary text

### Design Patterns
- **Glassmorphism:** `.glass` and `.glass-dark` utility classes in `index.css`
- **Hover effects:** `.hover-lift` (translateY + shadow), `.hover-glow` (violet glow)
- **Text effects:** `.text-glow`, `.text-shimmer` (animated gradient text)
- **Animations:** Custom keyframes for fadeIn, slideUp, slideInLeft/Right, float, pulseGlow, particleFloat, shimmer
- **Stagger classes:** `.stagger-1` through `.stagger-5` for sequential animation delays

### Component Patterns
- All components are functional React components with TypeScript
- Tailwind utility classes for layout/spacing, custom CSS classes for complex animations
- Gradients use `bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-600` pattern
- Cards use glassmorphism background with subtle borders

## Content & Personal Info
- **GitHub:** https://github.com/sakshamgoated
- **LinkedIn:** https://www.linkedin.com/in/saksham-sharma-b961a2212/
- **Email:** Samsak577@gmail.com
- **Tagline:** "Full-Stack Developer & UI/UX Enthusiast"
- **All content is currently mock data** in `src/data/mockData.ts` - replace with real content

## Coding Conventions
- Use TypeScript for all new files (`.tsx` for components, `.ts` for utilities/data)
- Component files: PascalCase (e.g., `BlogSection.tsx`)
- One component per file, default export
- Props defined as interfaces above the component
- Use Lucide React for all icons
- Keep animations/complex CSS in `src/index.css`, not inline styles (except dynamic values like mouse position)
- Tailwind for layout, spacing, and simple styling; custom CSS classes for reusable visual effects
- Dark theme only - all UI should work on the slate-900 background
- Responsive: mobile-first with `sm:`, `md:`, `lg:` breakpoints

## Known TODOs
- Replace mock data in `mockData.ts` with real projects, blog posts, and skills
- Update project demo URLs (currently placeholder)
- "View My Work" and "Download CV" buttons need real functionality
- `react-router-dom` is installed but not used for routing (App.tsx uses state-based switching) - consider migrating to proper routes if adding more pages
- No contact form page yet
- No blog detail page (only cards shown)
- No tests
