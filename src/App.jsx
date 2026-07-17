import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import * as THREE from 'three'
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js'

const finishes = {
  silver: { label: '银色', color: '#d0d3d6', screenFrame: '#31343a', trackpad: '#b8bdc4' },
  spaceBlack: { label: '深空黑色', color: '#3b3c40', screenFrame: '#1e2024', trackpad: '#4c4e54' },
}

const sizes = ['14', '16']
const navigation = [
  { label: 'MacBook Pro', href: '#home' },
  { label: '性能', href: '#performance' },
  { label: '显示屏', href: '#home' },
  { label: '探索', href: '#explore' },
]

function createScreenTexture() {
  const textureCanvas = document.createElement('canvas')
  textureCanvas.width = 1280
  textureCanvas.height = 760
  const context = textureCanvas.getContext('2d')
  const background = context.createLinearGradient(120, 0, 1160, 760)

  background.addColorStop(0, '#fff3c9')
  background.addColorStop(0.35, '#ffc1cc')
  background.addColorStop(0.67, '#aa8ee5')
  background.addColorStop(1, '#4b70c7')
  context.fillStyle = background
  context.fillRect(0, 0, 1280, 760)

  const wave = context.createLinearGradient(0, 300, 1280, 620)
  wave.addColorStop(0, 'rgba(83, 76, 184, 0.15)')
  wave.addColorStop(0.5, 'rgba(255, 255, 255, 0.34)')
  wave.addColorStop(1, 'rgba(31, 92, 182, 0.3)')
  context.fillStyle = wave
  context.beginPath()
  context.moveTo(0, 480)
  context.bezierCurveTo(230, 260, 530, 660, 790, 420)
  context.bezierCurveTo(1010, 220, 1120, 390, 1280, 260)
  context.lineTo(1280, 760)
  context.lineTo(0, 760)
  context.closePath()
  context.fill()

  const sheen = context.createLinearGradient(80, 0, 880, 0)
  sheen.addColorStop(0, 'rgba(255, 255, 255, 0)')
  sheen.addColorStop(0.48, 'rgba(255, 255, 255, 0.3)')
  sheen.addColorStop(1, 'rgba(255, 255, 255, 0)')
  context.fillStyle = sheen
  context.save()
  context.rotate(-0.23)
  context.fillRect(230, -120, 250, 1180)
  context.restore()

  const texture = new THREE.CanvasTexture(textureCanvas)
  texture.colorSpace = THREE.SRGBColorSpace
  return texture
}

function MacBookCanvas({ finish, size, interactive = false, variant = 'explorer' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const selectedFinish = finishes[finish]
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100)
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    const laptop = new THREE.Group()
    const lid = new THREE.Group()
    const screenTexture = createScreenTexture()
    const targetRotation = new THREE.Vector2(variant === 'hero' ? 0.16 : 0.2, variant === 'hero' ? -0.25 : -0.16)
    const dragStart = new THREE.Vector2()
    const startingRotation = new THREE.Vector2()
    let isDragging = false

    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.1
    camera.position.set(0, variant === 'hero' ? 4.25 : 5, variant === 'hero' ? 16.2 : 15.8)
    camera.lookAt(0, 0.72, 0)
    laptop.rotation.set(targetRotation.x, targetRotation.y, 0)
    laptop.scale.setScalar(size === '16' ? 1 : 0.9)

    const metal = new THREE.MeshPhysicalMaterial({ color: selectedFinish.color, metalness: 0.84, roughness: 0.24, clearcoat: 0.34 })
    const bottomMetal = new THREE.MeshPhysicalMaterial({ color: '#7a7e86', metalness: 0.65, roughness: 0.38 })
    const keyboardDeckMaterial = new THREE.MeshPhysicalMaterial({ color: '#24262b', metalness: 0.35, roughness: 0.42 })
    const keyMaterial = new THREE.MeshPhysicalMaterial({ color: '#121419', metalness: 0.2, roughness: 0.54 })
    const speakerMaterial = new THREE.MeshBasicMaterial({ color: '#4e535d' })
    const frameMaterial = new THREE.MeshPhysicalMaterial({ color: selectedFinish.screenFrame, metalness: 0.62, roughness: 0.25 })
    const unibody = new THREE.Mesh(new RoundedBoxGeometry(8.08, 0.28, 5.04, 8, 0.13), metal)
    const bottomPanel = new THREE.Mesh(new RoundedBoxGeometry(7.7, 0.04, 4.66, 8, 0.06), bottomMetal)
    const keyboardDeck = new THREE.Mesh(new RoundedBoxGeometry(6.96, 0.055, 3.42, 7, 0.08), keyboardDeckMaterial)
    const trackpad = new THREE.Mesh(
      new RoundedBoxGeometry(2.94, 0.025, 1.57, 6, 0.12),
      new THREE.MeshPhysicalMaterial({ color: selectedFinish.trackpad, metalness: 0.65, roughness: 0.33 }),
    )

    unibody.position.y = -0.16
    bottomPanel.position.y = -0.315
    keyboardDeck.position.set(0, 0.018, -0.34)
    trackpad.position.set(0, 0.058, 1.28)
    laptop.add(unibody, bottomPanel, keyboardDeck, trackpad)

    const keys = new THREE.Group()
    const keyGeometry = new RoundedBoxGeometry(0.39, 0.055, 0.3, 4, 0.045)
    const keyRows = [14, 14, 14, 14, 13, 13]
    keyRows.forEach((keyCount, row) => {
      for (let column = 0; column < keyCount; column += 1) {
        const key = new THREE.Mesh(keyGeometry, keyMaterial)
        key.position.set((column - (keyCount - 1) / 2) * 0.458, 0.072, -1.54 + row * 0.4)
        keys.add(key)
      }
    })
    laptop.add(keys)

    const speakerHoleGeometry = new RoundedBoxGeometry(0.065, 0.015, 0.13, 4, 0.025)
    for (const side of [-1, 1]) {
      for (let column = 0; column < 13; column += 1) {
        const speakerHole = new THREE.Mesh(speakerHoleGeometry, speakerMaterial)
        speakerHole.position.set(side * 3.33, 0.062, -1.48 + column * 0.19)
        laptop.add(speakerHole)
      }
    }

    const hingeBar = new THREE.Mesh(new RoundedBoxGeometry(6.95, 0.095, 0.14, 5, 0.05), frameMaterial)
    hingeBar.position.set(0, 0.1, -2.35)
    laptop.add(hingeBar)

    const screenFrame = new THREE.Mesh(new RoundedBoxGeometry(8.02, 4.94, 0.14, 7, 0.11), frameMaterial)
    const screen = new THREE.Mesh(
      new THREE.PlaneGeometry(7.65, 4.53),
      new THREE.MeshBasicMaterial({ map: screenTexture }),
    )
    const screenSheen = new THREE.Mesh(
      new THREE.PlaneGeometry(7.62, 4.5),
      new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.08, blending: THREE.AdditiveBlending, depthWrite: false }),
    )
    const notch = new THREE.Mesh(new RoundedBoxGeometry(0.72, 0.15, 0.08, 4, 0.05), keyMaterial)

    lid.position.set(0, 0.09, -2.35)
    lid.rotation.x = -0.35
    screenFrame.position.y = 2.46
    screen.position.set(0, 2.46, 0.076)
    screenSheen.position.set(0, 2.46, 0.081)
    notch.position.set(0, 4.72, 0.095)
    lid.add(screenFrame, screen, screenSheen, notch)
    laptop.add(lid)

    const topLight = new THREE.DirectionalLight('#fffdf8', 3.2)
    const fillLight = new THREE.DirectionalLight('#dce8ff', 2.3)
    const edgeLight = new THREE.PointLight('#c5d8ff', 16, 15)
    topLight.position.set(-4, 8, 8)
    fillLight.position.set(5, 3, 6)
    edgeLight.position.set(0, 4, -4)
    scene.add(laptop, new THREE.HemisphereLight('#fffdf8', '#667181', 2.3), topLight, fillLight, edgeLight)

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect()
      if (!width || !height) return
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setSize(width, height, false)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }

    const onPointerDown = (event) => {
      if (!interactive) return
      isDragging = true
      canvas.setPointerCapture(event.pointerId)
      dragStart.set(event.clientX, event.clientY)
      startingRotation.set(targetRotation.x, targetRotation.y)
      canvas.classList.add('is-dragging')
    }

    const onPointerMove = (event) => {
      if (!isDragging) return
      targetRotation.x = THREE.MathUtils.clamp(startingRotation.x + (event.clientY - dragStart.y) * 0.005, -0.1, 0.42)
      targetRotation.y = THREE.MathUtils.clamp(startingRotation.y + (event.clientX - dragStart.x) * 0.006, -0.55, 0.42)
    }

    const endDrag = () => {
      isDragging = false
      canvas.classList.remove('is-dragging')
    }

    const render = () => {
      laptop.rotation.x += (targetRotation.x - laptop.rotation.x) * 0.1
      laptop.rotation.y += (targetRotation.y - laptop.rotation.y) * 0.1
      renderer.render(scene, camera)
    }

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(canvas)
    if (interactive) {
      canvas.addEventListener('pointerdown', onPointerDown)
      canvas.addEventListener('pointermove', onPointerMove)
      canvas.addEventListener('pointerup', endDrag)
      canvas.addEventListener('pointercancel', endDrag)
    }
    gsap.ticker.add(render)
    resize()

    return () => {
      gsap.ticker.remove(render)
      resizeObserver.disconnect()
      canvas.removeEventListener('pointerdown', onPointerDown)
      canvas.removeEventListener('pointermove', onPointerMove)
      canvas.removeEventListener('pointerup', endDrag)
      canvas.removeEventListener('pointercancel', endDrag)
      screenTexture.dispose()
      scene.traverse((object) => {
        object.geometry?.dispose()
        if (object.material) {
          const materials = Array.isArray(object.material) ? object.material : [object.material]
          materials.forEach((material) => material.dispose())
        }
      })
      renderer.dispose()
    }
  }, [finish, interactive, size, variant])

  return (
    <canvas
      ref={canvasRef}
      aria-label={`一台 ${finishes[finish].label} ${size} 英寸 MacBook Pro${interactive ? '；按住并拖动可旋转查看' : ''}`}
    />
  )
}

function App() {
  const heroCopyRef = useRef(null)
  const heroStageRef = useRef(null)
  const performanceRef = useRef(null)
  const performanceCopyRef = useRef(null)
  const performanceChipRef = useRef(null)
  const performanceMetricsRef = useRef(null)
  const [finish, setFinish] = useState('spaceBlack')
  const [size, setSize] = useState('16')

  useEffect(() => {
    const animation = gsap.timeline({ defaults: { ease: 'power3.out' } })
    animation
      .fromTo(heroCopyRef.current, { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.8 })
      .fromTo(heroStageRef.current, { autoAlpha: 0, y: 36, scale: 0.97 }, { autoAlpha: 1, y: 0, scale: 1, duration: 1.1 }, '-=0.4')

    return () => animation.kill()
  }, [])

  useEffect(() => {
    const section = performanceRef.current
    const copy = performanceCopyRef.current
    const chip = performanceChipRef.current
    const metrics = performanceMetricsRef.current
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion) return undefined

    const animation = gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } })
    animation
      .fromTo(copy, { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, duration: 0.7 })
      .fromTo(chip, { autoAlpha: 0, scale: 0.82, rotate: -8 }, { autoAlpha: 1, scale: 1, rotate: 0, duration: 0.9 }, '-=0.35')
      .fromTo(metrics.children, { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.55, stagger: 0.12 }, '-=0.4')

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animation.play()
          observer.disconnect()
        }
      },
      { threshold: 0.28 },
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
      animation.kill()
    }
  }, [])

  return (
    <main>
      <section className="experience" id="home" aria-labelledby="hero-title">
        <nav className="nav" aria-label="主导航">
          <a className="brand" href="#home" aria-label="MacBook Pro 首页">
            <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3.5c6.9 0 12.5 5.6 12.5 12.5S22.9 28.5 16 28.5 3.5 22.9 3.5 16 9.1 3.5 16 3.5Zm0 5.1a7.4 7.4 0 1 0 0 14.8 7.4 7.4 0 0 0 0-14.8Z" /></svg>
          </a>
          <div className="nav-links">
            {navigation.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}
          </div>
          <a className="nav-explore" href="#explore">探索</a>
        </nav>

        <div className="hero">
          <div className="hero-copy" ref={heroCopyRef}>
            <p className="product-name">MacBook Pro</p>
            <h1 id="hero-title">为 Apple Intelligence 而打造。</h1>
            <a className="hero-link" href="#explore">近距离看看 <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-stage" ref={heroStageRef}>
            <MacBookCanvas finish="spaceBlack" size="16" variant="hero" />
          </div>
        </div>
      </section>

      <section className="product-explorer" id="explore" aria-labelledby="explorer-title">
        <div className="explorer">
          <div className="explorer-heading">
            <p>MacBook Pro</p>
            <h2 id="explorer-title">近距离看看。</h2>
          </div>
          <div className="explorer-stage">
            <MacBookCanvas finish={finish} size={size} interactive />
            <p className="rotation-hint" aria-hidden="true">拖动旋转</p>
          </div>

          <div className="product-controls">
            <p className="selection-copy">MacBook Pro {size} 英寸，{finishes[finish].label}</p>
            <div className="control-row">
              <div className="option-group" role="group" aria-label="选择颜色">
                {Object.entries(finishes).map(([key, option]) => (
                  <button
                    className={`finish-option finish-option--${key} ${finish === key ? 'is-selected' : ''}`}
                    type="button"
                    key={key}
                    aria-pressed={finish === key}
                    aria-label={`选择${option.label}`}
                    onClick={() => setFinish(key)}
                  >
                    <span />
                  </button>
                ))}
              </div>
              <div className="option-group size-group" role="group" aria-label="选择尺寸">
                {sizes.map((option) => (
                  <button
                    className={size === option ? 'is-selected' : ''}
                    type="button"
                    key={option}
                    aria-pressed={size === option}
                    onClick={() => setSize(option)}
                  >
                    {option}″
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="performance" id="performance" ref={performanceRef} aria-labelledby="performance-title">
        <div className="performance-copy" ref={performanceCopyRef}>
          <p>性能</p>
          <h2 id="performance-title">冲劲十足。</h2>
          <span>专为突破性工作流而打造。</span>
        </div>

        <div className="performance-chip" ref={performanceChipRef} aria-hidden="true">
          <div className="performance-chip__surface">
            <span>M4</span>
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>

        <div className="performance-metrics" ref={performanceMetricsRef}>
          <article>
            <strong>高达 24 核</strong>
            <span>GPU 核心，处理复杂创作。</span>
          </article>
          <article>
            <strong>高达 128GB</strong>
            <span>统一内存，多任务从容应对。</span>
          </article>
          <article>
            <strong>最长 24 小时</strong>
            <span>电池续航，专注更久。</span>
          </article>
        </div>
      </section>
    </main>
  )
}

export default App
