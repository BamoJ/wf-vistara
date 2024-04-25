import gsap from 'gsap';

export default function animationLeave(container) {
	const tl = gsap.timeline({});
	tl.to(container, {
		clipPath: 'inset(0% 0% 0% 100%)',
		duration: 1.8,
		ease: 'expo.inOut',
	});
	tl.to(
		container,
		{
			yPercent: 100,
			duration: 1.8,
			ease: 'expo.inOut',
		},
		'<+0.2',
	);

	return tl;
}
