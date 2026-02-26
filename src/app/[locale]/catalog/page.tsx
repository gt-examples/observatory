import { T } from "gt-next";
import { getGT } from "gt-next/server";
import CatalogClient from "@/components/CatalogClient";

export async function generateMetadata() {
  const gt = await getGT();
  return {
    title: gt("Object Catalog — Stellaris Observatory"),
    description: gt("Browse and filter celestial objects by type, constellation, magnitude, and spectral class."),
  };
}

export default function CatalogPage() {
  return (
    <div className="px-6 py-10 max-w-6xl mx-auto space-y-6">
      <T>
        <h1 className="text-3xl font-bold">Object Catalog</h1>
        <p className="text-[var(--text-muted)] max-w-2xl">
          A comprehensive catalog of celestial objects observable from the Stellaris Observatory.
          Filter by object type, constellation, or magnitude range. Each entry includes
          spectral class data, distance in light-years, and coordinates in right ascension
          and declination.
        </p>
      </T>
      <CatalogClient />
    </div>
  );
}
