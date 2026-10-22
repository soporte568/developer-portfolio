import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import Providers from "./providers";
import "./css/card.scss";
import "./css/globals.scss";
import { swpConfig } from "@/utils/data/swp-config";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: swpConfig.siteUrl ? new URL(swpConfig.siteUrl) : undefined,
  title: {
    default: "SWP | Tecnología, comercio y negocios",
    template: "%s | SWP",
  },
  description:
    "En SWP conectamos tecnología, comercio digital y visión empresarial para ayudar a construir negocios preparados para el futuro.",
  openGraph: {
    title: "SWP | Tecnología, comercio y negocios",
    description:
      "Un ecosistema de soluciones digitales para el comercio electrónico y el desarrollo empresarial.",
    siteName: "SWP",
    locale: "es_PE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Providers>
          <ToastContainer />
          <main className="relative mx-auto min-h-screen max-w-[92rem] px-6 sm:px-12">
            <Navbar />
            {children}
            <ScrollToTop />
          </main>
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
