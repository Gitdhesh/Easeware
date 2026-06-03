import dht11Pins from "../../data/sensors/dht11Pins";

import SensorPinoutSVG from "../../components/SensorPinoutSVG";

function DHT11() {
  return (
    <section className="relative min-h-screen bg-zinc-950 px-6 py-20 overflow-hidden">

      {/* GREEN GLOW BACKGROUND */}
      {/* LEFT GREEN GLOW */}
<div className="absolute left-0 top-0 w-[500px] h-[500px]
                bg-green-500/20 blur-[120px] rounded-full" />

      <div className="absolute -top-40 -left-40 w-[500px] h-[500px]
                      bg-green-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px]
                      bg-green-400/10 blur-[100px] rounded-full" />

      <div className="relative max-w-5xl mx-auto">

        {/* TITLE */}
        <h1 className="text-white text-4xl font-bold mb-14 text-center">
          DHT11 DETAILS
        </h1>

        {/* PINOUT FIRST (LIKE MCU PAGE) */}
        <div className="mb-20 flex justify-center">
         <SensorPinoutSVG title="DHT11" pins={dht11Pins} />

        </div>

        {/* ABOUT */}
        <div className="mb-16 rounded-2xl border border-green-500/20 bg-zinc-900 p-8">
          <h2 className="text-white text-2xl font-semibold mb-4">
            About DHT11
          </h2>
          <p className="text-gray-400 leading-relaxed">
            DHT11 is a basic digital temperature and humidity sensor widely used
            in beginner-level embedded and IoT projects.
          </p>
        </div>
{/* WORKING */}
<div className="mb-16 rounded-2xl border border-green-500/20 bg-zinc-900 p-8">
  <h2 className="text-white text-2xl font-semibold mb-4">
    Working of DHT11
  </h2>

  <p className="text-gray-400 leading-relaxed mb-4">
    The DHT11 sensor measures temperature and humidity using two internal sensing
    elements and communicates the readings digitally through a simple four-pin
    interface. Each pin on the sensor has a specific role in enabling this
    process.
  </p>

  <p className="text-gray-400 leading-relaxed mb-4">
    The <span className="text-green-400 font-medium">VCC (Power)</span> pin
    supplies operating voltage to the sensor, typically 3.3V or 5V. Once powered,
    the internal circuitry becomes active and begins monitoring the surrounding
    environment. The <span className="text-green-400 font-medium">GND (Ground)</span> pin
    completes the circuit and provides a reference for all measurements.
  </p>

  <p className="text-gray-400 leading-relaxed mb-4">
    The <span className="text-green-400 font-medium">DATA (Signal)</span> pin is
    responsible for communication with the microcontroller. After receiving a
    start signal, the DHT11 transmits a digitally encoded data stream containing
    humidity values, temperature values, and a checksum for error detection.
  </p>

  <p className="text-gray-400 leading-relaxed">
    The <span className="text-green-400 font-medium">NC (No Connection)</span> pin
    is internally unused and does not participate in sensing or communication.
    It should be left unconnected during normal operation.
  </p>
</div>

        {/* SPECIFICATIONS */}
        <div className="mb-16 rounded-2xl border border-green-500/20 bg-zinc-900 p-8">
          <h2 className="text-white text-2xl font-semibold mb-4">
            Specifications
          </h2>
          <ul className="text-gray-300 space-y-2">
            <li>🌡 Temperature range: 0–50°C</li>
            <li>💧 Humidity range: 20–90%</li>
            <li>⚡ Operating voltage: 3.3V – 5V</li>
            <li>📡 Digital single-wire output</li>
          </ul>
        </div>
{/* PROJECTS */}
<div className="mb-16 rounded-2xl border border-green-500/20 bg-zinc-900 p-8">
  <h2 className="text-white text-2xl font-semibold mb-6">
    Projects Using DHT11
  </h2>

  <div className="grid sm:grid-cols-2 gap-6">
    <div className="rounded-xl border border-green-500/20 bg-zinc-950 p-5">
      <h3 className="text-white font-semibold mb-2">
        Weather Monitoring System
      </h3>
      <p className="text-gray-400 text-sm">
        Displays temperature and humidity using DHT11 with Arduino or ESP32.
      </p>
    </div>

    <div className="rounded-xl border border-green-500/20 bg-zinc-950 p-5">
      <h3 className="text-white font-semibold mb-2">
        Smart Home Environment Logger
      </h3>
      <p className="text-gray-400 text-sm">
        Logs room conditions and sends data to cloud dashboards.
      </p>
    </div>
  </div>
</div>

        {/* BUY */}
        <div className="rounded-2xl border border-green-500/20 bg-zinc-900 p-8">
          <h2 className="text-white text-2xl font-semibold mb-4">
            Buy DHT11
          </h2>
          <div className="flex gap-6 text-green-400">
            <a
              href="https://www.amazon.in/s?k=dht11"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Amazon
            </a>
            <a
              href="https://robu.in/?s=dht11&post_type=product"
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

export default DHT11;
