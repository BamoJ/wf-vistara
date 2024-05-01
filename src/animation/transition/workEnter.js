import gsap from 'gsap';

export default function workEnter(container) {
	const activeSwiperSlide = container.querySelector(
		'.swiper-slide.slide-active',
	);
	const el = {
		head: activeSwiperSlide.querySelector(
			'[data-animation="trans-head"]',
		),
		text: activeSwiperSlide.querySelector(
			'[data-animation="trans-txt"]',
		),
		transition: document.querySelector('.transition'),
		imgWhipe: container.querySelectorAll('.trans_whipe'),
		sliderBtn: container.querySelector('.slider_nav'),
		sliderBtnTxt: container.querySelectorAll('.slider_btm_txt'),
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
			el.imgWhipe,
			{
				height: '0%',
				duration: 1.5,
				ease: 'power4.out',
				stagger: 0.1,
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
			el.text.querySelectorAll('.line_inner'),
			{
				yPercent: 100,
				duration: 1,
				ease: 'power3.out',
				stagger: { each: 0.1 },
			},
			'<+.25',
		)
		.from(
			el.sliderBtnTxt,
			{
				yPercent: 100,
				duration: 1,
				ease: 'power3.out',
				stagger: { each: 0.1 },
			},
			'<+0.35',
		)
		.fromTo(
			el.sliderBtn,
			{
				opacity: 0,
			},
			{
				duration: 1,
				ease: 'sine',
				opacity: 1,
			},
			'<-.2',
		);

	return tl;
}
