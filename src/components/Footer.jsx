import wave from "./../assets/wave.svg";
import Button from "./Button";
const Footer = () => {
  return (
    <footer>
      <img src={wave} alt="" className="wave" />
      <div className="content section">
        <h1 className="heading">Join the myurls community today</h1>
        <p className="text">
          Join the thousands of users who use myurls to help their followers
          discover all of their content.
        </p>
        <Button text={"Use myurls for free"} />
        <h3>11,049 people have signed up this week!</h3>

        <ul>
            <li className="link">How it works</li>
            <li className="link">Features</li>
            <li className="link">FAQ</li>
            <li className="link">Terms of Services</li>
            <li className="link">Privacy Policy</li>
        </ul>
        <p className="copyright">Copyright © 2022 myurls. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
