import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../../Context/AuthContext";

/**
 * Component for protecting routes based on user authentication.
 * @param {Object} props - Component properties.
 * @param {ReactNode} props.children - Child components to render if user is authenticated.
 * @returns {ReactNode} - Protected route or redirection to login page.
 */
const Protected = ({ children }) => {
  const user = UserAuth();

  // If user is authenticated, render children components
  // Otherwise, redirect to login page
  return user ? children : <Navigate to={"/"} />;
};

export default Protected;
