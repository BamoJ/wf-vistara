import gsap from 'gsap';

export default function animationEnter(container) {
	const head = container.querySelectorAll(
		'[data-animation="trans-head"]',
	);
	const text = container.querySelectorAll(
		'[data-animation="trans-txt"]',
	);

	const chars = [];
	head.forEach((head) => {
		chars.push(...head.querySelectorAll('.char'));
	});

	const lines = [];
	text.forEach((text) => {
		lines.push(...text.querySelectorAll('.line_inner'));
	});

	const tl = gsap.timeline({});
	tl
		.from(container, {
			duration: 1.8,
			ease: 'expo.inOut',
			clipPath: 'inset(0% 0% 100% 0%)',
		})
		.from(
			container,
			{
				yPercent: 105,
				duration: 1.5,
				ease: 'power3.inOut',
			},
			'<+0.2',
		)
		.from(
			chars,
			{
				yPercent: 105,
				duration: 1.5,
				ease: 'power4.out',
				stagger: {
					amount: 0.4,
				},
			},
			'<+0.6',
		)
		.from(
			lines,
			{
				yPercent: 100,
				duration: 1,
				ease: 'power3.out',
				stagger: {
					each: 0.15,
				},
			},
			'<+0.3',
		);
	return tl;
}
