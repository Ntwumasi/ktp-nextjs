import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "KTP Training | Basketball Skills Training in Wellesley, MA",
  description:
    "Welcome to KTP Training, your premier destination for basketball skills training and player development. Expert coaching with Kyle Thistle-Pierce in Wellesley, MA.",
  keywords:
    "basketball training, basketball skills, player development, youth basketball, Wellesley MA, basketball coach, individual training, group training",
  authors: [{ name: "KTP Training" }],
  icons: {
    icon: "/ktpLogo.webp",
    apple: "/ktpLogo.webp",
  },
  openGraph: {
    title: "KTP Training | Basketball Skills Training in Wellesley, MA",
    description:
      "Unlock your basketball potential with personalized coaching and expert training from Kyle Thistle-Pierce.",
    url: "https://www.ktp-training.com",
    siteName: "KTP Training",
    locale: "en_US",
    type: "website",
    images: ["/ktpLogo.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "KTP Training | Basketball Skills Training",
    description:
      "Unlock your basketball potential with personalized coaching and expert training.",
    images: ["/ktpLogo.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#111] text-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
