# Frontend of «Dvoronyshkam dim» site

«Dvoronyshkam dim» is an animal shelter in Ukraine

Based on [React.js project](https://github.com/KaramushkoAndrii/dvornyshkam-dim)

## TO DO list:

- [x] add `next-intl` package. [Official guide i18n](https://next-intl.dev/docs/getting-started/app-router/with-i18n-routing) and [YouTube video](https://www.youtube.com/watch?v=2Jh9olZXBfw)
- [x] add store [zustand](https://zustand-demo.pmnd.rs/), or [redux](https://react-redux.js.org/introduction/getting-started), or [mobx](https://mobx.js.org/README.html), etc.
- [x] control Modal open/close state in Store
- [ ] data for all sections of the page should be obtained from the backend in the page component and then passed to the components through props (see `HomePage.jsx` and her sections components as example)
- [x] add `typography.scss` and classes `h1 - h6` for styling titles
- [x] `page__title -> title` or better solution is replace it to `h1` SCSS class from `typography.scss`
- [x] check all `.scss` and `.jsx` files and change name of BEM blocks and elements from [Camel or Pascal case to Kebab case](https://medium.com/@alivander/camel-pascal-snake-case-%D0%B8-%D0%B4%D1%80%D1%83%D0%B3%D0%B8%D0%B5-%D1%81%D1%82%D0%B8%D0%BB%D0%B8-%D0%BD%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D1%8F-288ec62ca0d0). Example: `/app/about/page.jsx` and `/app/about/page.scss` (compare it with your React page version and make another pages structure and styles similarly)
- [x] fix all `.scss` as I described to you in Telegram earlier (2025-02-07).
- [x] in folder `components` create subfolders: `common`, `UI` and folders with names like existing Pages (`page-about`, etc.). In `UI` folder must be moved all components like `Button`. The `common` folder contains components that can used in many places in the project. The `[page]` folders contain components that are used only on a specific page. See `components/page-home/..` folder for example.
- [ ] - OPTIONAL `<img />` replace to [Image](https://nextjs.org/docs/pages/api-reference/components/image)
- [x] change the extension from `.jsx` to `.js` in all files in the `data` folder
- [ ] change the element sizes from `rem` to `px`
- [ ] check all style codes for fixed height. The height of the elements should be flexible. The exception is the element's full-screen mode.
- [ ] change the element sizes from `dvh`, `dvw`, `vh`, `vw` to `px`. The exception is the element's full-screen mode.
- [ ] use [ReactForm](https://react-hook-form.com/) for the contact form
- [ ] redo the filters as you did earlier in the Movie API project
- [ ] fix unstable animation of the first screens on pages after changing the route
- [ ] delete `// TO DO` comments from code after realization all of them

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
