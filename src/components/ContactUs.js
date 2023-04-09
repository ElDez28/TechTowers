import React, { useState, useEffect } from "react";
import Header from "./Header";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const FlexItem = ({ title, elements }) => {
  return (
    <div className="flex flex-col gap-2 flex-1 mt-12 md:border-r-2  border-r-lightblue last:border-r-0 ">
      <h3 className="font-bold">{title}</h3>
      {elements.map((element, i) => {
        return <p key={i}>{element}</p>;
      })}
    </div>
  );
};
const ContactUs = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const [animated, setAnimated] = useState(false);
  const animation = useAnimation();
  useEffect(() => {
    if (inView & !animated) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: {
          type: "tween",
          duration: 1,
        },
      });
      setAnimated(true);
    }
    if (!inView & !animated) {
      animation.start({
        opacity: 0,
        y: "20vh",
      });
    }
  }, [inView]);

  return (
    <section ref={ref} className="py-24 bg-[#edf2f5]">
      <motion.div
        animate={animation}
        className="max-w-[90rem] mx-auto px-8  text-center"
      >
        <Header title="CONTACT US"></Header>
        <p>Contact TechTowers</p>
        <div className="flex w-full justify-between flex-col md:flex-row gap-2 mb-12">
          <FlexItem
            title="ADDRESS"
            elements={[
              "Tech Towers d.o.o Prijedor Petrovo b.b. 79101 Prijedor Bosnia and Herzegovina",
            ]}
          ></FlexItem>
          <FlexItem
            title="PHONE NUMBER"
            elements={["+4917680190786", "+387644133154"]}
          ></FlexItem>
          <FlexItem title="EMAIL" elements={["info@techtowers.com"]}></FlexItem>
        </div>
        <form className="flex flex-col gap-4 ">
          <div className="flex justify-between gap-4 flex-col lg:flex-row">
            <input
              className="flex-1 rounded-lg py-2 px-4 focus:outline-none font-medium text-gray-500"
              placeholder="Your Name"
              type="text"
            ></input>
            <input
              className="flex-1 rounded-lg py-2 px-4 focus:outline-none font-medium text-gray-500"
              placeholder="Email"
              type="email"
            ></input>
          </div>
          <input
            className="flex-1 rounded-lg py-2 px-4 focus:outline-none font-medium text-gray-500"
            placeholder="Subject"
          ></input>
          <textarea
            rows="5"
            className="flex flex-1 rounded-lg py-4 px-4 resize-none focus:outline-none  font-medium text-gray-500"
          ></textarea>
          <button className="py-3 px-8 bg-primary rounded-full w-max mx-auto text-gray-200 font-medium mt-4">
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactUs;
