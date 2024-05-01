import gsap from 'gsap';

export default function detailEnter(container) {
	const el = {
		head: container.querySelector('[data-animation="trans-head"]'),
		detailCap: container.querySelector('[data-animation="trans-sd"]'),
		transition: document.querySelector('.transition'),
		whipe: container.querySelectorAll('.trans_whipe'),
		img: container.querySelector('.detail_img'),
	};

	gsap.set(el.transition, { display: 'block' });

	const tl = gsap.timeline({
		onComplete: () => {
			gsap.set(el.transition, { transform: 'translateY(100%)' });
			gsap.set(el.transition, { display: 'none' });
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
			el.head.querySelectorAll('.char'),
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
