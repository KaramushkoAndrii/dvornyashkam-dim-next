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

  return blocks.map((block) => {
    switch (block.__component) {
      case "news-items.title":
        return <h1 className="h2">{block.title}</h1>;

      case "news-items.rich-text":
        console.log(`Show this ${block}`);
        return <RichText data={block.text} />;

      case "news-items.img-and-text":
        return <ImgAndText data={block} />;

      case "news-items.figure":
        return (
          <FigureContainer
            src={block.img[0].url}
            alt={block.text}
            text={block.text}
          />
        );

      case "news-items.figure-and-text":
        console.log(block);
        return <FigureAndText data={block} />;

      case "news-items.slider":
        return <Slider data={block.img} />;

      case "news-items.slider-and-text":
        return <SliderAndText data={block} />;

      case "news-items.video":
        return <video src={block.link}>{block.description}</video>;

      default:
        return null;
    }
  });
}
