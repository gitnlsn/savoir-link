import { Lock, MapPin } from "lucide-react";
import Link from "next/link";

import { Badge, Chip } from "~/components/ui/badge";
import { formatCurrency } from "~/lib/currency";

export interface PublicLead {
  publicId: string;
  title: string;
  description: string;
  budget: number;
  category: { name: string };
  location: { city: string; state: string };
  unlockCount: number;
}

/** Public lead card — shown on marketing/browse pages. Contact is always hidden. */
export function PublicLeadCard({ lead }: { lead: PublicLead }) {
  return (
    <Link
      href={`/pedido/${lead.publicId}`}
      className="group flex flex-col justify-between rounded-2xl border border-outline-variant bg-surface-container-lowest p-6 transition-all hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(11,28,48,0.06)]"
    >
      <div>
        <div className="mb-3 flex items-start justify-between gap-2">
          <Badge variant="neutral">Novo pedido</Badge>
          <span className="text-headline-sm font-bold text-primary">
            {formatCurrency(lead.budget)}
          </span>
        </div>
        <h3 className="text-headline-sm text-on-surface">{lead.title}</h3>
        <p className="mt-1 flex items-center gap-1 text-body-sm text-on-surface-variant">
          <MapPin className="h-4 w-4" />
          {lead.location.city}/{lead.location.state}
        </p>
        <p className="mt-3 line-clamp-2 text-body-sm text-on-surface-variant">
          {lead.description}
        </p>
        <div className="mt-3">
          <Chip>{lead.category.name}</Chip>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between border-t border-outline-variant/30 pt-4">
        <span className="flex items-center gap-1 text-label-md text-on-surface-variant">
          <Lock className="h-4 w-4" /> Contato protegido
        </span>
        <span className="text-label-lg font-bold text-primary group-hover:underline">
          Ver pedido →
        </span>
      </div>
    </Link>
  );
}
