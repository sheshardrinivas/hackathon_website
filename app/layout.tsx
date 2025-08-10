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
    "First ever hackathon for school students in india to learn and grow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${tomorrow.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
