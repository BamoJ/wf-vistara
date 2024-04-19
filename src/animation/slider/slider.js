import gsap from 'gsap'

export default class Slider {
	constructor() {
		this.init()
	}

	runSlider() {
		const swiper = new Swiper('.swiper', {
			slidesPerView: 1.5,
			spaceBetween: 100,
			loop: true,
			navigation: {
				nextEl: '.swiper-btn-next',
				prevEl: '.swiper-btn-prev',
			},
		})
	}

	init() {
		this.runSlider()
	}
}
