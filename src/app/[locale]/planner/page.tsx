import { T } from "gt-next";
import { getGT } from "gt-next/server";
import PlannerSlotCard from "@/components/PlannerSlot";
import { plannerSlots } from "@/lib/data";

export async function generateMetadata() {
  const gt = await getGT();
  return {
    title: gt("Observation Planner — Stellaris Observatory"),
    description: gt("Plan your observation sessions with optimal timing, altitude, azimuth, and equipment recommendations."),
  };
}

export default function PlannerPage() {
  const days = [...new Set(plannerSlots.map((s) => s.day))];

  return (
    <div className="px-6 py-10 max-w-4xl mx-auto space-y-8">
      <T>
        <h1 className="text-3xl font-bold">Observation Planner</h1>
        <p className="text-[var(--text-muted)] max-w-2xl">
          Plan your weekly observation sessions. Each slot includes the target object,
          optimal altitude and azimuth, visibility conditions, and recommended equipment
          based on the object type. Click any slot to expand details.
        </p>
      </T>
      {days.map((day) => (
        <div key={day}>
          <h2 className="text-lg font-semibold text-[var(--gold)] mb-3">{day}</h2>
          <div className="space-y-3">
            {plannerSlots
              .filter((s) => s.day === day)
              .map((slot) => (
                <PlannerSlotCard key={slot.id} slot={slot} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
