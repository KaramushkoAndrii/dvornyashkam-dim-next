import Slider from "@/components/UI/slider/Slider";

import "./sliderAndText.scss";

const SliderAndText = ({ data }) => {
  const { description, img, sliderPosition } = data;
  return (
    <section
      className={`slider-and-text${sliderPosition == "right" ? "" : "--left"}`}
    >
      <p className="slider-and-text__text p">{description}</p>
      <Slider data={img} />
    </section>
  );
};

export default SliderAndText;
