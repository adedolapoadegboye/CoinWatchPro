/* eslint-disable no-unused-vars */
import React from "react";
import { SubscriptionPieChart } from "./Charts";
import Tables from "./Tables";
import "chart.js/auto";

const SubscriptionAnalysis = (props) => {
  const { userData, dynamicThemeClass, dynamicTextClass, theme, setSubmit } =
    props;
  // console.log(userData);

  return (
    <div className="flex flex-col w-full h-full justify-start pb-8 md:pb-0">
      {/* Title for the overview section */}
      <h2 className="inter-heading-2 text-xl capitalize leading-snug tracking-tight mb-2 sm:mb-0 px-2 py-2">
        Subscription Overview
      </h2>
      {/* Grid layout for Subscription and expenses overview */}
      <div className="grid gap-2 lg:grid-cols-2 lg:grid-flow-col lg:gap-4 px-2 w-full h-full md:h-[500px] py-2">
        {/* Subscription overview section */}
        <div className="border-2 rounded-xl max-w-full h-full md:w-full md:h-full px-2 py-2">
          {/* Title for the Subscription overview */}
          <div className="max-w-fit max-h-fit">
            <h4 className="inter-heading-2 text-sm text-gray-500 w-full h-full">
              Subscription overview for the selected date range
            </h4>
          </div>
          {/* Render Subscription overview data */}
          <div className="h-full w-full flex justify-center items-center py-2">
            {userData && <SubscriptionPieChart data={userData} />}
          </div>
        </div>
        {/* Subscription History section */}
        <div className="border-2 rounded-xl max-w-full h-full md:w-full md:h-full px-2 py-2">
          {/* Title for the Subscription history */}
          <div>
            <h4 className="inter-heading-2 text-sm text-gray-500">
              Subscription history for the selected date range
            </h4>
          </div>
          <div className="h-full w-full flex justify-center items-start py-2">
            {" "}
            {userData && (
              <Tables
                tableType={"subscriptions"}
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
export default SubscriptionAnalysis;
