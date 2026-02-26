import { T, Var, Num, Plural } from "gt-next";
import { getGT } from "gt-next/server";
import ObjectCard from "@/components/ObjectCard";
import StarChart from "@/components/StarChart";
import { celestialObjects, tonightHighlights, observationLogs } from "@/lib/data";
import { Visibility } from "@/lib/types";

export async function generateMetadata() {
  const gt = await getGT();
  return {
    title: gt("Stellaris Observatory — Tonight's Sky"),
    description: gt("Track celestial objects, plan observations, and log discoveries from your observatory."),
  };
}

const highlightVisibility: Record<string, Visibility> = {
  sirius: "excellent",
  jupiter: "excellent",
  "orion-nebula": "good",
  pleiades: "excellent",
  betelgeuse: "good",
  saturn: "fair",
};

export default function HomePage() {
  const highlights = tonightHighlights
    .map((id) => celestialObjects.find((o) => o.id === id)!)
    .filter(Boolean);

  const totalObjects = celestialObjects.length;
  const totalObservations = observationLogs.length;
  const totalHours = 47;

  return (
    <div className="px-6 py-10 max-w-6xl mx-auto space-y-12">
      <section className="text-center space-y-4">
        <T>
          <h1 className="text-4xl font-bold tracking-tight">Stellaris Observatory</h1>
          <p className="text-[var(--text-muted)] max-w-xl mx-auto">
            Your window to the night sky. Track celestial objects across constellations,
            plan observation sessions, and maintain a detailed log of your discoveries.
          </p>
        </T>
      </section>

      <section>
        <T>
          <h2 className="text-xl font-semibold mb-1">Star Chart</h2>
          <p className="text-sm text-[var(--text-muted)] mb-4">
            Interactive constellation map. Hover over stars to see object details including
            name, constellation, and apparent magnitude.
          </p>
        </T>
        <StarChart />
      </section>

      <section className="grid grid-cols-3 gap-4">
        <T>
          <div className="bg-[var(--dark-blue)] border border-[var(--indigo)] rounded-lg p-4 text-center">
            <p className="text-2xl font-bold font-mono text-[var(--electric-blue)]">
              <Num>{totalObjects}</Num>
            </p>
            <p className="text-sm text-[var(--text-muted)]">
              <Plural
                n={totalObjects}
                singular={<>object cataloged</>}
                plural={<>objects cataloged</>}
              />
            </p>
          </div>
          <div className="bg-[var(--dark-blue)] border border-[var(--indigo)] rounded-lg p-4 text-center">
            <p className="text-2xl font-bold font-mono text-[var(--electric-blue)]">
              <Num>{totalObservations}</Num>
            </p>
            <p className="text-sm text-[var(--text-muted)]">
              <Plural
                n={totalObservations}
                singular={<>observation this month</>}
                plural={<>observations this month</>}
              />
            </p>
          </div>
          <div className="bg-[var(--dark-blue)] border border-[var(--indigo)] rounded-lg p-4 text-center">
            <p className="text-2xl font-bold font-mono text-[var(--electric-blue)]">
              <Num>{totalHours}</Num>
            </p>
            <p className="text-sm text-[var(--text-muted)]">
              <Plural
                n={totalHours}
                singular={<>hour logged</>}
                plural={<>hours logged</>}
              />
            </p>
          </div>
        </T>
      </section>

      <section>
        <T>
          <h2 className="text-xl font-semibold mb-4">Tonight's Highlights</h2>
          <p className="text-sm text-[var(--text-muted)] mb-4">
            Featured celestial objects visible tonight, sorted by magnitude and visibility
            conditions at the observatory.
          </p>
        </T>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {highlights.map((obj) => (
            <ObjectCard
              key={obj.id}
              object={obj}
              visibility={highlightVisibility[obj.id]}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
