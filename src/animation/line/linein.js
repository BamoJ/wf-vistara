import gsap from 'gsap';

export default class Fade {
	constructor() {
		this.el = document.querySelectorAll('[data-animation="line-in"]');
		this.init();
	}

	init() {
		this.el.forEach((el) => {
			gsap.from(el, {
				opacity: 0,
				duration: 1,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: el,
					start: 'top 80%',
				},
			});
		});
	}
}
