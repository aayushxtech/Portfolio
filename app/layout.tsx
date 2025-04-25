import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import React from "react";

export const metadata: Metadata = {
  title: {
    default: "Aayush Samal | Full-Stack Developer & AI Enthusiast",
    template: "%s | Aayush Samal",
  },
  description:
      "Aayush Samal is a Full-Stack Developer with expertise in React, Next.js, React Native, and AI. He builds scalable web and mobile apps, focusing on user experience and performance.",
  metadataBase: new URL("https://aayushsamal.vercel.app"),
  keywords: [
    "Aayush Samal",
    "Full-Stack Developer",
    "AI Developer",
    "React Developer",
    "Next.js Portfolio",
    "Software Engineer",
    "Mobile App Developer",
    "Open Source Contributor",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Supabase",
    "React Native Projects",
    "Developer Portfolio",
  ],
  authors: [{ name: "Aayush Samal", url: "https://aayushsamal.vercel.app" }],
  creator: "Aayush Samal",
  publisher: "Aayush Samal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aayushsamal.vercel.app",
    siteName: "Aayush Samal Portfolio",
    title: "Aayush Samal | Full-Stack Developer & AI Enthusiast",
    description:
        "Explore the personal portfolio of Aayush Samal, a full-stack web and mobile developer. Discover his projects, skills, and blog posts.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aayush Samal Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aayush Samal | Full-Stack Developer & AI Enthusiast",
    description:
        "Explore the portfolio of Aayush Samal—React, Next.js, and AI developer specializing in scalable applications.",
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
        <meta name="google-site-verification" content="Kd8euF_tCYThyxHLNGT8AfEyNpDixbWrR-wGOCv8ihs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Aayush Samal",
                url: "https://aayushsamal.vercel.app",
                image: "https://aayushsamal.vercel.app/og-image.jpg",
                jobTitle: "Full-Stack Developer & AI Enthusiast",
                memberOf: [
                  {
                    "@type": "EducationalOrganization",
                    name: "SRM Institute of Science and Technology",
                    sameAs: "https://www.srmist.edu.in/"
                  },
                  {
                    "@type": "Organization",
                    name: "Chennai Innovators Network (CIN)"
                  }
                ],
                sameAs: [
                  "https://github.com/aayushxtech",
                  "https://linkedin.com/in/aayush-samal"
                ],
                description:
                    "Aayush Samal is a full-stack developer and AI enthusiast who builds fast, scalable web and mobile apps using Next.js, React, React Native, and modern AI technologies. Passionate about open source, hackathons, and community-driven innovation.",
                knowsAbout: [
                  "Web Development",
                  "Mobile Development",
                  "AI",
                  "Next.js",
                  "React",
                  "React Native",
                  "Tailwind CSS",
                  "Firebase",
                  "Supabase",
                  "JavaScript",
                  "TypeScript",
                  "Django"
                ]
              })
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
