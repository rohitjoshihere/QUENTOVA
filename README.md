# Questova

> Building Future Ready Enterprise with Intelligent Automations & Agentic AI

A modern, responsive landing page for Questova - an enterprise automation and AI consulting company that bridges the gap between automation hype and real business efficiency.

![Next.js](https://img.shields.io/badge/Next.js-16.0.5-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.0-blue?style=flat-square&logo=react)
![License](https://img.shields.io/badge/license-Private-red?style=flat-square)

## 🚀 Overview

Questova provides comprehensive solutions across consulting, implementation, and managed services for enterprise automation. This landing page showcases:

- **Consulting Services** - Simplifying and demystifying automation tools like RPA, AI, and LCAP
- **Implementation Services** - Building intelligent automation solutions tailored to your environment
- **Managed Services** - Full lifecycle ownership of your digital workforce

## ✨ Features

- **Modern Design** - Premium UI with glassmorphism effects and smooth animations
- **Responsive Layout** - Optimized for all devices and screen sizes
- **Performance Optimized** - Built with Next.js 16 for lightning-fast page loads
- **Component-Based Architecture** - Modular, reusable components for easy maintenance
- **SEO Ready** - Proper meta tags and semantic HTML structure
- **Accessibility** - WCAG compliant with proper ARIA labels

## 🛠️ Tech Stack

- **Framework:** [Next.js 16.0.5](https://nextjs.org/) (App Router)
- **UI Library:** [React 19.2.0](https://react.dev/)
- **Styling:** CSS Modules with custom properties
- **Font Optimization:** Next.js Font Optimization
- **Image Optimization:** Next.js Image Component
- **Linting:** ESLint with Next.js config

## 📁 Project Structure

```
questova/
├── app/
│   ├── favicon.ico          # Site favicon
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.js            # Root layout with metadata
│   ├── page.js              # Home page component
│   └── page.module.css      # Home page styles
├── components/
│   ├── Header.js            # Navigation header
│   ├── Hero.js              # Hero section
│   ├── Services.js          # Services showcase
│   ├── BusinessImpact.js    # Business impact metrics
│   ├── Frameworks.js        # Supported frameworks
│   ├── WhyQuestova.js       # Value proposition
│   ├── CTA.js               # Call-to-action section
│   ├── Footer.js            # Footer with links
│   ├── Button.js            # Reusable button component
│   └── *.module.css         # Component-specific styles
├── public/
│   └── *.png                # Static assets and images
├── package.json             # Dependencies and scripts
└── next.config.mjs          # Next.js configuration
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd questova
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Design System

The project uses a consistent design system with:

- **Color Palette:**
  - Primary: `#2D9B9B` (Teal)
  - Secondary: `#7B3FE4` (Purple)
  - Accent: `#FF6B6B` (Coral)
  - Background: `#0A0A0F` (Dark)
  - Text: `#E5E5E5` (Light Gray)

- **Typography:**
  - System fonts with fallbacks
  - Responsive font sizes using clamp()
  - Proper heading hierarchy

- **Spacing:**
  - Consistent spacing scale
  - Responsive padding and margins

## 📦 Components

### Core Components

- **Header** - Sticky navigation with smooth scroll
- **Hero** - Eye-catching hero section with CTA
- **Services** - Three-column service grid with icons
- **BusinessImpact** - Metrics and statistics showcase
- **Frameworks** - Supported platforms and tools
- **WhyQuestova** - Unique value propositions
- **CTA** - Conversion-focused call-to-action
- **Footer** - Multi-column footer with links
- **Button** - Reusable button with hover effects

## 🔧 Configuration

### Next.js Config

The project uses default Next.js configuration with:
- App Router enabled
- Image optimization
- Font optimization
- ESLint integration

### Environment Variables

No environment variables are currently required for this project.

## 🚀 Deployment

### Deploy on Vercel

The easiest way to deploy this Next.js app is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Your app will be deployed with a production URL

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/questova)

### Other Platforms

This app can also be deployed to:
- Netlify
- AWS Amplify
- Railway
- Render
- Any platform supporting Node.js

## 📝 Customization

### Updating Content

1. **Hero Section:** Edit `/components/Hero.js`
2. **Services:** Modify the `services` array in `/components/Services.js`
3. **Business Impact:** Update metrics in `/components/BusinessImpact.js`
4. **Footer Links:** Edit `/components/Footer.js`

### Styling

- Global styles: `/app/globals.css`
- Component styles: `/components/*.module.css`
- CSS variables are defined in `globals.css` for easy theming

### Images

Place images in the `/public` directory and reference them using:
```jsx
<Image src="/your-image.png" alt="Description" width={800} height={600} />
```

## 🤝 Contributing

This is a private project. If you have access and want to contribute:

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📄 License

This project is private and proprietary.

## 📧 Contact

For questions or support, please contact the Questova team.

---

**Built with ❤️ using Next.js**
