import Lenis from '@studio-freight/lenis'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default class SmoothScroll extends Lenis {
	constructor() {
		super()
		this.lenis = new Lenis({
			duration: 1.45,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			smoothWheel: true,
			wheelMultiplier: 1,
			autoResize: true,
			touchMultiplier: 1,
		})

		this.lenis.on('scroll', () => {
			ScrollTrigger.update()
		})

		this.startRAF()
	}

	startRAF() {
		const raf = (time) => {
			this.lenis.raf(time)
			requestAnimationFrame(raf)
		}
		requestAnimationFrame(raf)
	}

	// Method to start scrolling
	startScroll() {
		this.lenis.start()
	}

	// Method to stop scrolling
	stopScroll() {
		this.lenis.stop()
	}
}
