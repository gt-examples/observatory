"use client";

import { useState } from "react";

export default function AccordionSection({
  title,
  children,
}: {
  title: React.ReactNode;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-[var(--indigo)] rounded-lg overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-4 py-3 bg-[var(--dark-blue)] hover:bg-[var(--indigo)] transition-colors text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold">{title}</span>
        <span className="text-[var(--text-muted)] text-sm">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <div className="px-4 py-3 bg-[var(--navy)] text-sm text-[var(--text-muted)] leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}
