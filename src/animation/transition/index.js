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

	pageTrans() {
		this.barba.use(barbaPrefetch);
		this.barba.init({
			preventRunning: true,
			transitions: [
				{
					sync: true,
					name: 'default-transition',
					beforeLeave({ current }) {
						current.container.classList.add('is-transition');
					},
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
			window.scrollTo(0, 0);

			new Split();
		});

		this.barba.hooks.afterEnter(() => {});
	}
}
