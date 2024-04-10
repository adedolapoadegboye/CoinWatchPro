import React from "react";
import LandingFooter from "../LandingPage/LandingFooter";
import LandingHeader from "../LandingPage/LandingHeader";
import { UserAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignUpVerification = () => {
  const { user, userVerifier } = UserAuth();
  const navigate = useNavigate();
  const [verificationError, setVerificationError] = useState(false);

  const handleSubmit = () => {
    setVerificationError(false);
    userVerifier();
    if (user.emailVerified) {
      navigate("/homepage");
    } else {
      setVerificationError(true);
    }
  };

  const handleExit = () => {
    navigate("/");
  };

  const verifier = () => {
    if (verificationError) {
      return (
        <h1 className="noto-sans-1 text-red-400">
          Error! email is not verified.
        </h1>
      );
    }
  };

  return (
    <div className="w-screen h-screen">
      <div className="flex flex-col border-2 md:h-[calc(100vh-7vh)] h-[calc(100vh-10vh)] px-4 w-full md:w-[500] lg:w-[600] xl:w-[700] gap-6 items-center justify-center">
        <div>
          <LandingHeader />
        </div>
        <h1 className="noto-sans-1">
          Please verify your account by clicking the link sent to your email,
          then hit continue to sign in
        </h1>
        <button
          type="submit"
          className="border w-[300px] py-2 px-2 rounded-lg bg-black text-white"
          onClick={handleSubmit}
        >
          Continue
        </button>{" "}
        <button
          type="submit"
          className="border w-[300px] py-2 px-2 rounded-lg bg-black text-white"
          onClick={handleExit}
        >
          Go back to home page
        </button>{" "}
        <div>{verifier()}</div>
      </div>
      <div className="h-fit w-full">
        <LandingFooter />
      </div>
    </div>
  );
};

export default SignUpVerification;
