/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { TbBrandCashapp } from "react-icons/tb";

const SummaryIncome = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { userData, submitted, setSubmitted } = props;
  const [incomeSum, setIncomeSum] = useState(0);
  const [incomeCount, setIncomeCount] = useState(1);

  const handleTotalIncome = () => {
    if (userData && userData.incomes) {
      const totalIncome = userData.incomes.reduce(
        (total, income) => parseFloat(total) + parseFloat(income.amount),
        0
      );
      // console.log(totalIncome);
      setIncomeSum(totalIncome);
    } else {
      setIncomeSum(0);
      // setSubmitted(false);
    }
  };

  const handleIncomeCount = () => {
    if (userData && userData.incomes) {
      const count = userData.incomes.length;
      setIncomeCount(count);
      return count;
    }
  };

  const handleCountRender = () => {
    if (incomeCount > 1) {
      return <h3 className="lg:text-lg inter-heading">{incomeCount - 1}</h3>;
    } else {
      return <h3 className="lg:text-lg inter-heading">0</h3>;
    }
  };

  useEffect(() => {
    handleTotalIncome();
    handleIncomeCount();
  }, [userData, incomeSum, incomeCount, submitted]);

  return (
    <div>
      {/* Title */}
      <div className="flex justify-start">
        <h2 className="inter-heading-2 text-xl capitalize leading-snug tracking-tight mb-2 sm:mb-0 px-2 py-2">
          Income Summary
        </h2>
      </div>
      {/* Summary Cards */}
      <div className="grid gap-2 lg:grid-cols-6 lg:grid-flow-col lg:grid-rows-1 lg:gap-4 px-2">
        {/* Total Income Count Card */}
        <div className="border-2 border-gray-200 rounded-lg flex justify-between px-3 py-3">
          <div className="flex flex-col justify-between">
            <h3 className="lg:text-sm font-semibold text-gray-500 pb-4">
              INCOME COUNT
            </h3>
            {handleCountRender()}{" "}
          </div>
          <div className="px-2">
            <TbBrandCashapp size={20} />
          </div>
        </div>
        {/* Total Income Card */}
        <div className="border-2 border-gray-200 rounded-lg flex justify-between px-3 py-3">
          <div className="flex flex-col justify-between">
            <h3 className="lg:text-sm font-semibold text-gray-500 pb-4">
              TOTAL INCOME
            </h3>
            <h3 className="lg:text-lg inter-heading">CA$ {incomeSum}</h3>
          </div>
          <div className="px-2">
            <TbBrandCashapp size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryIncome;
