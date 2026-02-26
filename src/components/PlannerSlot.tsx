"use client";

import { useState } from "react";
import { T, Var, Num } from "gt-next";
import TypeBadge from "./TypeBadge";
import { PriorityLabel, EquipmentRecommendation, VisibilityLabel } from "@/lib/astronomy";
import { PlannerSlot as PlannerSlotType } from "@/lib/types";

export default function PlannerSlotCard({ slot }: { slot: PlannerSlotType }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="bg-[var(--dark-blue)] border border-[var(--indigo)] rounded-lg p-4 cursor-pointer hover:border-[var(--electric-blue)] transition-colors"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <span className="text-sm font-mono text-[var(--electric-blue)]">
            <Var>{slot.day}</Var> <Var>{slot.time}</Var>
          </span>
          <span className="font-semibold"><Var>{slot.objectName}</Var></span>
          <TypeBadge type={slot.objectType} />
        </div>
        <span className="text-xs text-[var(--text-muted)]">
          <PriorityLabel score={slot.priority} />
        </span>
      </div>
      {expanded && (
        <T>
          <div className="mt-3 pt-3 border-t border-[var(--indigo)] space-y-2 text-sm text-[var(--text-muted)]">
            <p>
              Altitude: <Var><Num>{slot.altitude}</Num></Var>&deg; &mdash; Azimuth: <Var><Num>{slot.azimuth}</Num></Var>&deg;
            </p>
            <p><VisibilityLabel conditions={slot.conditions} /></p>
            <p>
              Recommended equipment: <EquipmentRecommendation type={slot.objectType} />
            </p>
          </div>
        </T>
      )}
    </div>
  );
}
