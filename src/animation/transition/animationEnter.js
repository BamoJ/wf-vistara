import gsap from 'gsap';

export default function animationEnter(container) {
	const wrapper = container.querySelector('.page_wrapper');
	const containerInner = container.querySelector('.main');
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

	// GSAP timeline with onComplete callback to adjust wrapper height
	const tl = gsap.timeline({
		onComplete: () => {
			wrapper.style.height = '100%'; // Adjust height to 100% after transition
			containerInner.style.position = 'relative'; // Ensure position is set as needed
		},
	});

	tl
		.from(container, {
			duration: 1.8,
			ease: 'expo.inOut',
			clipPath: 'inset(0% 0% 100% 0%)',
		})
		.from(
			container,
			{
				yPercent: 100,
				duration: 1.8,
				ease: 'expo.inOut',
			},
			'<+0.2',
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
