import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TimeRange = (props) => {
  const { theme, setStartDate, setEndDate, startDate, endDate } = props;
  // Calculate the first day of the current month

  // State to manage the visibility of the date picker
  const [dateButton, setDateButton] = useState(false);

  // Function to handle date range selection
  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    // console.log(start);
    setEndDate(end);
    // console.log(end);
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

  // console.log(startDate, endDate);

  return (
    <div className="flex flex-col gap-2 w-full justify-center items-center">
      <button
        className={`active-${theme}-timerange timerange-${theme} w-[300px] rounded-2xl border-gray-300 inter-heading-2 border-2 md:border-2 text-lg lg:text-sm font-light capitalize leading-snug tracking-tight mb-2 sm:mb-0 px-2 py-3`}
        onClick={toggleDatePicker}
      >
        {`${formatDate(startDate)} - ${formatDate(endDate)}`}
      </button>
      {dateButton && (
        <DatePicker
          selected={startDate}
          onChange={handleDateChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          inline
          maxDate={new Date()} // Set maximum date to one week from start date
        />
      )}
    </div>
  );
};

export default TimeRange;
