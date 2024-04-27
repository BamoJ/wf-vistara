import gsap from 'gsap';

export default class MenuOpen {
	constructor() {
		this.el = {
			menu: document.querySelector('.info_menu_wrap'),
			menuSVG: document.querySelector('.info_svg'),
			menuStars: document.querySelector('.info_stars'),
			menuClose: document.querySelector('.info_close_text'),
			menuBtm: document.querySelectorAll('.info_btm_text'),
			menuPl: document.querySelectorAll('.info_p_large .word'),
			menuPs: document.querySelectorAll('.info_p_s .line_inner'),
			colTitle: document.querySelector('.colophon_title'),
			colTxt: document.querySelectorAll('.colophon_item_txt'),
			menuButton: document.querySelector('.nav_link-item.info'),
			menuBG: document.querySelector('.info_menu_bg'),
			menuWhipe: document.querySelector('.info_whipe'),
		};

		console.log(this.el.menuPl);

		this.addEventListeners();
	}

	menuOpen() {
		const tl = gsap.timeline({});
		gsap.set(this.el.menuBG, {
			pointerEvents: 'auto',
		});
		tl.to(this.el.menu, {
			transform: 'translateX(0%)',
			duration: 1,
			ease: 'expo.inOut',
		});
		tl
			.from(
				this.el.menuBG,
				{
					duration: 0.5,
					opacity: 0,
					ease: 'sine.out',
				},
				0,
			)
			.from(
				'.info_p_large .line_inner',
				{
					yPercent: 100,
					duration: 1,
					ease: 'expo.out',
					stagger: 0.15,
				},
				'<+0.2',
			)
			.from(
				'.info_p_s .line_inner',
				{
					yPercent: 100,
					duration: 1,
					ease: 'expo.out',
					stagger: 0.15,
				},
				'<+0.2',
			);
	}

	menuClose() {
		const tl = gsap.timeline({});
		gsap.set(this.el.menuBG, {
			pointerEvents: 'none',
		});
		tl.to(this.el.menu, {
			transform: 'translateX(100%)',
			duration: 1,
			ease: 'expo.out',
		});
	}

	addEventListeners() {
		this.el.menuButton.addEventListener('click', () => {
			this.menuOpen();
			console.log('clicked');
		});

		this.el.menu.addEventListener('click', () => {
			this.menuClose();
		});

		this.el.menuBG.addEventListener('click', () => {
			this.menuClose();
		});
	}
}
