import {
  Droplets,
  Sofa,
  Sparkles,
  Truck,
  Sun,
  Wind,
  Shield,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "@/lib/site";

const map: Record<Service["icon"], LucideIcon> = {
  droplets: Droplets,
  sofa: Sofa,
  sparkles: Sparkles,
  truck: Truck,
  sun: Sun,
  wind: Wind,
  shield: Shield,
  wrench: Wrench,
};

export default function ServiceIcon({
  name,
  className,
}: {
  name: Service["icon"];
  className?: string;
}) {
  const Cmp = map[name];
  return <Cmp className={className} strokeWidth={1.6} aria-hidden="true" />;
}
