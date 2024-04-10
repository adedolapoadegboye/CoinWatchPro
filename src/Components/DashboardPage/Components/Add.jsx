import React, { useState } from "react";
import EntryType from "../Subcomponents/EntryType";
import EntryTypeIncome from "../Subcomponents/EntryTypeIncome";
import EntryTypeExpenses from "../Subcomponents/EntryTypeExpenses";
import EntryTypeDonations from "../Subcomponents/EntryTypeDonations";
import EntryTypeSubscriptions from "../Subcomponents/EntryTypeSubscriptions";
import EntryTypeInvestments from "../Subcomponents/EntryTypeInvestments";
import { UserData } from "../../../Context/UserDataContext";

const Add = ({ setAdd, setSubmitted, submitted }) => {
  const [selectedValue, setSelectedValue] = useState("Income"); // State to manage the selected value from the dropdown
  const [dataFromIncomeForm, setDataFromIncomeForm] = useState(0); // State to store data from the income form
  const [dataFromExpensesForm, setDataFromExpensesForm] = useState(0); // State to store data from the income form
  const [dataFromDonationsForm, setDataFromDonationsForm] = useState(0); // State to store data from the income form
  const [dataFromInvestmentsForm, setDataFromInvestmentsForm] = useState(0); // State to store data from the income form
  const [dataFromSubscriptionsForm, setDataFromSubscriptionsForm] = useState(0); // State to store data from the income form
  const [handleErrorMessage, setHandleErrorMessage] = useState(false); // State to handle error message display
  const {
    updateIncomeDoc,
    updateExpensesDoc,
    updateDonationsDoc,
    updateInvestmentsDoc,
    updateSubscriptionsDoc,
  } = UserData();
  // Function to handle closing the Add component
  const handleClose = () => {
    setAdd(false);
  };

  // Function to display error message if needed
  const handleError = () => {
    if (handleErrorMessage) {
      return (
        <h1 className="noto-sans-1 text-red-400">
          Error! Please enter a valid amount.
        </h1>
      );
    } else {
      return null;
    }
  };

  // Function to handle submitting and closing the Add component
  const handleSubmit = () => {
    // console.log(dataFromIncomeForm);
    // console.log(dataFromExpensesForm);
    // console.log(dataFromDonationsForm);
    // console.log(dataFromInvestmentsForm);
    // console.log(dataFromSubscriptionsForm);
    if (
      dataFromIncomeForm.amount <= 0 &&
      dataFromExpensesForm.amount <= 0 &&
      dataFromDonationsForm.amount <= 0 &&
      dataFromInvestmentsForm.amount <= 0 &&
      dataFromSubscriptionsForm.amount <= 0
    ) {
      setHandleErrorMessage(true);
    } else if (dataFromIncomeForm.amount > 0 && selectedValue === "Income") {
      setHandleErrorMessage(false);
      setSubmitted(!submitted);
      updateIncomeDoc(dataFromIncomeForm);
      setAdd(false);
    } else if (
      dataFromExpensesForm.amount > 0 &&
      selectedValue === "Expenses"
    ) {
      setHandleErrorMessage(false);
      setSubmitted(!submitted);
      updateExpensesDoc(dataFromExpensesForm);
      setAdd(false);
    } else if (
      dataFromInvestmentsForm.amount > 0 &&
      selectedValue === "Investments"
    ) {
      setHandleErrorMessage(false);
      setSubmitted(!submitted);
      updateInvestmentsDoc(dataFromInvestmentsForm);
      setAdd(false);
    } else if (
      dataFromDonationsForm.amount > 0 &&
      selectedValue === "Donations"
    ) {
      setHandleErrorMessage(false);
      setSubmitted(!submitted);
      updateDonationsDoc(dataFromDonationsForm);
      setAdd(false);
    } else if (
      dataFromSubscriptionsForm.amount > 0 &&
      selectedValue === "Subscriptions"
    ) {
      setHandleErrorMessage(false);
      setSubmitted(!submitted);
      updateSubscriptionsDoc(dataFromSubscriptionsForm);
      setAdd(false);
    }
  };

  // Function to handle selection change in the dropdown
  const handleSelect = (value) => {
    setSelectedValue(value);
  };

  const options = [
    "Income",
    "Expenses",
    "Investments",
    "Donations",
    "Subscriptions",
  ];

  // Function to render the appropriate input form based on the selected value
  const renderInputForm = () => {
    if (selectedValue === "Income") {
      return <EntryTypeIncome handleIncomeForm={handleIncomeForm} />;
    } else if (selectedValue === "Expenses") {
      return <EntryTypeExpenses handleExpensesForm={handleExpensesForm} />;
    } else if (selectedValue === "Investments") {
      return (
        <EntryTypeInvestments handleInvestmentsForm={handleInvestmentsForm} />
      );
    } else if (selectedValue === "Donations") {
      return <EntryTypeDonations handleDonationsForm={handleDonationsForm} />;
    } else if (selectedValue === "Subscriptions") {
      return (
        <EntryTypeSubscriptions
          handleSubscriptionsForm={handleSubscriptionsForm}
        />
      );
    }
  };

  // Function to handle income form data
  const handleIncomeForm = (incomeDataForm) => {
    setDataFromIncomeForm(incomeDataForm);
  };

  // Function to handle expenses form data
  const handleExpensesForm = (expensesDataForm) => {
    setDataFromExpensesForm(expensesDataForm);
  };

  // Function to handle donations form data
  const handleDonationsForm = (donationsDataForm) => {
    setDataFromDonationsForm(donationsDataForm);
  };

  // Function to handle donations form data
  const handleInvestmentsForm = (investmentsDataForm) => {
    setDataFromInvestmentsForm(investmentsDataForm);
  };

  // Function to handle donations form data
  const handleSubscriptionsForm = (subscriptionsDataForm) => {
    setDataFromSubscriptionsForm(subscriptionsDataForm);
  };

  return (
    <div className="fixed inset-0 z-10 flex justify-center items-center bg-black bg-opacity-50 w-full h-full">
      <div className="bg-white rounded-lg p-8 flex flex-col h-fit w-[calc(100vw/1.2)] lg:w-[calc(100vw/2)] gap-2 lg:gap-4">
        <h2 className="text-xl font-bold mb-4">Add Entry</h2>
        <div className="flex flex-col justify-center lg:items-center h-fit lg:flex-row gap-2 w-full">
          <p className="text-gray-600 text-sm w-1/3 text-nowrap">
            Select your entry type
          </p>
          <div className="flex flex-col gap-1 w-full h-full z-20">
            <EntryType options={options} onSelect={handleSelect} />
          </div>
        </div>
        <div>{renderInputForm()}</div>
        <div className="flex gap-4 lg:gap-10">
          <button
            onClick={handleSubmit}
            className="active-white-timerange rounded-sm border-gray-300 w-full inter-heading-2 border-2 md:border-2 text-sm font-light text-black capitalize leading-snug tracking-tight mb-2 sm:mb-0 px-2 py-3"
          >
            Submit
          </button>
          <button
            onClick={handleClose}
            className="active-white-timerange rounded-sm border-gray-300 w-full inter-heading-2 border-2 md:border-2 text-sm font-light text-black capitalize leading-snug tracking-tight mb-2 sm:mb-0 px-2 py-3"
          >
            Close
          </button>
        </div>
        {handleError()} {/* Display error message if needed */}
      </div>
    </div>
  );
};

export default Add;
