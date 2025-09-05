import type { Metadata } from "next";
import { Montserrat, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Toaster } from "@/components/ui/sonner";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Street Cause - Navratri Nirvana 2025 | Student-Run NGO",
  description: "Join Street Cause for Navratri Nirvana 2025 - an energetic Dandiya night where celebration meets purpose. Street Cause is a leading student-run NGO empowering students to create tangible community impact across India.",
  keywords: ["Street Cause", "NGO", "Navratri", "Dandiya", "Community Service", "Student NGO", "Social Impact", "Hyderabad", "Charity"],
  authors: [{ name: "Street Cause" }],
  creator: "Street Cause",
  publisher: "Street Cause",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://streetcause.org'),
  alternates: {
    canonical: 'https://streetcause.org',
  },
  openGraph: {
    title: "Street Cause - Navratri Nirvana 2025",
    description: "Join Street Cause for Navratri Nirvana 2025 - an energetic Dandiya night where celebration meets purpose. Street Cause is a leading student-run NGO.",
    url: "https://streetcause.org",
    siteName: "Street Cause",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Street Cause - Navratri Nirvana 2025",
    description: "Join Street Cause for Navratri Nirvana 2025 - an energetic Dandiya night where celebration meets purpose.",
    creator: "@streetcause",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="afterInteractive" />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
