import React, { useState } from "react";
import Header from "./Header";
import { BsJournalCheck } from "react-icons/bs";
import { BsHourglassTop } from "react-icons/bs";
import { BsFillBrushFill } from "react-icons/bs";
import { HiCodeBracket } from "react-icons/hi2";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import GridItem from "./GridItem";
import SuccessItems from "./SuccessItems";
const Success = () => {
  const [active, setActive] = useState({
    one: true,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
  });

  return (
    <section className="mt-24 text-gray-700 min-h-[728px]">
      <div className="max-w-[90rem] mx-auto px-8  text-center">
        <Header title="THE SIX STEPS TO SOFTWARE SUCCESS"></Header>
        <p className="max-w-6xl mx-auto mb-16">
          How Tech Towers Brings Your Project to Life, At our company, we follow
          a comprehensive project planning process to ensure that your software
          development project is executed smoothly and efficiently. Here is an
          overview of our project planning process:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-6 mb-6">
          <GridItem
            onClick={() => {
              setActive((prev) => ({
                one: true,
                two: false,
                three: false,
                four: false,
                five: false,
                six: false,
              }));
            }}
            active={active.one}
            icon={<BsHourglassTop></BsHourglassTop>}
            title="Start"
          ></GridItem>
          <GridItem
            onClick={() => {
              setActive((prev) => ({
                one: false,
                two: true,
                three: false,
                four: false,
                five: false,
                six: false,
              }));
            }}
            active={active.two}
            icon={<BsJournalCheck></BsJournalCheck>}
            title="Plan"
          ></GridItem>
          <GridItem
            onClick={() => {
              setActive((prev) => ({
                one: false,
                two: false,
                three: true,
                four: false,
                five: false,
                six: false,
              }));
            }}
            active={active.three}
            icon={<BsFillBrushFill></BsFillBrushFill>}
            title="Design"
          ></GridItem>
          <GridItem
            onClick={() => {
              setActive((prev) => ({
                one: false,
                two: false,
                three: false,
                four: true,
                five: false,
                six: false,
              }));
            }}
            active={active.four}
            icon={<HiCodeBracket></HiCodeBracket>}
            title="Develop"
          ></GridItem>
          <GridItem
            onClick={() => {
              setActive((prev) => ({
                one: false,
                two: false,
                three: false,
                four: false,
                five: true,
                six: false,
              }));
            }}
            active={active.five}
            icon={<BsJournalCheck></BsJournalCheck>}
            title="Test"
          ></GridItem>
          <GridItem
            onClick={() => {
              setActive((prev) => ({
                one: false,
                two: false,
                three: false,
                four: false,
                five: false,
                six: true,
              }));
            }}
            active={active.six}
            icon={<HiOutlineRocketLaunch></HiOutlineRocketLaunch>}
            title="Launch"
          ></GridItem>
        </div>
        {active.one && (
          <SuccessItems
            image="icons/features/features-1.svg"
            text="We begin by learning about your business and your project to fully
        understand your development needs. We work closely with you to
        develop a proposal that fits your time and budget constraints."
            title="Start"
          ></SuccessItems>
        )}
        {active.two && (
          <SuccessItems
            image="icons/features/features-2.svg"
            text="Our experienced project managers and team leaders carefully examine your project requirements and develop a detailed project plan. We fine-tune the development process details to ensure that all your needs are met."
            title="Plan"
          ></SuccessItems>
        )}
        {active.three && (
          <SuccessItems
            image="icons/features/features-3.svg"
            text="Based on the project size, we divide it into versions and sprints, and schedule the intermediate and final product releases. The appropriate employees are assigned to ensure timely and efficient completion."
            title="Design"
          ></SuccessItems>
        )}
        {active.four && (
          <SuccessItems
            image="icons/features/features-4.svg"
            text="Our skilled developers get to work, writing lines of code and carefully following the project requirements and schedule to ensure that the project is delivered on time and to your specifications."
            title="Develop"
          ></SuccessItems>
        )}
        {active.five && (
          <SuccessItems
            image="icons/features/features-5.svg"
            text="Our QA experts use both manual and automatic testing to thoroughly test every piece of code before release. This ensures that your software product is clean and free of bugs."
            title="Test"
          ></SuccessItems>
        )}
        {active.six && (
          <SuccessItems
            image="icons/features/features-6.svg"
            text="Once your software is complete, we set it up for launch. We ensure that it is functional, discoverable, and easy to use by your customers."
            title="Launch"
          ></SuccessItems>
        )}
      </div>
    </section>
  );
};

export default Success;
