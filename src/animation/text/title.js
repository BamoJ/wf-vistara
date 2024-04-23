import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export default class Title {
	constructor() {
		this.el = document.querySelectorAll('[data-animation="title"]');

		this.animate();
	}

	animate() {
		this.el.forEach((el) => {
			gsap.from(el, {
				scrollTrigger: {
					trigger: el,
					start: 'top 80%',
					toggleActions: 'play none none none',
				},
				y: 50,
				opacity: 0,
				duration: 0.5,
				ease: 'power2.inOut',
			});
		});
	}
}
