import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export default class SlideParagraph {
	constructor() {
		this.el = document.querySelectorAll('[data-animation="slide-p"]');

		this.init();
	}

	init() {
		this.el.forEach((el) => {
			gsap.from(el.querySelectorAll('.line_inner'), {
				scrollTrigger: {
					trigger: el,
					start: 'top 90%',
				},
				yPercent: 100,
				duration: 1.1,
				ease: 'power3.out',
				stagger: 0.1,
			});
			// ScrollTrigger.refresh();
		});
	}
}
