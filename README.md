# 🚀 React + Vite Template Project

A modern, production-ready React template featuring a stunning purple-pink gradient design system. Perfect for portfolios, agency websites, and project showcases.

[![Live Demo](https://img.shields.io/badge/demo-live-blue.svg)](https://react-vite-alikeldev.netlify.app/)
[![GitHub Stars](https://img.shields.io/github/stars/AliKelDev/ReactViteTemplate?style=social)](https://github.com/AliKelDev/ReactViteTemplate)
[![Twitter Follow](https://img.shields.io/twitter/follow/AliLeisR?style=social)](https://x.com/AliLeisR)

[View Demo](https://react-vite-alikeldev.netlify.app/) • [Get Started](#quick-start) • [Features](#features) • [Professional Services](https://webpixelle3.netlify.app/)

## ✨ Features

### Design & UX
- 🎨 Beautiful purple-pink gradient design system
- 🌟 Modern glassmorphism effects
- 📱 Fully responsive design for all devices
- ⚡ Optimized performance out of the box

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

```bash
# Clone the repository
git clone https://github.com/AliKelDev/ReactViteTemplate.git

# Navigate to project directory
cd ReactViteTemplate

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide Icons
- **Code Quality**: ESLint + Prettier
- **Build Tool**: Vite
- **Language**: Modern JavaScript (ES6+)

## 📦 Core Components

### PreviewEmbed
Securely embed external content with loading states and error handling:
```jsx
<PreviewEmbed 
  url="https://your-url.com" 
  title="Project Preview"
/>
```

### TechCard
Showcase technologies with animated cards:
```jsx
<TechCard
  title="React + Vite"
  description="Modern build tooling"
  icon={ReactIcon}
/>
```

### InstallGuide
Terminal-style installation instructions:
```jsx
<InstallGuide
  steps={['npm install', 'npm run dev']}
  language="bash"
/>
```

## 🎨 Design System

### Glassmorphism Effects
```css
/* Example usage of built-in glass effect */
.glass-card {
  @apply backdrop-blur-lg bg-white/10;
}
```

### Gradient System
```css
/* Primary gradient */
.gradient-primary {
  @apply bg-gradient-to-r from-purple-600 to-pink-500;
}
```

## 📱 Responsive Design

Built-in breakpoints:
- 📱 Mobile: `sm:` (640px)
- 📱 Tablet: `md:` (768px)
- 💻 Desktop: `lg:` (1024px)
- 🖥️ Large: `xl:` (1280px)

## 🔧 Customization

### 1. Update Theme Colors
Modify `tailwind.config.js`:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          // Your colors here
        }
      }
    }
  }
}
```

### 2. Add New Components
Create in `src/components/`:
```jsx
export const YourComponent = () => {
  return (
    <div className="glass-card">
      {/* Your content */}
    </div>
  );
};
```

### 3. Configure Navigation
Update `src/components/Navigation.jsx`:
```jsx
const navItems = [
  { title: 'Home', path: '/' },
  // Add your routes
];
```

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m 'Add YourFeature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Open a pull request

## 📫 Get in Touch

- Follow me on [Twitter](https://x.com/AliLeisR) for updates
- Check out my [professional services](https://webpixelle3.netlify.app/)
- Star the [GitHub repo](https://github.com/AliKelDev/ReactViteTemplate)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💖 Support

If this template helps you build something awesome, consider:
- ⭐ Starring the repository
- 🐦 Following me on [Twitter](https://x.com/AliLeisR)
- 🔗 Sharing it with others

---
Made with ❤️ by [Alice Leiser](https://x.com/AliLeisR)