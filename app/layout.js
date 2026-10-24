import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://developer-portfolio-gules-mu.vercel.app'),
  title: "Anas Tilika | Mobile Application Developer (React Native)",
  description:
    "Mobile application developer specializing in cross-platform apps with React Native and TypeScript, with a Bachelor of Computer Science (First Class Honors).",
  icons: {
    icon: '/profile-icon.png',
  },
  openGraph: {
    title: "Anas Tilika | Mobile Application Developer (React Native)",
    description:
      "Mobile application developer specializing in cross-platform apps with React Native and TypeScript, with a Bachelor of Computer Science (First Class Honors).",
    url: process.env.NEXT_PUBLIC_APP_URL || 'https://developer-portfolio-gules-mu.vercel.app',
    siteName: "Anas Tilika Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Anas Tilika - Mobile Application Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anas Tilika | Mobile Application Developer (React Native)",
    description:
      "Mobile application developer specializing in cross-platform apps with React Native and TypeScript, with a Bachelor of Computer Science (First Class Honors).",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
