const VideoContainer = ({ data }) => {
  const { src, type, ...rest } = data;

  return (
    <div className="video__container">
      <video>
        <source src={src} type={type} />
      </video>
    </div>
  );
};

export default VideoContainer;
