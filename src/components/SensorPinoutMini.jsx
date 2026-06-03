import { useState } from "react";

/* SAME IDEA AS ARDUINO: clear semantic colors */
const pinColors = {
  POWER: "bg-red-500",
  SIGNAL: "bg-blue-500",
  GND: "bg-zinc-700",
  NC: "bg-zinc-500",
};

function SensorPinoutMini({ title, pins }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="flex justify-center mt-20">
      <div className="relative">

        {/* SENSOR BODY */}
      <div
  className={`w-64 h-64 rounded-3xl
             bg-gradient-to-br from-zinc-900 to-zinc-950
             border-2 ${hovered ? "border-zinc-600" : "border-green-400"}
             flex items-center justify-center`}
>

          <span className="text-green-400 text-2xl font-semibold">
            {title}
          </span>
        </div>

        {/* PINS */}
        <div className="absolute left-1/2 -bottom-16 -translate-x-1/2 flex gap-10">
          {pins.map((p) => {
            const isActive = hovered === p.name;
            const isInactive = hovered && hovered !== p.name;

            return (
              <div
                key={p.name}
                className="relative flex flex-col items-center"
                onMouseEnter={() => setHovered(p.name)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* CONNECTOR LINE */}
                <div
                  className={`w-[3px] h-8 mb-2 transition-all
                    ${isActive ? "bg-green-400" : "bg-zinc-600"}
                    ${isInactive ? "opacity-30" : "opacity-100"}
                  `}
                />

                {/* PIN DOT */}
                <div
                  className={`w-4 h-4 rounded-full transition-all
                    ${pinColors[p.type] || "bg-gray-400"}
                    ${isActive ? "scale-125 shadow-[0_0_12px_rgba(34,197,94,0.9)]" : ""}
                    ${isInactive ? "opacity-30" : "opacity-100"}
                  `}
                />

                {/* PIN LABEL */}
                <span
                  className={`mt-2 text-xs tracking-wider transition-opacity
                    ${isInactive ? "text-gray-600" : "text-gray-300"}
                  `}
                >
                  {p.name}
                </span>

                {/* TOOLTIP (ARDUINO STYLE: ONLY FOR ACTIVE) */}
                {isActive && (
                  <div
                    className="absolute -top-10
                               bg-zinc-900 border border-green-400
                               text-white text-[10px]
                               px-2 py-1 rounded-md
                               shadow-lg whitespace-nowrap"
                  >
                    {p.type}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}

export default SensorPinoutMini;
