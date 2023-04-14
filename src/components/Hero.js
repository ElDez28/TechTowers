import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.6,
    },
  },
};
const variantsTwo = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: "0%",
    transition: {
      delay: 0.5,
      duration: 0.6,
    },
  },
};
const variantsThree = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: "0%",
    transition: {
      delay: 0.7,
      duration: 0.6,
    },
  },
};
const variantsFour = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: "0%",
    transition: {
      delay: 0.9,
      duration: 0.6,
    },
  },
};
const variantsFive = {
  initial: {
    opacity: 0,
    x: "30vh",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};
const Hero = (props) => {
  const { ref, inView } = useInView({
    threshold: 0.9,
  });

  useEffect(() => {
    if (inView) {
      props.setBg("transparent");
    } else {
      props.setBg("white");
    }
  }, [inView]);
  return (
    <section
      ref={ref}
      className="bg-[url('../../public/intro-bg.png')] py-32 lg:bg-fixed bg-center  bg-cover bg-no-repeat mb-8"
    >
      <div className="max-w-[90rem] px-6 flex justify-between gap-4 items-center mx-auto flex-col xl:flex-row mt-20">
        <div className="text-white flex-1 px-4 order-last xl:order-first text-center xl:text-left">
          <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            className="lg:text-5xl text-3xl flex flex-col lg:gap-4 gap-2  font-bold mb-2  tracking-wider"
          >
            <h1 className="leading-snug"> {props.t("main_header")}</h1>
          </motion.div>
          <motion.h2
            variants={variantsTwo}
            initial="initial"
            animate="animate"
            className="xl:text-2xl text-lg font-medium mb-8 tracking-wider"
          >
            {props.t("first_subheading")}
          </motion.h2>
          <motion.h3
            variants={variantsThree}
            initial="initial"
            animate="animate"
            className="xl:text-2xl text-lg mb-12 font-semibold tracking-wider"
          >
            {props.t("second_subheading")}
          </motion.h3>
          <motion.button
            variants={variantsFour}
            initial="initial"
            animate="animate"
            className=" border-white px-6 py-4 border-2 rounded-full text-lg font-semibold"
          >
            {props.t("get_started")}
          </motion.button>
        </div>
        <div className="flex-1 p-6 order-first xl:order-last animate-up-down">
          <motion.img
            variants={variantsFive}
            initial="initial"
            animate="animate"
            className="w-full"
            src="/heross.png"
            alt="floating computer"
          ></motion.img>
        </div>
      </div>
    </section>
  );
};

export default Hero;
