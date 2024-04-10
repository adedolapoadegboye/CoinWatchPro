import React, { useState } from "react";

/**
 * Component for selecting an entry type from a dropdown list.
 * @param {Object} props - Component properties.
 * @param {Array} props.options - An array of options to be displayed in the dropdown list.
 * @param {Function} props.onSelect - A function to handle selection of an option.
 */
const EntryType = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Function to handle selection of an option.
   * @param {string} option - The selected option.
   */
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div className="relative inline-block text-left noto-sans-1">
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          aria-haspopup="true"
          aria-expanded={isOpen ? "true" : "false"}
        >
          {selectedOption}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleOptionSelect(option)}
                className={`${
                  option === selectedOption
                    ? "bg-gray-300 text-gray-900"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                } block px-4 py-2 text-sm w-full text-left`}
                role="menuitem"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EntryType;
