import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
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
export const variantOne = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,

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
  hidden: { opacity: 0, y: 200 },
  visible: {
    opacity: 1,
    y: 0,

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
const Item = ({ image, title, list, variants }) => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
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
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6  text-gray-700 ">
      <Item
        variants={variantOne}
        image="/more-services/more-services-1.jpg"
        list={listOne}
        title="Our Mission"
      ></Item>
      <Item
        variants={variantTwo}
        image="/more-services/more-services-2.jpg"
        list={listTwo}
        title="Our Vision"
      ></Item>
    </div>
  );
};

export default MissionAndVision;
