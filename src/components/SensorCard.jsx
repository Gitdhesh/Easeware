import { Link } from "react-router-dom";

function SensorCard({ name, description, image, slug }) {
  const finalSlug =
    slug ?? name.toLowerCase().replace(/[^a-z0-9]/g, "");

  return (
    <Link to={`/sensors/${finalSlug}`}>
      <div
        className="group relative rounded-3xl p-8
                   bg-gradient-to-br from-zinc-900 to-zinc-950
                   border border-green-400/20
                   hover:border-green-400
                   hover:shadow-[0_0_50px_rgba(34,197,94,0.3)]
                   hover:-translate-y-2
                   transition-all duration-300 overflow-hidden"
      >
        <div
          className="relative w-full h-40 rounded-xl mb-6
                     border border-green-400/20 overflow-hidden"
        >
          <img
            src={image}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover
                       transition-transform duration-300
                       group-hover:scale-105"
          />
        </div>

        <h2 className="text-white text-2xl font-semibold mb-3">
          {name}
        </h2>

        <p className="text-gray-400 text-sm mb-4">
          {description}
        </p>

        <span className="text-green-400 font-medium text-sm">
          View Details →
        </span>
      </div>
    </Link>
  );
}

export default SensorCard;
