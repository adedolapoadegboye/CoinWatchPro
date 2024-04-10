/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import SignOutButton from "../Components/SignoutButton";
import { UserAuth } from "../../../Context/AuthContext";
import { UserData } from "../../../Context/UserDataContext";
import { useNavigate } from "react-router-dom";
import ThemeButton from "../Components/ThemeButton";
import Navbar from "../Components/Navbar";
import Add from "../Components/Add";
import AddButton from "../Components/AddButton";
import ExpenseAnalysis from "../Components/ExpenseAnalysis";
import TimeRange from "../Components/TimeRange";
import MobileNav from "../Components/MobileNav";
import MobileNavButton from "../Components/MobileNavButton";
import SummaryExpense from "../Components/SummaryExpense";

const Expenses = () => {
  const { user } = UserAuth();
  const {
    registerUserDoc,
    readUserData,
    readUserInfo,
    readUserDataWithinDateRange,
    updateUserSettings,
  } = UserData();
  const navigate = useNavigate();
  const [add, setAdd] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const firstDayOfMonth = new Date();
  firstDayOfMonth.setDate(1); // Set the date to the first day of the month
  firstDayOfMonth.setHours(0, 0, 0, 0); // Set time component to 12:00 AM
  // State to manage the selected start date
  const [startDate, setStartDate] = useState(firstDayOfMonth);

  // State to manage the selected end date
  const [endDate, setEndDate] = useState(new Date());

  const [submit, setSubmit] = useState(false);

  // State to track the current theme
  const [theme, setTheme] = useState(() => {
    // Retrieve theme from localStorage if available, otherwise default to "black"
    return localStorage.getItem("theme") || "black";
  });
  const [userData, setUserData] = useState();
  const [userInfo, setUserInfo] = useState();
  const [userDataWithinDate, setUserDataWithinDate] = useState();
  const [submitted, setSubmitted] = useState(false);
  // console.log(theme);
  const dynamicThemeClass = `bg-${theme === "white" ? "white" : "black"}`;
  const dynamicTextClass = `text-${theme === "white" ? "black" : "white"}`;

  const handleUserData = async () => {
    const userData = await readUserData();
    if (userData) {
      // console.log("User data:", userData);
      setUserData(userData);
      // Now you can access userData properties like userData.timestamp, userData.user_income_data, etc.
    } else {
      // console.log("No user data found or error occurred.");
    }
  };

  const handleUserInfo = async () => {
    const userInfo = await readUserInfo();
    if (userInfo) {
      // console.log("User Info:", userInfo);
      setUserInfo(userInfo);
      // console.log(userInfo.user_settings.theme);
      setTheme(userInfo.user_settings.theme);
      localStorage.setItem("theme", userInfo.user_settings.theme);
      // Now you can access userInfo properties like userData.timestamp, userData.user_income_data, etc.
    } else {
      // console.log("No user data found or error occurred.");
    }
  };

  const handleUserDataWithDateRange = async () => {
    // console.log(startDate, endDate, userData);
    const data = await readUserDataWithinDateRange(startDate, endDate);
    if (data) {
      // console.log(data);
      setUserDataWithinDate(data);
    } else {
      // console.log("No user data found or error occurred");
    }
  };

  let displayName;
  try {
    displayName =
      user?.displayName.length > 5
        ? `${user.displayName.slice(0, 5)}...`
        : user?.displayName;
  } catch (error) {
    // Handle error, maybe log it or set a default value for displayName
    console.error("Error occurred while processing user displayName:", error);
    displayName = "User"; // Default value
  }

  // Redirect the user to the login page if not authenticated or the user object is null
  useEffect(() => {
    if (user) {
      registerUserDoc();
      handleUserData();
      handleUserInfo();
      handleUserDataWithDateRange();
      updateUserSettings(theme);
      // console.log(theme);
      setSubmit(false);
    } else if (!user) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    user,
    navigate,
    registerUserDoc,
    submitted,
    startDate,
    endDate,
    theme,
    displayName,
    submit,
  ]);
  // console.log(userData, userInfo);

  // Render the Add component if the 'add' state is true
  const renderAddPage = () => {
    if (add) {
      return (
        <div className="w-screen h-screen absolute z-50">
          <Add
            setAdd={setAdd}
            setSubmitted={setSubmitted}
            submitted={submitted}
          />
        </div>
      );
    } else {
      return null;
    }
  };

  const renderMobileMenuPage = () => {
    if (mobileMenu) {
      return (
        <div className="w-screen h-screen absolute z-50">
          <MobileNav
            theme={theme}
            setMobileMenu={setMobileMenu}
            mobileMenu={mobileMenu}
          />
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div
      className={`flex noto-sans-1 w-screen h-fit lg:h-screen lg:fixed px-2 py-4 lg:py-2 relative ${dynamicThemeClass}`}
    >
      {/* Render the Navbar component */}
      <div
        className="flex-col hidden md:flex relative border-r-2 border-gray-200
      "
      >
        <Navbar
          theme={theme}
          setMobileMenu={setMobileMenu}
          mobileMenu={mobileMenu}
        />
      </div>
      <div className="flex flex-col gap-4 px-2 py-2 w-full h-full">
        {/* Render user welcome message and action buttons */}
        <div
          className={`flex w-full h-fit justify-between border-b-0 border-gray-200 ${dynamicTextClass}`}
        >
          <h1
            className={`inter-heading text-3xl lg:text-3xl font-old capitalize leading-snug tracking-tight mb-2 sm:mb-0 px-2 py-2 ${dynamicTextClass}`}
          >
            Welcome, {displayName}
          </h1>
          <div className="flex justify-center items-top gap-4 absolute top-8 lg:top-6 right-6 flex-end">
            <div className="z-5 hidden lg:flex">
              <TimeRange
                theme={theme}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
                startDate={startDate}
                endDate={endDate}
                className={dynamicTextClass}
              />
            </div>
            <div>
              <SignOutButton theme={theme} className={dynamicTextClass} />
            </div>
            <div className="items-start justify-center pt-2">
              <ThemeButton theme={theme} setTheme={setTheme} />
            </div>
          </div>
        </div>
        {/* Render the TimeRange component */}
        <div
          className={`flex flex-col w-full lg:w-fit h-fit justify-start lg:hidden ${dynamicTextClass}`}
        >
          <TimeRange
            startDate={startDate}
            endDate={endDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
          />
        </div>
        {/* Render the SummaryOverview component */}
        <div
          className={`flex flex-col w-full h-fit justify-start ${dynamicTextClass}`}
        >
          <SummaryExpense
            userData={userDataWithinDate}
            submitted={submitted}
            setSubmitted={setSubmitted}
          />
        </div>
        {/* Render the AnalysisOverview component */}
        <div
          className={`flex flex-col w-full h-full justify-start ${dynamicTextClass}`}
        >
          <ExpenseAnalysis
            userData={userDataWithinDate}
            dynamicTextClass={dynamicTextClass}
            dynamicThemeClass={dynamicThemeClass}
            setSubmit={setSubmit}
            submit={submit}
            theme={theme}
          />
        </div>
        <div className="flex justify-between lg:justify-end sticky bottom-0 left-0 z-10">
          <div
            className={`md:hidden flex justify-start pb-4 sticky bottom-0 left-0 z-10 ${dynamicTextClass}`}
          >
            <MobileNavButton
              setMobileMenu={setMobileMenu}
              mobileMenu={mobileMenu}
            />
          </div>
          {/* Render the AddButton component */}
          <div
            className={`flex hidden justify-end pb-2 sticky bottom-0 left-0 z-10 ${dynamicTextClass}`}
          >
            <AddButton setAdd={setAdd} add={add} />
          </div>
        </div>
      </div>
      {/* Render the Add component if 'add' state is true */}
      {renderAddPage()}
      {renderMobileMenuPage()}
    </div>
  );
};

export default Expenses;
