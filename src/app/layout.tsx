import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://gurpinders009.vercel.app'),
  // The 'title' is the most important factor for the name shown in search
  title: {
    default: 'Gurpinder Singh | Full-Stack & Mobile Developer',
    template: '%s | Gurpinder Singh',
  },
  description:
    'Full-Stack Developer and Douglas College student specializing in Flutter (Bloc/Cubit), React, Spring Boot, and Golang. Building modular, scalable web and mobile applications.',
  keywords: [
    'Gurpinder Singh',
    'Full Stack Developer Canada',
    'Flutter Developer Bloc Cubit',
    'Next.js React Developer',
    'Spring Boot Backend Developer',
    'Golang Developer',
    'Material 3 UI Design',
    'Douglas College Student',
    'Supabase SQL Integration',
    'Mobile App Developer BC',
  ],
  authors: [{ name: 'Gurpinder Singh', url: 'https://gurpinders009.vercel.app' }],
  creator: 'Gurpinder Singh',
  // Canonical tells Google this is the "official" version of the site
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://gurpinders009.vercel.app',
    title: 'Gurpinder Singh — Full-Stack & Mobile Developer',
    description:
      'Full-stack and mobile developer based in BC, Canada. Specializing in Flutter, React, Next.js, and Spring Boot.',
    images: [
      {
        url: '/download2.jpg',
        width: 1200,
        height: 630,
        alt: 'Gurpinder Singh Portfolio',
      },
    ],
    // siteName is a strong signal to Google for the header of the search result
    siteName: 'Gurpinder Singh',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gurpinder Singh — Full-Stack & Mobile Developer',
    description:
      'Full-stack and mobile developer specializing in Flutter, React, and Spring Boot.',
    images: ['/download2.jpg'],
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
      <body>{children}</body>
    </html>
  );
}
