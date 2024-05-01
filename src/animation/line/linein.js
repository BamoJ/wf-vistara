import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default class Line {
	constructor() {
		this.el = document.querySelectorAll('[data-animation="line-in"]');
		this.init();
	}

	init() {
		this.el.forEach((line) => {
			gsap.from(line, {
				width: '0%',
				duration: 1.8,
				ease: 'power4.out',
				scrollTrigger: {
					trigger: line,
					start: 'top 90%',
				},
			});
		});
	}
}
