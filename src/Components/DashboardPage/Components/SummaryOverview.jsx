/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { TbBrandCashapp } from "react-icons/tb";
import { RiBankLine } from "react-icons/ri";
import { BsCart4 } from "react-icons/bs";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { BiDonateHeart } from "react-icons/bi";
import { MdSubscriptions } from "react-icons/md";

const SummaryOverview = (props) => {
  const { userData, submitted, setSubmitted } = props;
  const [incomeSum, setIncomeSum] = useState(0);
  const [balance, setBalance] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [donations, setDonations] = useState(0);
  const [investments, setInvestments] = useState(0);
  const [subscriptions, setSubscriptions] = useState(0);

  const handleTotalIncome = () => {
    if (userData && userData.incomes) {
      const totalIncome = userData.incomes.reduce(
        (total, income) => parseFloat(total) + parseFloat(income.amount),
        0
      );
      // console.log(totalIncome);
      setIncomeSum(totalIncome);
      handleBalance();
    } else {
      setIncomeSum(0);
    }
  };

  const handleBalance = () => {
    const userBalance =
      incomeSum - (expenses + investments + donations + subscriptions);
    setBalance(userBalance);
    // console.log("Balance: ", userBalance);
    // console.log("Submitted: ", submitted);
    if (submitted) {
      // handleRefresh();
      setSubmitted(false);
    }
  };

  const handleExpenses = () => {
    if (userData && userData.expenses) {
      const totalExpenses = userData.expenses.reduce(
        (total, expense) => total + parseFloat(expense.amount),
        0
      );
      setExpenses(totalExpenses);
      handleBalance();
    } else {
      setExpenses(0);
    }
  };

  const handleInvestments = () => {
    if (userData && userData.investments) {
      const totalInvestments = userData.investments.reduce(
        (total, investment) => total + parseFloat(investment.amount),
        0
      );
      setInvestments(totalInvestments);
      handleBalance();
    } else {
      setInvestments(0);
    }
  };

  const handleDonations = () => {
    if (userData && userData.donations) {
      const totalDonations = userData.donations.reduce(
        (total, donation) => total + parseFloat(donation.amount),
        0
      );
      setDonations(totalDonations);
      handleBalance();
    } else {
      setDonations(0);
    }
  };

  const handleSubscriptions = () => {
    if (userData && userData.subscriptions) {
      const totalSubscriptions = userData.subscriptions.reduce(
        (total, subscription) => total + parseFloat(subscription.amount),
        0
      );
      setSubscriptions(totalSubscriptions);
      handleBalance();
    } else {
      setSubscriptions(0);
    }
  };

  useEffect(() => {
    handleTotalIncome();
    handleExpenses();
    handleDonations();
    handleInvestments();
    handleSubscriptions();
  }, [userData, expenses, incomeSum, subscriptions, investments, donations]);

  return (
    <div>
      {/* Title */}
      <div className="flex justify-start">
        <h2 className="inter-heading-2 text-xl capitalize leading-snug tracking-tight mb-2 sm:mb-0 px-2 py-2">
          Summary
        </h2>
      </div>
      {/* Summary Cards */}
      <div className="grid gap-2 lg:grid-cols-6 lg:grid-flow-col lg:grid-rows-1 lg:gap-4 px-2">
        {/* Total Income Card */}
        <div className="border-2 border-gray-200 rounded-lg flex w-full justify-between px-3 py-3 w-full">
          <div className="flex flex-col justify-between w-3/4">
            <h3 className="lg:text-sm font-semibold text-gray-500 pb-4">
              TOTAL INCOME
            </h3>
            <h3 className="lg:text-lg inter-heading">CA$ {incomeSum}</h3>
          </div>
          <div className="px-2 w-1/4">
            <TbBrandCashapp size={20} />
          </div>
        </div>
        {/* Available Balance Card */}
        <div className="border-2 border-gray-200 rounded-lg flex justify-between w-full px-3 py-3">
          <div className="flex flex-col justify-between w-3/4">
            <h3 className="lg:text-sm font-semibold text-gray-500 pb-4">
              AVAILABLE BALANCE
            </h3>
            <h3 className="lg:text-lg inter-heading">CA$ {balance}</h3>
          </div>
          <div className="px-2 w-1/4">
            <RiBankLine size={20} />
          </div>
        </div>
        {/* Total Expenses Card */}
        <div className="border-2 border-gray-200 rounded-lg flex justify-between w-full px-3 py-3">
          <div className="flex flex-col justify-between w-3/4">
            <h3 className="lg:text-sm font-semibold text-gray-500 pb-4">
              TOTAL EXPENSES
            </h3>
            <h3 className="lg:text-lg inter-heading">CA$ {expenses}</h3>
          </div>
          <div className="px-2 w-1/4">
            <BsCart4 size={20} />
          </div>
        </div>
        {/* Total Investments Card */}
        <div className="border-2 border-gray-200 rounded-lg flex justify-between w-full px-3 py-3">
          <div className="flex flex-col justify-between w-3/4">
            <h3 className="lg:text-sm font-semibold text-gray-500 pb-4">
              TOTAL INVESTMENTS
            </h3>
            <h3 className="lg:text-lg inter-heading">CA$ {investments}</h3>
          </div>
          <div className="px-2 w-1/4">
            <FaMoneyBillTrendUp size={20} />
          </div>
        </div>
        {/* Total Donations Card */}
        <div className="border-2 border-gray-200 rounded-lg flex justify-between w-full px-3 py-3">
          <div className="flex flex-col justify-between w-3/4">
            <h3 className="lg:text-sm font-semibold text-gray-500 pb-4">
              TOTAL DONATIONS
            </h3>
            <h3 className="lg:text-lg inter-heading">CA$ {donations}</h3>
          </div>
          <div className="px-2 w-1/4">
            <BiDonateHeart size={20} />
          </div>
        </div>
        {/* Total Subscriptions Card */}
        <div className="border-2 border-gray-200 rounded-lg flex justify-between px-3 py-3 w-full">
          <div className="flex flex-col justify-between w-3/4">
            <h3 className="lg:text-sm font-semibold text-gray-500 pb-4">
              TOTAL SUBSCRIPTIONS
            </h3>
            <h3 className="lg:text-lg inter-heading">CA$ {subscriptions}</h3>
          </div>
          <div className="px-2 w-1/4">
            <MdSubscriptions size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryOverview;
