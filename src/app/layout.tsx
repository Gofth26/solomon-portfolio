import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Solomon Phelembe | Flutter Developer",
  description: "Portfolio of Solomon Khothalang Phelembe, a Flutter/Dart developer building practical retail-tech and business software.",
  keywords: ["Flutter developer", "Dart developer", "IT graduate", "retail technology", "South Africa"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
