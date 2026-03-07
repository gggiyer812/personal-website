import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "ganeshiyer.ai",
    template: "%s | ganeshiyer.ai",
  },
  description: "Principal Technical Product Manager | Data Platforms | AI | Cloud",
  openGraph: {
    title: "ganeshiyer.ai",
    description:
      "Principal Technical Product Manager | Data Platforms | AI | Cloud",
    url: "https://ganeshiyer.ai",
    siteName: "ganeshiyer.ai",
    images: [
      {
        url: "https://ganeshiyer.ai/ganeshiyersketchn.png",
        width: 1920,
        height: 1080,
        alt: "Ganesh Iyer",
      },
    ],
    locale: "en-US",
    type: "website",
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
  twitter: {
    title: "ganeshiyer",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicongi.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}

