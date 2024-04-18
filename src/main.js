import Animation from './animation'
import SmoothScroll from './utils/scroll'
import Split from './utils/split'
import WebGL from './webgl'

import './styles/style.css'
class App {
	constructor() {
		this.init()
	}

	initGL() {
		new WebGL({
			dom: document.getElementById('glcanvas'),
		})
	}

	init() {
		new SmoothScroll()
		new Split()
		this.initGL()
		new Animation()
	}
}

document.addEventListener('DOMContentLoaded', () => {
	window.Webflow ||= []
	window.Webflow.push(() => {
		new App()
	})
})
