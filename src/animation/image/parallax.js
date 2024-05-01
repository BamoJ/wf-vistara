import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default class Parallax {
	constructor() {
		this.el = {
			img: document.querySelectorAll('[data-animation="parallax"]'),
			imgContainer: document.querySelectorAll(
				'[data-animation="img-container"]',
			),
		};

		this.parallax();
	}

	parallax() {
		this.el.img.forEach((img) => {
			gsap.set(img, { scale: 1.1 });
			gsap.to(img, {
				scrollTrigger: {
					trigger: img,
					scrub: true,
				},
				y: img.clientHeight * 0.15,
				ease: 'none',
			});
		});
	}
}
