import React from "react";
import { UserAuth } from "../../../Context/AuthContext";

const SignOutButton = (props) => {
  const { theme } = props;

  // Accessing the generalSignOut function from the UserAuth context
  const { generalSignOut } = UserAuth();

  // Function to handle sign out
  const handleSignOut = async () => {
    try {
      // Calling the generalSignOut function
      await generalSignOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      // Button styling classes
      className={`active-${theme}-timerange timerange-${theme} w-[100px] rounded-2xl border-gray-300 inter-heading-2 border-2 md:border-2 text-lg lg:text-sm font-light capitalize leading-snug tracking-tight mb-2 sm:mb-0 px-2 py-3`}
      // Event handler for sign out
      onClick={handleSignOut}
    >
      Sign out
    </button>
  );
};

export default SignOutButton;
