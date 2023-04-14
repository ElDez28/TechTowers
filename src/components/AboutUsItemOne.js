import { motion } from "framer-motion";
export const variantOne = {
  hidden: { opacity: 0, x: -35, y: 35 },
  visible: {
    opacity: 1,
    x: 0,
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
  hidden: { opacity: 0, x: 35, y: 35 },
  visible: {
    opacity: 1,
    x: 0,
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
const AboutUsItemOne = () => {
  return (
    <div className="flex gap-8 flex-col lg:flex-row mb-12">
      <motion.div
        variants={variantOne}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex gap-4 flex-col flex-1 order-2 lg:order-1"
      >
        <h2 className="font-bold text-2xl">About Us</h2>
        <p>
          At Tech Towers, we're passionate about delivering customized software
          solutions that help our clients achieve their goals. Our founder and
          team lead holds a Master's degree in Computer Science from Germany,
          and our team of expert developers, designers, quality assurance
          specialists, and project managers has over 12 years of experience in
          software development. Each member of our team has passed a rigorous
          test before joining Tech Towers, ensuring that they possess the skills
          and expertise necessary to deliver high-quality software solutions.
        </p>
        <p>
          We take pride in our adherence to the highest standards of quality,
          reliability, and security in all of our software development projects.
          Our team is comprised of experts in development, design, quality
          assurance, and project management, who work collaboratively to deliver
          high-quality software that meets the unique needs and requirements of
          our clients.
        </p>
        <p>
          We believe that great software requires a deep understanding of the
          client's business and industry, which is why we take the time to
          listen, learn, and collaborate with our clients throughout the
          development process.
        </p>
      </motion.div>
      <motion.div
        variants={variantTwo}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex-1 order-1 lg:order-2"
      >
        <img src="/about-extra-2.svg" alt="about-2"></img>
      </motion.div>
    </div>
  );
};

export default AboutUsItemOne;
