/* eslint-disable no-unused-vars */
import React from "react";
import { IncomePieChart } from "./Charts";
import Tables from "./Tables";
import "chart.js/auto";

const IncomeAnalysis = (props) => {
  const { userData, dynamicThemeClass, dynamicTextClass, theme, setSubmit } =
    props;
  // console.log(userData);

  return (
    <div className="flex flex-col w-full h-full justify-start">
      {/* Title for the overview section */}
      <h2 className="inter-heading-2 text-xl capitalize leading-snug tracking-tight mb-2 sm:mb-0 px-2 py-2">
        Overview
      </h2>
      {/* Grid layout for income and expenses overview */}
      <div className="grid gap-2 lg:grid-cols-2 lg:grid-flow-col lg:gap-4 px-2 w-full h-full py-2">
        {/* Income overview section */}
        <div className="border-2 rounded-xl w-full h-[440px] md:w-full md:h-full px-2 py-2">
          {/* Title for the income overview */}
          <div className="max-w-fit max-h-fit">
            <h4 className="inter-heading-2 text-sm text-gray-500 w-full h-full">
              Income overview for the selected date range
            </h4>
          </div>
          {/* Render income overview data */}
          <div className="h-full w-full flex justify-center items-center py-2">
            {userData && <IncomePieChart data={userData} />}
          </div>
        </div>
        {/* Income History section */}
        <div className="border-2 rounded-xl w-full h-[440px] md:w-full md:h-full px-2 py-2">
          {/* Title for the income history */}
          <div>
            <h4 className="inter-heading-2 text-sm text-gray-500">
              Income history for the selected date range
            </h4>
          </div>
          <div className="h-full w-full flex justify-center items-start py-2">
            {" "}
            {userData && (
              <Tables
                tableType={"incomes"}
                dynamicTextClass={dynamicTextClass}
                dynamicThemeClass={dynamicThemeClass}
                theme={theme}
                userData={userData}
                setSubmit={setSubmit}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeAnalysis;
