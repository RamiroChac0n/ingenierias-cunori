import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { client } from "@/lib/sanity/client";
import { urlFor } from "@/lib/sanity/image";
import { SITE_SETTINGS_QUERY } from "@/lib/sanity/queries/siteSettings";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Facultad de Ingeniería CUNORI",
  description:
    "Carreras de Ingeniería Civil, Ciencias y Sistemas e Industrial — Centro Universitario de Oriente (CUNORI), USAC.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteSettings = await client.fetch(SITE_SETTINGS_QUERY, {}, { next: { revalidate: 60 } });
  const logoUrl = siteSettings?.logo ? urlFor(siteSettings.logo).width(88).height(88).url() : undefined;

  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Navbar siteName={siteSettings?.nombreInstitucional} logoUrl={logoUrl} />
        <main className="flex-1">{children}</main>
        <Footer
          siteName={siteSettings?.nombreInstitucional}
          logoUrl={logoUrl}
          facebookUrl={siteSettings?.facebookUrl}
          twitterUrl={siteSettings?.twitterUrl}
          youtubeUrl={siteSettings?.youtubeUrl}
          instagramUrl={siteSettings?.instagramUrl}
        />
      </body>
    </html>
  );
}
