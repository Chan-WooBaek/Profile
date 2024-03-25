import { CMS_NAME, HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import 'tailwindcss/tailwind.css'

import "./globals.css";

const inter = Lato({
  subsets: ["latin"],
  weight: "300"
});

export const metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Chan Woo Baek',
  description: 'My Portfolio',
  icons: {
    icon: '/favicon/favicon.ico'
  },
  openGraph: {
    title: 'Chan Woo Baek',
    description: 'My Portfolio',
    image: 'url/image.png'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@hello',
    title: 'Chan Woo Baek',
    description: 'My Portfolio',
    image: 'url/image.png'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>{children}</div>
      </body>
    </html>
  );
}
