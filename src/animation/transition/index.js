import barba from '@barba/core';
import barbaPrefetch from '@barba/prefetch';
import Slider from '../slider/slider';
import Split from '../../utils/split';
import animationEnter from './animationEnter';
import animationLeave from './animationLeave';

export default class Transition {
	constructor() {
		this.barba = barba;
		this.pageTrans();
	}

	/**
	 * TODO: Add loading cursor while transitioning, and remove it after transition
	 * TODO: Tidy stagger animations
	 * TODO: add Whipe animation
	 * TODO: Fix SLIDER, make sure it works while transitioning
	 */

	pageTrans() {
		this.barba.use(barbaPrefetch);
		this.barba.init({
			preventRunning: true,
			transitions: [
				{
					sync: true,
					name: 'default-transition',
					leave: ({ current }) => {
						console.log('leaving current page');
						return animationLeave(current.container);
					},
					afterLeave({ current }) {
						current.container.classList.remove('is-transition');
						new Slider();
					},
					beforeEnter({ next }) {
						next.container.classList.add('is-transition');
					},
					enter: ({ next }) => {
						console.log('entering next page');
						animationEnter(next.container);
					},
					afterEnter({ next }) {
						next.container.classList.remove('is-transition');
					},
				},
			],
		});

		this.barba.hooks.beforeEnter(() => {
			new Split();
		});
		this.barba.hooks.after(() => {
			const transContainer = document.querySelector('.transition');
			transContainer.style.transform = 'translateY(100%)';
			window.scrollTo(0, 0);
		});
	}
}
