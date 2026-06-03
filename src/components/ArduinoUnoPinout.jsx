import { useState, useRef, useEffect } from "react";
import arduinoUnoPins from "../data/arduinoUnoPins";

/* SAME FUNCTION COLOR SYSTEM */
const functionColors = {
  GPIO: "bg-gray-600",
  ANALOG: "bg-green-600",
  PWM: "bg-red-600",
  I2C: "bg-purple-600",
  SPI: "bg-orange-600",
  UART: "bg-blue-600",
  POWER: "bg-emerald-600",
  GND: "bg-zinc-700",
  RESET: "bg-yellow-600",
  INTERRUPT: "bg-pink-600",
  LED: "bg-lime-600",
};

function ArduinoUnoPinout() {
  const [hovered, setHovered] = useState(null);
  const svgRef = useRef(null);
  const [svgHeight, setSvgHeight] = useState(420);

  /* measure rendered SVG height */
  useEffect(() => {
    if (svgRef.current) {
      setSvgHeight(svgRef.current.getBoundingClientRect().height);
    }
  }, []);

  /* BOARD */
  const BOARD = {
    x: 50,
    y: 40,
    width: 200,
    height: 320,
    centerX: 150,
  };

  /* PIN RAILS */
  const RAILS = {
    leftX: 35,
    rightX: 265,
    leftStartY: 80,
    rightStartY: 80,
    leftGap: 22,
    rightGap: 20,
  };

  const leftPins = arduinoUnoPins.filter(p => p.side === "left");
  const rightPins = arduinoUnoPins.filter(p => p.side === "right");

  return (
    <div className="relative max-w-xl mx-auto">
      <svg
        ref={svgRef}
        viewBox="0 0 300 420"
        className="w-full"
      >
        {/* BOARD */}
        <rect
          x={BOARD.x}
          y={BOARD.y}
          width={BOARD.width}
          height={BOARD.height}
          rx="22"
          fill="#111827"
          stroke="#22c55e"
          strokeWidth="2"
        />

        {/* LABEL */}
        <text
          x={BOARD.centerX}
          y={BOARD.y + BOARD.height / 2}
          textAnchor="middle"
          fill="#22c55e"
          fontSize="16"
          fontWeight="bold"
        >
          ARDUINO UNO
        </text>

        {/* PINS */}
        {arduinoUnoPins.map((p, i) => {
          let cx, cy, tx, anchor;

          if (p.side === "left") {
            const index = leftPins.indexOf(p);
            cx = RAILS.leftX;
            cy = RAILS.leftStartY + index * RAILS.leftGap;
            tx = cx - 12;
            anchor = "end";
          }

          if (p.side === "right") {
            const index = rightPins.indexOf(p);
            cx = RAILS.rightX;
            cy = RAILS.rightStartY + index * RAILS.rightGap;
            tx = cx + 14;
            anchor = "start";
          }

          return (
            <g key={i}>
              <circle
                cx={cx}
                cy={cy}
                r="6"
                fill="#22c55e"
                onMouseEnter={() => setHovered({ ...p, cx, cy })}
                onMouseLeave={() => setHovered(null)}
              />
              <text
                x={tx}
                y={cy + 4}
                textAnchor={anchor}
                fontSize="10"
                fill="#6b7280"
              >
                {p.pin}
              </text>
            </g>
          );
        })}
      </svg>

      {/* TOOLTIP */}
      {hovered && (
        <div
          className="absolute bg-zinc-900 border border-green-500
                     text-white text-xs px-3 py-2 rounded-lg
                     shadow-lg pointer-events-none"
          style={{
            top: (hovered.cy / 420) * svgHeight - 14,
            left: hovered.side === "left" ? 110 : 420,
          }}
        >
          <div className="font-semibold mb-1">{hovered.pin}</div>

          <div className="flex flex-wrap gap-1">
            {(hovered.functions || []).map(f => (
              <span
                key={f}
                className={`px-2 py-[2px] rounded text-[10px] text-white ${
                  functionColors[f] || "bg-gray-600"
                }`}
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ArduinoUnoPinout;
