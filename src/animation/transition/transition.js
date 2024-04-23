import gsap from 'gsap';
import barba from '@barba/core';
import Slider from '../slider/slider';
import Split from '../../utils/split';

export default class Transition {
	constructor() {
		this.baba = barba;

		this.init();
	}

	leaveAnimation() {
		const done = this.async();
		gsap.to('body', {
			opacity: 0,
			duration: 0.5,
			onComplete: done,
		});
	}

	enterAnimation() {
		gsap.from('body', {
			opacity: 0,
			duration: 0.5,
		});
	}

	pageTrans() {
		this.baba.init({
			transitions: [
				{
					prevent: ({ href }) => href === window.location.href,
					sync: false,
					leave(data) {
						const done = this.async();
						gsap.to(data.current.container, {
							opacity: 0,
							duration: 0.2,
							onComplete: done,
						});
					},
					enter(data) {
						gsap.from(data.next.container, {
							opacity: 0,
							duration: 0.2,
						});
						window.scrollTo(0, 0);
					},
				},
			],
		});

		this.baba.hooks.afterEnter(() => {
			new Slider();
			new Split();
		});
	}

	init() {
		this.pageTrans();
	}
}
