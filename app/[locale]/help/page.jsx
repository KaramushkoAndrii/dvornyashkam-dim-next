import { fetchApi } from "@/lib/api";
import HelpHeroSection from "@/components/page-help/helpHeroSection/HelpHeroSection";

export default async function HelpPage() {
  const helpData = await fetchApi("/help-page?populate=helpListDetailed");
  const helpLIst = await fetchApi("/help-section?populate=helpListItem");

  const helpDetailsData = helpData.data.helpListDetailed;
  const dataHelpSection = {
    title: helpLIst.data?.title || "",
    description: helpLIst.data?.description || "",
    items: helpLIst.data.helpListItem.map((item) => item),
  };

  return (
    <HelpHeroSection
      content={helpData.data}
      helpData={dataHelpSection}
      items={helpDetailsData}
    />
  );
}
