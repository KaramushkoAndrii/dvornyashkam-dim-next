// https://github.com/amannn/next-intl/blob/main/examples/example-app-router/src/app/not-found.tsx

import { routing } from "@/i18n/routing";

import BaseLayout from "@/components/base/BaseLayout";
import NotFoundPage from "@/components/page-not-found/NotFoundPage";

// This page renders when a route like `/unknown.txt` is requested.
// In this case, the layout at `app/[locale]/layout.jsx` receives
// an invalid value as the `[locale]` param and calls `notFound()`.

export default function RootNotFoundPage() {
  return (
    <BaseLayout locale={routing.defaultLocale}>
      <NotFoundPage />
    </BaseLayout>
  );
}
