const LOCALE = process.env.NEXT_PUBLIC_CURRENCY_LOCALE ?? "pt-BR";
const CURRENCY = process.env.NEXT_PUBLIC_CURRENCY ?? "BRL";

/** Format a value in the major currency unit (e.g. reais) as a localized currency string. */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat(LOCALE, {
    style: "currency",
    currency: CURRENCY,
  }).format(amount);
}

/** Format an amount given in cents. */
export function formatCents(cents: number): string {
  return formatCurrency(cents / 100);
}
