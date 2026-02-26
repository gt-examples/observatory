import { Static } from "gt-next";
import { ObjectType, Visibility, Priority } from "./types";

export function ObjectTypeBadge({ type }: { type: ObjectType }) {
  switch (type) {
    case "star": return <Static>Star</Static>;
    case "planet": return <Static>Planet</Static>;
    case "galaxy": return <Static>Galaxy</Static>;
    case "nebula": return <Static>Nebula</Static>;
    case "cluster": return <Static>Star Cluster</Static>;
    case "comet": return <Static>Comet</Static>;
  }
}

export function VisibilityLabel({ conditions }: { conditions: Visibility }) {
  switch (conditions) {
    case "excellent": return <Static>Excellent visibility</Static>;
    case "good": return <Static>Good visibility</Static>;
    case "fair": return <Static>Fair visibility</Static>;
    case "poor": return <Static>Poor visibility — not recommended</Static>;
  }
}

export function SpectralClassLabel({ spectralClass }: { spectralClass: string }) {
  switch (spectralClass) {
    case "O": return <Static>Blue supergiant</Static>;
    case "B": return <Static>Blue-white giant</Static>;
    case "A": return <Static>White star</Static>;
    case "F": return <Static>Yellow-white star</Static>;
    case "G": return <Static>Yellow dwarf</Static>;
    case "K": return <Static>Orange dwarf</Static>;
    case "M": return <Static>Red dwarf</Static>;
    default: return <Static>Unknown spectral class</Static>;
  }
}

export function MagnitudeCategory({ magnitude }: { magnitude: number }) {
  if (magnitude < 1) return <Static>Extremely bright</Static>;
  if (magnitude < 3) return <Static>Bright — visible to naked eye</Static>;
  if (magnitude < 5) return <Static>Moderate — binoculars recommended</Static>;
  return <Static>Faint — telescope required</Static>;
}

export function PriorityLabel({ score }: { score: Priority }) {
  switch (score) {
    case "critical": return <Static>Critical — rare event</Static>;
    case "high": return <Static>High priority</Static>;
    case "medium": return <Static>Medium priority</Static>;
    case "low": return <Static>Low priority</Static>;
  }
}

export function EquipmentRecommendation({ type }: { type: ObjectType }) {
  switch (type) {
    case "star": return <Static>Refractor telescope with high magnification</Static>;
    case "planet": return <Static>Schmidt-Cassegrain telescope with tracking mount</Static>;
    case "galaxy": return <Static>Large aperture Dobsonian telescope</Static>;
    case "nebula": return <Static>Wide-field telescope with nebula filter</Static>;
    case "cluster": return <Static>Binoculars or wide-field refractor</Static>;
    case "comet": return <Static>Wide-field binoculars or small refractor</Static>;
  }
}

export function QualityRating({ score }: { score: number }) {
  if (score >= 9) return <Static>Outstanding observation</Static>;
  if (score >= 7) return <Static>Good observation</Static>;
  if (score >= 5) return <Static>Average observation</Static>;
  return <Static>Poor observation — conditions impacted quality</Static>;
}

export function DifficultyLevel({ type }: { type: ObjectType }) {
  switch (type) {
    case "planet": return <Static>Beginner — easy to locate</Static>;
    case "star": return <Static>Beginner — visible to naked eye</Static>;
    case "cluster": return <Static>Intermediate — requires dark skies</Static>;
    case "nebula": return <Static>Intermediate — requires filters</Static>;
    case "galaxy": return <Static>Advanced — requires large aperture</Static>;
    case "comet": return <Static>Advanced — requires timing and tracking</Static>;
  }
}

export function ConditionsLabel({ conditions }: { conditions: Visibility }) {
  switch (conditions) {
    case "excellent": return <Static>Clear skies, no light pollution</Static>;
    case "good": return <Static>Mostly clear, minimal light pollution</Static>;
    case "fair": return <Static>Partial cloud cover or moderate light pollution</Static>;
    case "poor": return <Static>Overcast or heavy light pollution</Static>;
  }
}

export function ConstellationRegion({ name }: { name: string }) {
  const northern = ["Ursa Major", "Ursa Minor", "Lyra", "Canes Venatici", "Hercules", "Perseus", "Andromeda"];
  const zodiac = ["Taurus", "Gemini", "Aquarius", "Scorpius", "Virgo"];
  if (northern.includes(name)) return <Static>Northern circumpolar region</Static>;
  if (zodiac.includes(name)) return <Static>Zodiacal band</Static>;
  return <Static>Equatorial region</Static>;
}
