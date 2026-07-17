import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import * as THREE from 'three'

const finishes = {
  silver: { label: '银色', color: '#b9bcc2', screenFrame: '#5a5d64', trackpad: '#8b8e94' },
  spaceBlack: { label: '深空黑色', color: '#1a1a1c', screenFrame: '#303034', trackpad: '#2a2a2d' },
}

const sizes = ['14', '16']
const navigation = ['MacBook Pro', '性能', '显示屏', '探索']

function createScreenTexture() {
  const textureCanvas = document.createElement('canvas')
  textureCanvas.width = 1024
  textureCanvas.height = 608
  const context = textureCanvas.getContext('2d')
  const background = context.createLinearGradient(0, 0, 1024, 608)

  background.addColorStop(0, '#101724')
  background.addColorStop(0.48, '#060913')
  background.addColorStop(1, '#020306')
  context.fillStyle = background
  context.fillRect(0, 0, 1024, 608)

  const reflection = context.createLinearGradient(40, 0, 800, 608)
  reflection.addColorStop(0, 'rgba(131, 184, 255, 0.14)')
  reflection.addColorStop(0.42, 'rgba(67, 90, 170, 0.045)')
  reflection.addColorStop(1, 'rgba(0, 0, 0, 0)')
  context.fillStyle = reflection
  context.fillRect(0, 0, 1024, 608)

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
    const camera = new THREE.PerspectiveCamera(29, 1, 0.1, 100)
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    const laptop = new THREE.Group()
    const lid = new THREE.Group()
    const screenTexture = createScreenTexture()
    const targetRotation = new THREE.Vector2(variant === 'hero' ? 0.08 : 0.18, variant === 'hero' ? -0.2 : -0.1)
    const dragStart = new THREE.Vector2()
    const startingRotation = new THREE.Vector2()
    let isDragging = false

    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.48
    camera.position.set(0, variant === 'hero' ? 3.8 : 4.7, variant === 'hero' ? 14.8 : 13.4)
    camera.lookAt(0, 0.72, 0)
    laptop.rotation.set(targetRotation.x, targetRotation.y, 0)
    laptop.scale.setScalar(size === '16' ? 1.04 : 0.9)

    const metal = new THREE.MeshPhysicalMaterial({ color: selectedFinish.color, metalness: 0.93, roughness: 0.24, clearcoat: 0.28 })
    const darkMetal = new THREE.MeshPhysicalMaterial({ color: '#17171a', metalness: 0.78, roughness: 0.31 })
    const keyMaterial = new THREE.MeshPhysicalMaterial({ color: '#2a2a2e', metalness: 0.28, roughness: 0.5 })
    const frameMaterial = new THREE.MeshPhysicalMaterial({ color: selectedFinish.screenFrame, metalness: 0.9, roughness: 0.2 })
    const base = new THREE.Mesh(new THREE.BoxGeometry(8.05, 0.3, 4.95), metal)
    const underside = new THREE.Mesh(new THREE.BoxGeometry(7.74, 0.05, 4.62), darkMetal)
    const keyboardBed = new THREE.Mesh(new THREE.BoxGeometry(6.7, 0.04, 3.2), darkMetal)
    const trackpad = new THREE.Mesh(
      new THREE.BoxGeometry(2.82, 0.022, 1.34),
      new THREE.MeshPhysicalMaterial({ color: selectedFinish.trackpad, metalness: 0.76, roughness: 0.28 }),
    )

    base.position.y = -0.16
    underside.position.y = -0.33
    keyboardBed.position.set(0, 0.02, -0.35)
    trackpad.position.set(0, 0.045, 1.3)
    laptop.add(base, underside, keyboardBed, trackpad)

    const keys = new THREE.Group()
    const keyGeometry = new THREE.BoxGeometry(0.42, 0.055, 0.34)
    for (let row = 0; row < 6; row += 1) {
      const keyCount = row === 5 ? 13 : 14
      for (let column = 0; column < keyCount; column += 1) {
        const key = new THREE.Mesh(keyGeometry, keyMaterial)
        key.position.set((column - (keyCount - 1) / 2) * 0.465, 0.075, -1.53 + row * 0.42)
        keys.add(key)
      }
    }

    const speakerGeometry = new THREE.BoxGeometry(0.075, 0.025, 1.85)
    const leftSpeaker = new THREE.Mesh(speakerGeometry, keyMaterial)
    const rightSpeaker = leftSpeaker.clone()
    leftSpeaker.position.set(-3.34, 0.065, -0.52)
    rightSpeaker.position.set(3.34, 0.065, -0.52)
    laptop.add(keys, leftSpeaker, rightSpeaker)

    const hinge = new THREE.Mesh(new THREE.CylinderGeometry(0.085, 0.085, 6.76, 28), darkMetal)
    hinge.rotation.z = Math.PI / 2
    hinge.position.set(0, 0.09, -2.26)

    const screenFrame = new THREE.Mesh(new THREE.BoxGeometry(8.01, 4.94, 0.15), frameMaterial)
    const screen = new THREE.Mesh(
      new THREE.PlaneGeometry(7.62, 4.53),
      new THREE.MeshBasicMaterial({ map: screenTexture }),
    )
    const screenSheen = new THREE.Mesh(
      new THREE.PlaneGeometry(7.58, 4.49),
      new THREE.MeshBasicMaterial({ color: '#c3e0ff', transparent: true, opacity: 0.035, blending: THREE.AdditiveBlending, depthWrite: false }),
    )
    const notch = new THREE.Mesh(new THREE.BoxGeometry(0.66, 0.13, 0.08), darkMetal)

    lid.position.set(0, 0.08, -2.26)
    lid.rotation.x = -0.5
    screenFrame.position.y = 2.45
    screen.position.set(0, 2.45, 0.081)
    screenSheen.position.set(0, 2.45, 0.085)
    notch.position.set(0, 4.72, 0.1)
    lid.add(screenFrame, screen, screenSheen, notch)
    laptop.add(lid, hinge)

    const leftLight = new THREE.PointLight('#b9d6ff', 24, 13)
    const rightLight = new THREE.PointLight('#ffffff', 18, 11)
    const rimLight = new THREE.PointLight('#6078df', 17, 12)
    leftLight.position.set(-5.4, 4.2, 5.2)
    rightLight.position.set(5.3, 3.1, 4.5)
    rimLight.position.set(0, 5.8, -4)
    scene.add(laptop, new THREE.AmbientLight('#dce8ff', 1.05), leftLight, rightLight, rimLight)

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
      targetRotation.x = THREE.MathUtils.clamp(startingRotation.x + (event.clientY - dragStart.y) * 0.006, -0.18, 0.38)
      targetRotation.y = THREE.MathUtils.clamp(startingRotation.y + (event.clientX - dragStart.x) * 0.007, -0.55, 0.42)
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
  const [finish, setFinish] = useState('spaceBlack')
  const [size, setSize] = useState('16')

  useEffect(() => {
    const animation = gsap.timeline({ defaults: { ease: 'power3.out' } })
    animation
      .fromTo(heroCopyRef.current, { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.8 })
      .fromTo(heroStageRef.current, { autoAlpha: 0, y: 36, scale: 0.97 }, { autoAlpha: 1, y: 0, scale: 1, duration: 1.1 }, '-=0.4')

    return () => animation.kill()
  }, [])

  return (
    <main>
      <section className="experience" id="home" aria-labelledby="hero-title">
        <nav className="nav" aria-label="主导航">
          <a className="brand" href="#home" aria-label="MacBook Pro 首页">
            <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3.5c6.9 0 12.5 5.6 12.5 12.5S22.9 28.5 16 28.5 3.5 22.9 3.5 16 9.1 3.5 16 3.5Zm0 5.1a7.4 7.4 0 1 0 0 14.8 7.4 7.4 0 0 0 0-14.8Z" /></svg>
          </a>
          <div className="nav-links">
            {navigation.map((item) => <a key={item} href={item === '探索' ? '#explore' : '#home'}>{item}</a>)}
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
    </main>
  )
}

export default App
