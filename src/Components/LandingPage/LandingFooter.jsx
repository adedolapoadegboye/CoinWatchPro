import React from "react";
import {
  FaSquareGithub,
  FaLinkedin,
  FaSquareXTwitter,
  FaSquareInstagram,
  FaBoxArchive,
} from "react-icons/fa6";

const LandingFooter = () => {
  return (
    <footer className="flex justify-evenly border-t-2 pt-4 noto-sans-1 font-normal">
      <div>
        <p className="text-xs md:text-sm">
          &#169; Copyright 2024, Coinwatchpro.com
        </p>
      </div>
      <div className="flex gap-2">
        <a
          href="https://github.com/adedolapoadegboye"
          target="_blank"
          rel="noreferrer"
        >
          <FaSquareGithub size={22} />
        </a>
        <a
          href="https://www.linkedin.com/in/adegboyeadedolapo"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={22} />
        </a>
        <a href="https://adedolapo.dev" target="_blank" rel="noreferrer">
          <FaBoxArchive size={22} />
        </a>
        <a
          href="https://www.instagram.com/adethedeveloper/"
          target="_blank"
          rel="noreferrer"
        >
          <FaSquareInstagram size={22} />
        </a>
        <a
          href="https://twitter.com/AdeTheDeveloper"
          target="_blank"
          rel="noreferrer"
        >
          <FaSquareXTwitter size={22} />
        </a>
      </div>
    </footer>
  );
};

export default LandingFooter;
