import React from "react";

const LandingSignUp = (props) => {
  const { setSignUpButton } = props;

  const handleClick = () => {
    setSignUpButton("active");
    // console.log("Sign up button is", signUpButton);
  };

  return (
    <div className="noto-sans-1">
      <h4>
        Don't have an account?{" "}
        <span>
          <button
            onClick={handleClick}
            className="font-bold underline underline-offset-auto"
          >
            Sign up
          </button>
        </span>{" "}
        for free.
      </h4>
    </div>
  );
};

export default LandingSignUp;
