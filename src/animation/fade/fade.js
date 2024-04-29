import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default class Fade {
	constructor() {
		this.el = document.querySelectorAll('[data-animation="fade"]');
		this.animate();
	}

	animate() {
		this.el.forEach((el) => {
			gsap.from(el, {
				opacity: 0,
				duration: 1,
				ease: 'sine.out',
				scrollTrigger: {
					trigger: el,
					start: 'top 80%',
				},
			});
			ScrollTrigger.refresh();
		});
	}
}
