import { Inter, Outfit } from "next/font/google";
import ThemeScript from "@/components/ThemeScript/ThemeScript";
import { ThemeProvider } from "@/context/ThemeContext";
import Header from "@/components/Header/Header";
import "./tailwind.css";
import "swiper/css/bundle";
import "./swiper.css";
import "./globals.scss";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  title: "Nirav Khant | Frontend Developer",
  description:
    "Premium personal portfolio of Nirav Khant — Frontend Developer specializing in Next.js, React, JavaScript, and modern web architecture.",
  keywords: [
    "Frontend Developer",
    "Next.js",
    "React",
    "JavaScript",
    "Portfolio",
    "Web Developer",
  ],
  authors: [{ name: "Nirav Khant" }],
  openGraph: {
    title: "Nirav Khant | Frontend Developer",
    description:
      "Building modern, scalable and high-performance web experiences with Next.js and React.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nirav Khant | Frontend Developer",
    description:
      "Building modern, scalable and high-performance web experiences with Next.js and React.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <ThemeScript />
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
