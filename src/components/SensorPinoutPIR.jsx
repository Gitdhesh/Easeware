import { useState } from "react";

function SensorPinoutPIR({ pins }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="flex justify-center my-36">
      <svg
        width="420"
        height="520"
        viewBox="0 0 260 360"
      >

        {/* SIDE PCB WINGS */}
        <rect x="25" y="70" width="30" height="160" rx="6" fill="#166534" />
        <rect x="205" y="70" width="30" height="160" rx="6" fill="#166534" />

        {/* MAIN PCB */}
        <rect
          x="55"
          y="40"
          width="150"
          height="220"
          rx="16"
          fill="#0f172a"
          stroke="#22c55e"
          strokeWidth="2"
        />

        {/* LABEL */}
        <text
          x="130"
          y="65"
          textAnchor="middle"
          fill="#22c55e"
          fontSize="16"
          fontWeight="600"
          letterSpacing="1"
        >
          PIR SENSOR
        </text>

        {/* PIR DOME */}
        <circle
          cx="130"
          cy="140"
          r="55"
          fill="#f8fafc"
          stroke="#d1d5db"
          strokeWidth="3"
        />
        <ellipse
          cx="130"
          cy="130"
          rx="40"
          ry="30"
          fill="rgba(255,255,255,0.35)"
        />

        {/* PINS */}
        {pins.map((p, i) => {
          const cx = 95 + i * 35;
          const isActive = hovered === p.pin;

          const color =
            p.type === "POWER"
              ? "#ef4444"
              : p.type === "SIGNAL"
              ? "#3b82f6"
              : "#6b7280";

          return (
            <g
              key={p.pin}
              onMouseEnter={() => setHovered(p.pin)}
              onMouseLeave={() => setHovered(null)}
              style={{ cursor: "pointer" }}
            >
              <line
                x1={cx}
                y1={260}
                x2={cx}
                y2={300}
                stroke={isActive ? "#22c55e" : "#166534"}
                strokeWidth={isActive ? 3 : 2}
              />

              <circle
                cx={cx}
                cy={320}
                r={isActive ? 9 : 7}
                fill={color}
              />

              <text
                x={cx}
                y={350}
                textAnchor="middle"
                fontSize="13"
                fontWeight={isActive ? "600" : "400"}
                fill={isActive ? color : "#9ca3af"}
              >
                {p.pin}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export default SensorPinoutPIR;
