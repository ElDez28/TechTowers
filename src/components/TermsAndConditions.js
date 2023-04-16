import { InfoItem } from "./LegalInfo";
import { motion } from "framer-motion";
import { variants } from "./PrivacyInfo";
const TermsAndConditions = ({ t }) => {
  return (
    <section className="py-12">
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-[90rem] px-4 lg:px-8 my-12 font-medium mx-auto  text-left flex flex-col gap-4 "
      >
        <p className="text-gray-600 mb-6 ">{t("main_p")}</p>
        <InfoItem title={t("h1")} paragraphs={[t("p1")]}></InfoItem>
        <InfoItem title={t("h2")} paragraphs={[t("p2")]}></InfoItem>
        <InfoItem title={t("h3")} paragraphs={[t("p3")]}></InfoItem>
        <InfoItem title={t("h4")} paragraphs={[t("p4")]}></InfoItem>
        <InfoItem title={t("h5")} paragraphs={[t("p5")]}></InfoItem>
        <InfoItem title={t("h6")} paragraphs={[t("p6")]}></InfoItem>
        <InfoItem title={t("h7")} paragraphs={[t("p7")]}></InfoItem>
        <InfoItem title={t("h8")} paragraphs={[t("p8")]}></InfoItem>
        <InfoItem title={t("h9")} paragraphs={[t("p9")]}></InfoItem>
        <p className="text-gray-600 -mt-4">
          {t("p10")}
          <a className="text-hcolor " href={`mailto:info@techtowers.com`}>
            info@tech-towers.net
          </a>
        </p>
        <p className="text-gray-600 mt-8">{[t("end")]}</p>
      </motion.div>
    </section>
  );
};

export default TermsAndConditions;
