# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an OTT (Over-The-Top) streaming industry case study website built for a student portfolio. It showcases analyses of Netflix, Disney+, and friDay streaming platforms, along with learning reflections. The site is deployed to GitHub Pages at `/ott-insights-hub/`.

**Tech Stack**: Vite + React 18 + TypeScript + shadcn/ui + Tailwind CSS

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on port 8080)
npm run dev

# Build for production
npm run build

# Build for development mode
npm run build:dev

# Lint code
npm run lint

# Preview production build
npm preview
```

## Architecture Overview

### Routing & Navigation

The app uses **client-side routing** without react-router's route definitions. Instead:
- `src/App.tsx` - Sets up providers (QueryClient, TooltipProvider, BrowserRouter with basename="/ott-insights-hub")
- `src/pages/Index.tsx` - Main route (`/`) that handles state-based page switching
- Navigation is controlled via `currentPage` state (either `null` for home or a `PageId`)
- When `currentPage` is set, `SubPage` component renders; otherwise `HomePage` renders

### Content Structure

Content is centralized in `src/data/siteContent.tsx`:
- Defines `PageId` type: 'netflix' | 'disney' | 'friday' | 'reflection'
- Contains student info and page metadata (title, subtitle, colorTheme, icon, isReflection flag)
- Each page has a dedicated content component in `src/components/`:
  - `NetflixContent.tsx`
  - `DisneyContent.tsx`
  - `FridayContent.tsx`
  - `ReflectionContent.tsx`

### Component Organization

```
src/
├── components/
│   ├── ui/              # shadcn/ui components (51 components)
│   ├── HomePage.tsx     # Landing page with navigation cards
│   ├── SubPage.tsx      # Template for content pages (routes to specific content)
│   ├── NavLink.tsx      # Navigation link component
│   └── [Platform]Content.tsx  # Content for each platform analysis
├── data/
│   └── siteContent.tsx  # Central content configuration
├── hooks/
│   ├── use-mobile.tsx   # Mobile detection hook
│   └── use-toast.ts     # Toast notification hook
├── lib/
│   └── utils.ts         # Utility functions (cn helper)
└── pages/
    ├── Index.tsx        # Main page with state-based routing
    └── NotFound.tsx     # 404 page
```

### Theming System

Each platform has a color theme defined in `siteContent.tsx`:
- red (Netflix), blue (Disney+), pink (friDay), green (Reflection)
- `HomePage.tsx` and `SubPage.tsx` contain theme mapping functions that return Tailwind classes
- Custom color variables defined in `src/index.css` (e.g., `--theme-red`, `--theme-blue`)

### Path Aliases

Configured in `vite.config.ts` and `components.json`:
- `@/` → `./src/`
- Import example: `import { Button } from '@/components/ui/button'`

## Key Implementation Patterns

### Adding New Content Pages

1. Add page metadata to `siteContent.pages` array in `src/data/siteContent.tsx`
2. Update `PageId` type to include the new page ID
3. Create a new content component (e.g., `src/components/NewPlatformContent.tsx`)
4. Add case to `renderContent()` switch statement in `src/components/SubPage.tsx`

### Styling Conventions

- Uses Tailwind CSS with custom theme colors defined in `tailwind.config.ts`
- shadcn/ui components styled with CSS variables (see `src/index.css`)
- Responsive design with mobile-first approach
- Animations use `animate-fade-in` and `animation-delay-*` classes

### State Management

- Uses React Query (@tanstack/react-query) for server state (though no data fetching yet)
- Local component state for navigation and UI interactions
- No global state management library (Redux/Zustand)

## Deployment

The site deploys automatically to GitHub Pages on push to `main`:
- GitHub Actions workflow: `.github/workflows/deploy.yml`
- Build artifact from `./dist` is deployed
- **Important**: `base: '/ott-insights-hub/'` is set in `vite.config.ts` for GitHub Pages subpath
- `basename="/ott-insights-hub"` is set in BrowserRouter in `src/App.tsx`

## Development Notes

- Project was scaffolded with Lovable (see README.md)
- Uses SWC for faster builds (@vitejs/plugin-react-swc)
- Component tagging enabled in development mode (lovable-tagger)
- shadcn/ui components are source-copied into `src/components/ui/`, not installed as a package
