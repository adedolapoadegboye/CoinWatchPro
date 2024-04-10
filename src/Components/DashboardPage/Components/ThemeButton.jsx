import React from "react";
import { FaMoon, FaRegMoon } from "react-icons/fa";

const ThemeButton = (props) => {
  const { theme, setTheme } = props;
  // Function to handle theme change to dark
  const handleBlackTheme = () => {
    setTheme("black");
  };

  // Function to handle theme change to light
  const handleWhiteTheme = () => {
    setTheme("white");
  };

  // Function to conditionally render the button based on the current theme
  const toggleRender = () => {
    if (theme === "white") {
      // Render button for dark theme
      return (
        <button onClick={handleBlackTheme}>
          <FaMoon size={20} className="hover:scale-125" />
        </button>
      );
    } else if (theme === "black") {
      // Render button for light theme
      return (
        <button onClick={handleWhiteTheme}>
          <FaRegMoon size={20} color="white" className="hover:scale-125" />
        </button>
      );
    }
  };

  // Render the button based on the current theme
  return toggleRender();
};

export default ThemeButton;
