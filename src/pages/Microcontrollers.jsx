import MicrocontrollerCard from '../components/MicrocontrollerCard'
import esp32Img from '../assets/microcontrollers/esp.jpg'
import arduinoImg from '../assets/microcontrollers/arduin.jpg'
import stm32Img from '../assets/microcontrollers/stm.jpg'

function Microcontrollers() {
  return (
    <section className="relative min-h-screen bg-zinc-950 px-6 py-20 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px]
                      bg-green-500/20 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 left-0 w-[400px] h-[400px]
                      bg-green-400/10 blur-[100px] rounded-full" />

      {/* CONTENT */}
      <div className="relative max-w-6xl mx-auto">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 text-center">
          Microcontrollers
        </h1>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Explore powerful microcontrollers used in IoT, robotics, and embedded
          systems — with clean pin diagrams and real-world projects.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
       <MicrocontrollerCard
  name="ESP32"
  description="Wi-Fi & Bluetooth enabled microcontroller for IoT"
  slug="esp32"
  image={esp32Img}
/>

<MicrocontrollerCard
  name="Arduino Uno"
  description="Beginner-friendly board based on ATmega328P"
  slug="arduino-uno"
  image={arduinoImg}
/>

<MicrocontrollerCard
  name="STM32"
  description="High-performance ARM-based microcontrollers"
  slug="stm32"
  image={stm32Img}
/>


        </div>
      </div>

    </section>
  )
}

export default Microcontrollers
