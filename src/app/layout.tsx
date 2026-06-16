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
  metadataBase: new URL("https://stevaniabirthday.vercel.app/"), // GANTI DENGAN URL VERCEL ANDA!
  title: "Kejutan Ulang Tahun Spesial untuk Stevania Eka Lupita Sari!",
  description:
    "Sebuah kejutan spesial menantimu! Buka sekarang untuk merayakan hari spesialmu.",
  openGraph: {
    title: "Kejutan Ulang Tahun Spesial untuk Stevania Eka Lupita Sari!",
    description:
      "Sebuah kejutan spesial menantimu! Buka sekarang untuk merayakan hari spesialmu.",
    images: [
      {
        url: "/thumbnail.png", // Ini akan otomatis menjadi absolut dengan metadataBase
        width: 1200,
        height: 630,
        alt: "Birthday Surprise",
      },
    ],
  },
  icons: {
    icon: "/thumbnail.png",
  },
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
