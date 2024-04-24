import gsap from 'gsap';

const animationEnter = (container) => {
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

	console.log(head, text, chars);

	const tl = gsap.timeline();
	tl
		.from(container, {
			duration: 1.2,
			ease: 'expo.out',
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
				duration: 1,
				ease: 'power4.out',
				stagger: {
					amount: 0.8,
				},
			},
			'<+0.5',
		)
		.from(
			lines,
			{
				yPercent: 100,
				duration: 1,
				ease: 'power3.out',
				stagger: {
					each: 0.1,
				},
			},
			'<+0.1',
		);
	return tl;
};

export default animationEnter;
