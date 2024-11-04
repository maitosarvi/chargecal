import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Charging calculator",
  description: "Calculator to calculate the price to charge a battery",
  icons: {
    icon: "@/public/favicon-32x32.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <head>
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
      </head>
      <body className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
        <Header /> {/* Include Header here */}
        <main className="flex-grow p-4">{children}</main> {/* Main content */}
        <Footer /> {/* Footer at the bottom */}
      </body>
      </html>
  );
}
