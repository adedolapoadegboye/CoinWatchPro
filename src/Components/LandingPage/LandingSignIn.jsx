import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../Context/AuthContext";
import { Circles } from "react-loader-spinner";

const LandingSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState();
  const [userLoading, setUserLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const { userSignIn } = UserAuth();

  const isValidEmail = (email) => {
    // Regular expression for validating email addresses
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const emailOnChange = (email) => {
    if (isValidEmail(email)) {
      console.log("Valid email address");
      setEmail(email);
    } else {
      console.log("Invalid email address");
    }
  };

  const passwordOnChange = (entry) => {
    setPassword(entry);
  };

  const { googleSignIn } = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      setGoogleLoading(true);
      await googleSignIn();
    } catch (error) {
      setFormError(error);
      console.log(error);
      setGoogleLoading(false);
    } finally {
      setGoogleLoading(false);
    }
  };

  const handleUserSignIn = async () => {
    try {
      setUserLoading(true);
      await userSignIn(email, password);
      console.log("Sign in successful");
    } catch (error) {
      setFormError(error);
      console.log(error);
      setUserLoading(false);
    } finally {
      setUserLoading(false);
    }
  };

  const handleError = () => {
    if (formError) {
      return (
        <h1 className="noto-sans-1 text-red-400">
          Invalid credentials. Please try again.
        </h1>
      );
    } else {
      return (
        <h1 className="noto-sans-1">
          Please enter your email and password to sign in
        </h1>
      );
    }
  };

  const spinnerUserSignIn = () => {
    if (userLoading) {
      return (
        <Circles
          height="20"
          width="30"
          color="white"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      );
    }
  };

  const spinnerGoogleSignIn = () => {
    if (googleLoading) {
      return (
        <Circles
          height="20"
          width="30"
          color="white"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      );
    }
  };

  return (
    <div className="noto-sans-1 flex flex-col w-full h-full items-left justify-center gap-2">
      {handleError()}
      <label className="noto-sans-1 font-bold">Email Address</label>
      <input
        type="email"
        // value={email}
        onChange={(e) => emailOnChange(e.target.value)}
        placeholder="abc@dummy.com"
        className="w-full border-2 py-2 px-2 rounded-lg"
        required
      />
      <label className="noto-sans-1 font-bold">Password</label>
      <input
        type="password"
        // value={password}
        onChange={(e) => passwordOnChange(e.target.value)}
        placeholder="password"
        className="w-full border-2 py-2 px-2 rounded-lg"
        required
      />
      <button
        type="submit"
        className="flex justify-center border w-full py-2 px-2 rounded-lg bg-black text-white"
        onClick={handleUserSignIn}
      >
        Sign in {spinnerUserSignIn()}
      </button>{" "}
      <button
        type="submit"
        className="flex justify-center border w-full py-2 px-2 rounded-lg bg-black text-white"
        onClick={handleGoogleSignIn}
      >
        Continue with Google {spinnerGoogleSignIn()}
      </button>{" "}
      <button className="border w-full py-2 px-2 rounded-lg bg-black text-white">
        <Link to="/resetpassword">Forgot Password</Link>
      </button>
    </div>
  );
};

export default LandingSignIn;
