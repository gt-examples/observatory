"use client";

import { ObjectType } from "@/lib/types";

const objectTypes: ObjectType[] = ["star", "planet", "galaxy", "nebula", "cluster", "comet"];

export default function FilterSidebar({
  selectedTypes,
  onToggleType,
  magnitudeRange,
  onMagnitudeChange,
}: {
  selectedTypes: ObjectType[];
  onToggleType: (type: ObjectType) => void;
  magnitudeRange: [number, number];
  onMagnitudeChange: (range: [number, number]) => void;
}) {
  return (
    <aside className="w-56 shrink-0 space-y-6">
      <div>
        <h3 className="text-sm font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-3">
          Object Type
        </h3>
        <div className="space-y-2">
          {objectTypes.map((type) => (
            <label key={type} className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={selectedTypes.includes(type)}
                onChange={() => onToggleType(type)}
                className="accent-[var(--electric-blue)]"
              />
              <span className="capitalize text-[var(--text-muted)]">{type}</span>
            </label>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-3">
          Magnitude Range
        </h3>
        <div className="space-y-2 text-sm text-[var(--text-muted)]">
          <div className="flex items-center gap-2">
            <span>Min:</span>
            <input
              type="number"
              value={magnitudeRange[0]}
              onChange={(e) => onMagnitudeChange([Number(e.target.value), magnitudeRange[1]])}
              className="w-20 bg-[var(--dark-blue)] border border-[var(--indigo)] rounded px-2 py-1 text-[var(--text)]"
              step="0.5"
            />
          </div>
          <div className="flex items-center gap-2">
            <span>Max:</span>
            <input
              type="number"
              value={magnitudeRange[1]}
              onChange={(e) => onMagnitudeChange([magnitudeRange[0], Number(e.target.value)])}
              className="w-20 bg-[var(--dark-blue)] border border-[var(--indigo)] rounded px-2 py-1 text-[var(--text)]"
              step="0.5"
            />
          </div>
        </div>
      </div>
    </aside>
  );
}
