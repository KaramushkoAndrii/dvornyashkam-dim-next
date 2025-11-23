import { fetchApi } from "@/lib/api";
import HelpHeroSection from "@/components/page-help/helpHeroSection/HelpHeroSection";

export default async function HelpPage({ params }) {
  const { locale } = await params;
  const helpData = await fetchApi("/help-page", {
    locale,
    populate: "helpListDetailed",
  });
  const helpListDetailed = helpData.data.helpListDetailed;

  const helpList = await fetchApi("/help-section", {
    locale,
    populate: ["helpListItem", "btn"],
  });

  return (
    <HelpHeroSection
      content={helpData.data}
      helpData={helpList.data}
      items={helpListDetailed}
    />
  );
}
