import "~/styles/globals.css";

import { type Metadata } from "next";
import { Manrope } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import {
  JsonLd,
  organizationSchema,
  webSiteSchema,
} from "~/components/seo/json-ld";
import { TRPCReactProvider } from "~/trpc/react";
import { env } from "~/env";

export const metadata: Metadata = {
  title: {
    default: "Savoir Link — Encontre clientes e profissionais",
    template: "%s | Savoir Link",
  },
  description:
    "Publique seu pedido de serviço e receba contato de profissionais qualificados. Profissionais: encontre clientes prontos para contratar.",
  metadataBase: new URL(process.env.APP_URL ?? "http://localhost:3000"),
  icons: [
    { rel: "icon", url: "/favicon.ico", sizes: "any" },
    { rel: "icon", url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    { rel: "icon", url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png", sizes: "180x180" },
  ],
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Savoir Link",
  },
  twitter: { card: "summary_large_image" },
  alternates: { languages: { "pt-BR": "/" } },
};

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={manrope.variable}>
      <body className="bg-background text-on-surface min-h-screen">
        <JsonLd data={organizationSchema()} />
        <JsonLd data={webSiteSchema()} />
        <TRPCReactProvider>{children}</TRPCReactProvider>
        {env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics gaId={env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
      </body>
    </html>
  );
}
