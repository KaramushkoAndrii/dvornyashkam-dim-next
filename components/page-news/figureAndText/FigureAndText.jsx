import FigureContainer from "@/components/UI/figureContainer/FigureContainer";

const FigureAndText = ({ data }) => {
  const { description, img, text } = data;

  return (
    <section className="figure-and-text">
      <FigureContainer src={img.url} alt={img.name} text={description} />
    </section>
  );
};

export default FigureAndText;
