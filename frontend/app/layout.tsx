import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import { DEFAULT_THEME, THEME_STORAGE_KEY } from "@/lib/themes";
import { siteMeta } from "@/lib/content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.brianekane.com"),
  title: {
    default: siteMeta.siteTitle,
    template: `%s | ${siteMeta.shortTitle}`,
  },
  description: siteMeta.description,
  robots: { index: true, follow: true },
  openGraph: {
    title: siteMeta.siteTitle,
    description: siteMeta.description,
    url: "https://www.brianekane.com",
    siteName: siteMeta.shortTitle,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.siteTitle,
    description: siteMeta.description,
  },
};

const themeBoot = `
(function(){
  try {
    var k=${JSON.stringify(THEME_STORAGE_KEY)};
    var themes=["executive-dark","clean-light","warm-human"];
    var v=localStorage.getItem(k);
    var t=themes.indexOf(v)>=0?v:${JSON.stringify(DEFAULT_THEME)};
    document.documentElement.setAttribute("data-theme",t);
  } catch(e) {
    document.documentElement.setAttribute("data-theme",${JSON.stringify(DEFAULT_THEME)});
  }
})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-primary-text">
        <Script id="theme-boot" strategy="beforeInteractive">
          {themeBoot}
        </Script>
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-card focus:px-4 focus:py-2 focus:text-primary-text focus:shadow-lg focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent"
          >
            Skip to main content
          </a>
          <Header />
          <main id="main-content" className="flex-1" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
