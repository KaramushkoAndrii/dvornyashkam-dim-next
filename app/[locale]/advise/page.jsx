import { fetchApi } from "@/lib/api";
import AdvicePage from "@/components/page-advice/AdvicePage";

import "./page.scss";

export default async function AdvisePage() {
  const adviceData = await fetchApi("/advice-section?populate=adviceItem");
  const { adviceItem } = adviceData.data;

  return <AdvicePage data={adviceItem} />;
}
