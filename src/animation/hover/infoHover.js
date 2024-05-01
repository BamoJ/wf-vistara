import gsap from 'gsap';

export default function infoHover() {
	const btn = document.querySelectorAll('.btn');
	const btnWhipe = document.querySelectorAll('.btn_whipe');
	const btnArrow = document.querySelectorAll('.btn_arrow');

	btn.forEach((el) => {
		el.addEventListener('mouseenter', () => {
			gsap.to(el, {
				duration: 0.5,
				y: -10,
				ease: 'power2.out',
			});
		});
		el.addEventListener('mouseleave', () => {
			gsap.to(el, {
				duration: 0.5,
				y: 0,
				ease: 'power2.out',
			});
		});
	});
}
