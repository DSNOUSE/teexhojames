import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import { BackToTop } from "../components/BackToTop";
import "./globals.css";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albert-sans",
});


export const metadata: Metadata = {
  metadataBase: new URL("https://teexhojames.com"),
  title: {
    default: "Teexho James Consulting",
    template: "%s | Teexho James Consulting",
  },
  description:
    "Connecting students in Nigeria to top institutions across the UK and Europe while delivering trusted digital solutions for businesses.",
  openGraph: {
    type: "website",
    siteName: "Teexho James Consulting",
    images: [
      {
        url: "/images/hero-image.jpg",
        width: 1200,
        height: 630,
        alt: "Teexho James Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </head>
      <body className={`${albertSans.variable} font-sans antialiased`}>
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
        <BackToTop />
      </body>
    </html>
  );
}