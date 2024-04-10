import React, { useState } from "react";
import { UserAuth } from "../../Context/AuthContext";
import LandingFooter from "../LandingPage/LandingFooter";
import LandingHeader from "../LandingPage/LandingHeader";
import { useNavigate } from "react-router-dom";

/**
 * Component for resetting user password.
 * @returns {JSX.Element} - Reset password form.
 */
const ResetPassword = () => {
  const [email, setEmail] = useState(""); // State for email input
  const [formError, setFormError] = useState(); // State for form error
  const [emailSuccess, setEmailSuccess] = useState(false); // State for email success
  const navigate = useNavigate();
  const { userPasswordReset } = UserAuth(); // Accessing password reset function from context

  /**
   * Function to validate email format.
   * @param {string} email - Email address to validate.
   * @returns {boolean} - Whether the email is valid or not.
   */
  const isValidEmail = (email) => {
    // Regular expression for validating email addresses
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  /**
   * Function to handle email input change.
   * @param {string} email - Email address entered in the input field.
   */
  const emailOnChange = (email) => {
    if (isValidEmail(email)) {
      console.log("Valid email address");
      setEmail(email);
    } else {
      console.log("Invalid email address");
    }
  };

  /**
   * Function to handle password reset email submission.
   */
  const handleResetEmail = async () => {
    try {
      await userPasswordReset(email);
      console.log("Password reset email sent");
      setEmailSuccess(true);
    } catch (error) {
      setFormError(error);
      console.log(error);
    }
  };

  /**
   * Function to render error messages or success message based on form status.
   * @returns {JSX.Element} - Error or success message.
   */
  const handleError = () => {
    if (formError) {
      return (
        <h1 className="noto-sans-1 text-red-400">
          Invalid credentials. Please try again.
        </h1>
      );
    } else if (emailSuccess) {
      return <h1 className="noto-sans-1">Password reset email sent.</h1>;
    } else {
      return (
        <h1 className="noto-sans-1">
          Please enter your email to reset your password
        </h1>
      );
    }
  };

  /**
   * Function to navigate back to home page.
   */
  const handleExit = () => {
    navigate("/");
  };

  return (
    <div className="w-screen h-screen">
      <div className="flex flex-col md:h-[calc(100vh-7vh)] h-[calc(100vh-10vh)] w-full gap-6 items-center justify-center">
        <div>
          <LandingHeader />
        </div>
        <div className="flex flex-col gap-4">
          {handleError()}
          <label className="noto-sans-1 font-bold">Email Address</label>
          <input
            type="email"
            onChange={(e) => emailOnChange(e.target.value)}
            placeholder="abc@dummy.com"
            className="w-full border-2 py-2 px-2 rounded-lg"
            required
          />
          <button
            type="submit"
            className="border w-full py-2 px-2 rounded-lg bg-black text-white"
            onClick={handleResetEmail}
          >
            Send reset link to my email
          </button>{" "}
          <button
            type="submit"
            className="border w-full py-2 px-2 rounded-lg bg-black text-white"
            onClick={handleExit}
          >
            Go back to home page
          </button>{" "}
        </div>
      </div>
      <div className="h-fit w-full">
        <LandingFooter />
      </div>
    </div>
  );
};

export default ResetPassword;
