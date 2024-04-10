import React from "react";

const SignUpPage = (props) => {
  const { setSignUpButton } = props;

  const handleClick = () => {
    setSignUpButton("inactive");
    // console.log("Sign up button is", signUpButton);
  };

  return (
    <div className="noto-sans-1">
      <h4>
        Already have an account?{" "}
        <span>
          <button
            onClick={handleClick}
            className="font-bold underline underline-offset-auto"
          >
            Sign in
          </button>
        </span>{" "}
        to your account.
      </h4>
    </div>
  );
};

export default SignUpPage;
