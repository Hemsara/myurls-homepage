import logo from "./../assets/logo.svg";
import Button from "./Button";
import menu from "./../assets/menu_icon.svg";

import { useEffect, useState } from "react";
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleScroll() {
    if (window.scrollY > 12) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }

  return (
    <nav
      style={{
        boxShadow: isScrolled && "12px 0 15px -4px rgba(184, 184, 184, 0.8)",
      }}
    >
      <div className="logo">
        <img src={logo} alt="" className="logo_image" />
        <a onClick={() => setShowLinks(!showLinks)}>
          <img src={menu} alt="" className="menu_icon" />
        </a>
      </div>
      <div className={`links ${showLinks && "show_link"}`}>
        <ul>
          <span className="nav_links">
            <li className="link">How it works</li>
            <li className="link">Features</li>
          </span>
          <span className="navbar_actions">
            <Button text={"Log in"} primary={false} />
            <Button text={"Sign Up"} primary={true} />
          </span>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
