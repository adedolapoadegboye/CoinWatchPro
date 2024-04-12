/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { BiDonateHeart } from "react-icons/bi";

const SummarySubscription = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { userData, submitted, setSubmitted } = props;
  const [subscriptionSum, setSubscriptionSum] = useState(0);
  const [subscriptionCount, setSubscriptionCount] = useState(1);

  const handleAdd = () => {
    if (submitted) {
      setSubmitted(false);
    } else {
    }
  };

  const handleTotalSubscription = () => {
    if (userData && userData.subscriptions) {
      const totalSubscription = userData.subscriptions.reduce(
        (total, subscription) =>
          parseFloat(total) + parseFloat(subscription.amount),
        0
      );
      // console.log(totalSubscription);
      setSubscriptionSum(totalSubscription);
      handleAdd();
    } else {
      setSubscriptionSum(0);
    }
  };

  const handleSubscriptionCount = () => {
    if (userData && userData.subscriptions) {
      const count = userData.subscriptions.length;
      setSubscriptionCount(count);
      handleAdd();
      return count;
    }
  };

  const handleCountRender = () => {
    if (subscriptionCount > 1) {
      return (
        <h3 className="lg:text-lg inter-heading">{subscriptionCount - 1}</h3>
      );
    } else {
      return <h3 className="lg:text-lg inter-heading">0</h3>;
    }
  };

  useEffect(() => {
    handleTotalSubscription();
    handleSubscriptionCount();
  }, [userData, subscriptionSum, subscriptionCount, submitted]);

  return (
    <div>
      {/* Title */}
      <div className="flex justify-start">
        <h2 className="inter-heading-2 text-xl capitalize leading-snug tracking-tight mb-2 sm:mb-0 px-2 py-2">
          Subscription Summary
        </h2>
      </div>
      {/* Summary Cards */}
      <div className="grid gap-2 lg:grid-cols-2 lg:grid-flow-col lg:grid-rows-1 lg:gap-4 px-2">
        {/* Total Subscription Count Card */}
        <div className="border-2 border-gray-200 rounded-lg flex justify-between px-3 py-3">
          <div className="flex flex-col justify-between">
            <h3 className="lg:text-sm font-semibold text-gray-500 pb-4">
              SUBSCRIPTION COUNT
            </h3>
            {handleCountRender()}{" "}
          </div>
          <div className="px-2">
            <BiDonateHeart size={20} />
          </div>
        </div>
        {/* Total Subscription Card */}
        <div className="border-2 border-gray-200 rounded-lg flex justify-between px-3 py-3">
          <div className="flex flex-col justify-between">
            <h3 className="lg:text-sm font-semibold text-gray-500 pb-4">
              TOTAL SUBSCRIPTIONS
            </h3>
            <h3 className="lg:text-lg inter-heading">CA$ {subscriptionSum}</h3>
          </div>
          <div className="px-2">
            <BiDonateHeart size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummarySubscription;
