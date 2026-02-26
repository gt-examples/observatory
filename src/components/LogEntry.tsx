"use client";

import { useState } from "react";
import { T, Var, DateTime } from "gt-next";
import TypeBadge from "./TypeBadge";
import { QualityRating, ConditionsLabel } from "@/lib/astronomy";
import { ObservationLog } from "@/lib/types";

export default function LogEntry({ log }: { log: ObservationLog }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="bg-[var(--dark-blue)] border border-[var(--indigo)] rounded-lg p-4 cursor-pointer hover:border-[var(--electric-blue)] transition-colors"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-sm font-mono text-[var(--text-muted)]">
            <DateTime>{new Date(log.date)}</DateTime>
          </span>
          <span className="font-semibold"><Var>{log.objectName}</Var></span>
          <TypeBadge type={log.objectType} />
        </div>
        <span className="text-xs text-[var(--text-muted)]">
          <QualityRating score={log.quality} />
        </span>
      </div>
      {expanded && (
        <T>
          <div className="mt-3 pt-3 border-t border-[var(--indigo)] space-y-2 text-sm text-[var(--text-muted)]">
            <p>Conditions: <ConditionsLabel conditions={log.conditions} /></p>
            <p>Equipment: <Var>{log.equipment}</Var></p>
            <p><Var>{log.notes}</Var></p>
          </div>
        </T>
      )}
    </div>
  );
}
