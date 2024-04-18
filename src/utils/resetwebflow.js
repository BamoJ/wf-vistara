// export default function resetWebflow(data) {
// 	let parser = new DOMParser()
// 	let dom = parser.parseFromString(data.next.html, 'text/html')

// 	// prettier-ignore
// 	let webflowPageId = dom.querySelector('html').getAttribute('data-wf-page');
// 	// prettier-ignore
// 	document.querySelector('html').setAttribute('data-wf-page', webflowPageId)

// 	window.Webflow && window.Webflow.destroy()
// 	window.Webflow && window.Webflow.ready()
// 	window.Webflow && window.Webflow.require('ix2').init()
// }
