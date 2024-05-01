import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default class Whipe {
	constructor() {
		this.el = {
			whipe: document.querySelectorAll('[data-animation="whipe"]'),
		};

		this.imgWhipe();
	}

	imgWhipe() {
		this.el.whipe.forEach((el) => {
			gsap.to(el, {
				scrollTrigger: {
					trigger: el,
					start: 'top 90%',
				},
				height: '0%',
				ease: 'power4.out',
				duration: 1.8,
			});
		});
	}
}
