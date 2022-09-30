const Button = ({ text , primary }) => {
  return <button className="button" style={{'backgroundColor' : primary ? "#7979FF" : "#DEDEFF" , "color" : primary ? "#ffffff" : "#7979FF"}}>{text}</button>;
};

export default Button;
