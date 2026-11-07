import type { Metadata } from "next";
import { Geist, Geist_Mono, Orbitron, Nova_Flat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const novaFlat = Nova_Flat({
  variable: "--font-nova-flat",
  weight: "400",
  subsets: ["latin"],
});

const siteUrl = "https://mayari-studio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mayari Studios | Independent Game Development Studio",
    template: "%s | Mayari Studios",
  },
  description:
    "Mayari Studios is an indie game studio founded by John Paul Ganzan. Creators of Side Hustle: Grill and Grind, bringing unique Filipino culture and storytelling to life.",
  keywords: [
    "Mayari Studios",
    "Side Hustle: Grill and Grind",
    "John Paul Ganzan",
    "Filipino Game Developer",
    "Indie Game Studio Philippines",
    "Simulation Games",
    "Filipino Culture Games",
    "Game Design & Programming",
  ],
  authors: [{ name: "John Paul Ganzan", url: siteUrl }],
  creator: "John Paul Ganzan",
  publisher: "Mayari Studios",
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
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Mayari Studios | Creators of Side Hustle: Grill and Grind",
    description:
      "Independent game studio dedicated to immersive gaming experiences and unique Filipino culture. Founded by Lead Developer John Paul Ganzan.",
    siteName: "Mayari Studios",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Mayari Studios - Side Hustle: Grill and Grind",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayari Studios | Side Hustle: Grill and Grind",
    description:
      "Indie game development studio showcasing local culture through unique simulation games.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Structured Data (JSON-LD) for Search Engine Knowledge Graphs
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Mayari Studios",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    founder: {
      "@type": "Person",
      name: "John Paul Ganzan",
      jobTitle: "Founder & Lead Game Developer",
    },
    knowsAbout: [
      "Game Development",
      "Game Design",
      "Side Hustle: Grill and Grind",
    ],
    description:
      "Independent game development studio specializing in unique, culture-rich simulation games.",
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} ${novaFlat.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}