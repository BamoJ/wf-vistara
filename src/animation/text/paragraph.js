import gsap from 'gsap';

export default class Paragraph {
	constructor() {
		this.el = document.querySelectorAll('[data-animation="text"]');
		this.init();
	}

	init() {
		console.log('Paragraph Animation init');
	}
}
