"use client";

import { useState } from "react";

interface StarPoint {
  cx: number;
  cy: number;
  r: number;
  name: string;
  constellation: string;
  magnitude: number;
}

const stars: StarPoint[] = [
  { cx: 150, cy: 80, r: 4, name: "Sirius", constellation: "Canis Major", magnitude: -1.46 },
  { cx: 220, cy: 120, r: 3.5, name: "Betelgeuse", constellation: "Orion", magnitude: 0.42 },
  { cx: 280, cy: 90, r: 3, name: "Rigel", constellation: "Orion", magnitude: 0.13 },
  { cx: 400, cy: 60, r: 3.5, name: "Vega", constellation: "Lyra", magnitude: 0.03 },
  { cx: 100, cy: 200, r: 2.5, name: "Aldebaran", constellation: "Taurus", magnitude: 0.86 },
  { cx: 350, cy: 180, r: 2, name: "Polaris", constellation: "Ursa Minor", magnitude: 1.98 },
  { cx: 480, cy: 150, r: 3, name: "Antares", constellation: "Scorpius", magnitude: 1.06 },
  { cx: 60, cy: 140, r: 2, name: "Pleiades", constellation: "Taurus", magnitude: 1.6 },
  { cx: 320, cy: 40, r: 1.5, name: "Ring Nebula", constellation: "Lyra", magnitude: 8.8 },
  { cx: 180, cy: 220, r: 2, name: "Orion Nebula", constellation: "Orion", magnitude: 4.0 },
  { cx: 440, cy: 200, r: 1.5, name: "Hercules Cluster", constellation: "Hercules", magnitude: 5.8 },
  { cx: 520, cy: 80, r: 2, name: "Andromeda Galaxy", constellation: "Andromeda", magnitude: 3.4 },
];

const constellationLines: [number, number][] = [
  [1, 2], // Betelgeuse - Rigel (Orion)
  [1, 9], // Betelgeuse - Orion Nebula
  [3, 8], // Vega - Ring Nebula (Lyra)
  [4, 7], // Aldebaran - Pleiades (Taurus)
];

export default function StarChart() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <svg viewBox="0 0 580 260" className="w-full h-auto">
        <rect width="580" height="260" fill="transparent" />
        {constellationLines.map(([a, b], i) => (
          <line
            key={i}
            x1={stars[a].cx}
            y1={stars[a].cy}
            x2={stars[b].cx}
            y2={stars[b].cy}
            stroke="#1e2a5e"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        ))}
        {stars.map((star, i) => (
          <g key={i}>
            <circle
              cx={star.cx}
              cy={star.cy}
              r={star.r * 2.5}
              fill={hovered === i ? "rgba(74,125,255,0.3)" : "transparent"}
              className="cursor-pointer transition-all"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            />
            <circle
              cx={star.cx}
              cy={star.cy}
              r={star.r}
              fill={star.magnitude < 1 ? "#ffd666" : star.magnitude < 3 ? "#f0f0f5" : "#8892b0"}
              className="pointer-events-none"
            />
          </g>
        ))}
        {hovered !== null && (
          <g>
            <rect
              x={Math.min(stars[hovered].cx + 12, 420)}
              y={stars[hovered].cy - 36}
              width="155"
              height="50"
              rx="4"
              fill="#131a3d"
              stroke="#1e2a5e"
              strokeWidth="1"
            />
            <text
              x={Math.min(stars[hovered].cx + 20, 428)}
              y={stars[hovered].cy - 18}
              fill="#f0f0f5"
              fontSize="12"
              fontFamily="monospace"
            >
              {stars[hovered].name}
            </text>
            <text
              x={Math.min(stars[hovered].cx + 20, 428)}
              y={stars[hovered].cy - 2}
              fill="#8892b0"
              fontSize="10"
              fontFamily="monospace"
            >
              {stars[hovered].constellation}
            </text>
            <text
              x={Math.min(stars[hovered].cx + 20, 428)}
              y={stars[hovered].cy + 12}
              fill="#8892b0"
              fontSize="10"
              fontFamily="monospace"
            >
              mag {stars[hovered].magnitude}
            </text>
          </g>
        )}
      </svg>
    </div>
  );
}
