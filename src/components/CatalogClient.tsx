"use client";

import { useState } from "react";
import { T, Var, Num, Plural } from "gt-next";
import TypeBadge from "./TypeBadge";
import FilterSidebar from "./FilterSidebar";
import { SpectralClassLabel, MagnitudeCategory } from "@/lib/astronomy";
import { celestialObjects } from "@/lib/data";
import { ObjectType } from "@/lib/types";

export default function CatalogClient() {
  const [selectedTypes, setSelectedTypes] = useState<ObjectType[]>([]);
  const [magnitudeRange, setMagnitudeRange] = useState<[number, number]>([-3, 10]);

  const filtered = celestialObjects.filter((obj) => {
    if (selectedTypes.length > 0 && !selectedTypes.includes(obj.type)) return false;
    if (obj.magnitude < magnitudeRange[0] || obj.magnitude > magnitudeRange[1]) return false;
    return true;
  });

  const toggleType = (type: ObjectType) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  return (
    <div className="flex gap-8">
      <FilterSidebar
        selectedTypes={selectedTypes}
        onToggleType={toggleType}
        magnitudeRange={magnitudeRange}
        onMagnitudeChange={setMagnitudeRange}
      />
      <div className="flex-1">
        <T>
          <p className="text-sm text-[var(--text-muted)] mb-4">
            <Plural
              n={filtered.length}
              singular={<><Num>{filtered.length}</Num> object found</>}
              plural={<><Num>{filtered.length}</Num> objects found</>}
            />
          </p>
        </T>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <T>
                <tr className="border-b border-[var(--indigo)] text-left text-[var(--text-muted)]">
                  <th className="pb-2 pr-4 font-medium">Name</th>
                  <th className="pb-2 pr-4 font-medium">Type</th>
                  <th className="pb-2 pr-4 font-medium">Constellation</th>
                  <th className="pb-2 pr-4 font-medium">Magnitude</th>
                  <th className="pb-2 pr-4 font-medium">Distance</th>
                  <th className="pb-2 pr-4 font-medium">Spectral Class</th>
                  <th className="pb-2 font-medium">Right Ascension / Declination</th>
                </tr>
              </T>
            </thead>
            <tbody>
              {filtered.map((obj) => (
                <tr key={obj.id} className="border-b border-[var(--indigo)]/50 hover:bg-[var(--dark-blue)]">
                  <td className="py-3 pr-4 font-medium"><Var>{obj.name}</Var></td>
                  <td className="py-3 pr-4"><TypeBadge type={obj.type} /></td>
                  <td className="py-3 pr-4 text-[var(--text-muted)]"><Var>{obj.constellation}</Var></td>
                  <td className="py-3 pr-4">
                    <span className="font-mono"><Num>{obj.magnitude}</Num></span>
                    <span className="block text-xs text-[var(--text-muted)]">
                      <MagnitudeCategory magnitude={obj.magnitude} />
                    </span>
                  </td>
                  <td className="py-3 pr-4 font-mono text-[var(--text-muted)]">
                    <T>
                      <Var><Num>{obj.distance}</Num></Var> light-years
                    </T>
                  </td>
                  <td className="py-3 pr-4 text-[var(--text-muted)]">
                    {obj.spectralClass ? <SpectralClassLabel spectralClass={obj.spectralClass} /> : "—"}
                  </td>
                  <td className="py-3 font-mono text-xs text-[var(--text-muted)]">
                    <Var>{obj.ra}</Var> / <Var>{obj.dec}</Var>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
