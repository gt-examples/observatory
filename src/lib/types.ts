export type ObjectType = "star" | "planet" | "galaxy" | "nebula" | "cluster" | "comet";

export type Visibility = "excellent" | "good" | "fair" | "poor";

export type Priority = "critical" | "high" | "medium" | "low";

export interface CelestialObject {
  id: string;
  name: string;
  type: ObjectType;
  constellation: string;
  magnitude: number;
  distance: number; // light-years
  spectralClass?: string;
  ra: string; // right ascension
  dec: string; // declination
  description: string;
}

export interface ObservationLog {
  id: string;
  date: string;
  objectId: string;
  objectName: string;
  objectType: ObjectType;
  conditions: Visibility;
  equipment: string;
  notes: string;
  quality: number; // 1-10
}

export interface PlannerSlot {
  id: string;
  day: string;
  time: string;
  objectName: string;
  objectType: ObjectType;
  altitude: number;
  azimuth: number;
  conditions: Visibility;
  priority: Priority;
}
