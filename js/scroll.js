/**
 * ScrollHandler Module
 * Provides smooth scrolling functionality with cancellation support
 */
const ScrollHandler = {
  isScrolling: false,
  animationId: null,
  
  /**
   * Easing function for natural motion (cubic ease-in-out)
   * @param {number} t - Progress value between 0 and 1
   * @returns {number} Eased value
   */
  easeInOutCubic(t) {
    return t < 0.5 
      ? 4 * t * t * t 
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  },
  
  /**
   * Smooth scroll to target position
   * @param {number} targetY - Target scroll position in pixels
   * @param {number} duration - Animation duration in milliseconds (default: 800)
   * @returns {Promise} Promise that resolves when scroll completes
   */
  smoothScrollTo(targetY, duration = 800) {
    return new Promise((resolve, reject) => {
      // Validate target
      if (typeof targetY !== 'number' || isNaN(targetY)) {
        console.warn('Invalid scroll target:', targetY);
        reject(new Error('Invalid scroll target'));
        return;
      }
      
      // Cancel any ongoing scroll
      this.cancelScroll();
      
      const startPosition = window.pageYOffset || document.documentElement.scrollTop;
      const distance = targetY - startPosition;
      const startTime = performance.now();
      
      this.isScrolling = true;
      
      // Use requestAnimationFrame with fallback to setTimeout
      const raf = window.requestAnimationFrame || 
                  ((callback) => setTimeout(callback, 16));
      const cancelRaf = window.cancelAnimationFrame || 
                        ((id) => clearTimeout(id));
      
      const scroll = (currentTime) => {
        if (!this.isScrolling) {
          resolve();
          return;
        }
        
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = this.easeInOutCubic(progress);
        const position = startPosition + (distance * eased);
        
        window.scrollTo(0, position);
        
        if (progress < 1) {
          this.animationId = raf(scroll);
        } else {
          this.isScrolling = false;
          this.animationId = null;
          resolve();
        }
      };
      
      this.animationId = raf(scroll);
    });
  },
  
  /**
   * Cancel ongoing scroll animation
   */
  cancelScroll() {
    if (this.isScrolling && this.animationId !== null) {
      const cancelRaf = window.cancelAnimationFrame || 
                        ((id) => clearTimeout(id));
      cancelRaf(this.animationId);
      this.isScrolling = false;
      this.animationId = null;
    }
  }
};
