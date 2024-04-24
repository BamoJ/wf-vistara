import gsap from 'gsap';

export default class Preloader {
	constructor() {
		this.el = {
			preloader: document.querySelector('.preloader'),
			preloaderInner: document.querySelector('.preloader_inner'),
		};
		this.init();
	}

	init() {
		this.tl = gsap.timeline();
		this.tl.to(this.el.preloader, {
			duration: 1.25,
			yPercent: -100,
			ease: 'power3.inOut',
		});
		this.tl.set(this.el.preloader, { display: 'none' }, '>');
	}
}
