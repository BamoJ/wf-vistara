import Animation from './animation';
import SmoothScroll from './utils/scroll';

import './styles/style.css';
class App {
	constructor() {
		this.init();
	}

	init() {
		new SmoothScroll();
		new Animation();
	}
}

document.addEventListener('DOMContentLoaded', () => {
	window.Webflow ||= [];
	window.Webflow.push(() => {
		new App();
	});
});
