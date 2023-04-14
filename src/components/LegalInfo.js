import { BiCheckDouble } from "react-icons/bi";
import { motion } from "framer-motion";
import { variants } from "./PrivacyInfo";
export const InfoItem = ({ title, paragraphs }) => {
  return (
    <div>
      <div className="flex items-center gap-1 justify-start">
        <BiCheckDouble color="#3498db" fontSize="26px"></BiCheckDouble>
        <h3 className="font-bold text-gray-600 text-md">{title}</h3>
      </div>
      <div className="flex flex-col text-gray-600">
        {paragraphs.map((item, i) => {
          return <p key={i}>{item}</p>;
        })}
      </div>
    </div>
  );
};
const LegalInfo = () => {
  return (
    <section className="py-12">
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-[90rem] px-4 lg:px-8 font-medium mx-auto  text-left flex flex-col gap-4 "
      >
        <p className="text-gray-600">
          This Legal Notice ("Notice") governs the use of the website of Tech
          Towers, a company registered in Bosnia and Herzegovina ("we," "us," or
          "our") by visitors from the European Union, the United States of
          America, and Switzerland ("you" or "your"). By accessing our website,
          you agree to be bound by this Notice.
        </p>
        <InfoItem
          title="Identification"
          paragraphs={[
            "Tech Towers d.o.o. Petrovo b.b. 79100 Prijedor Bosnia and Herzegovina",
            "Registration number: 4229177250009",
            "VAT number: 229177250009",
          ]}
        ></InfoItem>
        <div>
          <div className="flex items-center gap-1 justify-start">
            <BiCheckDouble color="#3498db" fontSize="26px"></BiCheckDouble>
            <h3 className="font-bold text-lg text-gray-600">Contact</h3>
          </div>
          <div className="flex flex-col ">
            <p>
              Email:{" "}
              <a className="text-hcolor " href={`mailto:info@techtowers.com`}>
                info@tech-towers.net
              </a>
            </p>
          </div>
        </div>
        <InfoItem
          title="Disclaimer"
          paragraphs={[
            "The content of our website is for general information purposes only. We make no representation or warranty, express or implied, as to the accuracy, completeness, or reliability of the information contained on our website. You should not rely on the information on our website as a substitute for professional advice. We disclaim all liability and responsibility arising from any reliance placed on such materials by you or any other visitor to our website.",
          ]}
        ></InfoItem>
        <InfoItem
          title="Intellectual Property"
          paragraphs={[
            "All intellectual property rights in our website and the content published on it, including but not limited to text, graphics, logos, images, and software, are owned by us or our licensors. You may not use, reproduce, modify, or distribute any of the content on our website without our prior written consent.",
          ]}
        ></InfoItem>
        <InfoItem
          title="Links to Third-Party Websites"
          paragraphs={[
            "Our website may contain links to third-party websites or resources. We provide these links only as a convenience and do not endorse or make any representations about them. We have no control over the content or availability of third-party websites or resources and disclaim all liability and responsibility for any loss or damage that may arise from your use of them.",
          ]}
        ></InfoItem>
        <InfoItem
          title="Applicable Law and Jurisdiction"
          paragraphs={[
            "This Notice will be governed by and construed in accordance with the laws of Bosnia and Herzegovina. Any dispute arising out of or in connection with this Notice will be subject to the exclusive jurisdiction of the courts of Bosnia and Herzegovina.",
          ]}
        ></InfoItem>
        <InfoItem
          title="Changes to this Notice"
          paragraphs={[
            "We reserve the right to change this Notice at any time, but we will provide you with reasonable notice of any changes. Your continued use of our website after the changes take effect will constitute your acceptance of the revised Notice.",
          ]}
        ></InfoItem>
        <div className="mt-8 text-gray-600">
          <p>If you have any questions or concerns about this Notice,</p>
          <p>
            please contact us at:{" "}
            <a className="text-hcolor " href={`mailto:info@techtowers.com`}>
              info@tech-towers.net
            </a>
          </p>
        </div>
        <span className="text-gray-600">Last updated: 01.03.2023</span>
      </motion.div>
    </section>
  );
};

export default LegalInfo;
