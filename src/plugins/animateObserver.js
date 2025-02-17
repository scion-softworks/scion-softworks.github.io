export default {
	install() {
		// Animation observer logic
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('visible');
						observer.unobserve(entry.target); // Stop observing after animation
					}
				});
			},
			{ threshold: 0.1 }
		);

		// Watch for new elements added to the DOM
		const mutationObserver = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				mutation.addedNodes.forEach((node) => {
					if (node.nodeType === Node.ELEMENT_NODE) {
						// Check element and its children
						const elements = node.querySelectorAll(
							'.animate-fade-in-up'
						);
						if (node.classList.contains('animate-fade-in-up')) {
							elements.push(node);
						}
						elements.forEach((el) => observer.observe(el));
					}
				});
			});
		});

		// Start observing the entire app
		mutationObserver.observe(document.body, {
			childList: true,
			subtree: true
		});

		// Observe existing elements on initial load
		document.querySelectorAll('.animate-fade-in-up').forEach((el) => {
			observer.observe(el);
		});
	}
};
