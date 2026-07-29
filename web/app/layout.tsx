import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EasyShare Workforce",
  description: "Smart Workforce & Attendance Management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}