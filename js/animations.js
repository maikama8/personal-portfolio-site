/**
 * AnimationController Module
 * Manages scroll-triggered entrance animations for project cards
 */

const AnimationController = {
  observer: null,
  elements: [],
  
  /**
   * Initialize the animation controller
   * @param {string} selector - CSS selector for elements to animate
   */
  init(selector = '.project-card') {
    // Find all elements to animate
    this.elements = document.querySelectorAll(selector);
    
    // Error handling: check if elements exist
    if (this.elements.length === 0) {
      console.warn(`No elements found for animation: ${selector}`);
      return;
    }
    
    // Check for IntersectionObserver support
    if (!('IntersectionObserver' in window)) {
      console.warn('IntersectionObserver not supported, applying animations immediately');
      // Fallback: apply animations immediately
      this.elements.forEach(el => {
        el.classList.remove('opacity-0', 'translate-y-5');
        el.classList.add('opacity-100', 'translate-y-0');
      });
      return;
    }
    
    // Apply staggered delays
    this.applyStagger(this.elements);
    
    // Configure IntersectionObserver
    const options = {
      threshold: 0.1,
      rootMargin: '0px'
    };
    
    // Create observer with handleIntersection callback
    this.observer = new IntersectionObserver(
      this.handleIntersection.bind(this),
      options
    );
    
    // Observe all elements
    this.elements.forEach(element => {
      this.observer.observe(element);
    });
  },
  
  /**
   * Handle intersection events
   * @param {IntersectionObserverEntry[]} entries - Array of intersection entries
   */
  handleIntersection(entries) {
    entries.forEach(entry => {
      // When element enters viewport (10% visible)
      if (entry.isIntersecting) {
        const element = entry.target;
        
        // Apply animated state
        element.classList.remove('opacity-0', 'translate-y-5');
        element.classList.add('opacity-100', 'translate-y-0');
        
        // Stop observing this element (animation only happens once)
        if (this.observer) {
          this.observer.unobserve(element);
        }
      }
    });
  },
  
  /**
   * Apply staggered animation delays
   * @param {NodeList} elements - Elements to stagger
   */
  applyStagger(elements) {
    const staggerDelay = 100; // 100ms between each card
    
    elements.forEach((element, index) => {
      // Apply transition delay based on index
      element.style.transitionDelay = `${index * staggerDelay}ms`;
    });
  }
};
