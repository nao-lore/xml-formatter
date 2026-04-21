import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  verification: {
    google: "uRTAz7j8N8jDW5BzJaGn-wzrFY5C7KNStVLMKlGzo_4",
  },
  title: "XML Formatter - Format & Validate XML Online | xml-formatter",
  description:
    "Free online XML formatter, beautifier, and validator. Format XML with proper indentation, syntax highlighting, and validation. Minify or pretty-print XML instantly.",
  keywords: [
    "xml formatter",
    "xml beautifier",
    "xml validator",
    "format xml online",
    "xml pretty print",
    "xml viewer",
  ],
  authors: [{ name: "xml-formatter" }],
  openGraph: {
    title: "XML Formatter - Format & Validate XML Online",
    description:
      "Free online XML formatter with syntax highlighting, validation, and minification. Format XML instantly.",
    url: "https://xml-formatter.vercel.app",
    siteName: "xml-formatter",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "XML Formatter - Format & Validate XML Online",
    description:
      "Free online XML formatter with syntax highlighting, validation, and minification. Format XML instantly.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://xml-formatter.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "XML Formatter",
              description:
                "Free online XML formatter, beautifier, and validator. Format XML with proper indentation, syntax highlighting, and real-time validation.",
              url: "https://xml-formatter.vercel.app",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "Any",
              browserRequirements: "Requires JavaScript",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              featureList: [
                "XML formatting with proper indentation",
                "Syntax highlighting",
                "XML validation with error details",
                "XML minification",
                "Configurable indent size",
                "One-click copy to clipboard",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
