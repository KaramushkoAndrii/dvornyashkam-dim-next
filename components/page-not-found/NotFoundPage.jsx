import { useTranslations } from "next-intl";
import Image from "next/image";
import Button from "../UI/button/Button";
import { fetchApi } from "@/lib/api";

import "./NotFoundPage.scss";

export default function NotFoundPage() {
  const t = useTranslations("NotFound");

  return (
    <div className="not-found-page">
      <div className="not-found-page__aside">
        <div className="not-found-page__content">
          <h2 className="not-found-page__title h2">
            <b>Ой, мы потерялись</b>
          </h2>
          <p className="not-found-page__description p">
            Страница которую вы ищите. не существует, но вы можете найти других
            животных в нашем приюте
          </p>
        </div>
        <div className="not-found-page__buttons">
          <Button text={t("animals")} href="/animals" variant="to-animals" />
          <Button text={t("home")} href="/" variant="to-home" />
        </div>
      </div>
      <div className="not-found-page__image">
        <Image src="/images/happy2.png" fill={true} />
      </div>
    </div>
  );
}
