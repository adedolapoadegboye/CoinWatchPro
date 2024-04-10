import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TimeButton = () => {
  // Calculate the first day of the current month
  const firstDayOfMonth = new Date();
  firstDayOfMonth.setDate(1); // Set the date to the first day of the month

  // State to manage the selected start date
  const [startDate, setStartDate] = useState(firstDayOfMonth);

  // State to manage the visibility of the date picker
  const [dateButton, setDateButton] = useState(false);

  // Function to handle date selection
  const handleDateChange = (date) => {
    setStartDate(date);
  };

  // Function to toggle date picker visibility
  const toggleDatePicker = () => {
    setDateButton(!dateButton);
  };

  // Function to format date in "MMMM d, yyyy" format
  const formatDate = (date) => {
    // Check if date is null or undefined
    if (!date) return "";

    // Options for date formatting
    const options = { month: "long", day: "numeric", year: "numeric" };

    // Format the date using toLocaleDateString() method
    return new Date(date).toLocaleDateString("en-US", options);
  };

  return (
    <div className="flex flex-col gap-2 w-full justify-center items-center">
      <button
        className="active-white-timerange w-[300px] hover:bg-black rounded-2xl border-gray-300 inter-heading-2 border-2 md:border-2 text-lg lg:text-sm font-light text-black capitalize leading-snug tracking-tight mb-2 sm:mb-0 px-2 py-3"
        onClick={toggleDatePicker}
      >
        {`${formatDate(startDate)}`}
      </button>
      {dateButton && (
        <DatePicker
          selected={startDate}
          onChange={handleDateChange}
          startDate={startDate}
          inline
          maxDate={new Date()} // Set maximum date to one week from start date
        />
      )}
    </div>
  );
};

export default TimeButton;
