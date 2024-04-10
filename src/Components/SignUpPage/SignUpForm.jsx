import React, { useState } from "react";
import { UserAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypedPassword, setRetypedPassword] = useState("");
  const [formError, setFormError] = useState();
  const { createUser, updateDisplayName, userEmailVerification } = UserAuth();
  const navigate = useNavigate();

  const isValidEmail = (email) => {
    // Regular expression for validating email addresses
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const nameOnChange = (entry) => {
    // console.log(entry);
    setDisplayName(entry);
  };

  const emailOnChange = (email) => {
    if (isValidEmail(email)) {
      // console.log("Valid email address");
      setEmail(email);
    } else {
      // console.log("Invalid email address");
    }
  };

  const passwordOnChange = (entry) => {
    setPassword(entry);
  };

  const retypedPasswordOnChange = (entry) => {
    setRetypedPassword(entry);
  };

  const isPasswordValid = () => {
    // console.log(password, retypedPassword);
    if (password === retypedPassword) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isPasswordValid() && isValidEmail(email)) {
      try {
        await createUser(email, password);
        // console.log(password, retypedPassword);
      } catch (error) {
        setFormError(error.message);
        // console.log(formError);
      }
      if (email) {
        try {
          await userEmailVerification();
          navigate("/verifyemail");
        } catch (error) {
          console.log(error);
        }
      }
    }
    if (displayName !== "") {
      try {
        await updateDisplayName(displayName);
        // console.log(user);
      } catch (error) {
        console.log(error);
      }
    }
    return setFormError(true);
  };

  const handleError = () => {
    if (formError && isPasswordValid() && isValidEmail(email)) {
      // console.log(formError, isPasswordValid(), isValidEmail(email));
      return (
        <h1 className="noto-sans-1 text-red-400">Email already in use.</h1>
      );
    } else if (formError && !isPasswordValid() && isValidEmail(email)) {
      // console.log(formError, !isPasswordValid(), isValidEmail(email));
      return (
        <h1 className="noto-sans-1 text-red-400">
          Error! Passwords does not match.
        </h1>
      );
    } else if (formError && isPasswordValid() && !isValidEmail(email)) {
      // console.log(formError, isPasswordValid(), !isValidEmail(email));
      return (
        <h1 className="noto-sans-1 text-red-400">
          Error! Invalid email address.
        </h1>
      );
    }
  };

  return (
    <div className="noto-sans-1 flex flex-col w-full h-full items-left justify-center gap-2">
      {handleError()}
      <label className="noto-sans-1 font-bold">What should we call you?</label>
      <input
        type="text"
        // value={email}
        onChange={(e) => nameOnChange(e.target.value)}
        placeholder="name"
        className="w-full border-2 py-2 px-2 rounded-lg"
      />
      <label className="noto-sans-1 font-bold">Email Address*</label>
      <input
        type="email"
        // value={email}
        onChange={(e) => emailOnChange(e.target.value)}
        placeholder="abc@dummy.com"
        className="w-full border-2 py-2 px-2 rounded-lg"
        required
      />
      <label className="noto-sans-1 font-bold">Password*</label>
      <input
        type="password"
        // value={password}
        onChange={(e) => passwordOnChange(e.target.value)}
        placeholder="password"
        className="w-full border-2 py-2 px-2 rounded-lg"
        required
      />
      <label className="noto-sans-1 font-bold">Retype Password*</label>
      <input
        type="password"
        // value={retypedPassword}
        onChange={(e) => retypedPasswordOnChange(e.target.value)}
        placeholder="retype password"
        className="w-full border-2 py-2 px-2 rounded-lg"
        required
      />
      <h5 className="noto-sans-1 text-sm">* Required</h5>
      <h5 className="noto-sans-1 text-sm">
        - Password must be at least 6 characters long
      </h5>
      <button
        type="submit"
        className="border w-full py-2 px-2 rounded-lg bg-black text-white"
        onClick={handleSubmit}
      >
        Sign up for free
      </button>{" "}
    </div>
  );
};

export default SignUpForm;
