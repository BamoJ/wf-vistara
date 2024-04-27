import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default class Parallax {
	constructor() {
		this.el = {
			img: document.querySelector('.parallax-img'),
			imgContainer: document.querySelector('.parallax-img-container'),
		};

		this.parallax();
	}

	parallax() {
		gsap.to(this.el.img, {
			scrollTrigger: {
				trigger: this.el.imgContainer,
				start: 'top top',
				end: 'bottom bottom',
				scrub: true,
			},
			y: '50%',
		});
	}
}
