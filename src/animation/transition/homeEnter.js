import gsap from 'gsap';

export default function homeEnter(container) {
	const el = {
		head: container.querySelectorAll('[data-animation="trans-head"]'),
		text: container.querySelectorAll('[data-animation="trans-txt"]'),
		heroBtm: container.querySelectorAll('.hero_btm_item'),
		heroLine: container.querySelector('[data-animation="hero-line"]'),
		transition: document.querySelector('.transition'),
		stars: container.querySelectorAll('.hero_stars'),
	};
	const chars = [];
	el.head.forEach((head) => {
		chars.push(...head.querySelectorAll('.char'));
	});

	const lines = [];
	el.text.forEach((text) => {
		lines.push(...text.querySelectorAll('.line_inner'));
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
		.from(
			chars,
			{
				yPercent: 100,
				duration: 1.2,
				ease: 'power4.out',
				stagger: { each: 0.08 },
			},
			'<+1.2',
		)
		.from(
			el.heroLine,
			{
				width: '0%',
				duration: 2,
				ease: 'expo.inOut',
			},
			'<-0.15',
		)
		.from(
			lines,
			{
				yPercent: 100,
				duration: 1,
				ease: 'power3.out',
				stagger: { each: 0.1 },
			},
			'<+0.7',
		)
		.from(
			el.stars,
			{
				opacity: 0,
				duration: 1,
				ease: 'sine.out',
			},
			'<+.1',
		)
		.from(
			el.heroBtm,
			{
				yPercent: 100,
				duration: 1.2,
				ease: 'power3.out',
				stagger: { each: 0.15 },
			},
			'<+.2',
		);

	return tl;
}
