// Universal scroll animation utility
export const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '-20px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        
        // Add stagger animation for children
        if (entry.target.classList.contains('stagger-children')) {
          entry.target.classList.add('animate');
        }
      }
    });
  }, observerOptions);

  // Observe all elements with animation classes
  const animatedElements = document.querySelectorAll('.fade-in-on-scroll, .stagger-children');
  animatedElements.forEach((el) => observer.observe(el));

  return observer;
};

// Initialize scroll animations when DOM is loaded
export const setupScrollAnimations = () => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollAnimations);
  } else {
    initScrollAnimations();
  }
};