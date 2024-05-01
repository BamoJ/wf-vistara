import gsap from 'gsap';

export default function infoHover() {
	const infoItems = document.querySelectorAll('.colophon_item');

	infoItems.forEach((item) => {
		const infoWhipe = item.querySelector('.whipe.info_item_whipe');
		const infoArrow = item.querySelector('.arrow__btn.info_item');

		item.addEventListener('mouseenter', () => {
			gsap.killTweensOf([infoWhipe, infoArrow]);
			gsap.to(infoWhipe, {
				duration: 0.7,
				height: '100%',
				ease: 'power4.out',
			});
			gsap.to(infoArrow, {
				transform: 'translateX(0%)',
				duration: 0.7,
				ease: 'power4.out',
			});
		});

		item.addEventListener('mouseleave', () => {
			gsap.killTweensOf([infoWhipe, infoArrow]);
			gsap.to(infoArrow, {
				transform: 'translateX(-100%)',
				duration: 0.5,
				ease: 'power4.out',
			});
			gsap.to(infoWhipe, {
				duration: 0.5,
				height: '0%',
				ease: 'power4.out',
			});
		});
	});
}
