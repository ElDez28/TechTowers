import { motion } from "framer-motion";
import { variantTwo, variantOne } from "./AboutUsItemOne";
const AboutItemTwo = () => {
  return (
    <div className="flex gap-8 flex-col lg:flex-row">
      <motion.div
        variants={variantOne}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex-1"
      >
        <img src="/about-extra-1.svg" alt="about-1"></img>
      </motion.div>
      <motion.div
        variants={variantTwo}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex gap-4 flex-col flex-1 items-left justify-center"
      >
        <p>
          We're committed to delivering exceptional customer service, which is
          why we prioritize communication, transparency, and accountability in
          all of our projects. Our goal is to build long-term relationships with
          our clients and become trusted partners in their success. When you
          partner with Tech Towers, you can rest assured that you're working
          with a team that adheres to German standards and values quality,
          reliability, and security above all else.
        </p>
        <p>
          If you're looking for a reliable and experienced software development
          partner, look no further than Tech Towers. Contact us today to learn
          more about our services and how we can help bring your vision to life
        </p>
      </motion.div>
    </div>
  );
};

export default AboutItemTwo;
