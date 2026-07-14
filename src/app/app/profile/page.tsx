import { redirect } from "next/navigation";

import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { auth, signOut } from "~/server/auth";

export const metadata = { title: "Perfil" };

export default async function ProfilePage() {
  const session = await auth();
  if (!session?.user) redirect("/login");

  return (
    <div className="mx-auto max-w-md">
      <h1 className="mb-6 text-headline-lg font-extrabold text-on-surface">
        Perfil
      </h1>
      <Card>
        <p className="text-body-md text-on-surface">{session.user.name}</p>
        <p className="text-body-sm text-on-surface-variant">
          {session.user.email}
        </p>
        <form
          className="mt-6"
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/" });
          }}
        >
          <Button variant="secondary" type="submit">
            Sair
          </Button>
        </form>
      </Card>
    </div>
  );
}
