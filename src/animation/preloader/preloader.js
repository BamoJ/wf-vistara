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
		this.tl = gsap.timeline({
			onComplete: () => {
				gsap.set(this.el.preloader, { display: 'none' });
			},
		});
		this.tl.to(this.el.preloader, {
			duration: 1.5,
			yPercent: -100,
			ease: 'expo.inOut',
		});
	}
}
