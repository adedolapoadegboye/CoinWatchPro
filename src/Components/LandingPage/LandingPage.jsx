import React, { useState, useEffect } from "react";
import LandingFooter from "./LandingFooter";
import LandingHeader from "./LandingHeader";
import LandingSignIn from "./LandingSignIn";
import LandingSignUp from "./LandingSignUp";
import SignUpPage from "../SignUpPage/SignUpPage";
import SignUpForm from "../SignUpPage/SignUpForm";
import { UserAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [signUpButton, setSignUpButton] = useState("inactive");
  const { user } = UserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      // console.log("The user object is null");
    } else if (Object.keys(user).length === 0 && user.constructor === Object) {
      // console.log("The user object is empty");
    } else if (user.emailVerified) {
      navigate("homepage");
      // console.log("The user object is populated");
    } else {
      navigate("/");
    }
  }, [navigate, user]);

  const PageToRender = () => {
    if (signUpButton === "inactive") {
      return (
        <div>
          <LandingSignIn />
          <LandingSignUp
            setSignUpButton={setSignUpButton}
            signUpButton={signUpButton}
          />
        </div>
      );
    } else if (signUpButton === "active") {
      return (
        <div>
          <SignUpForm />
          <SignUpPage
            setSignUpButton={setSignUpButton}
            signUpButton={signUpButton}
          />
        </div>
      );
    }
  };

  return (
    <div className="w-screen h-screen">
      <div className="flex flex-col md:h-[calc(100vh-7vh)] h-[calc(100vh-10vh)] w-screen gap-6 items-center justify-center">
        <div>
          <LandingHeader />
        </div>
        {PageToRender()}
      </div>
      <div className="h-fit w-full">
        <LandingFooter />
      </div>
    </div>
  );
};

export default LandingPage;
