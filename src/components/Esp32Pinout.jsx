import { useState, useRef, useEffect } from 'react'
import esp32Pins from '../data/esp32Pins'

/* FUNCTION COLOR MAP (ESP32-SPECIFIC EXTENDED) */
const functionColors = {
  GPIO: "bg-gray-600",
  ADC: "bg-green-600",
  UART: "bg-blue-600",
  I2C: "bg-purple-600",
  SPI: "bg-orange-600",
  PWM: "bg-red-600",
  TOUCH: "bg-pink-600",
  INPUT_ONLY: "bg-yellow-600",
  FLASH: "bg-red-800",
};

function Esp32Pinout() {
  const [hovered, setHovered] = useState(null)
  const svgRef = useRef(null)
  const [svgHeight, setSvgHeight] = useState(600)

  useEffect(() => {
    if (svgRef.current) {
      setSvgHeight(svgRef.current.getBoundingClientRect().height)
    }
  }, [])

  return (
    <div className="relative max-w-xl mx-auto">
      <svg ref={svgRef} viewBox="0 0 300 600" className="w-full">
        {/* CHIP BODY */}
        <rect
          x="70"
          y="20"
          width="160"
          height="480"
          rx="20"
          fill="#111827"
          stroke="#22c55e"
          strokeWidth="2"
        />

        {/* CHIP LABEL */}
        <text
          x="150"
          y="260"
          textAnchor="middle"
          fill="#22c55e"
          fontSize="16"
          fontWeight="bold"
        >
          ESP32
        </text>

        {/* PINS */}
        {esp32Pins.map((p, i) => {
          const x = p.side === 'left' ? 60 : 240

          return (
            <g key={i}>
              <circle
                cx={x}
                cy={p.y}
                r="6"
                fill="#22c55e"
                onMouseEnter={() => setHovered(p)}
                onMouseLeave={() => setHovered(null)}
              />

              <text
                x={p.side === 'left' ? 40 : 260}
                y={p.y + 4}
                textAnchor={p.side === 'left' ? 'end' : 'start'}
                fill="#6b7280"
                fontSize="10"
              >
                {p.pin}
              </text>
            </g>
          )
        })}
      </svg>

      {/* TOOLTIP */}
      {hovered && (
        <div
          className="absolute bg-zinc-900 border border-green-500
                     text-white text-xs px-3 py-2 rounded-lg
                     shadow-lg pointer-events-none"
          style={{
            top: (hovered.y / 600) * svgHeight - 12,
            left: hovered.side === 'left' ? 100 : 400,
          }}
        >
          <div className="font-semibold mb-1">{hovered.pin}</div>

          {/* FUNCTION PILLS */}
          <div className="flex flex-wrap gap-1">
            {hovered.functions?.map((f) => {
              const key =
                f.startsWith("ADC") ? "ADC" :
                f.startsWith("I2C") ? "I2C" :
                f.startsWith("SPI") || f.includes("SPI") ? "SPI" :
                f.startsWith("UART") ? "UART" :
                f.startsWith("PWM") ? "PWM" :
                f.startsWith("TOUCH") ? "TOUCH" :
                f === "INPUT_ONLY" ? "INPUT_ONLY" :
                f === "FLASH" ? "FLASH" :
                "GPIO";

              return (
                <span
                  key={f}
                  className={`px-2 py-[2px] rounded text-[10px] text-white ${functionColors[key]}`}
                >
                  {f}
                </span>
              );
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default Esp32Pinout
