import gsap from 'gsap';

export default function detailEnter(container) {
	const el = {
		head: container.querySelectorAll('[data-animation="trans-head"]'),
		detailCap: container.querySelectorAll(
			'[data-animation="trans-sd"]',
		),
		transition: document.querySelector('.transition'),
		whipe: container.querySelectorAll('.trans_whipe'),
		img: container.querySelector('.detail_img'),
	};

	const chars = [];
	el.head.forEach((head) => {
		chars.push(...head.querySelectorAll('.char'));
	});

	gsap.set(el.img, {
		transformOrigin: 'top center',
	});

	const tl = gsap.timeline({
		onComplete: () => {
			gsap.set(el.transition, { transform: 'translateY(100%)' });
		},
	});

	tl
		.to(el.transition, {
			transform: 'translateY(-100%)',
			duration: 1.9,
			ease: 'expo.inOut',
		})
		.from(
			container,
			{
				y: '100vh',
				duration: 1.8,
				ease: 'expo.inOut',
			},
			'<',
		)
		.to(
			el.whipe,
			{
				height: '0%',
				duration: 1.9,
				ease: 'expo.out',
			},
			'<+1',
		)
		.from(
			chars,
			{
				yPercent: 100,
				duration: 1.2,
				ease: 'power4.out',
				stagger: { each: 0.035 },
			},
			'<+0.25',
		)
		.from(
			el.detailCap,
			{
				yPercent: 100,
				duration: 1,
				ease: 'power3.out',
				stagger: { each: 0.1 },
			},
			'<+.45',
		);

	return tl;
}