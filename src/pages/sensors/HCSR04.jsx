import hcSr04Pins from "../../data/sensors/hcSr04Pins";
import SensorPinoutHCSR04 from "../../components/SensorPinoutHCSR04";

function HCSR04() {
  return (
    <section className="relative min-h-screen bg-zinc-950 px-6 py-20 overflow-hidden">

      {/* LEFT GREEN GLOW (same as DHT11) */}
      <div
        className="absolute -left-48 top-32
                   w-[600px] h-[600px]
                   bg-green-500/25
                   blur-[160px]
                   rounded-full"
      />

      <div className="relative max-w-5xl mx-auto z-10">

        {/* TITLE */}
        <h1 className="text-white text-4xl font-bold mb-14 text-center">
          HC-SR04 DETAILS
        </h1>

        {/* PINOUT FIRST */}
        <div className="mb-24 flex justify-center">
          <SensorPinoutHCSR04 pins={hcSr04Pins} />
        </div>

        {/* ABOUT */}
        <div className="mb-16 rounded-2xl border border-green-500/20 bg-zinc-900 p-8">
          <h2 className="text-white text-2xl font-semibold mb-4">
            About HC-SR04
          </h2>
          <p className="text-gray-400 leading-relaxed">
            The HC-SR04 is an ultrasonic distance sensor that measures the distance
            of an object by transmitting ultrasonic sound waves and calculating
            the time taken for the echo to return. It is commonly used in obstacle
            detection, robotics, and distance measurement applications.
          </p>
        </div>

        {/* WORKING */}
        <div className="mb-16 rounded-2xl border border-green-500/20 bg-zinc-900 p-8">
          <h2 className="text-white text-2xl font-semibold mb-4">
            Working of HC-SR04
          </h2>

          <p className="text-gray-400 leading-relaxed mb-4">
            The HC-SR04 sensor consists of two ultrasonic transducers mounted on
            the same board. One acts as a transmitter, and the other acts as a
            receiver. These transducers operate at an ultrasonic frequency of
            40 kHz.
          </p>

          <p className="text-gray-400 leading-relaxed mb-4">
            The <span className="text-green-400 font-medium">TRIG</span> pin is
            used to initiate a distance measurement. When the microcontroller
            sends a short HIGH pulse to this pin, the sensor emits a burst of
            ultrasonic sound waves.
          </p>

          <p className="text-gray-400 leading-relaxed mb-4">
            These sound waves travel through the air, reflect off an object, and
            return to the sensor. The <span className="text-green-400 font-medium">ECHO</span> pin
            then goes HIGH for a duration equal to the time taken by the sound
            waves to travel to the object and back.
          </p>

          <p className="text-gray-400 leading-relaxed">
            By measuring the time duration of the HIGH signal on the ECHO pin and
            using the speed of sound, the microcontroller calculates the distance
            of the object. The <span className="text-green-400 font-medium">VCC</span> and
            <span className="text-green-400 font-medium"> GND</span> pins provide
            power and reference ground for the sensor.
          </p>
        </div>

        {/* SPECIFICATIONS */}
        <div className="mb-16 rounded-2xl border border-green-500/20 bg-zinc-900 p-8">
          <h2 className="text-white text-2xl font-semibold mb-4">
            Specifications
          </h2>
          <ul className="text-gray-300 space-y-2">
            <li>📏 Distance range: 2 cm – 400 cm</li>
            <li>🎯 Measurement accuracy: ±3 mm</li>
            <li>⚡ Operating voltage: 5 V</li>
            <li>📡 Ultrasonic frequency: 40 kHz</li>
          </ul>
        </div>
{/* PROJECTS */}
<div className="mb-16 rounded-2xl border border-green-500/20 bg-zinc-900 p-8">
  <h2 className="text-white text-2xl font-semibold mb-6">
    Projects Using HC-SR04
  </h2>

  <div className="grid sm:grid-cols-2 gap-6">
    <div className="rounded-xl border border-green-500/20 bg-zinc-950 p-5">
      <h3 className="text-white font-semibold mb-2">
        Obstacle Avoiding Robot
      </h3>
      <p className="text-gray-400 text-sm">
        Uses ultrasonic distance measurement to detect obstacles
        and automatically change direction to avoid collisions.
      </p>
    </div>

    <div className="rounded-xl border border-green-500/20 bg-zinc-950 p-5">
      <h3 className="text-white font-semibold mb-2">
        Smart Parking System
      </h3>
      <p className="text-gray-400 text-sm">
        Measures distance between vehicles and parking slots
        to indicate available spaces in real time.
      </p>
    </div>

    <div className="rounded-xl border border-green-500/20 bg-zinc-950 p-5">
      <h3 className="text-white font-semibold mb-2">
        Water Level Indicator
      </h3>
      <p className="text-gray-400 text-sm">
        Detects water level in tanks using ultrasonic reflection
        and displays the level percentage on an LCD.
      </p>
    </div>

    <div className="rounded-xl border border-green-500/20 bg-zinc-950 p-5">
      <h3 className="text-white font-semibold mb-2">
        Distance Measurement Tool
      </h3>
      <p className="text-gray-400 text-sm">
        Measures distance between sensor and object and displays
        real-time values using Arduino or ESP32.
      </p>
    </div>
  </div>
</div>

        {/* BUY */}
        <div className="rounded-2xl border border-green-500/20 bg-zinc-900 p-8">
          <h2 className="text-white text-2xl font-semibold mb-4">
            Buy HC-SR04
          </h2>
          <div className="flex gap-6 text-green-400">
            <a
              href="https://www.amazon.in/s?k=hc-sr04"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Amazon
            </a>
            <a
              href="https://robu.in/?s=hc-sr04&post_type=product"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Robu.in
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default HCSR04;

