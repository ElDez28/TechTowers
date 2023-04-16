import { motion } from "framer-motion";
import { variantTwo, variantOne } from "./AboutUsItemOne";
const AboutItemTwo = ({ t }) => {
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
        <p>{t("p_4")}</p>
        <p>{t("p_5")}</p>
      </motion.div>
    </div>
  );
};

export default AboutItemTwo;
