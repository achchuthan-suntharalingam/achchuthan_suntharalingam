# Personal Portfolio

A modern, single-page personal portfolio built with React, TypeScript, and Tailwind CSS featuring a dark, classy theme.

## Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Dark Theme**: Professional dark theme with elegant blue and cyan gradients
- **Smooth Navigation**: Fixed navigation bar with smooth scrolling to sections
- **Mobile Menu**: Hamburger menu for mobile devices
- **Multiple Sections**:
  - Hero/Home section with call-to-action
  - About section with expertise highlights
  - Skills section with visual progress bars
  - Projects showcase with technology tags
  - Contact section with social links
  - Professional footer

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment Ready**: Optimized for production builds

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

## Project Structure

```
src/
├── App.tsx          # Main portfolio component
├── App.css          # Component styles
├── index.css        # Global styles with Tailwind directives
├── main.tsx         # Application entry point
└── ...other files
```

## Customization

### Update Your Information

Edit `src/App.tsx` to customize:

1. **Name**: Change "Achchuthan Suntharalingam" to your name
2. **Email**: Update the email link in the contact section (currently set to `mailto:your.email@example.com`)
3. **Social Links**: Your GitHub and LinkedIn URLs are already included
4. **About Section**: Customize the about text and expertise areas
5. **Skills**: Add/remove skills in the skills section with appropriate proficiency levels
6. **Projects**: Update the projects array with your actual projects with:
   - Title
   - Description
   - Technologies used
   - Project link

### Styling Customization

- Colors are defined using Tailwind CSS utility classes
- Primary gradient colors: Blue (400) to Cyan (400)
- Modify the color scheme by updating Tailwind color classes throughout the component
- Edit `tailwind.config.js` for custom theme colors

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## Deployment

The portfolio can be deployed to any static hosting service:

- **Vercel**: Automatically deploying from Git repository
- **Netlify**: Connect your Git repository and deploy
- **GitHub Pages**: Build and push to gh-pages branch
- **Traditional Hosting**: Upload the `dist/` folder via FTP

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Vite and build settings
5. Click Deploy

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Lint with ESLint (if set up)

## Features Overview

### Navigation
- Sticky navigation bar with smooth scrolling
- Mobile-responsive hamburger menu
- Gradient text logo

### Hero Section
- Large, welcoming heading with gradient text
- Quick links to GitHub and LinkedIn
- Call-to-action button

### About Section
- Personal introduction
- Expertise highlights with hover effects
- Technology categories

### Skills Section
- Organized by category (Languages, Frontend, Backend)
- Visual progress bars for proficiency levels
- Icon indicators for each category

### Projects Section
- Project cards with descriptions
- Technology tags
- External links to projects
- Hover effects for interactivity

### Contact Section
- Three convenient ways to connect
- Social platform cards
- Professional footer

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- Update the email link in the contact section with your actual email address
- The projects array in App.tsx contains sample projects - replace with your actual work
- LinkedIn and GitHub URLs are pre-configured with your information
- Consider adding more detailed project links and descriptions
- Keep your portfolio updated as you complete new projects

## Future Enhancements

Consider adding:
- Blog section with articles
- Case studies for major projects
- Testimonials from colleagues
- Download resume button
- Animated scroll effects
- Contact form with email integration
- Performance optimizations

---

**Created**: February 2026


export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
