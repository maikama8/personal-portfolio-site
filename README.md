# Personal Portfolio Website

A modern, responsive personal portfolio website built with vanilla JavaScript, HTML5, and Tailwind CSS.

## Author

**Abdulrasheed**

## Features

- 🎨 **Dark Mode Support** - Toggle between light and dark themes with localStorage persistence
- 📱 **Fully Responsive** - Works seamlessly on mobile, tablet, and desktop (320px - 2560px)
- ✨ **Smooth Animations** - Scroll-triggered animations for project cards with stagger effects
- ⌨️ **Keyboard Accessible** - Full keyboard navigation support with visible focus indicators
- 🎯 **Semantic HTML** - Proper HTML5 structure for better SEO and accessibility
- 🚀 **Performance Optimized** - Vanilla JavaScript with no framework dependencies
- ♿ **WCAG Compliant** - Meets accessibility standards with proper contrast ratios and ARIA labels

## Pages

- **Home** - Introduction and hero section
- **Projects** - Showcase of projects with animated cards
- **Contact** - Contact information and social media links

## Technologies Used

- HTML5
- Tailwind CSS (via CDN)
- Vanilla JavaScript (ES6+)
- Modern Browser APIs:
  - LocalStorage (theme persistence)
  - IntersectionObserver (scroll animations)
  - requestAnimationFrame (smooth scrolling)

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A local web server (optional, but recommended)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/personal-portfolio-site.git
cd personal-portfolio-site
```

2. Start a local server:

**Using Python:**
```bash
python3 -m http.server 8000
```

**Using Node.js:**
```bash
npx http-server
```

**Using PHP:**
```bash
php -S localhost:8000
```

3. Open your browser and navigate to:
```
http://localhost:8000
```

## Project Structure

```
personal-portfolio-site/
├── index.html              # Home page
├── projects.html           # Projects page
├── contact.html            # Contact page
├── css/
│   └── styles.css          # Custom CSS for animations
├── js/
│   ├── theme.js            # Theme management module
│   ├── navigation.js       # Navigation module
│   ├── scroll.js           # Smooth scrolling module
│   └── animations.js       # Animation controller module
├── package.json            # Project metadata
└── README.md               # This file
```

## Features in Detail

### Theme Management
- Automatic theme detection and application
- Persistent theme preference across page loads
- Smooth transitions between light and dark modes
- Fallback for browsers without localStorage support

### Responsive Design
- Mobile-first approach
- Breakpoints: 320px, 768px, 1024px, 2560px
- Mobile menu for small screens
- Desktop navigation for larger screens

### Animations
- Scroll-triggered entrance animations for project cards
- Staggered animation delays (100ms between cards)
- Hover effects with scale transforms
- Smooth scrolling with easing functions

### Accessibility
- Semantic HTML5 elements
- ARIA labels on interactive elements
- Skip to main content links
- Keyboard navigation support
- Focus indicators on all interactive elements
- Color contrast ratio ≥ 4.5:1

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## Customization

### Update Project Information

Edit the `projects` array in `projects.html`:

```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project',
    description: 'Project description',
    technologies: ['Tech1', 'Tech2'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/username/repo'
  }
];
```

### Update Contact Information

Edit the contact details in `contact.html`:
- Email address
- Social media links (GitHub, LinkedIn, Twitter)

### Customize Colors

The site uses Tailwind CSS. Modify the color classes in the HTML files or add custom styles in `css/styles.css`.

## License

MIT License - feel free to use this project for your own portfolio!

## Acknowledgments

- Built with [Tailwind CSS](https://tailwindcss.com/)
- Icons from Tailwind's Heroicons
- Designed with accessibility and performance in mind

---

**© 2024 Abdulrasheed. All rights reserved.**
