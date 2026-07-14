import { redirect } from "next/navigation";

import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { auth, signIn } from "~/server/auth";

export const metadata = { title: "Entrar" };

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ callbackUrl?: string }>;
}) {
  const { callbackUrl } = await searchParams;
  const session = await auth();
  if (session?.user) redirect(callbackUrl ?? "/app/leads");

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <Card className="w-full max-w-md text-center">
        <h1 className="text-headline-md font-bold text-primary">Savoir Link</h1>
        <p className="mt-2 text-body-md text-on-surface-variant">
          Entre para encontrar clientes e gerenciar seus créditos.
        </p>
        <form
          className="mt-6"
          action={async () => {
            "use server";
            await signIn("google", {
              redirectTo: callbackUrl ?? "/app/leads",
            });
          }}
        >
          <Button type="submit" size="lg" className="w-full">
            Entrar com Google
          </Button>
        </form>
      </Card>
    </div>
  );
}
