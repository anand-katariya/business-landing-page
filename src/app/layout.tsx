import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FitLife",
  description: "FitLife is a platform for fitness enthusiasts to track their progress and stay motivated.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
