import type { Metadata } from 'next';
import { Open_Sans, Lora, Milonga } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.scss';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-open-sans',
});

const lora = Lora({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-lora',
});

const milonga = Milonga({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-milonga',
});

const miama = localFont({
  src: '../../public/fonts/Miama.ttf',
  variable: '--font-miama',
});

const siteUrl = 'https://tiskae.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Tiskae | Software Developer",
    template: "%s | Tiskae",
  },

  description:
    "Portfolio of Ibrahim Adedokun (Tiskae) — Software Developer with 4+ years of experience building UIs and full-stack products across multiple global startups. Specialised in React.js, Next.js, TypeScript, Node.js and Golang. Open to Frontend, Fullstack (FE-heavy) and Junior Backend roles. Based in Lagos, Nigeria. Open to remote globally.",

  keywords: [
    "Ibrahim Adedokun",
    "Tiskae",
    "Software Developer",
    "Frontend Developer",
    "Frontend Engineer",
    "Fullstack Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "React Native Developer",
    "Node.js Developer",
    "Golang Developer",
    "JavaScript Developer",
    "Lagos Nigeria developer",
    "remote software developer",
    "portfolio",
    "web developer Nigeria",
    "hire frontend developer",
  ],

  authors: [{ name: "Ibrahim Adedokun", url: "https://github.com/tiskae" }],
  creator: "Ibrahim Adedokun",
  publisher: "Ibrahim Adedokun",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Tiskae | Software Developer",
    title: "Tiskae | Software Developer",
    description:
      "Ibrahim Adedokun (Tiskae) — Software Developer specialised in React.js, Next.js, TypeScript, Node.js and Golang. 4+ years experience across global startups. Available for remote roles.",
    images: [
      {
        url: "/img/profile-img.jpeg",
        width: 800,
        height: 800,
        alt: "Ibrahim Adedokun — Tiskae, Software Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@Tiskae1",
    creator: "@Tiskae1",
    title: "Tiskae | Software Developer",
    description:
      "Ibrahim Adedokun (Tiskae) — Software Developer specialised in React.js, Next.js, TypeScript, Node.js and Golang. Open to remote roles globally.",
    images: ["/img/profile-img.jpeg"],
  },

  alternates: {
    canonical: siteUrl,
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} ${lora.variable} ${milonga.variable} ${miama.variable}`}
    >
      <body style={{ fontFamily: 'var(--font-open-sans), sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
