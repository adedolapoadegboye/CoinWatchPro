import React from "react";
import { TiThMenu } from "react-icons/ti";

const MobileNavButton = (props) => {
  // Destructuring props to get setAdd and add
  const { setMobileMenu, mobileMenu } = props;

  // Function to handle click event
  const handleClick = () => {
    setMobileMenu(!mobileMenu); // Toggle the add state
  };

  return (
    // Button component to trigger the add action
    <button onClick={handleClick} className="hover:scale-125">
      {/* Icon to represent the add action */}
      <TiThMenu size={60} />
    </button>
  );
};

export default MobileNavButton;
