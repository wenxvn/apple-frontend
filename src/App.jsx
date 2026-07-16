import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import * as THREE from 'three'

const navigation = ['Home', 'Mac', 'Chip', 'Graphics', 'Features', 'Footer']

function App() {
  const heroRef = useRef(null)
  const canvasRef = useRef(null)
  const eyebrowRef = useRef(null)
  const headlineRef = useRef(null)
  const laptopRef = useRef(null)
  const buyRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(31, 1, 0.1, 100)
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    const laptop = new THREE.Group()
    const pointer = new THREE.Vector2()
    const targetRotation = new THREE.Vector2(0, 0)

    renderer.setClearColor(0x000000, 0)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.4
    camera.position.set(0, 3.25, 12.8)
    camera.lookAt(0, 0.25, 0)

    const metal = new THREE.MeshPhysicalMaterial({ color: '#141416', metalness: 0.92, roughness: 0.22 })
    const darkMetal = new THREE.MeshPhysicalMaterial({ color: '#070708', metalness: 0.84, roughness: 0.3 })
    const keyMaterial = new THREE.MeshPhysicalMaterial({ color: '#0e0e10', metalness: 0.36, roughness: 0.48 })
    const base = new THREE.Mesh(new THREE.BoxGeometry(7.9, 0.28, 4.9), metal)
    const underglow = new THREE.Mesh(
      new THREE.BoxGeometry(7.65, 0.035, 4.64),
      new THREE.MeshBasicMaterial({ color: '#09090a', transparent: true, opacity: 0.8 }),
    )
    const keyboardBed = new THREE.Mesh(new THREE.BoxGeometry(6.54, 0.04, 3.12), darkMetal)
    const trackpad = new THREE.Mesh(
      new THREE.BoxGeometry(2.72, 0.028, 1.32),
      new THREE.MeshPhysicalMaterial({ color: '#1b1b1e', metalness: 0.85, roughness: 0.3 }),
    )

    base.position.y = -0.16
    underglow.position.y = -0.32
    keyboardBed.position.set(0, 0.02, -0.38)
    trackpad.position.set(0, 0.045, 1.27)
    laptop.add(base, underglow, keyboardBed, trackpad)

    const keys = new THREE.Group()
    const keyGeometry = new THREE.BoxGeometry(0.43, 0.055, 0.34)
    for (let row = 0; row < 6; row += 1) {
      const keyCount = row === 5 ? 13 : 14
      for (let column = 0; column < keyCount; column += 1) {
        const key = new THREE.Mesh(keyGeometry, keyMaterial)
        key.position.set((column - (keyCount - 1) / 2) * 0.47, 0.075, -1.52 + row * 0.42)
        keys.add(key)
      }
    }
    laptop.add(keys)

    const lid = new THREE.Group()
    const lidEdge = new THREE.Mesh(
      new THREE.BoxGeometry(7.84, 0.115, 0.16),
      new THREE.MeshPhysicalMaterial({ color: '#1c1c1f', metalness: 0.98, roughness: 0.16 }),
    )
    const edgeLight = new THREE.Mesh(
      new THREE.BoxGeometry(7.18, 0.024, 0.03),
      new THREE.MeshBasicMaterial({ color: '#b7eaff', transparent: true, opacity: 0.96 }),
    )
    const hinge = new THREE.Mesh(new THREE.CylinderGeometry(0.085, 0.085, 6.55, 24), darkMetal)

    lid.position.set(0, 0.08, -2.25)
    lid.rotation.x = 1.5
    lidEdge.position.y = 4.55
    edgeLight.position.set(0, 4.57, 0.12)
    hinge.rotation.z = Math.PI / 2
    hinge.position.set(0, 0.08, -0.02)
    lid.add(lidEdge, edgeLight, hinge)
    laptop.add(lid)

    const glowPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(10.5, 4.5),
      new THREE.MeshBasicMaterial({ color: '#5b2fcb', transparent: true, opacity: 0.1, blending: THREE.AdditiveBlending, depthWrite: false }),
    )
    glowPlane.position.set(0, 1.4, -2.75)
    glowPlane.rotation.x = -0.32
    scene.add(glowPlane)

    const leftLight = new THREE.PointLight('#24b8ff', 22, 10)
    const violetLight = new THREE.PointLight('#a855f7', 20, 11)
    const pinkLight = new THREE.PointLight('#fb3c7b', 24, 10)
    const warmLight = new THREE.PointLight('#ff8c31', 18, 9)
    leftLight.position.set(-5.8, 1.2, 2.5)
    violetLight.position.set(-1.5, 2.7, 2.2)
    pinkLight.position.set(2.2, 1.8, 2.8)
    warmLight.position.set(5.6, 2.4, 1.8)
    scene.add(laptop, new THREE.AmbientLight('#c5d9ff', 0.7), leftLight, violetLight, pinkLight, warmLight)

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect()
      if (!width || !height) return
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setSize(width, height, false)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }

    const onPointerMove = (event) => {
      const bounds = canvas.getBoundingClientRect()
      pointer.x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2
      pointer.y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2
      targetRotation.set(pointer.y * 0.07, pointer.x * 0.14)
    }

    const entrance = gsap.timeline({ defaults: { ease: 'power3.out' } })
    entrance
      .fromTo(laptop.position, { y: -1.3, z: -0.6 }, { y: 0, z: 0, duration: 1.7 })
      .fromTo(laptop.rotation, { x: -0.13, y: -0.42 }, { x: 0, y: 0, duration: 1.7 }, '<')
      .fromTo(lid.rotation, { x: 1.1 }, { x: 1.5, duration: 1.7 }, '<')

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(canvas)
    canvas.addEventListener('pointermove', onPointerMove)

    const render = () => {
      laptop.rotation.x += (targetRotation.x - laptop.rotation.x) * 0.045
      laptop.rotation.y += (targetRotation.y - laptop.rotation.y) * 0.045
      glowPlane.material.opacity = 0.075 + Math.sin(gsap.ticker.time * 1.4) * 0.025
      renderer.render(scene, camera)
    }

    gsap.ticker.add(render)
    resize()

    return () => {
      entrance.kill()
      gsap.ticker.remove(render)
      resizeObserver.disconnect()
      canvas.removeEventListener('pointermove', onPointerMove)
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose()
        if (object.material) {
          const materials = Array.isArray(object.material) ? object.material : [object.material]
          materials.forEach((material) => material.dispose())
        }
      })
      renderer.dispose()
    }
  }, [])

  useEffect(() => {
    const animation = gsap.timeline({ defaults: { ease: 'power3.out' } })
    animation
      .fromTo(eyebrowRef.current, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.7, delay: 0.2 })
      .fromTo(headlineRef.current, { autoAlpha: 0, y: 28, filter: 'blur(14px)' }, { autoAlpha: 1, y: 0, filter: 'blur(0px)', duration: 1.1 }, '-=0.35')
      .fromTo(laptopRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.55 }, '-=0.7')
      .fromTo(buyRef.current, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.65 }, '-=0.1')

    return () => animation.kill()
  }, [])

  return (
    <main className="experience" ref={heroRef}>
      <nav className="nav" aria-label="主导航">
        <a className="brand" href="#home" aria-label="Lumen 首页">
          <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3.5c6.9 0 12.5 5.6 12.5 12.5S22.9 28.5 16 28.5 3.5 22.9 3.5 16 9.1 3.5 16 3.5Zm0 5.1a7.4 7.4 0 1 0 0 14.8 7.4 7.4 0 0 0 0-14.8Z" /></svg>
        </a>
        <div className="nav-links">
          {navigation.map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}
        </div>
        <div className="nav-actions">
          <button type="button" aria-label="搜索"><span className="search-icon" /></button>
          <button type="button" aria-label="购物袋"><span className="bag-icon" /></button>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="product-name" ref={eyebrowRef}>MacBook Pro</p>
          <h1 ref={headlineRef}>Built for <span>Apple Intelligence.</span></h1>
        </div>
        <div className="laptop-stage" ref={laptopRef}>
          <div className="ambient-orb ambient-orb--blue" />
          <div className="ambient-orb ambient-orb--pink" />
          <canvas ref={canvasRef} aria-label="一台带有彩色灯光和键盘细节的 3D MacBook Pro 笔记本" />
        </div>
        <button className="buy-button" ref={buyRef} type="button">Buy</button>
      </section>
    </main>
  )
}

export default App
