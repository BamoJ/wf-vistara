import gsap from 'gsap';

export default class Fade {
	constructor() {
		this.el = document.querySelectorAll('[data-animation="fade"]');
		this.init();
	}

	init() {
		this.fade();
	}

	animate() {
		gsap.from(this.el, {
			opacity: 0,
			duration: 0.5,
			ease: 'power2.inOut',
		});
	}
}
