// https://github.com/amannn/next-intl/blob/main/examples/example-app-router/src/app/layout.tsx
import "../assets/styles/normalize.scss";
import "../assets/styles/global.scss";
import "../assets/styles/typography.scss";

// Since we have a `not-found.jsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }) {
  return children;
}
