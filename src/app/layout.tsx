import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/Common/Navigation";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/context";
import { ThemeApplier } from "@/Common/ThemeApplier";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'LondonLink',
  description: 'Aprenda inglês no seu ritmo e alcance o que você quiser!',
  authors: [{ name: 'Mages.dev', url: 'mailto:contato@mages.dev' }],
  robots: 'index, follow',
  openGraph: {
    title: 'LondonLink',
    description: 'Aprenda inglês no seu ritmo e alcance o que você quiser!',
    url: 'https://londonlink.com.br/',
    siteName: 'LondonLink',
    images: [
      {
        url: 'https://londonlink.com.br/logo.png',
        width: 800,
        height: 600,
        alt: 'Logo da London Link',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased pt-20`}>
        <ThemeProvider>
          <ThemeApplier />
          <header style={{ padding: "1rem", display: "flex", justifyContent: "flex-end" }}>
            <Navigation logoOpacity={1} activeSection="home">
              {children}
            </Navigation>
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}