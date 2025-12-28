import Image from "next/image";

import "./imgAndText.scss";

const ImgAndText = ({ data }) => {
  const { description, img, imgPosition = "right" } = data;

  return (
    <div className="img-and-text">
      <p className="p img-and-text__text">{description}</p>
      <div
        className={`img-and-text__img ${
          imgPosition == "right" ? null : "left"
        }`}
      >
        <Image src={img.url} fill />
      </div>
    </div>
  );
};

export default ImgAndText;
