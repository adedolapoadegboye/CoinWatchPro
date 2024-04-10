import React from "react";
import SignOutButton from "../Components/SignoutButton";
import { UserAuth } from "../../../Context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ThemeButton from "../Components/ThemeButton";
import Navbar from "../Components/Navbar";

const Settings = () => {
  const { user } = UserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate("/");
      // console.log("The user object is null");
    } else if (Object.keys(user).length === 0 && user.constructor === Object) {
      // console.log("The user object is empty");
    } else {
      // console.log("The user object is populated");
    }
  }, [user, navigate]);

  return (
    <div className="flex noto-sans-1 w-screen fixed px-2 py-2">
      <div className="flex-col hidden md:flex relative border-r-2">
        <Navbar />
      </div>{" "}
      <div className="flex w-full h-fit justify-between border-b-2">
        <h1 className="inter-heading text-2xl font-extrabold capitalize text-black leading-snug tracking-tight mb-2 sm:mb-0 px-2 py-3">
          Settings{" "}
        </h1>
        <div className="flex justify-center items-center">
          <SignOutButton />
          <div className="hidden md:flex">
            <ThemeButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
