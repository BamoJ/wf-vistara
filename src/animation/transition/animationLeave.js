import gsap from 'gsap';

export default function animationLeave(container) {
	const tl = gsap.timeline({});
	tl
		.fromTo(
			container,
			{
				clipPath: 'inset(0% 0% 0% 0%)',
			},
			{
				duration: 1.8,
				ease: 'expo.inOut',
				clipPath: 'inset(0% 0% 100% 0%)',
			},
		)
		.to(
			container,
			{
				yPercent: -100,
				duration: 1.8,
				ease: 'expo.inOut',
			},
			'<',
		);

	return tl;
}
