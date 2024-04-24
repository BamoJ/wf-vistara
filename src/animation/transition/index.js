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
					leave: ({ current }) => {
						console.log('leaving current page');
						return animationLeave(current.container);
					},
					enter: ({ next }) => {
						console.log('entering next page');
						animationEnter(next.container);
					},
				},
			],
		});
		this.barba.hooks.afterLeave(() => {
			new Slider();
		});

		this.barba.hooks.beforeEnter(() => {
			new Split();
		});

		this.barba.hooks.afterEnter(() => {
			window.scrollTo(0, 0);
		});
	}
}
