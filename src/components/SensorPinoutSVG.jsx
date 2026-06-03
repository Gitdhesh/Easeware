import { useState } from "react";

function SensorPinoutSVG({ title, pins }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="flex justify-center my-32">
      <svg width="480" height="600" viewBox="0 0 480 600">

        {/* SENSOR BODY — MUCH BIGGER */}
   <rect
  x="70"
  y="30"
  rx="48"
  width="340"
  height="400"
  fill="#020617"
  stroke="#22c55e"
  strokeWidth="2.5"
/>


        {/* TITLE */}
        <text
          x="240"
          y="230"
          textAnchor="middle"
          fill="#22c55e"
          fontSize="26"
          fontWeight="600"
          letterSpacing="1.5"
        >
          {title}
        </text>

        {/* PINS */}
        {pins.map((p, i) => {
          const cx = 150 + i * 70; // MUCH wider spacing
          const cy = 460;
          const isActive = hovered === p.pin;

          const baseColor =
            p.type === "POWER"
              ? "#ef4444"
              : p.type === "SIGNAL"
              ? "#3b82f6"
              : p.type === "NC"
              ? "#22c55e"
              : "#6b7280";

          return (
            <g
              key={p.pin}
              onMouseEnter={() => setHovered(p.pin)}
              onMouseLeave={() => setHovered(null)}
              style={{ cursor: "pointer" }}
            >
              {/* CONNECTOR */}
              <line
                x1={cx}
                y1={430}
                x2={cx}
                y2={450}
                stroke={isActive ? "#22c55e" : "#166534"}
                strokeWidth={isActive ? 3 : 2}
              />

              {/* PIN DOT */}
              <circle
                cx={cx}
                cy={cy}
                r={isActive ? 14 : 11}
                fill={baseColor}
                opacity={isActive ? 1 : 0.8}
              />

              {/* PIN LABEL */}
              <text
                x={cx}
                y={505}
                textAnchor="middle"
                fontSize="15"
                fontWeight={isActive ? "600" : "400"}
                fill={isActive ? baseColor : "#6b7280"}
              >
                {p.type}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export default SensorPinoutSVG;
