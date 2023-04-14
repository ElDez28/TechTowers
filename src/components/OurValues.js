import Header from "./Header";
import { motion } from "framer-motion";

import Value from "./Value";
import MissionAndVision from "./MissionAndVision";
export const variantOne = {
  hidden: { opacity: 0, x: "20vh" },
  visible: {
    opacity: 1,
    x: 0,

    transition: {
      type: "tween",
      duration: 0.6,
      delay: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      type: "tween",
      duration: 0.6,
    },
  },
};
export const variantTwo = {
  hidden: { opacity: 0, x: "-20vh" },
  visible: {
    opacity: 1,
    x: 0,

    transition: {
      type: "tween",
      duration: 0.6,
      delay: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      type: "tween",
      duration: 0.6,
    },
  },
};
const OurValues = () => {
  return (
    <section className="mt-24 text-gray-700 pb-24">
      <div className="max-w-[90rem] mx-auto text-center px-4 lg:px-8 ">
        <Header title="OUR VALUES"></Header>
        <div className="flex mt-24 justify-center  flex-col gap-12 md:flex-row mb-20">
          <motion.div
            variants={variantOne}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-4 w-full"
          >
            <Value
              text="Delivering high-quality software solutions that meet or exceed
                  client expectations."
              title="Quality"
            ></Value>
            <Value
              text="Embracing new technologies and approaches to stay ahead of the curve."
              title="Innovation"
            ></Value>
            <Value
              text="Working closely with clients and within our team to achieve shared goals."
              title="Collaboration"
            ></Value>
            <Value
              text="Consistently delivering on promises and commitments to build trust with clients."
              title="Reliability"
            ></Value>
            <Value
              text="Striving for ongoing improvement in our processes, products, and services."
              title="Continuous Improvement"
            ></Value>
          </motion.div>
          <motion.div
            variants={variantTwo}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-4 w-full"
          >
            <Value
              text="Taking ownership of our work and being accountable for our results."
              title="Accountability"
            ></Value>
            <Value
              text="Communicating clearly and openly with clients and team members throughout the development process."
              title="Transparency"
            ></Value>
            <Value
              text="Treating clients, team members, and partners with respect and professionalism."
              title="Respect"
            ></Value>
            <Value
              text="Embracing diversity and inclusivity in our team and client base."
              title="Diversity"
            ></Value>
            <Value
              text="Being flexible and adaptable to changing client needs and market conditions."
              title="Agility"
            ></Value>
          </motion.div>
        </div>
        <MissionAndVision></MissionAndVision>
      </div>
    </section>
  );
};

export default OurValues;
