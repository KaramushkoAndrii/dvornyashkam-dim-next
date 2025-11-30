import { fetchApi } from "@/lib/api";
import NotFoundPage from "./NotFoundPage";

export default async function NotFoundContainer({ locale }) {
  let notFoundData = null;
  try {
    const res = await fetchApi("/not-found", {
      locale,
      populate: "img",
    });
    notFoundData = res.data || {};
    return <NotFoundPage data={notFoundData} />;
  } catch (error) {
    console.error("Failed to fetch 404 data:", error);
  }
}
