document.addEventListener('DOMContentLoaded', () => {
  const containers = [
    document.querySelector('.project-groups'),
    document.querySelector('.skill-groups'),
    document.querySelector('.experience-groups'),
    document.querySelector('.contact-links')
  ].filter(Boolean);

  const animatedContainers = new Set();

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animatedContainers.has(entry.target)) {
        animatedContainers.add(entry.target);
        
        const cards = entry.target.querySelectorAll('.card');
        cards.forEach((card, index) => {
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.translate = '0 0';
          }, index * 100);
        });
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  });

  containers.forEach(container => {
    const cards = container.querySelectorAll('.card');
    cards.forEach(card => {
      card.style.opacity = '0';
      card.style.translate = '0 5vh';
      card.style.transition = 'opacity 0.6s ease, translate 0.6s ease';
    });
    
    observer.observe(container);
  });
});