import gsap from 'gsap';

export default function btnHover() {
	const btn = document.querySelectorAll('.btn');
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
