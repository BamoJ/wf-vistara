import SplitType from 'split-type'

export default class Split {
	constructor() {
		this.width = window.innerWidth

		this.splitText()
	}

	splitText() {
		this.runSplit = () => {
			this.text = document.querySelectorAll('[data-text=split]')

			this.text.forEach((text) => {
				this.textContent = text.textContent

				this.split = new SplitType(this.text, {
					types: 'lines, words, chars',
					lineClass: 'lineChild',
				})

				this.textLine = document.querySelectorAll('.lineChild')

				this.textLine.forEach((line) => {
					this.lineContent = line.innerHTML
					line.innerHTML = ''
					line.innerHTML = `<span class="line_inner" style="display: block;">${this.lineContent}</span>`
				})
			})
		}

		this.runSplit()
	}

	revert() {
		window.addEventListener('resize', () => {
			if (this.width !== window.innerWidth) {
				this.width = window.innerWidth
				this.split.revert()
				this.text.textContent = this.textContent
				this.runSplit()
			}
		})
	}
}
