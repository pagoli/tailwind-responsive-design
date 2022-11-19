import React from "react";
import {
  FaMastodon,
  FaYoutube,
  FaKiwiBird,
  FaDiscord,
  FaPinterest,
} from "react-icons/fa";
import logo_sparrow_sm from "../assets/logo_sparrow_sm.png";

const Footer = () => {
  return (
    <footer className="bg-purpleGray">
      <div className="container flex flex-col justify-between px-6 py-10 mx-auto space-y-8 xl:flex-row md:space-y-0">
        {/* logo and social links container */}
        <div className="flex flex-col items-center justify-center md:flex-row xl:items-between">
          <div className="flex flex-col-reverse items-center justify-between space-y-12 pb-4 md:pb-0 md:flex-col md:space-y-0 md:items-start h-20">
            <div className="pt-0 flex h-20">
              <img src={logo_sparrow_sm} className="w-1/3" alt="sparrow logo" />
              <div className="pl-2 leading-5 font-bold w-2/3 self-center text-xl">
                <h2>Sparrow</h2>
                <h2>& Friends</h2>
              </div>
            </div>
          </div>
          <div className="flex justify-center pr-0 space-x-4 md:pr-6">
            <a href="#">
              <FaMastodon className="h-8 hover:text-lightPink text-3xl" />
            </a>
            <a href="#">
              <FaYoutube className="h-8 hover:text-lightPink text-3xl" />
            </a>
            <a href="#">
              <FaKiwiBird className="h-8 hover:text-lightPink text-3xl" />
            </a>
            <a href="#">
              <FaDiscord className="h-8 hover:text-lightPink text-3xl" />
            </a>
            <a href="#">
              <FaPinterest className="h-8 hover:text-lightPink text-3xl" />
            </a>
          </div>
        </div>
        <div className="flex justify-around text-xl space-x-32 py-0 md:py-6 ">
          <div className="flex flex-col space-y-3">
            <a href="#" className="hover:text-lightPink">
              Home
            </a>
            <a href="#" className="hover:text-lightPink">
              Pricing
            </a>
            <a href="#" className="hover:text-lightPink">
              Products
            </a>
            <a href="#" className="hover:text-lightPink">
              About Us
            </a>
          </div>
          <div className="flex flex-col space-y-3">
            <a href="#" className="hover:text-lightPink">
              Careers
            </a>
            <a href="#" className="hover:text-lightPink">
              Community
            </a>
            <a href="#" className="hover:text-lightPink">
              Community
            </a>
          </div>
          {/* Input Container */}
        </div>
        <div className="flex flex-col justify-between md:justify-around pt-2">
          <form>
            <div className="flex space-x-3">
              <input
                type="text"
                className="flex w-full px-4 rounded-full focus:outline-none"
                placeholder="Updated in your inbox"
              />
              <button className="px-6 py-2 text-white font-bold rounded-full bg-lightPink hover:bg-lightGreen hover:text-black focus:outline-none">
                Go!
              </button>
            </div>
          </form>
          <div className="text-sm text-center p-2 xl:text-left">
            Copyright &copy; 2022, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
