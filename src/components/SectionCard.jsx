function SectionCard({ title, children }) {
  return (
    <div
      className="relative bg-zinc-900/70 backdrop-blur
                 border border-green-500/30
                 rounded-2xl p-8 mb-16
                 shadow-[0_0_40px_rgba(34,197,94,0.08)]"
    >
      {/* LEFT ACCENT BAR */}
      <div className="absolute left-0 top-6 bottom-6 w-1 bg-green-500 rounded-full" />

      <h2 className="text-2xl font-bold text-white mb-6 pl-4">
        {title}
      </h2>

      <div className="pl-4 text-gray-300">
        {children}
      </div>
    </div>
  )
}

export default SectionCard
