import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import React from "react";

export const metadata: Metadata = {
  title: {
    default: "Aayush Samal | Full-Stack Developer",
    template: "%s | Aayush Samal",
  },
  description:
    "Full-Stack Developer specializing in Next.js, React, and AI technologies. Building scalable web applications and AI-powered solutions.",
  metadataBase: new URL("https://aayushsamal.vercel.app"),
  keywords: [
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "AI Developer",
    "Aayush Samal",
    "Web Development",
    "Software Engineer",
    "JavaScript",
    "TypeScript",
    "React Native",
  ],
  authors: [{ name: "Aayush Samal" }],
  creator: "Aayush Samal",
  publisher: "Aayush Samal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aayushsamal.vercel.app",
    siteName: "Aayush Samal Portfolio",
    title: "Aayush Samal | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in Next.js, React, and AI technologies",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aayush Samal - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aayush Samal | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in Next.js, React, and AI technologies",
    creator: "@yourtwitterhandle",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://aayushsamal.vercel.app",
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Aayush Samal",
              url: "https://aayushsamal.vercel.app",
              sameAs: [
                "https://github.com/aayushxtech",
                "https://linkedin.com/in/aayush-samal",
              ],
              jobTitle: "Full-Stack Developer",
              knowsAbout: [
                "Web Development",
                "React",
                "React Native",
                "Next.js",
                "Tailwind CSS",
                "Firebase",
                "Supabase",
                "AI",
                "Mobile Development",
              ],
              description:
                "Full-Stack Developer specializing in Next.js, React,R and AI technologies",
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
