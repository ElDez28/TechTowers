import React from "react";
import Header from "./Header";
import Link from "next/link";

import AboutUsItemOne from "./AboutUsItemOne";
import AboutItemTwo from "./AboutItemTwo";
const AboutUs = () => {
  return (
    <>
      <div className="max-w-[90rem] mx-auto lg:px-8 px-4  text-left "></div>
      <section className="py-24 text-gray-700">
        <div className="max-w-[90rem] mx-auto lg:px-8 px-4  text-left">
          <AboutUsItemOne></AboutUsItemOne>
          <AboutItemTwo></AboutItemTwo>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
