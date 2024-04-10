import React from "react";
import "./index.css";
import "./App.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import { AuthContextProvider } from "./Context/AuthContext";
import { UserDataProvider } from "./Context/UserDataContext";
import Homepage from "./Components/DashboardPage/Pages/Homepage";
import Protected from "./Components/Protection/Protected";
import SignUpVerification from "./Components/SignUpPage/SignUpVerification";
import ResetPassword from "./Components/ResetPassword/ResetPassword";
import Income from "./Components/DashboardPage/Pages/Income";
import Expenses from "./Components/DashboardPage/Pages/Expenses";
import Investments from "./Components/DashboardPage/Pages/Investments";
import Settings from "./Components/DashboardPage/Pages/Settings";
import Subscriptions from "./Components/DashboardPage/Pages/Subscriptions";
import Donations from "./Components/DashboardPage/Pages/Donations";
import ErrorBoundary from "./Context/ErrorHandler";

function App() {
  return (
    <ErrorBoundary>
      <AuthContextProvider>
        <UserDataProvider>
          <Routes>
            <Route path="/">
              <Route index element={<LandingPage />} />
              <Route path="verifyemail" element={<SignUpVerification />} />
              <Route path="resetpassword" element={<ResetPassword />} />
              <Route
                path="homepage"
                element={
                  <Protected>
                    <Homepage />
                  </Protected>
                }
              />
            </Route>
            <Route
              path="income"
              element={
                <Protected>
                  <Income />
                </Protected>
              }
            ></Route>
            <Route
              path="expenses"
              element={
                <Protected>
                  <Expenses />
                </Protected>
              }
            ></Route>
            <Route
              path="investments"
              element={
                <Protected>
                  <Investments />
                </Protected>
              }
            ></Route>
            <Route
              path="donations"
              element={
                <Protected>
                  <Donations />
                </Protected>
              }
            ></Route>
            <Route
              path="subscriptions"
              element={
                <Protected>
                  <Subscriptions />
                </Protected>
              }
            ></Route>
            <Route
              path="settings"
              element={
                <Protected>
                  <Settings />
                </Protected>
              }
            ></Route>
          </Routes>
        </UserDataProvider>
      </AuthContextProvider>
    </ErrorBoundary>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default App;
