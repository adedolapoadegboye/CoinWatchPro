import React from "react";
import { IoAddCircle } from "react-icons/io5";

const AddButton = (props) => {
  // Destructuring props to get setAdd and add
  const { setAdd, add } = props;

  // Function to handle click event
  const handleClick = () => {
    setAdd(!add); // Toggle the add state
  };

  return (
    // Button component to trigger the add action
    <button onClick={handleClick} className="hover:scale-125">
      {/* Icon to represent the add action */}
      <IoAddCircle size={60} />
    </button>
  );
};

export default AddButton;
