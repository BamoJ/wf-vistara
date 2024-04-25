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
	const transContainer = document.querySelector('.transition');
	console.log(transContainer);
	gsap.set(transContainer, { transform: 'translateY(100%)' });

	const tl = gsap.timeline();
	tl
		.to(transContainer, {
			transform: 'translateY(-100%)',
			duration: 1.8,
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
		.from(
			chars,
			{
				yPercent: 105,
				duration: 1,
				ease: 'power4.out',
				stagger: { amount: 0.8 },
			},
			'<+0.5',
		)
		.from(
			lines,
			{
				yPercent: 100,
				duration: 1,
				ease: 'power3.out',
				stagger: { each: 0.1 },
			},
			'<+0.1',
		);

	return tl;
}
