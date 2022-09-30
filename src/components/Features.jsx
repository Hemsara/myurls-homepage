const Feature = ({ reverse, image, title, description }) => {
  return (
    <div
      className="feature"
      style={{ flexDirection: reverse ? "row-reverse" : "row" }}
    >
      <div className="feature_image">
        <img
          src={image}
          alt=""
          style={{ marginRight: reverse ? "0px" : "70px" }}
        />
      </div>
      <div
        className="content"
        style={{ marginRight: reverse ? "70px" : "0px" }}
      >
        <h1 className="heading">{title}</h1>
        <p className="text">{description}</p>
      </div>
    </div>
  );
};

export default Feature;
