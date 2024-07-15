// import React from 'react'

import logo from "../../assets/images/pdc_logo.png";
import xIcon from "../../assets/images/X-icon.png";
import facebookIcon from "../../assets/images/facebook-icon.png";
import instagramIcon from "../../assets/images/instagram-icon.png";
import linkedinIcon from "../../assets/images/linkedin-icon.png";

const Footer = () => {
  const copyright = String.fromCodePoint(0x00a9);
  return (
    <div className="flex flex-col justify-center gap-4 w-full mt-20 md:mt-32">
      <div className="flex flex-col md:flex-row w-full items-start gap-16 md:gap-4 ">
        <div className="w-full flex flex-col items-start gap-4 justify-center bg-grey-700 rounded-xl p-4 md:hidden">
          <p className="text-accent font-semibold"> Join our newsletter</p>
          <div className="input-group flex flex-col md:flex-row items-center gap-2 w-full">
            <input
              placeholder="Email address"
              className="p-4 rounded-xl w-full md:w-3/4  outline-none bg-grey-500"
            />
            <button className="w-full md:w-1/3 bg-white text-black font-medium px-8 py-4 rounded-xl">
              Subscribe now
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-8 items-start w-full md:w-2/6 p-4 rounded-xl">
          <div>
            <img src={logo} alt="PDC Logo" />
          </div>
          <div>
            <p className="text-start">
              We're more than just a platform. We're your gateway to endless
              coding challenges, vibrant community engagement, and unparalleled
              growth opportunities.
            </p>
          </div>
          <div className=" flex items-start gap-2">
            <img src={xIcon} alt="X icon" />
            <img src={facebookIcon} alt="Facebook icon" />
            <img src={instagramIcon} alt="Instagram icon" />
            <img src={linkedinIcon} alt="LinkedIn icon" />
          </div>
        </div>

        <div className=" flex flex-col items-center justify-center w-full gap-8">
          <div className="w-full md:flex flex-col items-start gap-4 justify-center bg-grey-700 rounded-xl p-4 hidden">
            <p className="text-accent font-semibold"> Join our newsletter</p>
            <div className="input-group flex flex-col md:flex-row items-center gap-2 w-full">
              <input
                placeholder="Email address"
                className="p-4 rounded-xl w-full md:w-3/4  outline-none bg-grey-500"
              />
              <button className="w-full md:w-1/3 bg-white text-black font-medium px-8 py-4 rounded-xl">
                Subscribe now
              </button>
            </div>
          </div>

          <div className=" flex w-full items-center gap-4 ps-4">
            <div className="flex flex-col items-start justify-start w-1/2 p-4rounded-xl ">
              <div className=" font-bold">
                <p>Company</p>
              </div>
              <div>
                <ul className=" text-start flex flex-col gap-2 mt-6 text-grey-300">
                  <li>Terms of Services</li>
                  <li>Privacy Policy</li>
                  <li>Cookie Privacy</li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-1/2 p-4 rounded-xl ">
              <div className=" font-bold">
                <p className=" ">Resources</p>
              </div>
              <div>
                <ul className=" text-start flex flex-col gap-2 mt-6 text-grey-300">
                  <li>Features</li>
                  <li>Pricing</li>
                  <li>Challenges</li>
                  <li>Blog</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        <p className=" text-grey-300 text-xs">
          {copyright} 2024 ProdevelopersClub All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
