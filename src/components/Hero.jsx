import Button from "./Button";
import image from "./../assets/header_image.png";
const Hero = () => {
  return (
    <header>
      <div className="header--left_data section">
        <h1 className="heading">
          Now, you only
          <br />
          need one link.
        </h1>
        <p className="text">
          Share more with your followers in a single<br />click. Myurls makes it easy
          to link to all of<br />your content in one place.
        </p>
        <Button text={"Use myurls for free"} primary={true} />
        <h3>10,091 people have signed up this week!</h3>
      </div>
      <div className="header--right_data">
        <img src={image} alt="" />
      </div>
    </header>
  );
};

export default Hero;
