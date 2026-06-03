import CategoryCard from '../components/CategoryCard'

function Categories() {
  return (
    <section className="relative min-h-screen bg-zinc-950 px-6 py-20 overflow-hidden">
{/* AMBIENT ENERGY FIELD */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">
  <div className="absolute -top-32 -left-32 w-[500px] h-[500px]
                  bg-green-500/20 blur-[140px]
                  animate-float-slow rounded-full" />

  <div className="absolute top-1/3 -right-40 w-[600px] h-[600px]
                  bg-green-400/15 blur-[160px]
                  animate-float-slower rounded-full" />

  <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px]
                  bg-green-300/10 blur-[120px]
                  animate-float-slowest rounded-full" />
</div>

      {/* BACKGROUND GLOWS */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px]
                      bg-green-500/20 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px]
                      bg-green-400/10 blur-[100px] rounded-full" />
{/* MOVING HARDWARE BACKGROUND */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">
  ...
</div>



      {/* CONTENT */}
      <div className="relative">
        <h1 className="text-white text-4xl md:text-5xl font-bold text-center mb-4">
          Choose a Category
        </h1>

        <p className="text-gray-300 text-center max-w-xl mx-auto mb-16">
          Dive into microcontrollers and sensors with interactive diagrams,
          clean layouts, and real project references.
        </p>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <CategoryCard
            title="Microcontrollers"
            description="ESP32, Arduino, STM32 and more"
            route="/microcontrollers"
          />

          <CategoryCard
            title="Sensors"
            description="Temperature, motion, distance sensors"
            route="/sensors"
          />
        </div>
      </div>

    </section>
  )
}

export default Categories
