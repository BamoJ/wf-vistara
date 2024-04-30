import Lenis from 'lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

export default class SmoothScroll extends Lenis {
	static instance;

	constructor() {
		if (SmoothScroll.instance) {
			return SmoothScroll.instance;
		}

		super();
		this.lenis = new Lenis({
			duration: 1.4,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			smoothWheel: true,
			wheelMultiplier: 1.6,
			syncTouches: true,
			autoResize: true,
			touchMultiplier: 1,
		});

		this.lenis.on('scroll', () => {
			ScrollTrigger.update();
			// turn of scroll trigger refresh when in mobile/tablet
			if (window.innerWidth < 1024) return;
			ScrollTrigger.refresh();
		});

		gsap.ticker.add((time) => {
			this.lenis.raf(time * 1000);
		});

		gsap.ticker.lagSmoothing(0);

		this.startRAF();

		SmoothScroll.instance = this;
	}

	startRAF() {
		const raf = (time) => {
			this.lenis.raf(time);
			requestAnimationFrame(raf);
		};
		requestAnimationFrame(raf);
	}

	// Method to start scrolling
	startScroll() {
		this.lenis.start();
	}

	// Method to stop scrolling
	stopScroll() {
		this.lenis.stop();
	}
}
