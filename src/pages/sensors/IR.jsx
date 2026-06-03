import irPins from "../../data/sensors/irPins";
import SensorPinoutIR from "../../components/SensorPinoutIR";

function IR() {
  return (
    <section className="relative min-h-screen bg-zinc-950 px-6 py-20 overflow-hidden">

      {/* LEFT GREEN GLOW */}
      <div className="absolute -left-48 top-32 w-[600px] h-[600px]
                      bg-green-500/25 blur-[160px] rounded-full" />

      <div className="relative max-w-5xl mx-auto z-10">

        <h1 className="text-white text-4xl font-bold mb-14 text-center">
          IR SENSOR DETAILS
        </h1>

        <div className="mb-24 flex justify-center">
          <SensorPinoutIR pins={irPins} />
        </div>

        {/* ABOUT */}
        <div className="mb-16 rounded-2xl border border-green-500/20 bg-zinc-900 p-8">
          <h2 className="text-white text-2xl font-semibold mb-4">
            About IR Sensor
          </h2>
          <p className="text-gray-400 leading-relaxed">
            The IR sensor module detects obstacles by transmitting infrared light
            and measuring the reflected signal from nearby objects. It is widely
            used in line-following robots, obstacle detection systems, and basic
            automation projects.
          </p>
        </div>

        {/* WORKING */}
        <div className="mb-16 rounded-2xl border border-green-500/20 bg-zinc-900 p-8">
          <h2 className="text-white text-2xl font-semibold mb-4">
            Working of IR Sensor
          </h2>

          <p className="text-gray-400 leading-relaxed mb-4">
            The IR emitter continuously emits infrared light. When an object
            comes within range, this light reflects back and is detected by the
            IR receiver.
          </p>

          <p className="text-gray-400 leading-relaxed mb-4">
            The received signal is processed by an onboard comparator circuit.
            Based on the reflection strength, the comparator toggles the
            <span className="text-green-400 font-medium"> OUT</span> pin HIGH or LOW.
          </p>

          <p className="text-gray-400 leading-relaxed">
            The sensitivity and detection distance can be adjusted using the
            onboard trim potentiometer. The
            <span className="text-green-400 font-medium"> VCC</span> and
            <span className="text-green-400 font-medium"> GND</span> pins provide
            power and reference ground for the module.
          </p>
        </div>

        {/* SPECIFICATIONS */}
        <div className="mb-16 rounded-2xl border border-green-500/20 bg-zinc-900 p-8">
          <h2 className="text-white text-2xl font-semibold mb-4">
            Specifications
          </h2>
          <ul className="text-gray-300 space-y-2">
            <li>📏 Detection distance: 2 – 30 cm (adjustable)</li>
            <li>⚡ Operating voltage: 3.3 V – 5 V</li>
            <li>🔦 Infrared wavelength: ~940 nm</li>
            <li>📡 Digital output (HIGH / LOW)</li>
          </ul>
        </div>
{/* PROJECTS */}
<div className="mb-16 rounded-2xl border border-green-500/20 bg-zinc-900 p-8">
  <h2 className="text-white text-2xl font-semibold mb-6">
    Projects Using IR Sensor
  </h2>

  <div className="grid sm:grid-cols-2 gap-6">
    <div className="rounded-xl border border-green-500/20 bg-zinc-950 p-5">
      <h3 className="text-white font-semibold mb-2">
        Line Following Robot
      </h3>
      <p className="text-gray-400 text-sm">
        Uses IR sensors to detect black and white surfaces and guide
        a robot along a predefined path.
      </p>
    </div>

    <div className="rounded-xl border border-green-500/20 bg-zinc-950 p-5">
      <h3 className="text-white font-semibold mb-2">
        Obstacle Detection System
      </h3>
      <p className="text-gray-400 text-sm">
        Detects nearby objects and prevents collision in robotic
        or automated vehicle applications.
      </p>
    </div>

    <div className="rounded-xl border border-green-500/20 bg-zinc-950 p-5">
      <h3 className="text-white font-semibold mb-2">
        Edge Detection Robot
      </h3>
      <p className="text-gray-400 text-sm">
        Identifies table edges or drops using reflected IR signals
        to avoid falling from elevated surfaces.
      </p>
    </div>

    <div className="rounded-xl border border-green-500/20 bg-zinc-950 p-5">
      <h3 className="text-white font-semibold mb-2">
        Object Counter System
      </h3>
      <p className="text-gray-400 text-sm">
        Counts passing objects by detecting interruptions in the
        infrared reflection signal.
      </p>
    </div>
  </div>
</div>
{/* BUY */}
<div className="rounded-2xl border border-green-500/20 bg-zinc-900 p-8">
  <h2 className="text-white text-2xl font-semibold mb-4">
    Buy IR Sensor
  </h2>

  <div className="flex gap-6 text-green-400">
    <a
      href="https://www.amazon.in/s?k=ir+obstacle+sensor+module"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
    >
      Amazon
    </a>

    <a
      href="https://robu.in/?s=ir+sensor+module&post_type=product"
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

export default IR;
