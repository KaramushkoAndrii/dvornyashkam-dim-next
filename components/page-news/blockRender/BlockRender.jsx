import Slider from "@/components/UI/slider/Slider";
import SliderAndText from "../sliderAndText/SliderAndText";
import FigureContainer from "@/components/UI/figureContainer/FigureContainer";
import FigureAndText from "../figureAndText/FigureAndText";
import ImgAndText from "../imgAndText/ImgAndText";
import RichText from "@/components/UI/richText/RichText";

export default function BlockRender({ blocks }) {
  if (!blocks) {
    return null;
  }

  return blocks.map((block, index) => {
    switch (block.__component) {
      case "news-items.title":
        return (
          <h1 className="h2" key={index}>
            {block.title}
          </h1>
        );

      case "news-items.rich-text":
        return <RichText data={block.text} key={index} />;

      case "news-items.img-and-text":
        return <ImgAndText data={block} key={index} />;

      case "news-items.figure":
        return (
          <FigureContainer
            src={block.img[0].url}
            alt={block.text}
            text={block.text}
            key={index}
          />
        );

      case "news-items.figure-and-text":
        return <FigureAndText data={block} key={index} />;

      case "news-items.slider":
        return <Slider data={block.img} key={index} />;

      case "news-items.slider-and-text":
        return <SliderAndText data={block} key={index} />;

      case "news-items.video":
        return <video src={block.link}>{block.description}</video>;

      default:
        return null;
    }
  });
}
