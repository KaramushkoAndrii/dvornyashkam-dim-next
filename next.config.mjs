/** @type {import('next').NextConfig} */
const nextConfig = {
  // Instructions:
  // https://nextjs.org/docs/app/building-your-application/styling/sass#customizing-sass-options
  // https://sass-lang.com/documentation/at-rules/use/
  sassOptions: {
    additionalData: `
            @use "./app/styles/vars.scss" as *;
            @use "./app/styles/mixins.scss" as *;
        `,
  },
};

export default nextConfig;
