# 🚀 React + Vite Template Project

A modern, production-ready React template featuring a stunning purple-pink gradient design system. Perfect for portfolios, agency websites, and project showcases.

[![Live Demo](https://img.shields.io/badge/demo-live-blue.svg)](https://react-vite-alikeldev.netlify.app/)
[![GitHub Stars](https://img.shields.io/github/stars/AliKelDev/ReactViteTemplate?style=social)](https://github.com/AliKelDev/ReactViteTemplate)
[![Twitter Follow](https://img.shields.io/twitter/follow/AliLeisR?style=social)](https://x.com/AliLeisR)

[View Demo](https://react-vite-alikeldev.netlify.app/) • [Documentation](#-table-of-contents) • [Professional Services](https://webpixelle3.netlify.app/)


## 📋 Table of Contents
- [✨ Features](#-features)
- [🚀 Quick Start](#-quick-start)
- [🛠️ Tech Stack](#️-tech-stack)
- [📦 Core Components](#-core-components)
- [🎨 Design System](#-design-system)
- [📱 Responsive Design](#-responsive-design)
- [🔧 Customization](#-customization)
- [🤝 Contributing](#-contributing)
- [❓ FAQ](#-faq)
- [📫 Support & Contact](#-support--contact)

## ✨ Features

### Design & UX
- 🎨 Beautiful indigo gradient design system
- 🌟 Modern glassmorphism effects
- 📱 Fully responsive design for all devices
- ⚡ Optimized performance with 90+ Lighthouse score

### Components & Functionality
- 🖼️ Project showcase component with live previews
- 🔥 Interactive preview embedder with fallback handling
- 🛠️ Pre-configured tech stack cards
- 🔒 Secure iframe handling for external content

### Developer Experience
- 📦 Zero configuration needed
- 🔧 TypeScript ready
- 🎯 ESLint + Prettier setup
- 📝 Comprehensive documentation

## 🚀 Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/AliKelDev/ReactViteTemplate.git
cd ReactViteTemplate
```

2. **Install dependencies**
```bash
npm install
# or
pnpm install
# or
yarn install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open browser**
Navigate to `http://localhost:5173`

5. **Build for production**
```bash
npm run build
```

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18 | UI Framework |
| Vite | Build Tool |
| Tailwind CSS | Styling |
| Lucide Icons | Icons |
| ESLint | Code Quality |
| Prettier | Code Formatting |
| TypeScript | Type Safety |

## 📦 Core Components

### PreviewEmbed
Securely embed external content with loading states and error handling:
```jsx
<PreviewEmbed 
  url="https://your-url.com" 
  title="Project Preview"
  fallback={<LoadingSpinner />}
/>
```

### TechCard
Showcase technologies with animated cards:
```jsx
<TechCard
  title="React + Vite"
  description="Modern build tooling"
  icon={ReactIcon}
  animate={true}
/>
```

### InstallGuide
Terminal-style installation instructions:
```jsx
<InstallGuide
  steps={['npm install', 'npm run dev']}
  language="bash"
  copyable={true}
/>
```

## 🎨 Design System

### Glassmorphism Effects
```css
/* Base glass effect */
.glass-card {
  @apply backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl shadow-lg;
}

/* Interactive glass effect */
.glass-card-interactive {
  @apply glass-card hover:bg-white/20 transition-all duration-300;
}
```

### Gradient System
```css
/* Primary gradient */
.gradient-primary {
  @apply bg-gradient-to-r from-purple-600 to-pink-500;
}

/* Secondary gradient */
.gradient-secondary {
  @apply bg-gradient-to-r from-blue-500 to-purple-600;
}
```

## 📱 Responsive Design

Our template uses a mobile-first approach with intuitive breakpoints:

| Breakpoint | Size | Usage |
|------------|------|--------|
| `sm:` | 640px | Mobile devices |
| `md:` | 768px | Tablets |
| `lg:` | 1024px | Laptops |
| `xl:` | 1280px | Desktops |
| `2xl:` | 1536px | Large screens |

## 🔧 Customization

### 1. Theme Configuration
Modify `tailwind.config.js`:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f3ff',
          // Add your color palette
          900: '#4c1d95',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        // Add custom fonts
      }
    }
  }
}
```

### 2. Component Creation
Create new components in `src/components/`:
```jsx
export const CustomCard = ({ title, children }) => {
  return (
    <div className="glass-card p-6">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      {children}
    </div>
  );
};
```

### 3. Navigation Setup
Update `src/config/navigation.ts`:
```typescript
export const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    // Add your routes
  ],
  social: [
    { name: 'GitHub', href: 'https://github.com/AliKelDev' },
    // Add social links
  ]
};
```

## ❓ FAQ

### Can I use this template for commercial projects?
Yes! This template is licensed under MIT, allowing commercial use.

### How do I deploy this template?
We recommend using Netlify or Vercel. Both platforms offer easy deployment from Git:
1. Connect your repository
2. Set build command to `npm run build`
3. Set publish directory to `dist`

### How do I add custom fonts?
1. Add fonts to `public/fonts/`
2. Update `tailwind.config.js` with font family
3. Add `@font-face` rules in `src/styles/fonts.css`


## 📫 Support & Contact

- 🌟 Star this repo if you find it helpful!
- 🐞 Report bugs via [GitHub Issues](https://github.com/AliKelDev/ReactViteTemplate/issues)
- 🤝 Follow me on [Twitter](https://x.com/AliLeisR) for updates
- 💼 Check out my [professional services](https://webpixelle3.netlify.app/)


---

<p align="center">Made with ❤️ by <a href="https://x.com/AliLeisR">Alice Leiser</a></p>
