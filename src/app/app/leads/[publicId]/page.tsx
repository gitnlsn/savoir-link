import { LeadDetailClient } from "~/components/lead/lead-detail-client";

export const metadata = { title: "Detalhes do lead" };

export default async function LeadDetailPage({
  params,
}: {
  params: Promise<{ publicId: string }>;
}) {
  const { publicId } = await params;
  return (
    <div className="mx-auto max-w-2xl">
      <LeadDetailClient publicId={publicId} />
    </div>
  );
}
