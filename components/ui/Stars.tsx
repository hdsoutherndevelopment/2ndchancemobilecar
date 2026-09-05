import { Star } from "lucide-react";

export default function Stars({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-0.5 ${className}`} aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={size} className="fill-gold text-gold" aria-hidden="true" />
      ))}
    </span>
  );
}
