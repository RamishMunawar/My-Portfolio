# Personal Portfolio Website

A fully responsive and animated personal portfolio built with React.js, TypeScript, Material-UI, and Framer Motion.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Dark/Light Theme**: Toggle between themes with localStorage persistence
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **TypeScript**: Fully typed codebase for better development experience
- **Material-UI**: Modern UI components with custom theming
- **React Router**: Client-side routing with 5 main pages
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation
- **SEO Friendly**: Meta tags and proper HTML structure

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **UI Library**: Material-UI (MUI)
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Styling**: Emotion (CSS-in-JS)
- **Icons**: Material Icons

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx      # Navigation bar with mobile menu
│   ├── Footer.tsx      # Footer with social links
│   ├── ThemeToggle.tsx # Dark/light theme switcher
│   └── SectionHeading.tsx # Reusable section headers
├── sections/            # Page sections
│   ├── Hero.tsx        # Hero/banner section
│   ├── About.tsx       # About me section
│   ├── Projects.tsx    # Projects showcase
│   ├── Services.tsx    # Services offered
│   └── Contact.tsx     # Contact form and info
├── pages/               # Individual pages
│   ├── Home.tsx        # Home page (composes sections)
│   ├── AboutPage.tsx   # Extended about page
│   ├── ProjectsPage.tsx # Extended projects page
│   ├── ServicesPage.tsx # Extended services page
│   └── ContactPage.tsx # Extended contact page
├── contexts/            # React contexts
│   └── ThemeContext.tsx # Theme management
├── types/               # TypeScript interfaces
│   └── index.ts        # Shared type definitions
├── theme.ts             # Custom MUI theme
├── router.tsx           # React Router configuration
├── App.tsx              # Main app component
└── main.tsx            # Entry point
```

## 🎨 Design Features

- **Layout**: Uses only MUI Box components (no Grid component)
- **Responsive**: CSS Grid and Flexbox for responsive layouts
- **Typography**: Custom typography scale with gradient text effects
- **Colors**: Consistent color palette with primary/secondary themes
- **Spacing**: 8px base spacing unit throughout
- **Shadows**: Subtle shadows and hover effects
- **Animations**: Smooth transitions and micro-interactions

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📱 Responsive Breakpoints

- **xs**: 0px - 599px (Mobile)
- **sm**: 600px - 899px (Tablet)
- **md**: 900px - 1199px (Small Desktop)
- **lg**: 1200px - 1535px (Desktop)
- **xl**: 1536px+ (Large Desktop)

## 🎯 Key Components

### Navbar
- Sticky navigation with scroll effects
- Mobile hamburger menu
- Active link highlighting
- Theme toggle integration

### Hero Section
- Full-width banner with animated background
- Two-column layout (content + profile image)
- Call-to-action buttons
- Smooth scroll to contact section

### About Section
- Skills with animated progress bars
- Download CV functionality
- Responsive image layout

### Projects Section
- Project cards with hover effects
- Technology tags
- GitHub and live demo links
- Responsive grid layout

### Services Section
- Service cards with icons
- Hover animations
- Extended information on dedicated page

### Contact Section
- Contact form with validation
- Social media links
- Contact information
- Success notifications

## 🎨 Customization

### Theme Colors
Edit `src/theme.ts` to customize:
- Primary colors
- Secondary colors
- Background colors
- Text colors

### Content
Update the following files with your information:
- Personal details in Hero and About sections
- Project information in Projects section
- Service descriptions in Services section
- Contact information in Contact section
- Social media links in Footer and Contact

### Images
Replace placeholder images in `public/` directory:
- `profile.png` - Your profile picture
- `cv.pdf` - Your CV/resume
- `project1.jpg` through `project8.jpg` - Project screenshots

## 🔧 Development

### Code Style
- TypeScript strict mode enabled
- ESLint configuration included
- Consistent component structure
- Proper prop interfaces

### Performance
- Lazy loading for images
- Optimized animations
- Efficient re-renders
- Bundle size optimization

### Accessibility
- Semantic HTML structure
- ARIA labels and descriptions
- Keyboard navigation support
- Focus management
- Color contrast compliance

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, please open an issue in the repository.

---

**Note**: This is a template portfolio. Remember to replace all placeholder content, images, and links with your actual information before deploying.
