import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "MerchGo — Aplikasi Merchandiser Offline-First",
  description:
    "Absen, kunjungan toko, laporan produk & promo — jalan tanpa internet, sinkron otomatis. Download APK MerchGo v1.0.3.",
  openGraph: {
    title: "MerchGo — Aplikasi Merchandiser Offline-First",
    description:
      "Attendance, store visit, product & promo reporting. Offline first, sync otomatis.",
    images: ["/screenshots/absen.png"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className={`${jakarta.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
