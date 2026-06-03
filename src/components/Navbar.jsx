import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50
                    bg-zinc-950/80 backdrop-blur
                    border-b border-green-400/10">

      <div className="max-w-7xl mx-auto px-6 py-4
                      flex items-center justify-between">

        {/* LOGO */}
        <NavLink
          to="/"
          className="text-green-400 font-bold text-xl tracking-wider
                     hover:text-green-300 transition"
        >
          EASEWARE
        </NavLink>

        {/* NAV LINKS */}
        <div className="flex gap-8 text-sm font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-green-400'
                : 'text-gray-300 hover:text-green-400 transition'
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'text-green-400'
                : 'text-gray-300 hover:text-green-400 transition'
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? 'text-green-400'
                : 'text-gray-300 hover:text-green-400 transition'
            }
          >
            Contact
          </NavLink>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
