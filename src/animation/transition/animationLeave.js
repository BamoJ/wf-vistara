import gsap from 'gsap';

export default function animationLeave(container) {
	const transContainer = document.querySelector('.transition');
	const tl = gsap.timeline({});
	gsap.set(transContainer, { transform: 'translateY(100%)' });
	tl.to(transContainer, {
		transform: 'translateY(0%)',
		duration: 1.8,
		ease: 'expo.inOut',
	});
	tl.to(
		container,
		{
			y: '-100vh',
			duration: 2,
			ease: 'expo.inOut',
		},
		'<+0.2',
	);

	return tl;
}
