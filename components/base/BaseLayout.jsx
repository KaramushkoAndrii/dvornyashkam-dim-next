// https://nextjs.org/docs/app/getting-started/images-and-fonts#optimizing-fonts
import { Roboto, Lora } from "next/font/google";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import Header from "@/components/base/header/Header";
import Footer from "@/components/base/footer/Footer";
import DonateSection from "@/components/base/donateSection/DonateSection";
import CustomCursor from "@/components/base/customCursor/CustomCursor";
import Modal from "@/components/UI/modal/Modal";

// Init Fonts
const robotoFont = Roboto({
  variable: "--font-first",
  weight: ["400", "500"],
  subsets: ["cyrillic", "latin"],
  display: "swap",
  adjustFontFallback: false,
  preload: true,
});

const loraFont = Lora({
  variable: "--font-second",
  weight: ["400", "500", "600", "700"],
  subsets: ["cyrillic", "latin"],
  display: "swap",
  adjustFontFallback: false,
  preload: true,
});

export default async function BaseLayout({ children, locale }) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  // TO DO: get state from store (redux, zustand, mobx, etc.)
  const [isModalOpen] = [false];

  return (
    <html lang={locale}>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#87c7b2" />
      </head>

      <body
        className={`${robotoFont.variable} ${loraFont.variable} ${
          isModalOpen ? "modal-open" : ""
        }`}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />

          <main className="main">{children}</main>

          <DonateSection />
          <Footer />
          <CustomCursor />
          <div id="root-modal"></div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
