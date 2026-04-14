import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import CookieBanner from "../components/CookieBanner"
import "./globals.css"

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://le-petit-vigneron.fr"),
  title: {
    default: "Le Petit Vigneron — Le vin, sans chichi et avec passion",
    template: "%s | Le Petit Vigneron",
  },
  description: "Accords mets-vins, cépages, appellations, oenotourisme — des articles accessibles pour tous ceux qui aiment le vin sans se prendre la tête.",
  keywords: ["vin", "accord mets vins", "cépages", "appellations", "oenotourisme", "Bordeaux", "Bourgogne", "Champagne"],
  authors: [{ name: "Julien", url: "https://le-petit-vigneron.fr" }],
  creator: "Julien — Le Petit Vigneron",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://le-petit-vigneron.fr",
    siteName: "Le Petit Vigneron",
    title: "Le Petit Vigneron — Le vin, sans chichi et avec passion",
    description: "Accords mets-vins, cépages, appellations, oenotourisme — des articles accessibles pour tous ceux qui aiment le vin sans se prendre la tête.",
    images: [
      {
        url: "https://ciwihnnhdiwfqtywviko.supabase.co/storage/v1/object/public/image/Logo%20le%20petit%20vigneron.webp",
        width: 800,
        height: 199,
        alt: "Le Petit Vigneron",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Le Petit Vigneron — Le vin, sans chichi et avec passion",
    description: "Accords mets-vins, cépages, appellations, oenotourisme — des articles accessibles pour tous.",
    images: ["https://ciwihnnhdiwfqtywviko.supabase.co/storage/v1/object/public/image/Logo%20le%20petit%20vigneron.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    // ✅ URL absolue sans slash final — version de référence pour toutes les pages
    canonical: "https://le-petit-vigneron.fr",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className={nunito.variable}>
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}