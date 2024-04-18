import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

import fragmentShader from './shaders/fragment.glsl'
import vertexShader from './shaders/vertex.glsl'
export default class WebGL {
	constructor(options) {
		this.time = 0
		this.container = options.dom

		this.width = this.container.offsetWidth
		this.height = this.container.offsetHeight
		this.scene = new THREE.Scene()
		this.camera = new THREE.PerspectiveCamera(
			75,
			this.width / this.height,
			0.1,
			1000,
		)

		this.camera.position.z = 5
		this.camera.fov =
			2 * Math.atan(this.height / 2 / 600) * (180 / Math.PI)

		this.controls = new OrbitControls(this.camera, this.container)

		this.renderer = new THREE.WebGLRenderer({
			antialias: true,
			alpha: true,
		})
		this.renderer.setPixelRatio(window.devicePixelRatio)
		this.container.appendChild(this.renderer.domElement)

		this.resize()
		this.setupResize()
		this.addObject()
		this.render()
	}

	addObject() {
		this.geometry = new THREE.PlaneGeometry(5, 5, 50, 50)
		this.material = new THREE.ShaderMaterial({
			uniforms: {
				time: { value: 0 },
			},
			side: THREE.DoubleSide,
			vertexShader,
			fragmentShader,
			wireframe: false,
		})
		this.mesh = new THREE.Mesh(this.geometry, this.material)
		this.scene.add(this.mesh)
	}

	resize() {
		this.width = this.container.offsetWidth
		this.height = this.container.offsetHeight
		this.renderer.setSize(this.width, this.height)
		this.camera.aspect = this.width / this.height
		this.camera.updateProjectionMatrix()
	}

	setupResize() {
		window.addEventListener('resize', this.resize.bind(this))
	}

	render() {
		this.time += 0.01
		this.renderer.render(this.scene, this.camera)
		this.material.uniforms.time.value = this.time
		window.requestAnimationFrame(this.render.bind(this))
	}
}
