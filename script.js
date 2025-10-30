document.addEventListener('DOMContentLoaded', function() {
  const containers = [
		document.querySelector('.project-groups'),
		document.querySelector('.skill-groups'),
		document.querySelector('.experience-groups'),
		document.querySelector('.contact-links')
	].filter(function(item) {
		if (item) {
			return true;
		} else {
			return false;
		}
	});

	const animatedContainers = new Set();

	const observer = new IntersectionObserver(function(entries) {
		entries.forEach(function(entry) {
			if (entry.isIntersecting) {
				if (!animatedContainers.has(entry.target)) {
					animatedContainers.add(entry.target);

					const cards = entry.target.querySelectorAll('.card');
					cards.forEach(function(card, index) {
						setTimeout(function() {
							card.style.opacity = '1';
							card.style.translate = '0 0';

							setTimeout(function() {
								card.style.removeProperty('opacity');
								card.style.removeProperty('translate');
								card.style.removeProperty('transition');
							}, 600);
						}, index * 100);
					});
				}
			} else {
				//not intersecting so do nohting I guess
			}
		});
	}, {
		threshold: 0.2,
		rootMargin: '0px 0px -50px 0px'
	});

	containers.forEach(function(container) {
		const cards = container.querySelectorAll('.card');

		for (let i = 0; i < cards.length; i++) {
			const card = cards[i];
			card.style.opacity = '0';
			card.style.translate = '0 5vh';
			card.style.transition = 'opacity 0.6s ease, translate 0.6s ease';
		}

	  observer.observe(container);
	});
});
