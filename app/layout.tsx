import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/style.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "African Development Crowdfund ",
  description: "Enjoy good returns on your secured savings and investment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
