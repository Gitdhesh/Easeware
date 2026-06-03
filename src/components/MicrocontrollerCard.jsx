import { Link } from 'react-router-dom'

function MicrocontrollerCard({ name, description, slug, image }) {
  return (
    <Link
      to={`/microcontrollers/${slug}`}
      className="group bg-zinc-900 rounded-2xl p-6 border border-zinc-800
                 hover:border-green-500 transition-all duration-300
                 hover:scale-[1.03]"
    >
      {/* IMAGE */}

<div className="relative mb-4 w-full h-32 rounded-xl overflow-hidden">
  <img
    src={image}
    alt={name}
    className="absolute inset-0 w-full h-full
               object-cover
               transition-transform duration-500
               group-hover:scale-110"
  />
</div>


      <h2 className="text-white text-2xl font-semibold mb-2
                     group-hover:text-green-400 transition">
        {name}
      </h2>

      <p className="text-gray-400 text-sm">
        {description}
      </p>
    </Link>
  )
}

export default MicrocontrollerCard

