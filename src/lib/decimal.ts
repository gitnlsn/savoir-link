import { Prisma } from "../../generated/prisma";

/** Convert a Prisma Decimal (or number) to a plain number for JSON/tRPC transport. */
export function toNumber(value: Prisma.Decimal | number | null | undefined): number {
  if (value === null || value === undefined) return 0;
  if (typeof value === "number") return value;
  return value.toNumber();
}

/** Type guard for Prisma Decimal values. */
export function isDecimal(value: unknown): value is Prisma.Decimal {
  return value instanceof Prisma.Decimal;
}
