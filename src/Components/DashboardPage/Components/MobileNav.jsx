import React from "react";
import Navbar from "./Navbar";

const MobileNav = (props) => {
  const { theme, setMobileMenu, mobileMenu } = props;

  return (
    <div
      className={`pt-7 ps-4 flex-col fixed inset-0 z-10 justify-start items-end bg-${theme} bg-opacity-95 w-full h-full`}
    >
      <div>
        {" "}
        <Navbar
          theme={theme}
          setMobileMenu={setMobileMenu}
          mobileMenu={mobileMenu}
        />
      </div>
    </div>
  );
};

export default MobileNav;
