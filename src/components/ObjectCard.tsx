import { T, Num, Var } from "gt-next";
import TypeBadge from "./TypeBadge";
import { VisibilityLabel, ConstellationRegion } from "@/lib/astronomy";
import { CelestialObject, Visibility } from "@/lib/types";

export default function ObjectCard({
  object,
  visibility,
}: {
  object: CelestialObject;
  visibility?: Visibility;
}) {
  return (
    <div className="bg-[var(--dark-blue)] border border-[var(--indigo)] rounded-lg p-4 hover:border-[var(--electric-blue)] transition-colors">
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-semibold text-[var(--text)]">
          <Var>{object.name}</Var>
        </h3>
        <TypeBadge type={object.type} />
      </div>
      <T>
        <div className="space-y-1 text-sm text-[var(--text-muted)]">
          <p>
            Constellation: <Var>{object.constellation}</Var> — <ConstellationRegion name={object.constellation} />
          </p>
          <p>
            Magnitude: <Var><Num>{object.magnitude}</Num></Var>
          </p>
          <Var>{visibility && (
            <p><VisibilityLabel conditions={visibility} /></p>
          )}</Var>
        </div>
      </T>
    </div>
  );
}
