import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sidharth Malpani - Portfolio",
  description: "DevOps Enthusiast & Full-Stack Explorer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <head>
        <link rel="icon" href="/logo.png" />
      </head> */}
      <body>{children}</body>
    </html>
  );
}