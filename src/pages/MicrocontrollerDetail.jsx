import { useParams } from "react-router-dom";
import Esp32Pinout from "../components/Esp32Pinout";
import ArduinoUnoPinout from "../components/ArduinoUnoPinout";
import SectionCard from "../components/SectionCard";
import STM32F103Pinout from "../components/stm32/STM32F103Pinout";


function MicrocontrollerDetail() {
  const { slug } = useParams();

  return (
    <section className="relative min-h-screen bg-zinc-950 overflow-hidden text-white">

      {/* BACKGROUND GLOWS */}
      <div
        className="absolute -top-40 -left-40 w-[600px] h-[600px]
                   bg-green-600/20 rounded-full blur-[160px]"
      />
      <div
        className="absolute top-1/3 -right-40 w-[500px] h-[500px]
                   bg-green-500/15 rounded-full blur-[140px]"
      />

      {/* PAGE CONTENT */}
      <div className="relative z-10 px-6 py-20">

        <h1 className="text-3xl font-bold mb-16 text-center">
          
          {slug?.toUpperCase()} DETAILS
        </h1>
  



        {/* ================= ESP32 ================= */}
        {slug === "esp32" && (
          <>
            <div className="scale-90 origin-top mx-auto mb-32">
              <Esp32Pinout />
            </div>

            <div className="max-w-5xl mx-auto">
              <SectionCard title="About ESP32">
                <p className="leading-relaxed max-w-3xl">
                  ESP32 is a powerful Wi-Fi and Bluetooth enabled microcontroller
                  designed for IoT, embedded systems, and real-time applications.
                </p>
              </SectionCard>
<SectionCard title="Projects Using ESP32">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">


<div className="bg-zinc-950 border border-zinc-800 rounded-xl p-5">
  <h3 className="font-semibold mb-2">
    Smart Home Automation
  </h3>
  <p className="text-gray-400 text-sm">
    Control home appliances remotely using ESP32 Wi-Fi connectivity.
  </p>
</div>

<div className="bg-zinc-950 border border-zinc-800 rounded-xl p-5">
  <h3 className="font-semibold mb-2">
    Weather Monitoring Station
  </h3>
  <p className="text-gray-400 text-sm">
    Monitor temperature and humidity and publish data online.
  </p>
</div>


  </div>
</SectionCard>


              <SectionCard title="Buy ESP32">
                <div className="flex justify-center gap-10 text-lg">
                  <a
                    href="https://www.amazon.in/s?k=esp32"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:underline"
                  >
                    Amazon
                  </a>
                  <a
                    href="https://robu.in/?s=esp32&post_type=product"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:underline"
                  >
                    Robu.in
                  </a>
                </div>
              </SectionCard>
            </div>
          </>
        )}

        {/* ================= ARDUINO ================= */}
        {slug === "arduino-uno" && (
          <>
            <div className="scale-95 origin-top mx-auto mb-32">
              <ArduinoUnoPinout />
            </div>

            <div className="max-w-5xl mx-auto">
              <SectionCard title="About Arduino Uno">
                <p className="leading-relaxed max-w-3xl">
                  Arduino Uno is a beginner-friendly microcontroller board
                  based on the ATmega328P, widely used for learning electronics
                  and prototyping.
                </p>
              </SectionCard>

              <SectionCard title="Projects Using Arduino Uno">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

    <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-5">
      <h3 className="font-semibold mb-2">Line Following Robot</h3>
      <p className="text-gray-400 text-sm">
        Uses IR sensors and Arduino Uno to detect a path and automatically navigate along a predefined track.
      </p>
    </div>

    <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-5">
      <h3 className="font-semibold mb-2">Smart Parking System</h3>
      <p className="text-gray-400 text-sm">
        Utilizes ultrasonic sensors to detect vehicle presence and display available parking slots in real time.
      </p>
    </div>

  </div>
</SectionCard>

              <SectionCard title="Buy Arduino Uno">
                <div className="flex justify-center gap-10 text-lg">
                  <a
                    href="https://www.amazon.in/s?k=arduino+uno"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:underline"
                  >
                    Amazon
                  </a>
                  <a
                    href="https://robu.in/?s=arduino+uno&post_type=product"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:underline"
                  >
                    Robu.in
                  </a>
                </div>
              </SectionCard>
            </div>
          </>
        )}
{/* ================= STM32 ================= */}
{slug === "stm32" && (
  <>
    <div className="scale-85 origin-top mx-auto mb-32">
      <STM32F103Pinout />
    </div>

    <div className="max-w-5xl mx-auto">
      <SectionCard title="About STM32F103">
        <p className="leading-relaxed max-w-3xl">
          STM32F103 is a 32-bit ARM Cortex-M3 based microcontroller from STMicroelectronics,
          widely used in embedded systems, robotics, motor control, and industrial applications.
          It offers rich peripherals including ADC, timers, UART, SPI, I2C, USB, and SWD debugging.
        </p>
      </SectionCard>

      <SectionCard title="Projects Using STM32">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-5">
            <h3 className="font-semibold mb-2">Motor Control System</h3>
            <p className="text-gray-400 text-sm">
              PWM-based DC motor control using timers and GPIO with STM32 HAL.
            </p>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-5">
            <h3 className="font-semibold mb-2">USB Device</h3>
            <p className="text-gray-400 text-sm">
              USB CDC (Virtual COM Port) implementation using STM32 USB peripheral.
            </p>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Buy STM32F103 (Blue Pill)">
        <div className="flex justify-center gap-10 text-lg">
          <a
            href="https://www.amazon.in/s?k=stm32f103"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:underline"
          >
            Amazon
          </a>
          <a
            href="https://robu.in/?s=stm32f103&post_type=product"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:underline"
          >
            Robu.in
          </a>
        </div>
      </SectionCard>
    </div>
  </>
)}

        {/* ================= FALLBACK ================= */}
        {slug !== "esp32" && slug !== "arduino" && (
          <p className="text-center text-gray-400">
            Microcontroller not found
          </p>
        )}
      </div>
    </section>
  );
}

export default MicrocontrollerDetail;

