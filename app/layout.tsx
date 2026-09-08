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
  themeColor: "#07090e",
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
        url: "/images/vendly-preview.png",
        width: 1200,
        height: 630,
        alt: "Venuja Silva Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Venuja Silva | Software Developer",
    description:
      "Portfolio of Venuja Silva — software developer building web applications, mobile apps, AI-powered solutions, IoT systems, and developer tools.",
    images: ["/images/vendly-preview.svg"],
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
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}
    >
      <body className="min-h-screen bg-[#07090e] text-slate-100 antialiased selection:bg-cyan-500 selection:text-white relative">
        <ScrollProgress />
        <div className="fixed inset-0 pointer-events-none bg-grid-pattern opacity-60 z-0" />
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial-glow pointer-events-none z-0" />
        <div className="relative z-10 flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
