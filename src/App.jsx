import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import * as THREE from 'three'

const finishes = {
  silver: { label: '银色', color: '#b9bcc2', screenFrame: '#484b52', trackpad: '#777a80' },
  spaceBlack: { label: '深空黑色', color: '#171717', screenFrame: '#29292b', trackpad: '#252527' },
}

const sizes = ['14', '16']

function App() {
  const canvasRef = useRef(null)
  const stageRef = useRef(null)
  const titleRef = useRef(null)
  const controlsRef = useRef(null)
  const [finish, setFinish] = useState('spaceBlack')
  const [size, setSize] = useState('16')

  useEffect(() => {
    const canvas = canvasRef.current
    const selectedFinish = finishes[finish]
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100)
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    const laptop = new THREE.Group()
    const lid = new THREE.Group()
    const targetRotation = new THREE.Vector2(-0.04, 0)
    const dragStart = new THREE.Vector2()
    const startingRotation = new THREE.Vector2()
    let isDragging = false

    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.12
    camera.position.set(0, 2.5, 13.8)
    camera.lookAt(0, 0.48, 0)
    laptop.rotation.set(-0.04, 0, 0)
    laptop.scale.setScalar(size === '16' ? 1.06 : 0.9)

    const metal = new THREE.MeshPhysicalMaterial({ color: selectedFinish.color, metalness: 0.9, roughness: 0.27 })
    const darkMetal = new THREE.MeshPhysicalMaterial({ color: '#09090a', metalness: 0.72, roughness: 0.34 })
    const keyMaterial = new THREE.MeshPhysicalMaterial({ color: '#0b0b0c', metalness: 0.24, roughness: 0.6 })
    const frameMaterial = new THREE.MeshPhysicalMaterial({ color: selectedFinish.screenFrame, metalness: 0.85, roughness: 0.22 })
    const base = new THREE.Mesh(new THREE.BoxGeometry(7.8, 0.27, 4.83), metal)
    const keyboardBed = new THREE.Mesh(new THREE.BoxGeometry(6.48, 0.032, 3.08), darkMetal)
    const trackpad = new THREE.Mesh(
      new THREE.BoxGeometry(2.7, 0.024, 1.28),
      new THREE.MeshPhysicalMaterial({ color: selectedFinish.trackpad, metalness: 0.72, roughness: 0.34 }),
    )

    base.position.y = -0.14
    keyboardBed.position.set(0, 0.015, -0.37)
    trackpad.position.set(0, 0.04, 1.25)
    laptop.add(base, keyboardBed, trackpad)

    const keys = new THREE.Group()
    const keyGeometry = new THREE.BoxGeometry(0.41, 0.05, 0.32)
    for (let row = 0; row < 6; row += 1) {
      const keyCount = row === 5 ? 13 : 14
      for (let column = 0; column < keyCount; column += 1) {
        const key = new THREE.Mesh(keyGeometry, keyMaterial)
        key.position.set((column - (keyCount - 1) / 2) * 0.465, 0.055, -1.5 + row * 0.415)
        keys.add(key)
      }
    }
    laptop.add(keys)

    const hinge = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.075, 6.65, 24), darkMetal)
    hinge.rotation.z = Math.PI / 2
    hinge.position.set(0, 0.07, -2.2)

    const screenFrame = new THREE.Mesh(new THREE.BoxGeometry(7.76, 4.74, 0.13), frameMaterial)
    const screen = new THREE.Mesh(
      new THREE.PlaneGeometry(7.38, 4.38),
      new THREE.MeshBasicMaterial({ color: '#050506' }),
    )
    const displayGlow = new THREE.Group()
    const glowMaterial = new THREE.MeshBasicMaterial({ color: '#d8dcff', transparent: true, opacity: 0.76 })
    const glowStroke = new THREE.Mesh(new THREE.TorusGeometry(1.35, 0.16, 12, 52, Math.PI * 1.44), glowMaterial)
    const glowLine = new THREE.Mesh(new THREE.TorusGeometry(1.5, 0.13, 12, 52, Math.PI * 1.28), glowMaterial)
    const glowVertical = new THREE.Mesh(new THREE.TorusGeometry(0.72, 0.13, 12, 42, Math.PI * 1.4), glowMaterial)
    const notch = new THREE.Mesh(new THREE.BoxGeometry(0.63, 0.11, 0.06), darkMetal)

    lid.position.set(0, 0.06, -2.2)
    screenFrame.position.y = 2.34
    screen.position.set(0, 2.34, 0.071)
    displayGlow.position.set(0, 2.34, 0.083)
    glowStroke.position.set(-1.08, -0.12, 0)
    glowStroke.rotation.z = 1.08
    glowLine.position.set(0.18, -0.66, 0)
    glowLine.rotation.z = -0.02
    glowVertical.position.set(2.05, 0.12, 0)
    glowVertical.rotation.z = -0.1
    notch.position.set(0, 4.56, 0.08)
    lid.add(screenFrame, screen, displayGlow, notch)
    displayGlow.add(glowStroke, glowLine, glowVertical)
    laptop.add(lid, hinge)

    const leftLight = new THREE.PointLight('#c5d7ff', 17, 12)
    const rightLight = new THREE.PointLight('#ffffff', 12, 9)
    const backLight = new THREE.PointLight('#6472cf', 11, 10)
    leftLight.position.set(-4.8, 3.5, 4)
    rightLight.position.set(4.8, 2, 3.4)
    backLight.position.set(0, 4, -3.5)
    scene.add(laptop, new THREE.AmbientLight('#ffffff', 0.42), leftLight, rightLight, backLight)

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect()
      if (!width || !height) return
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setSize(width, height, false)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }

    const onPointerDown = (event) => {
      isDragging = true
      canvas.setPointerCapture(event.pointerId)
      dragStart.set(event.clientX, event.clientY)
      startingRotation.set(targetRotation.x, targetRotation.y)
      canvas.classList.add('is-dragging')
    }

    const onPointerMove = (event) => {
      if (!isDragging) return
      targetRotation.x = THREE.MathUtils.clamp(startingRotation.x + (event.clientY - dragStart.y) * 0.008, -0.45, 0.28)
      targetRotation.y = THREE.MathUtils.clamp(startingRotation.y + (event.clientX - dragStart.x) * 0.009, -0.75, 0.75)
    }

    const endDrag = () => {
      isDragging = false
      canvas.classList.remove('is-dragging')
    }

    const render = () => {
      laptop.rotation.x += (targetRotation.x - laptop.rotation.x) * 0.11
      laptop.rotation.y += (targetRotation.y - laptop.rotation.y) * 0.11
      renderer.render(scene, camera)
    }

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(canvas)
    canvas.addEventListener('pointerdown', onPointerDown)
    canvas.addEventListener('pointermove', onPointerMove)
    canvas.addEventListener('pointerup', endDrag)
    canvas.addEventListener('pointercancel', endDrag)
    gsap.ticker.add(render)
    resize()

    return () => {
      gsap.ticker.remove(render)
      resizeObserver.disconnect()
      canvas.removeEventListener('pointerdown', onPointerDown)
      canvas.removeEventListener('pointermove', onPointerMove)
      canvas.removeEventListener('pointerup', endDrag)
      canvas.removeEventListener('pointercancel', endDrag)
      scene.traverse((object) => {
        object.geometry?.dispose()
        if (object.material) {
          const materials = Array.isArray(object.material) ? object.material : [object.material]
          materials.forEach((material) => material.dispose())
        }
      })
      renderer.dispose()
    }
  }, [finish, size])

  useEffect(() => {
    const animation = gsap.timeline({ defaults: { ease: 'power3.out' } })
    animation
      .fromTo(titleRef.current, { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.7 })
      .fromTo(stageRef.current, { autoAlpha: 0, scale: 0.96 }, { autoAlpha: 1, scale: 1, duration: 1.15 }, '-=0.25')
      .fromTo(controlsRef.current, { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.65 }, '-=0.55')

    return () => animation.kill()
  }, [])

  return (
    <main className="product-explorer">
      <section className="explorer" aria-labelledby="explorer-title">
        <h1 id="explorer-title" ref={titleRef}>近距离看看。</h1>
        <div className="laptop-stage" ref={stageRef}>
          <canvas
            ref={canvasRef}
            aria-label={`一台 ${finishes[finish].label}${size} 英寸 MacBook Pro；按住并拖动可旋转查看`}
          />
          <p className="rotation-hint" aria-hidden="true">拖动旋转</p>
        </div>

        <div className="product-controls" ref={controlsRef}>
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
      </section>
    </main>
  )
}

export default App
