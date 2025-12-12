# Manu Sriram's Portfolio

A modern, responsive portfolio website showcasing my skills, projects, and experience in Electronics & Instrumentation Engineering, IoT, and embedded systems.

**Live Site:** https://manu-1514.github.io/Manu-s-Portfolio/

## Technologies Used

- **Vite** — Fast build tool and dev server
- **React 18** — UI library
- **TypeScript** — Type-safe JavaScript
- **Tailwind CSS** — Utility-first CSS framework
- **shadcn/ui** — Component library
- **React Router** — Client-side routing
- **React Helmet** — Document head management

## Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation

```sh
# Clone the repository
git clone https://github.com/MANU-1514/Manu-s-Portfolio.git

# Navigate to the project directory
cd Manu-s-Portfolio

# Install dependencies
npm install
```

### Development

```sh
# Start the dev server (http://localhost:8080)
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

### Linting

```sh
# Run ESLint
npm run lint
```

## Deployment

This project is deployed to GitHub Pages using GitHub Actions. Every push to the `main` branch automatically:

1. Builds the project
2. Publishes to the `gh-pages` branch
3. Updates the live site

### Manual Deployment

```sh
npm run build
git add -A
git commit -m "chore: update portfolio"
git push origin main
```

## Project Structure

```
src/
├── components/        # React components
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── SkillsSection.tsx
│   ├── ProjectsSection.tsx
│   ├── AchievementsSection.tsx
│   ├── EducationSection.tsx
│   ├── ContactSection.tsx
│   └── ui/           # shadcn/ui components
├── pages/            # Page components
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
├── App.tsx           # Main app component
└── main.tsx          # Entry point

public/
├── favicon.png       # Site favicon
├── placeholder.jpg   # Profile image
└── Resume.pdf        # Downloadable resume
```

## Features

- ✨ Responsive design (mobile, tablet, desktop)
- 🎨 Modern UI with Tailwind CSS
- ⚡ Fast loading with Vite
- 📱 Mobile-friendly
- 🔗 Social media links
- 📄 Downloadable resume
- 🌙 Accessible components

## License

This project is open source and available under the MIT License.

## Contact

For inquiries, please reach out via the contact section on the portfolio website.

---

**Built with ❤️**
