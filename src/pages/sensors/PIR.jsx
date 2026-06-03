import pirPins from "../../data/sensors/pirPins";
import SensorPinoutPIR from "../../components/SensorPinoutPIR";

function PIR() {
  return (
    <section className="relative min-h-screen bg-zinc-950 px-6 py-20 overflow-hidden">

      {/* LEFT GREEN GLOW */}
      <div className="absolute -left-48 top-32 w-[600px] h-[600px]
                      bg-green-500/25 blur-[160px] rounded-full" />

      <div className="relative max-w-5xl mx-auto z-10">

        <h1 className="text-white text-4xl font-bold mb-14 text-center">
          PIR SENSOR DETAILS
        </h1>

        <SensorPinoutPIR pins={pirPins} />

        {/* ABOUT */}
        <div className="mb-16 rounded-2xl border border-green-500/20 bg-zinc-900 p-8">
          <h2 className="text-white text-2xl font-semibold mb-4">
            About PIR Sensor
          </h2>
          <p className="text-gray-400 leading-relaxed">
            A PIR (Passive Infrared) sensor detects motion by sensing changes
            in infrared radiation emitted by warm objects such as humans.
            It is commonly used in security systems, automatic lighting,
            and motion-activated devices.
          </p>
        </div>

        {/* WORKING */}
        <div className="mb-16 rounded-2xl border border-green-500/20 bg-zinc-900 p-8">
          <h2 className="text-white text-2xl font-semibold mb-4">
            Working of PIR Sensor
          </h2>

          <p className="text-gray-400 leading-relaxed mb-4">
            The PIR sensor contains a pyroelectric element placed behind
            a Fresnel lens. The lens focuses infrared radiation from the
            environment onto the sensing element.
          </p>

          <p className="text-gray-400 leading-relaxed mb-4">
            When a warm object moves across the sensor’s field of view,
            the detected infrared pattern changes. This change is amplified
            internally and reflected as a HIGH signal on the
            <span className="text-green-400 font-medium"> OUT</span> pin.
          </p>

          <p className="text-gray-400 leading-relaxed">
            The <span className="text-green-400 font-medium">VCC</span> and
            <span className="text-green-400 font-medium"> GND</span> pins
            supply power, while the digital OUT pin can be read directly
            by a microcontroller.
          </p>
        </div>
{/* PROJECTS */}
<div className="mb-16 rounded-2xl border border-green-500/20 bg-zinc-900 p-8">
  <h2 className="text-white text-2xl font-semibold mb-6">
    Projects Using PIR Sensor
  </h2>

  <div className="grid sm:grid-cols-2 gap-6">
    <div className="rounded-xl border border-green-500/20 bg-zinc-950 p-5">
      <h3 className="text-white font-semibold mb-2">
        Motion-Activated Security Alarm
      </h3>
      <p className="text-gray-400 text-sm">
        Detects human motion and triggers a buzzer or alert system when movement
        is sensed in restricted areas.
      </p>
    </div>

    <div className="rounded-xl border border-green-500/20 bg-zinc-950 p-5">
      <h3 className="text-white font-semibold mb-2">
        Automatic Lighting System
      </h3>
      <p className="text-gray-400 text-sm">
        Turns lights ON automatically when motion is detected and switches them
        OFF after a period of inactivity.
      </p>
    </div>
  </div>
</div>
{/* BUY */}
<div className="rounded-2xl border border-green-500/20 bg-zinc-900 p-8">
  <h2 className="text-white text-2xl font-semibold mb-4">
    Buy PIR Sensor
  </h2>

  <div className="flex gap-6 text-green-400">
    <a
      href="https://www.amazon.in/s?k=hc-sr501+pir+sensor"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
    >
      Amazon
    </a>

    <a
      href="https://robu.in/?s=hc-sr501&post_type=product"
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

export default PIR;
