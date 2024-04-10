/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { BiDonateHeart } from "react-icons/bi";

const SummaryDonation = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { userData, submitted, setSubmitted } = props;
  const [donationSum, setDonationSum] = useState(0);
  const [donationCount, setDonationCount] = useState(1);

  const handleAdd = () => {
    if (submitted) {
      setSubmitted(false);
    } else {
    }
  };

  const handleTotalDonation = () => {
    if (userData && userData.donations) {
      const totalDonation = userData.donations.reduce(
        (total, Donation) => parseFloat(total) + parseFloat(Donation.amount),
        0
      );
      // console.log(totalDonation);
      setDonationSum(totalDonation);
      handleAdd();
    } else {
      setDonationSum(0);
    }
  };

  const handleDonationCount = () => {
    if (userData && userData.donations) {
      const count = userData.donations.length;
      setDonationCount(count);
      handleAdd();
      return count;
    }
  };

  const handleCountRender = () => {
    if (donationCount > 1) {
      return <h3 className="lg:text-lg inter-heading">{donationCount - 1}</h3>;
    } else {
      return <h3 className="lg:text-lg inter-heading">0</h3>;
    }
  };

  useEffect(() => {
    handleTotalDonation();
    handleDonationCount();
  }, [userData, donationSum, donationCount, submitted]);

  return (
    <div>
      {/* Title */}
      <div className="flex justify-start">
        <h2 className="inter-heading-2 text-xl capitalize leading-snug tracking-tight mb-2 sm:mb-0 px-2 py-2">
          Donation Summary
        </h2>
      </div>
      {/* Summary Cards */}
      <div className="grid gap-2 lg:grid-cols-6 lg:grid-flow-col lg:grid-rows-1 lg:gap-4 px-2">
        {/* Total Donation Count Card */}
        <div className="border-2 border-gray-200 rounded-lg flex justify-between px-3 py-3">
          <div className="flex flex-col justify-between">
            <h3 className="lg:text-sm font-semibold text-gray-500 pb-4">
              DONATION COUNT
            </h3>
            {handleCountRender()}{" "}
          </div>
          <div className="px-2">
            <BiDonateHeart size={20} />
          </div>
        </div>
        {/* Total Donation Card */}
        <div className="border-2 border-gray-200 rounded-lg flex justify-between px-3 py-3">
          <div className="flex flex-col justify-between">
            <h3 className="lg:text-sm font-semibold text-gray-500 pb-4">
              TOTAL DONATIONS
            </h3>
            <h3 className="lg:text-lg inter-heading">CA$ {donationSum}</h3>
          </div>
          <div className="px-2">
            <BiDonateHeart size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryDonation;
