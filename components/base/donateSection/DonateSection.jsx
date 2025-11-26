import "./donateSection.scss";

import { fetchApi } from "@/lib/api";
import DonateList from "./DonateList";

export default async function DonateSection() {
  const donateRequest = await fetchApi("/donate-section", {
    populate: "DonateItem.logo",
  });

  return <DonateList donateList={donateRequest.data} />;
}
