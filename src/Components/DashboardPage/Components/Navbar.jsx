import React from "react";
import { NavLink } from "react-router-dom";
import { IoHome, IoCashSharp } from "react-icons/io5";
import { GiPayMoney } from "react-icons/gi";
import { BsPiggyBankFill } from "react-icons/bs";
import { BiSolidDonateHeart } from "react-icons/bi";
import { MdSubscriptions } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaRegWindowClose } from "react-icons/fa";

const Navbar = (props) => {
  const { theme, setMobileMenu } = props;

  const handleClose = () => {
    setMobileMenu(false);
  };
  return (
    <nav
      className={`nav-${theme} flex flex-col gap-4 noto-sans-1 h-screen pe-5`}
    >
      <NavLink
        to="/"
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? `pending-${theme}` : `inactive-${theme}`,
            isActive ? `active-${theme}` : `inactive-${theme}`,
            isTransitioning ? `transitioning-${theme}` : `inactive-${theme}`,
          ].join(" ")
        }
      >
        <RiMoneyDollarCircleFill size={50} />
      </NavLink>
      <NavLink
        to="/homepage"
        end
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? `pending-${theme}` : `inactive-${theme}`,
            isActive ? `active-${theme}` : `inactive-${theme}`,
            isTransitioning ? `transitioning-${theme}` : `inactive-${theme}`,
          ].join(" ")
        }
      >
        <IoHome /> Home
      </NavLink>
      <NavLink
        to="/income"
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? `pending-${theme}` : `inactive-${theme}`,
            isActive ? `active-${theme}` : `inactive-${theme}`,
            isTransitioning ? `transitioning-${theme}` : `inactive-${theme}`,
          ].join(" ")
        }
      >
        <IoCashSharp />
        Incomes
      </NavLink>
      <NavLink
        to="/expenses"
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? `pending-${theme}` : `inactive-${theme}`,
            isActive ? `active-${theme}` : `inactive-${theme}`,
            isTransitioning ? `transitioning-${theme}` : `inactive-${theme}`,
          ].join(" ")
        }
      >
        <GiPayMoney />
        Expenses
      </NavLink>
      <NavLink
        to="/investments"
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? `pending-${theme}` : `inactive-${theme}`,
            isActive ? `active-${theme}` : `inactive-${theme}`,
            isTransitioning ? `transitioning-${theme}` : `inactive-${theme}`,
          ].join(" ")
        }
      >
        <BsPiggyBankFill />
        Investments
      </NavLink>
      <NavLink
        to="/donations"
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? `pending-${theme}` : `inactive-${theme}`,
            isActive ? `active-${theme}` : `inactive-${theme}`,
            isTransitioning ? `transitioning-${theme}` : `inactive-${theme}`,
          ].join(" ")
        }
      >
        <BiSolidDonateHeart />
        Donations
      </NavLink>
      <NavLink
        to="/subscriptions"
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? `pending-${theme}` : `inactive-${theme}`,
            isActive ? `active-${theme}` : `inactive-${theme}`,
            isTransitioning ? `transitioning-${theme}` : `inactive-${theme}`,
          ].join(" ")
        }
      >
        <MdSubscriptions />
        Subscriptions
      </NavLink>
      {/* <NavLink
        to="/settings"
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? `pending-${theme}` : `inactive-${theme}`,
            isActive ? `active-${theme}` : `inactive-${theme}`,
            isTransitioning ? `transitioning-${theme}` : `inactive-${theme}`,
          ].join(" ")
        }
      >
        <IoSettings />
        Settings
      </NavLink> */}
      <div className="flex flex-col md:hidden w-fit h-fit justify-end pt-2">
        {" "}
        <button
          onClick={handleClose}
          className={`flex justify-end mobile-${theme}-closebutton rounded-sm border-gray-300 w-fit h-fit inter-heading-2 border-2 md:border-2 text-sm font-light text-${theme} capitalize leading-snug tracking-tight mb-2 sm:mb-0 px-2 py-3`}
        >
          <FaRegWindowClose />
          Close Menu
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
