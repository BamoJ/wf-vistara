import gsap from 'gsap';
import SmoothScroll from '../../utils/scroll';
export default class MenuOpen {
	constructor() {
		this.el = {
			menu: document.querySelector('.info_menu_wrap'),
			menuSVG: document.querySelector('.info_svg'),
			menuStars: document.querySelector('.info_stars'),
			menuClose: document.querySelector('.info_close_text'),
			menuBtm: document.querySelectorAll('.info_btm_text'),
			colTitle: document.querySelector('.colophon_title'),
			colTxt: document.querySelectorAll('.colophon_item_txt'),
			menuButton: document.querySelector('.nav_link-item.info'),
			menuBG: document.querySelector('.info_menu_bg'),
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
			duration: 1.25,
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
			.from(
				this.menuPL,
				{
					yPercent: 100,
					duration: 1,
					ease: 'power4.out',
					stagger: 0.15,
				},
				'<+0.5',
			)
			.from(
				this.menuPs,
				{
					yPercent: 100,
					duration: 1,
					ease: 'power4.out',
					stagger: 0.15,
				},
				'<+0.2',
			);
	}

	menuClose() {
		this.tl = gsap.timeline({
			onComplete: () => {
				this.scroll.startScroll();
			},
		});

		gsap.set(this.el.menuBG, {
			pointerEvents: 'none',
		});

		this.tl
			.to(this.el.menu, {
				transform: 'translateX(100%)',
				duration: 1,
				ease: 'expo.out',
			})
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
