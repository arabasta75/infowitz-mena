import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = "https://3ifrit.up.railway.app";
const SITE_NAME = "3IFRIT";
const SITE_TITLE = "3IFRIT — Plateforme de Renseignement MENA & Afrique | OSINT Temps Réel";
const SITE_DESCRIPTION = "Plateforme OSINT souveraine centrée sur le MENA et l'Afrique. Surveillance des conflits, tracking aérien, maritime, séismes, médias et renseignement géopolitique en temps réel. Alternative open-source à Palantir.";

export const viewport: Viewport = {
  themeColor: "#FF4500",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | 3IFRIT Intelligence",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "OSINT", "intelligence MENA", "renseignement Afrique", "veille géopolitique",
    "surveillance conflits", "tracking aérien", "suivi maritime",
    "DNS lookup", "WHOIS", "scanner de ports", "threat intelligence",
    "alternative Palantir", "dashboard intelligence", "open source OSINT",
    "3IFRIT", "La Warroom", "info warfare", "geoint", "sigint",
    "Sahel", "Afrique subsaharienne", "Maghreb", "Moyen-Orient",
  ],
  authors: [{ name: "La Warroom", url: SITE_URL }],
  creator: "La Warroom",
  publisher: "La Warroom",
  robots: { index: false, follow: false },
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "3IFRIT",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#06060C",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "3IFRIT — Plateforme OSINT MENA & Afrique",
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  applicationCategory: "SecurityApplication",
  operatingSystem: "Web",
  author: {
    "@type": "Organization",
    name: "La Warroom",
    url: SITE_URL,
  },
};

import ErrorBoundary from '@/components/ErrorBoundary';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <ErrorBoundary name="3IFRIT Core">
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}
