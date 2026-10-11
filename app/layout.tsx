import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://venujasilva.dev"),
  title: "Venuja Silva | Software Developer | AI & IoT Enthusiast",
  description:
    "Portfolio of Venuja Silva — software developer building web applications, mobile apps, AI-powered solutions, IoT systems, and developer tools.",
  keywords: [
    "Venuja Silva",
    "Software Developer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "IoT",
    "ESP32",
    "Arduino",
    "Python",
    "Vendly.lk",
    "Developer Portfolio",
  ],
  authors: [{ name: "Venuja Silva" }],
  creator: "Venuja Silva",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://venujasilva.dev",
    title: "Venuja Silva | Software Developer",
    description:
      "Portfolio of Venuja Silva — software developer building web applications, mobile apps, AI-powered solutions, IoT systems, and developer tools.",
    siteName: "Venuja Silva Portfolio",
    images: [
      {
        url: "/public/images/server-launcher-preview.png",
        alt: "Venuja Silva Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Venuja Silva | Software Developer",
    description:
      "Portfolio of Venuja Silva — software developer building web applications, mobile apps, AI-powered solutions, IoT systems, and developer tools.",
    images: ["/public/images/server-launcher-preview.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark bg-black`}
    >
      <body className="min-h-screen bg-black text-zinc-100 antialiased selection:bg-blue-600 selection:text-white relative">
        <ScrollProgress />
        <div className="relative z-10 flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
