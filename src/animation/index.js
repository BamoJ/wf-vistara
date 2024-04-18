import Hover from './hover/hover'
import Preloader from './preloader/preloader'
import ScrollAnimation from './scroll/scroll'
import Paragraph from './text/paragraph'
import Title from './text/title'
import Transition from './transition/transition'
export default class Animation {
	constructor() {
		this.init()
	}

	init() {
		new Hover()
		new Preloader()
		new ScrollAnimation()
		new Paragraph()
		new Title()
		new Transition()
	}
}
