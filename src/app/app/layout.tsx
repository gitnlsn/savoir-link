import { redirect } from "next/navigation";

import { AppShell } from "~/components/layout/app-shell";
import { db } from "~/server/db";
import { auth } from "~/server/auth";
import { GetWalletUseCase } from "~/server/use-cases/wallet/get-wallet.use-case";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session?.user) redirect("/login?callbackUrl=/app/leads");

  const balance = await new GetWalletUseCase({ db }).balance(session.user.id);

  return <AppShell balance={balance}>{children}</AppShell>;
}
