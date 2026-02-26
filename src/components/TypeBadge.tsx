import { ObjectTypeBadge } from "@/lib/astronomy";
import { ObjectType } from "@/lib/types";

const colorMap: Record<ObjectType, string> = {
  star: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  planet: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  galaxy: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  nebula: "bg-pink-500/20 text-pink-300 border-pink-500/30",
  cluster: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  comet: "bg-green-500/20 text-green-300 border-green-500/30",
};

export default function TypeBadge({ type }: { type: ObjectType }) {
  return (
    <span className={`inline-block px-2 py-0.5 text-xs font-mono border rounded ${colorMap[type]}`}>
      <ObjectTypeBadge type={type} />
    </span>
  );
}
