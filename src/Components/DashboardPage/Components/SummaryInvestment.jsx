/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

const SummaryExpense = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { userData, submitted, setSubmitted } = props;
  const [investmentSum, setInvestmentSum] = useState(0);
  const [investmentCount, setInvestmentCount] = useState(1);

  const handleAdd = () => {
    if (submitted) {
      setSubmitted(false);
    } else {
    }
  };

  const handleTotalInvestment = () => {
    if (userData && userData.investments) {
      const totalInvestment = userData.investments.reduce(
        (total, investment) =>
          parseFloat(total) + parseFloat(investment.amount),
        0
      );
      setInvestmentSum(totalInvestment);
      handleAdd();
    } else {
      setInvestmentSum(0);
    }
  };

  const handleInvestmentCount = () => {
    if (userData && userData.investments) {
      const count = userData.investments.length;
      setInvestmentCount(count);
      handleAdd();
      return count;
    }
  };

  const handleCountRender = () => {
    if (investmentCount > 1) {
      return (
        <h3 className="lg:text-lg inter-heading">{investmentCount - 1}</h3>
      );
    } else {
      return <h3 className="lg:text-lg inter-heading">0</h3>;
    }
  };

  useEffect(() => {
    handleTotalInvestment();
    handleInvestmentCount();
  }, [userData, investmentSum, investmentCount, submitted]);

  return (
    <div>
      {/* Title */}
      <div className="flex justify-start">
        <h2 className="inter-heading-2 text-xl capitalize leading-snug tracking-tight mb-2 sm:mb-0 px-2 py-2">
          Investment Summary
        </h2>
      </div>
      {/* Summary Cards */}
      <div className="grid gap-2 lg:grid-cols-6 lg:grid-flow-col lg:grid-rows-1 lg:gap-4 px-2">
        {/* Total Expense Count Card */}
        <div className="border-2 border-gray-200 rounded-lg flex justify-between px-3 py-3">
          <div className="flex flex-col justify-between">
            <h3 className="lg:text-sm font-semibold text-gray-500 pb-4">
              INVESTMENT COUNT
            </h3>
            {handleCountRender()}{" "}
          </div>
          <div className="px-2">
            <FaMoneyBillTrendUp size={20} />
          </div>
        </div>
        {/* Total Expense Card */}
        <div className="border-2 border-gray-200 rounded-lg flex justify-between px-3 py-3">
          <div className="flex flex-col justify-between">
            <h3 className="lg:text-sm font-semibold text-gray-500 pb-4">
              TOTAL INVESTMENTS
            </h3>
            <h3 className="lg:text-lg inter-heading">CA$ {investmentSum}</h3>
          </div>
          <div className="px-2">
            <FaMoneyBillTrendUp size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryExpense;
