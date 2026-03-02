/**
 * NavigationManager Module
 * Handles navigation state, active link highlighting, and mobile menu functionality
 */

const NavigationManager = {
  /**
   * Get the current page from the URL
   * @returns {string} The current page filename (e.g., 'index.html', 'projects.html')
   */
  getCurrentPage() {
    try {
      const path = window.location.pathname;
      const page = path.split('/').pop() || 'index.html';
      return page;
    } catch (e) {
      console.warn('Unable to determine current page:', e);
      return 'index.html';
    }
  },

  /**
   * Set the active navigation link based on the current page
   * Highlights the current page in the navigation menu
   */
  setActiveLink() {
    try {
      const currentPage = this.getCurrentPage();
      const navLinks = document.querySelectorAll('.nav-link');
      
      if (navLinks.length === 0) {
        console.warn('Navigation links not found');
        return;
      }

      navLinks.forEach(link => {
        // Remove active class and aria-current from all links
        link.classList.remove('active');
        link.removeAttribute('aria-current');
        
        // Check if this link points to the current page
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
          link.classList.add('active');
          link.setAttribute('aria-current', 'page');
        }
      });
    } catch (e) {
      console.warn('Error setting active link:', e);
    }
  },

  /**
   * Initialize mobile menu toggle functionality
   * Sets up event listeners for the hamburger menu
   */
  initMobileMenu() {
    try {
      const menuToggle = document.getElementById('mobile-menu-toggle');
      const mobileMenu = document.getElementById('mobile-menu');
      
      if (!menuToggle) {
        console.warn('Mobile menu toggle button not found');
        return;
      }
      
      if (!mobileMenu) {
        console.warn('Mobile menu element not found');
        return;
      }

      // Helper function to close the mobile menu
      const closeMobileMenu = () => {
        const icon = menuToggle.querySelector('svg');
        mobileMenu.classList.add('hidden');
        menuToggle.setAttribute('aria-expanded', 'false');
        
        // Reset to hamburger icon
        if (icon) {
          icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
        }
      };

      // Toggle mobile menu visibility
      menuToggle.addEventListener('click', () => {
        const isHidden = mobileMenu.classList.contains('hidden');
        const icon = menuToggle.querySelector('svg');
        
        if (isHidden) {
          mobileMenu.classList.remove('hidden');
          menuToggle.setAttribute('aria-expanded', 'true');
          
          // Change to close icon (X)
          if (icon) {
            icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>';
          }
        } else {
          closeMobileMenu();
        }
      });

      // Close mobile menu when a link is clicked
      const mobileLinks = mobileMenu.querySelectorAll('.nav-link');
      mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
          closeMobileMenu();
        });
      });

      // Close mobile menu when Escape key is pressed
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
          closeMobileMenu();
          // Return focus to the menu toggle button
          menuToggle.focus();
        }
      });
    } catch (e) {
      console.warn('Error initializing mobile menu:', e);
    }
  }
};
