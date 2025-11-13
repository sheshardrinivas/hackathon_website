import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Tomorrow } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const tomorrow = Tomorrow({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-tomorrow",
});

export const metadata: Metadata = {
  title: "ANIS HACKATHON",
  description:
    "First ever hackathon for school students in india to learn and grow.",
  keywords: ["ANIS", "hackathon", "science", "technology", "computer"],
  alternates: {
    canonical: "https://anis-hackathon.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="TC3bPiftx-MEaKT_AipCcRSyIQoGr3xFB0M3QUeLL5I"
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${tomorrow.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
