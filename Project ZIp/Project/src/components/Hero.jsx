import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
const Hero = () => {
  return (
    <section
      id="Hero"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      {/* giving display flexStart because we want to show this div in left or first */}
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        {/* discount offer div */}
        <div
          className="flex flex-row items-center py-[6px] px-4
          bg-discount-gradient rounded-[10px] mb-2 discount"
        >
          <img
            src={discount}
            alt="discount"
            className="w-[32px] h-[32px] discount"
          />
          <p className={`${styles.paragraph} discount`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>
        {/* main heading */}
        <div className="flex flex-row justify-between items-center w-full">
          <h1
            className="text-white flex-1 font-poppins 
            font-semibold ss-text-[52px] text-[32px] ss:leading-[50px] leading-[45px]"
          >
            Simple. Transparent. Secure <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Banking Solutions</span>{" "}
          </h1>
          {/* get started button */}
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <h1
          className="text-white font-poppins 
            font-semibold ss-text-[95px] text-[92px] ss:leading-[70px] leading-[75px]"
        >
          {" "}
          
          
        </h1>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Products and services designed to help you reach your financial goals. Lorem ipsum dolor sit amet consectetur
         adipisicing elit. Officiis sunt expedita modi quo! Inventore distinctio debitis qui, itaque, delectus
          temporibus vero voluptates a reprehenderit quis deserunt 
        aliquam cumque provident pariatur cum recusandae at autem odio iusto reiciendis nihil. Ad inventore voluptatibus iste error cupiditate sit cum nulla unde rem impedit?
        </p>
      </div>

      {/* Robot image div*/}
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={robot}
          alt="biling"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        {/* Gradient divs */}
        <div className=" absolute w-[40%] h-[35%] z-[0] top-0 pink__gradient" />
        <div className=" absolute w-[80%] h-[80%] z-[1] bottom-40 white__gradient" />
        <div className=" absolute w-[50%] h-[50%] right-20 bottom-20 z-[0]  blue__gradient" />
      </div>

      {/* Get Started  Component only shows in smaller devices 
      not in devices > width than 620px*/}
      <div className={`${styles.flexCenter} ss:hidden`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
