import FigureContainer from "@/components/UI/figureContainer/FigureContainer";
import RichText from "@/components/UI/richText/RichText";

const FigureAndText = ({ data }) => {
  const { description, img, text } = data;

  return (
    <section className="figure-and-text">
      <FigureContainer src={img.url} alt={img.name} text={description} />
      <RichText data={text} />
    </section>
  );
};

export default FigureAndText;
