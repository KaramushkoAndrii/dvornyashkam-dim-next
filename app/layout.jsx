import { Roboto, Lora } from "next/font/google";

import "./styles/normalize.scss";
import "./styles/global.scss";

// Init Fonts
const robotoFont = Roboto({
  variable: "--font-roboto",
  weight: ["400", "500"],
  subsets: ["cyrillic", "latin"],
  display: "swap",
  adjustFontFallback: false,
  preload: true,
});

const loraFont = Lora({
  variable: "--font-lora",
  weight: ["400", "500", "600", "700"],
  subsets: ["cyrillic", "latin"],
  display: "swap",
  adjustFontFallback: false,
  preload: true,
});

export const metadata = {
  title: {
    template: "%s | Dvoronyshkam dim",
    default: "Dvoronyshkam dim", // a default is required when creating a template
  },
  description: "'Dvoronyshkam dim' is an animal shelter in Ukraine",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${robotoFont.variable} ${loraFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
