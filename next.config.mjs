import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
  },
  // Instructions:
  // https://nextjs.org/docs/app/building-your-application/styling/sass#customizing-sass-options
  // https://sass-lang.com/documentation/at-rules/use/
  sassOptions: {
    additionalData: `
            @use "./assets/styles/vars.scss" as *;
            @use "./assets/styles/mixins.scss" as *;
        `,
  },
};

export default withNextIntl(nextConfig);
