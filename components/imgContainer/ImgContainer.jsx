import "./imgContainer.scss";

const ImgContainer = ({ src, alt }) => {
  return (
    <div className="img-container">
      <img className="img-container__img" src={src} alt={alt} loading="lazy" />
    </div>
  );
};

export default ImgContainer;
