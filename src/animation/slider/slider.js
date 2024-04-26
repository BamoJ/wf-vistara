import Swiper from 'swiper';
import { Navigation, Parallax } from 'swiper/modules';

import 'swiper/css';

export default class Slider {
	constructor() {
		this.runSlider();
	}

	runSlider() {
		const swiper = new Swiper('.swiper', {
			modules: [Navigation, Parallax],
			slideClass: 'swiper-slide',
			wrapperClass: 'swiper-wrapper',
			slideActiveClass: 'slide-active',
			centeredSlides: true,
			parallax: true,
			speed: 750,
			loop: true,
			navigation: {
				nextEl: '.swiper_button_next',
				prevEl: '.swiper_button_prev',
			},
			breakpoints: {
				479: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
				767: {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				991: {
					slidesPerView: 1.75,
					spaceBetween: 100,
				},
			},
		});
		swiper.on('slideChange', (e) => {
			let slideNumber = e.realIndex + 1;
			document.querySelector('[data-slide-number]').textContent =
				slideNumber;
		});
	}
}
