import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default class FooterLogo {
	constructor() {
		this.el = document.querySelectorAll('.footer_svg path');

		this.init();
	}

	init() {
		gsap.from(this.el, {
			scrollTrigger: {
				trigger: this.el,
				start: 'top 90%',
			},
			yPercent: 110,
			duration: 1.25,
			ease: 'power3.out',
			stagger: 0.075,
		});
	}
}
