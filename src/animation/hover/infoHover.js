import gsap from 'gsap';

export default function infoHover() {
	const infoItem = document.querySelectorAll('.btn');
	const infoWhipe = document.querySelectorAll('.btn_whipe');
	const infoArrow = document.querySelectorAll('.btn_arrow');

	infoItem.forEach((el) => {
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
