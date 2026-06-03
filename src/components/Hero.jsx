import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'


function Hero() {
  const navigate = useNavigate()
const slides = [
  '/slides/arduino.jpg',
  '/slides/microcontroller.jpg',
  '/slides/pcb.jpg',
  '/slides/pcb1.jpg',
  '/slides/sys3.jpg',
  
  
  

]

const [current, setCurrent] = useState(0)

useEffect(() => {
  const interval = setInterval(() => {
    setCurrent(prev => (prev + 1) % slides.length)
  }, 3000)

  return () => clearInterval(interval)
}, [])

  return (
    <section className="relative min-h-screen bg-zinc-950 overflow-hidden flex items-center">
{/* NEON LIGHT STREAK */}
<div
  className="absolute top-0 left-[-30%] w-[160%] h-32
             bg-gradient-to-r from-transparent via-green-400/40 to-transparent
             blur-[60px] rotate-[-8deg]"
/>

      {/* BACKGROUND GLOW LAYERS */}
      <div
        className="absolute -top-40 -right-40 w-[500px] h-[500px]
                   bg-green-500/20 blur-[120px] rounded-full"
      />

      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px]
                   bg-green-400/10 blur-[100px] rounded-full"
      />

      {/* CONTENT WRAPPER */}
      <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT */}
        <div>
          <p className="text-green-400 uppercase tracking-widest text-sm mb-4">
            Hardware made easy
          </p>

          <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight mb-6">
            Explore Electronics <br />
            the <span className="text-green-400">Smart Way</span>
          </h1>

          <p className="text-gray-400 max-w-md mb-8">
            Interactive pin diagrams, microcontrollers, sensors, and real projects —
            all in one futuristic platform.
          </p>

         <button
  onClick={() => navigate('/categories')}
  className="bg-green-400 text-black px-8 py-3 rounded-full font-semibold
             hover:bg-green-300 transition-all duration-300"
>
  Get Started
</button>

        </div>

        {/* RIGHT VISUAL */}
        <div
          className="w-full h-80 rounded-xl bg-green-400/10 border border-green-400/30
                     flex items-center justify-center"
        >
          <div
  className="relative w-full h-80 rounded-xl
             bg-green-400/10 border border-green-400/30
             overflow-hidden flex items-center justify-center"
>
  {slides.map((src, index) => (
    <img
      key={src}
      src={src}
      alt="Component preview"
      className={`absolute w-full h-full object-cover
            transition-opacity duration-1000
            ${index === current ? 'opacity-100' : 'opacity-0'}`}

    />
  ))}
</div>

        </div>

      </div>
    </section>
  )
}

export default Hero
