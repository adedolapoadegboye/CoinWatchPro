import React, { useState, useEffect } from "react";
import EntryType from "./EntryType";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

/**
 * Component for adding investment entries.
 * @param {Object} props - Component properties.
 * @param {Function} props.handleInvestmentForm - Function to handle form data for investment entries.
 */
const EntryTypeInvestments = ({ handleInvestmentsForm }) => {
  // Calculate the first day of the current month
  const firstDayOfMonth = new Date();
  firstDayOfMonth.setDate(1);

  // Initialize state for form data and date picker visibility
  const [formData, setFormData] = useState({
    date: firstDayOfMonth,
    amount: "",
    category: "Crypto",
    notes: "",
  });
  const [dateButton, setDateButton] = useState(false);
  const [startDate, setStartDate] = useState(firstDayOfMonth);

  // Handle form data changes and trigger the provided function
  useEffect(() => {
    handleInvestmentsForm(formData);
  }, [formData, handleInvestmentsForm]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle category input changes
  const handleCategoryInputChange = (value) => {
    setFormData({ ...formData, category: value });
  };

  // Options for investment categories
  const options = [
    "Crypto",
    "Stocks",
    "Bonds",
    "Real Estate",
    "Mutual Funds",
    "ETFs",
    "Commodities",
    "Options",
    "Others",
  ];

  // Handle date selection
  const handleDateChange = (date) => {
    setStartDate(date);
    setFormData({ ...formData, date: date });
  };

  // Toggle date picker visibility
  const toggleDatePicker = () => {
    setDateButton(!dateButton);
  };

  // Format date in "MMMM d, yyyy" format
  const formatDate = (date) => {
    if (!date) return "";
    const options = { month: "long", day: "numeric", year: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  return (
    <div className="flex flex-col gap-4 w-full h-full relative">
      <div className="flex flex-col justify-center lg:items-center h-fit lg:flex-row gap-2 w-full z-10">
        <label
          htmlFor="name"
          className="text-gray-600 text-sm w-1/3 text-nowrap"
        >
          Investment Date
        </label>
        <div className="w-full flex flex-col gap-2 relative">
          <button
            className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            onClick={toggleDatePicker}
          >
            {`${formatDate(startDate)}`}
          </button>
          {dateButton && (
            <div className="origin-center	top-10 right-2 lg:right-0 absolute mt-2 me-2 lg:me-5 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <DatePicker
                showIcon
                selected={startDate}
                onChange={handleDateChange}
                startDate={startDate}
                inline
                maxDate={new Date()}
              />
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-center lg:items-center h-fit lg:flex-row gap-2 w-full">
        <label
          htmlFor="amount"
          className="text-gray-600 text-sm w-1/3 text-nowrap"
        >
          Amount
        </label>
        <input
          type="number"
          id="amount"
          name="amount"
          min="0"
          step="100"
          required
          value={formData.amount}
          onChange={handleInputChange}
          className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="flex flex-col justify-center lg:items-center h-fit lg:flex-row gap-2 w-full">
        <label
          htmlFor="category"
          className="text-gray-600 text-sm w-1/3 text-nowrap"
        >
          Investment Type
        </label>
        <div className="flex flex-col gap-1 w-full h-full">
          <EntryType options={options} onSelect={handleCategoryInputChange} />
        </div>
      </div>
      <div className="flex flex-col justify-center lg:items-center h-fit lg:flex-row gap-2 w-full">
        <label
          htmlFor="notes"
          className="text-gray-600 text-sm w-1/3 text-nowrap"
        >
          Notes (optional)
        </label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleInputChange}
          rows={5}
          className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:
ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        ></textarea>
      </div>
    </div>
  );
};

export default EntryTypeInvestments;
