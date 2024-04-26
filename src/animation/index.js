import Preloader from './preloader/preloader';
import Paragraph from './text/paragraph';
import Title from './text/title';
import Transition from './transition';
import Slider from './slider/slider';

export default class Animation {
	constructor() {
		this.init();
	}

	initPreloader() {
		const preloaderElement = document.querySelector('.preloader');
		const isHomePage = window.location.pathname === '/';
		const isFirstLoad = !sessionStorage.getItem('hasLoaded');

		if (isFirstLoad) {
			// Set 'hasLoaded' in sessionStorage
			sessionStorage.setItem('hasLoaded', 'true');
			// If preloaderElement exists, set display to 'block' or the default display
			if (preloaderElement) preloaderElement.style.display = 'flex';
			// Trigger the Preloader animation
			new Preloader();
		} else {
			// If not the first load and on the homepage, hide the preloader
			if (isHomePage && preloaderElement) {
				preloaderElement.style.display = 'none';
			}
		}
	}

	init() {
		new Slider();
		new Transition();
		this.initPreloader();
	}
}
