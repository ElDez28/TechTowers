import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion, inView } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
const listOne = [
  "We are committed to providing exceptional customer service and tailored solutions that meet the unique needs and requirements of our clients.",
  "Our mission is to build long-term relationships with our clients and become a trusted partner in their success.",
  "We strive to create a collaborative and inclusive work environment that attracts and retains top talent in the industry.",
  "Our mission is to stay at the forefront of emerging technologies and leverage them to create innovative solutions for our clients.",
  "We are dedicated to adhering to the highest standards of quality, reliability, and security in all of our software development projects.",
  "Our mission is to empower businesses with the technology they need to succeed in an ever-evolving digital landscape.",
];
const listTwo = [
  "Our vision is to become a trusted partner for businesses seeking high-quality software solutions that drive growth and success.",
  "We aim to be recognized as a leading software development company, known for our expertise, innovation, and commitment to quality.",
  "Our goal is to empower businesses with the technology they need to succeed in an ever-evolving digital landscape.",
  "We strive to create a collaborative and inclusive work environment that attracts and retains top talent in the industry.",
  "Our vision is to be at the forefront of emerging technologies and leverage them to create innovative solutions for our clients.",
  "We aspire to build long-term relationships with our clients by delivering exceptional customer service and tailored solutions.",
  "Our vision is to help businesses across industries achieve their goals through customized software solutions that drive efficiency, productivity, and growth.",
];
const Item = ({ image, title, list, animation }) => {
  return (
    <motion.div
      animate={animation}
      className="flex-1 relative overflow-hidden rounded-lg group "
    >
      <Image
        className="w-full h-full  absolute blur-sm -z-10 object-cover"
        width={200}
        height={200}
        src={image}
        alt="logo"
      ></Image>
      <div className="w-full h-full pt-48 lg:px-8 px-4 pb-8">
        <div className=" text-gray-500 flex flex-col justify-between bg-white h-full bg-opacity-80 p-12 z-10 mx-auto rounded-lg group-hover:bg-primary group-hover:text-white transition-colors duration-500">
          <h4 className="text-2xl font-semibold mb-6">{title}</h4>
          <ul className="text-left flex flex-col gap-4 list-disc ">
            {list.map((text, i) => {
              return <li key={i}>{text}</li>;
            })}
          </ul>
          <Link
            className="text-left mt-6 font-bold text-xs flex gap-1 items-center cursor-pointer hover:underline"
            href="#"
          >
            <BsArrowRight fontSize="18px"></BsArrowRight> READ MORE
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
const MissionAndVision = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const [animated, setAnimated] = useState(false);
  const animationOne = useAnimation();
  const animationTwo = useAnimation();
  console.log(inView);
  useEffect(() => {
    if (inView & !animated) {
      animationOne.start({
        opacity: 1,
        y: 0,
        transition: {
          type: "tween",
          duration: 1.2,
          delay: 0.2,
        },
      });
      animationTwo.start({
        opacity: 1,
        y: 0,
        transition: {
          type: "tween",
          duration: 1.2,
          delay: 0.2,
        },
      });
      setAnimated(true);
    }
    if (!inView & !animated) {
      animationOne.start({
        opacity: 0,
        y: 100,
      });
      animationTwo.start({
        opacity: 0,
        y: 200,
      });
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-2 gap-6  text-gray-700 "
    >
      <Item
        animation={animationOne}
        image="/more-services/more-services-1.jpg"
        list={listOne}
        title="Our Mission"
      ></Item>
      <Item
        animation={animationTwo}
        image="/more-services/more-services-2.jpg"
        list={listTwo}
        title="Our Vision"
      ></Item>
    </div>
  );
};

export default MissionAndVision;
