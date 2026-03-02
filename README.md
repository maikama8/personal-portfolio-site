# Personal Portfolio Website

A modern, responsive personal portfolio website built with vanilla JavaScript, HTML5, and Tailwind CSS.

## Author

**Abdulrasheed**

## Features

- 🎨 **Dark Mode Support** - Toggle between light and dark themes with localStorage persistence
- 📱 **Fully Responsive** - Works seamlessly on mobile, tablet, and desktop (320px - 2560px)
- ✨ **Smooth Animations** - Scroll-triggered animations for project cards with stagger effects
- 🎯 **Smooth Scrolling** - Custom smooth scroll implementation with easing functions
- ♿ **Accessible** - WCAG 2.1 Level AA compliant with ARIA labels and keyboard navigation
- 🚀 **Performance Optimized** - Vanilla JavaScript with no framework dependencies
- 🎭 **Three Pages** - Home, Projects, and Contact pages with persistent navigation

## Technologies Used

- HTML5 (Semantic markup)
- Tailwind CSS (Utility-first CSS framework)
- Vanilla JavaScript (ES6+)
- Modern Browser APIs:
  - LocalStorage (theme persistence)
  - IntersectionObserver (scroll animations)
  - requestAnimationFrame (smooth scrolling)

## Project Structure

```
portfolio-site/
├── index.html              # Home page
├── projects.html           # Projects showcase
├── contact.html            # Contact information
├── css/
│   └── styles.css          # Custom CSS for animations
├── js/
│   ├── theme.js            # Theme management module
│   ├── navigation.js       # Navigation state module
│   ├── scroll.js           # Smooth scrolling module
│   └── animations.js       # Animation controller module
└── package.json            # Project metadata
```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A local web server (optional, but recommended)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/maikama8/personal-portfolio-site.git
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

## Features Overview

### Dark Mode
- Click the sun/moon icon in the navigation to toggle themes
- Theme preference is saved to localStorage
- Automatically applies saved theme on page load
- No flash of unstyled content

### Responsive Navigation
- Desktop menu for screens ≥768px
- Mobile hamburger menu for screens <768px
- Active page indication
- Keyboard accessible

### Smooth Scrolling
- Custom smooth scroll implementation
- 800ms animation duration with easing
- Cancels on manual scroll
- Works with anchor links

### Project Cards
- Animated entrance when scrolling into view
- Staggered animations (100ms delay)
- Hover scale effect
- Responsive grid layout (1/2/3 columns)

### Accessibility
- Semantic HTML throughout
- ARIA labels on interactive elements
- Visible focus indicators
- Skip to main content link
- Keyboard navigation support
- Color contrast ratio ≥4.5:1

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## Customization

### Update Personal Information

1. **Author Name**: Edit `package.json` and HTML meta tags
2. **Contact Info**: Update email and social links in `contact.html`
3. **Projects**: Modify the `projects` array in `projects.html`
4. **Content**: Edit text in HTML files

### Modify Colors

The site uses Tailwind CSS. To change colors, update the class names in HTML files:
- Primary: `blue-600`, `blue-700`, etc.
- Dark mode: `dark:bg-gray-900`, `dark:text-gray-100`, etc.

## License

MIT License - feel free to use this project for your own portfolio!

## Acknowledgments

- Built with [Tailwind CSS](https://tailwindcss.com/)
- Icons from Tailwind's Heroicons
- Follows WCAG 2.1 accessibility guidelines

---

**Made with ❤️ by Abdulrasheed**
