import type { PrismaClient } from "~/server/db-types";

export interface WalletView {
  balance: number;
  transactions: {
    id: string;
    type: string;
    delta: number;
    createdAt: Date;
  }[];
}

/**
 * Returns a provider's wallet balance and recent ledger entries. Lazily creates the wallet row so
 * a brand-new provider sees a zero balance rather than an error.
 */
export class GetWalletUseCase {
  constructor(private deps: { db: PrismaClient }) {}

  async execute(userId: string): Promise<WalletView> {
    const { db } = this.deps;
    const wallet = await db.creditWallet.upsert({
      where: { userId },
      create: { userId, balance: 0 },
      update: {},
      include: {
        transactions: { orderBy: { createdAt: "desc" }, take: 25 },
      },
    });

    return {
      balance: wallet.balance,
      transactions: wallet.transactions.map((t) => ({
        id: t.id,
        type: t.type,
        delta: t.delta,
        createdAt: t.createdAt,
      })),
    };
  }

  /** Cheap balance-only read (used by the app shell). */
  async balance(userId: string): Promise<number> {
    const wallet = await this.deps.db.creditWallet.findUnique({
      where: { userId },
      select: { balance: true },
    });
    return wallet?.balance ?? 0;
  }
}
