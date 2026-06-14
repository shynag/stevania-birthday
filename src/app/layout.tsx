import type { Metadata } from "next";
import { Luckiest_Guy } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/MainLayout";

const luckiestGuy = Luckiest_Guy({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-luckiest-guy",
});

export const metadata: Metadata = {
  title: "A Special Surprise!",
  description: "A special surprise is waiting for you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${luckiestGuy.variable} h-full`}>
      <body
        className="font-sans min-h-full"
        style={{ backgroundColor: "#43A5E3" }}
      >
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
