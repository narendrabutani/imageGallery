import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Layout from "@ImageGallery/components/Layout";


const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  preload:false
});

export const metadata: Metadata = {
  title: "Image Gallery",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Layout />
        {children}
      </body>
    </html>
  );
}
