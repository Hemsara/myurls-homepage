import Feature from "./Features";
import f1 from "./../assets/feature_one.png";
import f2 from "./../assets/feature_two.png";
import f3 from "./../assets/feature_three.png";

const FeatureSection = () => {
  return (
    <section className="features_section section">
      <Feature reverse={false} image={f1} title={"Use Anywhere"} description={"Share all of your content, everywhere. There is no limit to where your myurls link can be used."} />
      <Feature reverse={true} image={f2} title={"Personalize Your Profile"} description={"Make your profile as unique as you are. Customize colors, fonts, background images, and more."} />
      <Feature reverse={false} image={f3} title={"Get Real-Time Analytics"} description={"Track profile views and individual link clicks to see what content your audience is most interested in."} />
    </section>
  );
};

export default FeatureSection;
