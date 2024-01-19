import { Link } from "react-router-dom";

import GradientBtn from "./GradientBtn";

import "../index.css";

const HeroSection = () => {
  return (
    <div className="px-[75px] mt-[28px] flex justify-between">
      <div>
        <h1 className="font-black text-[48px] w-[715px]">
          Join with us to ensure your overseas education.
        </h1>
        <p className="my-[78px] w-[596px]">
          With over two decades of experience, we're your trusted partner for
          overseas education. Our commitment to excellence ensures your academic
          success abroad. Explore international opportunities with confidence
        </p>
        <div className="ml-[30px] flex items-center w-[400px] justify-between">
          <GradientBtn topic="Apply Now" />
          <Link
            to=""
            className="text-[20px] border-b-2 border-black transition duration-300 hover:text-[#FB891F] hover:border-[#FB891F] font-medium"
          >
            Contact Us
          </Link>
        </div>
      </div>
      <div className="-z-10">
        <img
          src="/images/Earth.svg"
          alt="Earth"
          className="absolute top-[180px] right-[80px] h-[400px] px-[30px] animate-spin-slow absolute-earth"
        />
        <img
          src="/images/UndergraduateBoy.svg"
          alt="Boy"
          className="absolute top-[180px] right-[80px] absolute-boy"
        />
        <img
          src="/images/UndergraduateGirl.svg"
          alt="Girl"
          className="absolute top-[180px] right-[245px] absolute-girl"
        />
      </div>
    </div>
  );
};

export default HeroSection;
