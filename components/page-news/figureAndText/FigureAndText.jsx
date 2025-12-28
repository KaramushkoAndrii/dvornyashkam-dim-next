import FigureContainer from "@/components/UI/figureContainer/FigureContainer";
import RichText from "@/components/UI/richText/RichText";
import "./figureAndText.scss";

const FigureAndText = ({ data }) => {
  const { description, img, text, imgPosition } = data;

  return (
    <section className="figure-and-text">
      <RichText data={text} />
      <FigureContainer
        style={{ order: imgPosition == "right" ? "0" : "-1" }}
        src={img.url}
        alt={img.name}
        text={description}
      />
    </section>
  );
};

export default FigureAndText;
