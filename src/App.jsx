import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import * as THREE from 'three'

function App() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100)
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    const geometry = new THREE.IcosahedronGeometry(1.15, 2)
    const material = new THREE.MeshPhysicalMaterial({
      color: '#72a8ff',
      metalness: 0.2,
      roughness: 0.18,
      transmission: 0.1,
      clearcoat: 1,
    })
    const orb = new THREE.Mesh(geometry, material)
    const light = new THREE.DirectionalLight('#ffffff', 4)
    const fill = new THREE.PointLight('#a855f7', 10, 8)

    camera.position.z = 4.2
    light.position.set(2, 3, 4)
    fill.position.set(-3, -1, 3)
    scene.add(orb, light, fill, new THREE.AmbientLight('#ffffff', 1.5))

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect()
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setSize(width, height, false)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }

    resize()
    window.addEventListener('resize', resize)
    const rotation = gsap.to(orb.rotation, {
      x: Math.PI * 2,
      y: Math.PI * 2,
      duration: 9,
      ease: 'none',
      repeat: -1,
    })

    const render = () => renderer.render(scene, camera)
    gsap.ticker.add(render)

    return () => {
      gsap.ticker.remove(render)
      rotation.kill()
      window.removeEventListener('resize', resize)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 px-6 py-10 text-white sm:px-10">
      <section className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl items-center gap-12 rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-8 shadow-2xl shadow-blue-950/40 backdrop-blur sm:p-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-6 text-sm font-semibold tracking-[0.2em] text-sky-300">APPLE FRONTEND LAB</p>
          <h1 className="max-w-xl text-5xl font-black tracking-tight text-balance sm:text-7xl">
            Tailwind CSS 已就绪。
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            这个页面由 React 渲染，使用 Tailwind 工具类完成排版与颜色，并结合 Three.js 和 GSAP 呈现动态 3D 示例。
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            {['React', 'Tailwind CSS v4', 'Three.js', 'GSAP'].map((technology) => (
              <span key={technology} className="rounded-full border border-sky-300/25 bg-sky-300/10 px-4 py-2 text-sm font-medium text-sky-100">
                {technology}
              </span>
            ))}
          </div>
          <a href="https://tailwindcss.com/docs/installation/using-vite" className="mt-10 inline-flex rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:scale-105 hover:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-slate-950">
            查看 Tailwind 安装方式
          </a>
        </div>
        <div className="relative aspect-square w-full max-w-md justify-self-center">
          <div className="absolute inset-8 rounded-full bg-sky-400/25 blur-3xl" />
          <canvas ref={canvasRef} aria-label="由 Three.js 渲染的动态 3D 几何体" className="relative h-full w-full" />
          <p className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium tracking-[0.18em] text-slate-400">THREE.JS × GSAP</p>
        </div>
      </section>
    </main>
  )
}

export default App
