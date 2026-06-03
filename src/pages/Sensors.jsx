import SensorCard from "../components/SensorCard";

import dht11Img from "../assets/sensors/dht11.png";
import hcsr04Img from "../assets/sensors/hc-sr04.png";
import irImg from "../assets/sensors/ir-sensor.png";
import hx711Img from "../assets/sensors/hx711.png";
import pirImg from "../assets/sensors/pir-sensor.png";

function Sensors() {
  return (
    <section className="relative min-h-screen bg-zinc-950 px-6 py-20 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px]
                      bg-green-500/20 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px]
                      bg-green-400/10 blur-[100px] rounded-full" />

      {/* CONTENT */}
      <div className="relative max-w-6xl mx-auto">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 text-center">
          Sensors
        </h1>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Detect temperature, motion, distance, weight, and more using
          commonly used sensors in embedded and IoT systems.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">


      <SensorCard
  name="DHT11"
  slug="dht11"
  description="Temperature and humidity sensor"
  image={dht11Img}
/>

<SensorCard
  name="HC-SR04"
  slug="hcsr04"
  description="Ultrasonic distance measurement sensor"
  image={hcsr04Img}
/>

<SensorCard
  name="IR Sensor"
  slug="ir"
  description="Infrared sensor for obstacle detection"
  image={irImg}
/>

<SensorCard
  name="PIR Sensor"
  slug="pir"
  description="Motion detection using infrared radiation"
  image={pirImg}
/>

        </div>
      </div>

    </section>
  );
}

export default Sensors;
