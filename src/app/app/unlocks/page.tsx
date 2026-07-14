import { MyUnlocksClient } from "~/components/lead/my-unlocks-client";

export const metadata = { title: "Meus contatos" };

export default function UnlocksPage() {
  return (
    <div>
      <h1 className="mb-6 text-headline-lg font-extrabold text-on-surface">
        Meus contatos
      </h1>
      <MyUnlocksClient />
    </div>
  );
}
