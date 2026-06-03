import { useState } from "react";

function SensorPinoutHCSR04({ pins }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="flex justify-center my-32">
     <svg
  width="700"
  height="430"
  viewBox="0 0 520 320"
>


        {/* PCB BODY */}
        <rect
          x="40"
          y="30"
          width="440"
          height="180"
          rx="16"
          fill="#0f172a"
          stroke="#22c55e"
          strokeWidth="2"
        />

        {/* LEFT TRANSMITTER (T) */}
        <circle
          cx="170"
          cy="120"
          r="48"
          fill="#020617"
          stroke="#9ca3af"
          strokeWidth="3"
        />
        <circle
          cx="170"
          cy="120"
          r="36"
          fill="none"
          stroke="#4b5563"
          strokeWidth="2"
        />

        {/* RIGHT RECEIVER (R) */}
        <circle
          cx="350"
          cy="120"
          r="48"
          fill="#020617"
          stroke="#9ca3af"
          strokeWidth="3"
        />
        <circle
          cx="350"
          cy="120"
          r="36"
          fill="none"
          stroke="#4b5563"
          strokeWidth="2"
        />

        {/* LABEL */}
        <text
          x="260"
          y="60"
          textAnchor="middle"
          fill="#22c55e"
          fontSize="20"
          fontWeight="600"
          letterSpacing="1.5"
        >
          HC-SR04
        </text>

        {/* PINS */}
        {pins.map((p, i) => {
          const cx = 180 + i * 55;
          const isActive = hovered === p.pin;

          const pinColor =
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
              {/* PIN STEM */}
              <line
                x1={cx}
                y1={210}
                x2={cx}
                y2={255}
                stroke={isActive ? "#22c55e" : "#166534"}
                strokeWidth={isActive ? 3 : 2}
              />

              {/* PIN DOT */}
              <circle
                cx={cx}
                cy={265}
                r={isActive ? 8 : 6}
                fill={pinColor}
              />

              {/* PIN LABEL */}
              <text
                x={cx}
                y={295}
                textAnchor="middle"
                fontSize="12"
                fontWeight={isActive ? "600" : "400"}
                fill={isActive ? pinColor : "#6b7280"}
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

export default SensorPinoutHCSR04;
