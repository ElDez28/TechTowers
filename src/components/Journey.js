import React from "react";
import { IoEarth } from "react-icons/io5";
import { BsGraphUpArrow } from "react-icons/bs";
import { BsFillPersonBadgeFill } from "react-icons/bs";
import JourneyCard from "./JourneyCard";
import Header from "./Header";
const Journey = () => {
  return (
    <section className="border-b-2 py-32">
      <div className="max-w-[90rem] mx-auto mt-12  text-center ">
        <Header title="LET'S START OUR JOURNEY TOGETHER!"></Header>
        <p className="text-lg mb-12 px-12">
          Business challenges become opportunities with the right software
          partner.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 px-8 max-h-max ">
          <JourneyCard
            icon={<IoEarth></IoEarth>}
            text="Our software services have been designed to minimize your costs,
                maximize your profits and keep you one step ahead of the
                competition, by outsourcing development to Bucharest, Romania,
                the 3rd most attractive country for software outsourcing in the
                world."
            title="Outsourcing services in European Union and US"
          ></JourneyCard>
          <JourneyCard
            icon={<BsGraphUpArrow></BsGraphUpArrow>}
            text="We offer custom software solutions perfectly tailored for your business needs, at an unrivaled balance between price and quality. We specialize in software for enterprises, software portals, and platforms, multiplatform application development and mobile app development for business."
            title="Get personalized buisness Solutions"
          ></JourneyCard>
          <JourneyCard
            icon={<BsFillPersonBadgeFill></BsFillPersonBadgeFill>}
            text="With BS and MS degrees obtained in top Eastern European Universities, our 40+ Romanian developers are innovation-oriented and vetted in the latest programming technologies. They are also proficient in English and good communicators."
            title="Work with creative developers"
          ></JourneyCard>
        </div>
      </div>
    </section>
  );
};

export default Journey;
