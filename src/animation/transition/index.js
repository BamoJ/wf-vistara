import barba from '@barba/core';
import barbaPrefetch from '@barba/prefetch';
import Slider from '../slider/slider';
import Split from '../../utils/split';
import animationLeave from './animationLeave';
import homeEnter from './homeEnter';
import workEnter from './workEnter';
import detailEnter from './detailEnter';

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
					name: 'global-leave-transition',
					sync: true,
					leave: ({ current }) => {
						console.log('leaving global page');
						return animationLeave(current.container);
					},
					// beforeEnter({ next }) {
					// 	next.container.classList.add('is-transition');
					// },
					// enter: ({ next }) => {
					// 	console.log('entering next page');
					// 	animationEnter(next.container);
					// },
					// afterEnter({ next }) {
					// 	next.container.classList.remove('is-transition');
					// },
				},
				{
					name: 'home-transition',
					sync: true,
					to: {
						namespace: ['home'],
					},
					enter: ({ next }) => {
						return homeEnter(next.container);
					},
					leave({ current }) {
						return animationLeave(current.container);
					},
					beforeEnter({ next }) {
						next.container.classList.add('is-transition');
					},
				},
				{
					name: 'work-transition',
					sync: true,
					to: {
						namespace: ['work'],
					},
					once({ next }) {
						workEnter(next.container);
					},
					beforeEnter({ next }) {
						next.container.classList.add('is-transition');
						new Slider(next.container);
					},
					enter: ({ next }) => {
						workEnter(next.container);
					},
					leave: ({ current }) => {
						return animationLeave(current.container);
					},
					afterEnter({ next }) {
						next.container.classList.remove('is-transition');
					},
				},
				{
					name: 'detail-transition',
					sync: true,
					to: {
						namespace: ['detail'],
					},
					beforeEnter({ next }) {
						next.container.classList.add('is-transition');
					},
					enter: ({ next }) => {
						console.log('enter detail page');
						return detailEnter(next.container);
					},
					after({ next }) {
						next.container.classList.remove('is-transition');
					},
					leave({ current }) {
						console.log('leaving detail page');
						return animationLeave(current.container);
					},
				},
			],
		});

		// use barba hoook to change the cursor to loadign while transitioning
		this.barba.hooks.before(() => {
			document.body.style.cursor = 'wait';
		});
		this.barba.hooks.beforeEnter(() => {
			new Split();
		});
		this.barba.hooks.after(() => {
			document.body.style.cursor = 'auto';
			window.scrollTo(0, 0);
		});
	}
}
