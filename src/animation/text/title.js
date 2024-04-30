import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export default class SlideUp {
	constructor() {
		this.el = document.querySelectorAll('[data-animation="slide-up"]');

		this.animate();
	}

	animate() {
		this.el.forEach((el) => {
			gsap.from(el, {
				scrollTrigger: {
					trigger: el,
					start: 'top 97%',
				},
				yPercent: 100,
				duration: 1.25,
				ease: 'power3.out',
			});
			// ScrollTrigger.refresh();
		});
	}
}
