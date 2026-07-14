import { AppBottomNav } from "./app-bottom-nav";
import { AppHeader } from "./app-header";

/** Shell for the authenticated provider area (`/app/*`). */
export function AppShell({
  children,
  balance,
}: {
  children: React.ReactNode;
  balance?: number;
}) {
  return (
    <div className="flex min-h-screen flex-col pb-24 md:pb-0">
      <AppHeader balance={balance} />
      <main className="mx-auto w-full max-w-container flex-1 px-4 py-8 md:px-8">
        {children}
      </main>
      <AppBottomNav />
    </div>
  );
}
