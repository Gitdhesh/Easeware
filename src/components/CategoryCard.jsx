import { useNavigate } from 'react-router-dom'

function CategoryCard({ title, description, route }) {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(route)}
      className="group cursor-pointer relative rounded-3xl p-10
                 bg-gradient-to-br from-zinc-900 to-zinc-950
                 border border-green-400/20
                 hover:border-green-400
                 hover:shadow-[0_0_60px_rgba(34,197,94,0.35)]
                 hover:-translate-y-2
                 transition-all duration-300 overflow-hidden"
    >

      {/* TOP GLOW STRIP */}
      <div className="absolute top-0 left-0 w-full h-1
                      bg-gradient-to-r from-transparent via-green-400 to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <h2 className="text-white text-3xl font-semibold mb-4">
        {title}
      </h2>

      <p className="text-gray-400 mb-6">
        {description}
      </p>

      <span className="text-green-400 font-medium">
        Explore →
      </span>
    </div>
  )
}

export default CategoryCard
