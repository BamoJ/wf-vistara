import Hover from './hover/hover';
import Preloader from './preloader/preloader';
import Paragraph from './text/paragraph';
import Title from './text/title';
import Transition from './transition/transition';
import Slider from './slider/slider';

export default class Animation {
	constructor() {
		this.init();
	}

	init() {
		new Slider();
		new Transition();
	}
}
