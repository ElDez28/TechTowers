import React from "react";
import { motion } from "framer-motion";
const data = [
  {
    title: "Experienced Developers",
    text: "Our team of senior developers has more than 12 years of experience in the software industry, which means they have the skills and knowledge to handle complex projects efficiently. With their expertise, you can be sure that your project will be completed on time and to your satisfaction.",
  },
  {
    title: "German Standards",
    text: "Our company works with German standards, which means that clients can expect high-quality work and professionalism when working with us. We strive to meet and exceed your expectations by providing the best possible solutions for your business needs.",
  },
  {
    title: "Cost-Effective",
    text: "Our location in Bosnia allows us to offer competitive pricing while maintaining quality standards. You can save on development costs without compromising on quality, making us an affordable choice for your business.",
  },
  {
    title: "Time Zone Advantage",
    text: "Bosnia is in the Central European Time Zone, which makes it easier to work with clients in Europe and the United States, as there is a significant overlap in working hours. This advantage allows us to work closely with you, ensuring timely delivery of your project.",
  },
  {
    title: "Multilingual Team",
    text: "Our team is fluent in multiple languages, including German and English, which makes it easier to communicate with clients and ensure that their needs are met. We understand the importance of effective communication and strive to keep you updated throughout the project lifecycle.",
  },
];

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
};

const WhyChooseParagraph = ({ index }) => {
  const currentData = data[index];
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-6 px-8 text-center md:text-left text-gray-700"
    >
      <h3 className="text-4xl">{currentData.title}</h3>
      <p className="text-gray-400 font-medium text-lg">{currentData.text}</p>
    </motion.div>
  );
};

export default WhyChooseParagraph;
