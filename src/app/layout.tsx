import type { Metadata, Viewport } from "next";
import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { personalInfo } from "@/data";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://pintukrgupta.dev"),
  title: {
    default: "Pintu Kumar Gupta | Backend Software Engineer",
    template: "%s | Pintu Kumar Gupta",
  },
  description:
    "Backend Software Engineer building real-time data systems for state-government platforms — Spring Boot, Apache Kafka, Apache Flink, PostgreSQL, and Cassandra, in production.",
  keywords: [
    "Java Backend Developer",
    "Spring Boot Developer",
    "Backend Engineer Portfolio",
    "Microservices Developer",
    "Apache Kafka Developer",
    "Apache Flink Engineer",
    "Freelance Backend Developer",
    "Java Consultant",
    "Software Engineer Hyderabad",
    "Pintu Kumar Gupta",
    "VassarLabs",
    "IIIT Sonepat",
    "Streaming Systems Engineer",
    "Distributed Systems",
  ],
  authors: [{ name: "Pintu Kumar Gupta", url: "https://pintukrgupta.dev" }],
  creator: "Pintu Kumar Gupta",
  publisher: "Pintu Kumar Gupta",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pintukrgupta.dev",
    siteName: "Pintu Kumar Gupta — Backend Engineer",
    title: "Pintu Kumar Gupta | Backend Software Engineer",
    description:
      "Backend Software Engineer. Spring Boot, Kafka, and Flink systems running in production for state governments.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pintu Kumar Gupta | Backend Software Engineer",
    description: "Backend Software Engineer. Spring Boot, Kafka, and Flink in production.",
    creator: "@pintukrgupta",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  manifest: "/site.webmanifest",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personalInfo.name,
  jobTitle: personalInfo.role,
  url: personalInfo.website,
  email: `mailto:${personalInfo.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressCountry: "IN",
  },
  worksFor: {
    "@type": "Organization",
    name: "VassarLabs IT Solutions Pvt. Ltd.",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Indian Institute of Information Technology, Sonepat",
  },
  sameAs: [personalInfo.github, personalInfo.linkedin],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <body className="font-sans antialiased min-h-screen bg-background text-foreground">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
