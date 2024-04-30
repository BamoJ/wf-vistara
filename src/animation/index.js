import Preloader from './preloader/preloader';
import Transition from './transition';
import Slider from './slider/slider';
import MenuOpen from './menu/menuOpen';

export default class Animation {
	constructor() {
		this.init();
	}

	// initPreloader() {
	// 	const preloaderElement = document.querySelector('.preloader');
	// 	const isHomePage = window.location.pathname === '/';
	// 	const isFirstLoad = !sessionStorage.getItem('hasLoaded');

	// 	if (isFirstLoad) {
	// 		// Set 'hasLoaded' in sessionStorage
	// 		sessionStorage.setItem('hasLoaded', 'true');
	// 		// If preloaderElement exists, set display to 'block' or the default display
	// 		if (preloaderElement) preloaderElement.style.display = 'flex';
	// 		// Trigger the Preloader animation
	// 		new Preloader();
	// 	} else {
	// 		// If not the first load and on the homepage, hide the preloader
	// 		if (isHomePage && preloaderElement) {
	// 			preloaderElement.style.display = 'none';
	// 		}
	// 	}
	// }

	init() {
		new MenuOpen();
		new Slider();
		new Transition();
		// this.initPreloader();
	}
}
