import {
  Camera,
  Droplets,
  GraduationCap,
  Hammer,
  HomeIcon,
  MonitorSmartphone,
  PaintRoller,
  Scissors,
  Sparkles,
  Sprout,
  Truck,
  Zap,
} from "lucide-react";
import Link from "next/link";

const CATEGORIES = [
  { icon: HomeIcon, label: "Reformas e Reparos" },
  { icon: Zap, label: "Eletricista" },
  { icon: Droplets, label: "Encanador" },
  { icon: PaintRoller, label: "Pintura" },
  { icon: Sparkles, label: "Diarista e Limpeza" },
  { icon: MonitorSmartphone, label: "Assistência Técnica" },
  { icon: Camera, label: "Fotografia" },
  { icon: GraduationCap, label: "Aulas Particulares" },
  { icon: Scissors, label: "Beleza e Estética" },
  { icon: Hammer, label: "Marido de Aluguel" },
  { icon: Sprout, label: "Jardinagem" },
  { icon: Truck, label: "Mudanças" },
];

/** Popular service categories as pill links into the recent-orders feed. */
export function Categories() {
  return (
    <section className="mx-auto w-full max-w-container px-4 py-16 md:px-8">
      <h2 className="mb-8 text-headline-lg font-extrabold text-on-surface">
        Categorias populares
      </h2>
      <div className="flex flex-wrap gap-3">
        {CATEGORIES.map(({ icon: Icon, label }) => (
          <Link
            key={label}
            href="/recentes"
            className="group flex items-center gap-2 rounded-full border border-outline-variant/30 bg-surface-container-lowest px-6 py-3 transition-all hover:border-primary hover:text-primary"
          >
            <Icon className="h-5 w-5" />
            <span className="text-label-lg font-semibold">{label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
