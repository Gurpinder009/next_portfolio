import type { Metadata } from "next";

import "./globals.css";







export const metadata: Metadata = {
  metadataBase: new URL('https://gurpinders009.vercel.app'),
  title: {
    default: 'Gurpinder Singh Grewal — Full-Stack & Mobile Developer',
    template: '%s | Gurpinder Singh Grewal',
  },
  description:
    'Full-stack and mobile developer based in BC, Canada. Specializing in Flutter, React, Next.js, Spring Boot, and GCP. Open to fulltime and freelance opportunities.',
  keywords: [
    'Gurpinder Singh Grewal',
    'Flutter developer',
    'React developer',
    'Next.js developer',
    'Spring Boot developer',
    'full-stack developer Canada',
    'mobile developer BC',
    'Douglas College developer',
    'freelance developer Surrey BC',
  ],
  authors: [{ name: 'Gurpinder Singh Grewal', url: 'https://gurpinders009.vercel.app' }],
  creator: 'Gurpinder Singh Grewal',
  openGraph: {
    type: 'website',
    url: 'https://gurpinders009.vercel.app',
    title: 'Gurpinder Singh Grewal — Full-Stack & Mobile Developer',
    description:
      'Full-stack and mobile developer based in BC, Canada. Shipping production apps with Flutter, React, Next.js, Spring Boot, and GCP.',
    images: [
      {
        url: 'https://gurpinders009.vercel.app/download2.jpg',
        width: 1200,
        height: 630,
        alt: 'Gurpinder Singh Grewal — Portfolio',
      },
    ],
    siteName: 'Gurpinder Singh Grewal',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gurpinder Singh Grewal — Full-Stack & Mobile Developer',
    description:
      'Full-stack and mobile developer based in BC, Canada. Flutter, React, Next.js, Spring Boot, GCP.',
    images: ['https://gurpinders009.vercel.app/download2.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

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
