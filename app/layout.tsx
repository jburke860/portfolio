import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jeremy Burke | Software Engineering Portfolio",
  description:
    "Portfolio for Jeremy Burke, an applied AI and software engineer focused on computer vision, sensor fusion, simulation, automation, and R&D software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}