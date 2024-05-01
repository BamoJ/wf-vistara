import gsap from 'gsap';
import SmoothScroll from '../../utils/scroll';
export default class MenuOpen {
	constructor() {
		this.el = {
			menu: document.querySelector('.info_menu_wrap'),
			menuWrapper: document.querySelector('.info_menu_inner'),
			menuSVG: document.querySelector('.info_svg'),
			menuStars: document.querySelector('.info_stars'),
			menuClose: document.querySelector('.info_close_text'),
			menuBtm: document.querySelectorAll('.info_btm_text'),
			colTitle: document.querySelector('.colophon_title'),
			colTxt: document.querySelectorAll('.colophon_item_txt'),
			menuButton: document.querySelector('.nav_link-item.info'),
			menuBG: document.querySelector('.info_menu_bg'),
			lineTopBtm: document.querySelectorAll(
				'[data-anim="info-line-top"]',
			),
			lineCol: document.querySelectorAll('[data-anim="info-col-item"]'),
		};

		this.scroll = new SmoothScroll();

		this.addEventListeners();
	}

	menuOpen() {
		this.menuPL = document.querySelectorAll(
			'.info_p_large .line_inner',
		);
		this.menuPs = document.querySelectorAll('.info_p_s .line_inner');

		this.openTl = gsap.timeline({
			onStart: () => {
				gsap.set(this.el.menuBG, {
					pointerEvents: 'auto',
				});
				this.scroll.stopScroll();
			},
		});

		this.openTl.to(this.el.menu, {
			transform: 'translateX(0%)',
			duration: 1.1,
			ease: 'expo.inOut',
		});
		this.openTl
			.to(
				this.el.menuBG,
				{
					duration: 1,
					opacity: 1,
					ease: 'sine.out',
				},
				0,
			)
			.fromTo(
				this.el.menuSVG,
				{
					yPercent: 125,
				},
				{
					yPercent: 0,
					duration: 1,
					ease: 'power4.out',
				},
				'<+.6',
			)
			.from(
				this.el.menuStars,
				{
					yPercent: 100,
					duration: 1,
					ease: 'power4.out',
				},
				'<',
			)
			.from(
				this.el.menuClose,
				{
					yPercent: 100,
					duration: 1,
					ease: 'power4.out',
				},
				'<+.1',
			)
			.from(
				this.el.lineTopBtm,
				{
					width: '0%',
					duration: 1.5,
					ease: 'power4.out',
					stagger: 0.4,
				},
				'<',
			)
			.from(
				this.menuPL,
				{
					yPercent: 100,
					duration: 0.85,
					ease: 'power4.out',
					stagger: 0.1,
				},
				'<+0.1',
			)
			.from(
				this.menuPs,
				{
					yPercent: 100,
					duration: 0.85,
					ease: 'power4.out',
					stagger: 0.1,
				},
				'<+0.3',
			)
			.from(
				this.el.colTitle,
				{
					yPercent: 120,
					duration: 0.85,
					ease: 'power4.out',
				},
				'<-0.3',
			)
			.from(
				this.el.lineCol,
				{
					width: '0%',
					duration: 1.1,
					ease: 'power4.out',
					stagger: 0.15,
				},
				'<',
			)
			.from(
				this.el.colTxt,
				{
					yPercent: 165,
					duration: 1,
					ease: 'power3.out',
					stagger: 0.1,
				},
				'<+0.1',
			)
			.from(
				'.info_btm_text',
				{
					yPercent: 100,
					duration: 1,
					ease: 'power4.out',
					stagger: 0.2,
				},
				'<+.1',
			);
	}

	menuClose() {
		this.tl = gsap.timeline({
			onComplete: () => {
				this.scroll.startScroll();
				gsap.set(this.el.menuWrapper, {
					autoAlpha: 1,
				});
			},
		});

		gsap.set(this.el.menuBG, {
			pointerEvents: 'none',
		});

		this.tl
			.to(this.el.menuWrapper, {
				autoAlpha: 0,
				duration: 0.65,
				ease: 'sine.out',
			})
			.to(
				this.el.menu,
				{
					transform: 'translateX(100%)',
					duration: 1,
					ease: 'expo.out',
				},
				'<+0.15',
			)
			.to(
				this.el.menuBG,
				{
					duration: 1,
					opacity: 0,
					ease: 'sine.out',
				},
				0,
			);
	}

	addEventListeners() {
		this.el.menuButton.addEventListener('click', () => {
			this.menuOpen();
		});

		this.el.menuClose.addEventListener('click', () => {
			this.menuClose();
		});

		// close menu when clicking on the background
		this.el.menuBG.addEventListener('click', () => {
			this.menuClose();
		});

		// close menu when pressing esc key
		document.addEventListener('keydown', (e) => {
			if (e.key === 'Escape') {
				this.menuClose();
			}
		});
	}
}
