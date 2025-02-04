import type { Metadata } from "next";
import Head from "next/head";
import { Geist, Geist_Mono, Poppins, Montserrat } from "next/font/google";
import "../styles/globals.css"; // Ensure this path is correct
import Navbar from "@/components/NavBar";
import ScrollReveal from "@/components/scrollReveal";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "KKLC Explore",
  description: "Discover local shops, services, and events in Kugenuma Kaigan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Font Awesome CDN link */}
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v6.1.2/css/all.css"
          integrity="sha384-oS3vJWv+0UjzB1zC/w4L5ChzU7LAP1Qejx61bPfUcCIwX/j5J+6qCJRo4T+1w5Zn"
          crossOrigin="anonymous"
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.className} ${montserrat.className} antialiased`}
      >
        <Navbar />
        <ScrollReveal /> {/* Client component to enable scroll animations */}
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
