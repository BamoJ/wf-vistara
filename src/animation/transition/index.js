import gsap from 'gsap';
import barba from '@barba/core';
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
		this.barba.init({
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
						window.scrollTo(0, 0);
					},
				},
			],
		});
		this.barba.hooks.beforeEnter(() => {
			new Split();
		});
	}
}
