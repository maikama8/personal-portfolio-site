/**
 * ThemeManager Module
 * Manages theme state and persistence across page loads
 * Validates: Requirements 3.2, 3.3, 3.4, 3.5, 3.6
 */

const ThemeManager = {
  THEME_KEY: 'portfolio-theme',
  DARK_CLASS: 'dark',
  
  /**
   * Initialize theme on page load
   * Loads saved theme from localStorage and applies it
   */
  init() {
    const savedTheme = this.loadTheme();
    this.applyTheme(savedTheme);
  },
  
  /**
   * Toggle between light and dark themes
   * Switches to opposite theme and persists the change
   */
  toggleTheme() {
    const currentTheme = this.loadTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    this.saveTheme(newTheme);
    this.applyTheme(newTheme);
  },
  
  /**
   * Load theme from localStorage
   * @returns {string} 'light' or 'dark', defaults to 'light' if not found or invalid
   */
  loadTheme() {
    try {
      const savedTheme = localStorage.getItem(this.THEME_KEY);
      // Validate theme value
      if (savedTheme === 'light' || savedTheme === 'dark') {
        return savedTheme;
      }
      // Invalid or missing theme, return default
      return 'light';
    } catch (e) {
      // localStorage unavailable (private browsing, disabled, etc.)
      console.warn('LocalStorage unavailable, using default theme');
      return 'light';
    }
  },
  
  /**
   * Save theme to localStorage
   * @param {string} theme - 'light' or 'dark'
   */
  saveTheme(theme) {
    try {
      localStorage.setItem(this.THEME_KEY, theme);
    } catch (e) {
      // localStorage unavailable - theme won't persist but will work for current session
      console.warn('LocalStorage unavailable, theme will not persist across page loads');
    }
  },
  
  /**
   * Apply theme to document
   * Adds or removes dark class on document element
   * @param {string} theme - 'light' or 'dark'
   */
  applyTheme(theme) {
    const htmlElement = document.documentElement;
    
    if (theme === 'dark') {
      htmlElement.classList.add(this.DARK_CLASS);
    } else {
      htmlElement.classList.remove(this.DARK_CLASS);
    }
  }
};

// Export for use in other modules or tests
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ThemeManager;
}
