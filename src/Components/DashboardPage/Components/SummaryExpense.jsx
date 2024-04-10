/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { TbShoppingCart } from "react-icons/tb";

const SummaryExpense = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { userData, submitted, setSubmitted } = props;
  const [expenseSum, setExpenseSum] = useState(0);
  const [expenseCount, setExpenseCount] = useState(1);

  const handleAdd = () => {
    if (submitted) {
      setSubmitted(false);
    } else {
    }
  };

  const handleTotalExpense = () => {
    if (userData && userData.expenses) {
      const totalExpense = userData.expenses.reduce(
        (total, expense) => parseFloat(total) + parseFloat(expense.amount),
        0
      );
      // console.log(totalExpense);
      setExpenseSum(totalExpense);
      handleAdd();
    } else {
      setExpenseSum(0);
    }
  };

  const handleExpenseCount = () => {
    if (userData && userData.expenses) {
      const count = userData.expenses.length;
      setExpenseCount(count);
      handleAdd();
      return count;
    }
  };

  const handleCountRender = () => {
    if (expenseCount > 1) {
      return <h3 className="lg:text-lg inter-heading">{expenseCount - 1}</h3>;
    } else {
      return <h3 className="lg:text-lg inter-heading">0</h3>;
    }
  };

  useEffect(() => {
    handleTotalExpense();
    handleExpenseCount();
  }, [userData, expenseSum, expenseCount, submitted]);

  return (
    <div>
      {/* Title */}
      <div className="flex justify-start">
        <h2 className="inter-heading-2 text-xl capitalize leading-snug tracking-tight mb-2 sm:mb-0 px-2 py-2">
          Expense Summary
        </h2>
      </div>
      {/* Summary Cards */}
      <div className="grid gap-2 lg:grid-cols-6 lg:grid-flow-col lg:grid-rows-1 lg:gap-4 px-2">
        {/* Total Expense Count Card */}
        <div className="border-2 border-gray-200 rounded-lg flex justify-between px-3 py-3">
          <div className="flex flex-col justify-between">
            <h3 className="lg:text-sm font-semibold text-gray-500 pb-4">
              EXPENSE COUNT
            </h3>
            {handleCountRender()}{" "}
          </div>
          <div className="px-2">
            <TbShoppingCart size={20} />
          </div>
        </div>
        {/* Total Expense Card */}
        <div className="border-2 border-gray-200 rounded-lg flex justify-between px-3 py-3">
          <div className="flex flex-col justify-between">
            <h3 className="lg:text-sm font-semibold text-gray-500 pb-4">
              TOTAL EXPENSE
            </h3>
            <h3 className="lg:text-lg inter-heading">CA$ {expenseSum}</h3>
          </div>
          <div className="px-2">
            <TbShoppingCart size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryExpense;
