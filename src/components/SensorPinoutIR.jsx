import { useState } from "react";

function SensorPinoutIR({ pins }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="flex justify-center my-36">

   <svg
  width="360"
  height="760"
  viewBox="0 0 260 600"
>



        {/* PCB BODY */}
        <rect
          x="30"
          y="20"
          width="200"
          height="420"
          rx="18"
          fill="#0f172a"
          stroke="#22c55e"
          strokeWidth="2"
        />

        {/* TITLE */}
        <text
          x="130"
          y="55"
          textAnchor="middle"
          fill="#22c55e"
          fontSize="18"
          fontWeight="600"
          letterSpacing="1"
        >
          IR SENSOR
        </text>

        {/* IR EMITTER */}
        <circle cx="90" cy="100" r="18" fill="#e5e7eb" />
        <text x="90" y="135" textAnchor="middle" fontSize="9" fill="#9ca3af">
          EMITTER
        </text>

        {/* IR RECEIVER */}
        <circle cx="170" cy="100" r="18" fill="#020617" stroke="#9ca3af" strokeWidth="2" />
        <text x="170" y="135" textAnchor="middle" fontSize="9" fill="#9ca3af">
          RECEIVER
        </text>

        {/* COMPARATOR IC */}
        <rect x="80" y="170" width="100" height="40" rx="6" fill="#020617" stroke="#334155" />
        <text x="130" y="196" textAnchor="middle" fontSize="9" fill="#9ca3af">
          COMPARATOR
        </text>

        {/* TRIM POT */}
        <rect x="95" y="230" width="70" height="70" rx="10" fill="#1e293b" stroke="#3b82f6" />
        <circle cx="130" cy="265" r="20" fill="#0f172a" stroke="#3b82f6" strokeWidth="2" />
        <line x1="130" y1="250" x2="130" y2="280" stroke="#3b82f6" strokeWidth="2" />
        <text x="130" y="315" textAnchor="middle" fontSize="9" fill="#9ca3af">
          ADJUST
        </text>

        {/* LEDS */}
        <circle cx="95" cy="340" r="6" fill="#22c55e" />
        <text x="95" y="355" textAnchor="middle" fontSize="8" fill="#9ca3af">
          PWR
        </text>

        <circle cx="165" cy="340" r="6" fill="#ef4444" />
        <text x="165" y="355" textAnchor="middle" fontSize="8" fill="#9ca3af">
          SIG
        </text>

        {/* PINS */}
        {pins.map((p, i) => {
          const cx = 80 + i * 50;
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
  y1={439}
  x2={cx}
  y2={480}
  stroke={isActive ? "#22c55e" : "#166534"}
  strokeWidth={isActive ? 3 : 2}
/>

<circle
  cx={cx}
  cy={480}
  r={isActive ? 9 : 7}
  fill={color}
/>

<text
  x={cx}
  y={530}
  textAnchor="middle"
  fontSize="13"
  fontWeight={isActive ? "600" : "400"}
  fill={isActive ? color : "#6b7280"}
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

export default SensorPinoutIR;
