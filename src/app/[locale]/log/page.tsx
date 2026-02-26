import { T, Var, Num, Plural } from "gt-next";
import { getGT } from "gt-next/server";
import LogEntry from "@/components/LogEntry";
import { observationLogs } from "@/lib/data";

export async function generateMetadata() {
  const gt = await getGT();
  return {
    title: gt("Observation Log — Stellaris Observatory"),
    description: gt("Review past observations with detailed notes on conditions, equipment, and quality ratings."),
  };
}

export default function LogPage() {
  const totalObs = observationLogs.length;
  const bestQuality = Math.max(...observationLogs.map((l) => l.quality));
  const bestNight = observationLogs.find((l) => l.quality === bestQuality);
  const bestNightName = bestNight ? bestNight.objectName : "—";

  return (
    <div className="px-6 py-10 max-w-4xl mx-auto space-y-8">
      <T>
        <h1 className="text-3xl font-bold">Observation Log</h1>
        <p className="text-[var(--text-muted)] max-w-2xl">
          A chronological record of observation sessions from the Stellaris Observatory.
          Each entry documents the target object, atmospheric conditions, equipment used,
          and a quality rating. Click any entry to expand full notes.
        </p>
      </T>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-[var(--dark-blue)] border border-[var(--indigo)] rounded-lg p-4 text-center">
          <p className="text-2xl font-bold font-mono text-[var(--electric-blue)]">
            <Num>{totalObs}</Num>
          </p>
          <T>
            <p className="text-sm text-[var(--text-muted)]">
              <Plural
                n={totalObs}
                singular={<>total observation</>}
                plural={<>total observations</>}
              />
            </p>
          </T>
        </div>
        <T>
          <div className="bg-[var(--dark-blue)] border border-[var(--indigo)] rounded-lg p-4 text-center">
            <p className="text-2xl font-bold font-mono text-[var(--gold)]">
              <Num>{bestQuality}</Num>/10
            </p>
            <p className="text-sm text-[var(--text-muted)]">best quality rating</p>
          </div>
        </T>
        <div className="bg-[var(--dark-blue)] border border-[var(--indigo)] rounded-lg p-4 text-center">
          <p className="text-2xl font-bold font-mono text-[var(--electric-blue)]">
            <Var>{bestNightName}</Var>
          </p>
          <T>
            <p className="text-sm text-[var(--text-muted)]">top-rated observation</p>
          </T>
        </div>
      </div>

      <div className="space-y-3">
        {observationLogs.map((log) => (
          <LogEntry key={log.id} log={log} />
        ))}
      </div>
    </div>
  );
}
