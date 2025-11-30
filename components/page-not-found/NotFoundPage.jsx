import { useTranslations } from "next-intl";
import Image from "next/image";
import Button from "../UI/button/Button";

import "./NotFoundPage.scss";

export default function NotFoundPage({ data }) {
  const t = useTranslations("NotFound");

  const { title, description, img } = data;

  return (
    <div className="not-found-page">
      <div className="not-found-page__aside">
        <div className="not-found-page__content">
          <h2 className="not-found-page__title h2">
            <b>{title}</b>
          </h2>
          <p className="not-found-page__description p">{description}</p>
        </div>
        <div className="not-found-page__buttons">
          <Button text={t("animals")} href="/animals" variant="to-animals" />
          <Button text={t("home")} href="/" variant="to-home" />
        </div>
      </div>
      <div className="not-found-page__image">
        <Image src={img.url} fill={true} alt={img.name} sizes="50vw" />
      </div>
    </div>
  );
}
