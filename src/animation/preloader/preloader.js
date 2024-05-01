import gsap from 'gsap';

export default class Preloader {
	constructor() {
		this.el = {
			preloader: document.querySelector('.preloader'),
			preloaderInner: document.querySelector('.preloader_inner'),
			preloaderNum: document.querySelector('.preloader_num'),
			preloaderLineTop: document.querySelector(
				'[data-preloader="line"]',
			),
			preloaderLineBtm: document.querySelector(
				'[data-preloader="line-btm"]',
			),
			preloaderStars: document.querySelectorAll('.preloader_stars'),
			preloaderTxt: document.querySelector('.loading_txt'),
			head: document.querySelector('[data-animation="trans-head"]'),
			text: document.querySelector('[data-animation="trans-txt"]'),
			heroBtm: document.querySelectorAll('.hero_btm_item'),
			heroLine: document.querySelector('[data-animation="hero-line"]'),
			stars: document.querySelectorAll('.hero_stars'),
			navItems: document.querySelectorAll('[data-preload="nav-items"]'),
			navLine: document.querySelector('[data-preload="nav-line"]'),
		};
		this.startTime = performance.now();

		this.init();
	}

	init() {
		const counter = { value: 0 };
		const duration = Math.max(1, this.startTime / 1000);

		this.tl = gsap.timeline({
			onComplete: () => {
				gsap.set(this.el.preloader, { display: 'none' });
			},
		});

		this.tl
			.to(counter, {
				value: 100,
				duration: duration,
				ease: 'linear',
				onUpdate: () => {
					this.el.preloaderNum.innerText = Math.round(counter.value) + '%';
				},
			})
			.to(
				this.el.preloaderLineTop,
				{
					duration: 1.5,
					xPercent: -100,
					stagger: 0.1,
					ease: 'expo.inOut',
				},
				'>',
			)
			.to(
				this.el.preloaderLineBtm,
				{
					duration: 1.5,
					xPercent: 100,
					ease: 'expo.inOut',
				},
				'<',
			)
			.to(
				this.el.preloaderStars,
				{ duration: 0.6, autoAlpha: 0, ease: 'sine.out' },
				'<+.3',
			)
			.to(
				this.el.preloaderTxt.querySelectorAll('.char'),
				{
					duration: 1,
					yPercent: -110,
					ease: 'power4.out',
					stagger: {
						amount: 0.15,
					},
				},
				'>-.8',
			)
			.to(
				this.el.preloaderNum,
				{ duration: 0.6, autoAlpha: 0, ease: 'sine.out' },
				'<+.3',
			)
			.to(
				this.el.preloader,
				{
					duration: 1.3,
					yPercent: -100,
					ease: 'expo.inOut',
				},
				'>',
			)
			.from(
				this.el.head.querySelectorAll('.char'),
				{
					yPercent: 100,
					duration: 1.2,
					ease: 'power4.out',
					stagger: { each: 0.08 },
				},
				'<+.8',
			)
			.from(
				this.el.heroLine,
				{
					width: '0%',
					duration: 2,
					ease: 'expo.inOut',
				},
				'<-0.15',
			)
			.from(
				this.el.navLine,
				{
					width: '0%',
					duration: 2,
					ease: 'expo.inOut',
				},
				'<',
			)
			.from(
				this.el.navItems,
				{
					yPercent: 100,
					duration: 1.2,
					ease: 'power3.out',
					stagger: { each: 0.15 },
				},
				'<+.2',
			)
			.from(
				this.el.text.querySelectorAll('.line_inner'),
				{
					yPercent: 100,
					duration: 1,
					ease: 'power3.out',
					stagger: { each: 0.1 },
				},
				'<+0.5',
			)
			.from(
				this.el.stars,
				{
					opacity: 0,
					duration: 1,
					ease: 'sine.out',
				},
				'<+.1',
			)
			.from(
				this.el.heroBtm,
				{
					yPercent: 100,
					duration: 1.2,
					ease: 'power3.out',
					stagger: { each: 0.15 },
				},
				'<+.2',
			);
	}
}
