import { InfoItem } from "./LegalInfo";
import { motion } from "framer-motion";
export const variants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,

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
const PrivacyInfo = () => {
  return (
    <section className="py-12">
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-[90rem] px-4 lg:px-8 my-12 font-medium mx-auto  text-left flex flex-col gap-4 "
      >
        <p className="text-gray-600 mb-6 ">
          This Privacy Policy describes how Tech Towers ("we," "us," or "our")
          collects, uses, and protects your personal information. By using our
          website or engaging with our services, you consent to the collection,
          use, and disclosure of your personal information in accordance with
          this Privacy Policy.
        </p>
        <InfoItem
          title="INFORMATION WE COLLECT"
          paragraphs={[
            "We may collect personal information from you, such as your name, email address, phone number, and other contact information. We may also collect information about your computer or mobile device, such as your IP address and browser type.",
          ]}
        ></InfoItem>
        <InfoItem
          title="USE of Information"
          paragraphs={[
            "We may use your personal information to provide you with our services, to communicate with you, to improve our services, and to comply with legal and regulatory requirements.",
          ]}
        ></InfoItem>
        <InfoItem
          title="DISCLOSURE of INFORMATION"
          paragraphs={[
            "We may disclose your personal information to our service providers who assist us in providing our services to you. We may also disclose your personal information as required by law or in response to a valid legal request.",
          ]}
        ></InfoItem>
        <InfoItem
          title="SECURITY"
          paragraphs={[
            "We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, we cannot guarantee that your personal information will be completely secure.",
          ]}
        ></InfoItem>
        <InfoItem
          title="COOKIES"
          paragraphs={[
            "We may use cookies and similar technologies to collect information about your use of our website and services. You can disable cookies in your browser settings, but this may limit your ability to use our website and services.",
          ]}
        ></InfoItem>
        <InfoItem
          title="LINK to THIRD-PARTY WEBSITES"
          paragraphs={[
            "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites.",
          ]}
        ></InfoItem>
        <InfoItem
          title="CHILDREN'S PRIVACY"
          paragraphs={[
            "These Terms will be governed by and construed in accordance with the laws of Bosnia and Herzegovina. Any dispute arising out of or in connection with these Terms will be subject to the exclusive jurisdiction of the courts of Bosnia and Herzegovina.",
          ]}
        ></InfoItem>
        <InfoItem
          title="CHANGES to THIS PRIVACY POLICY"
          paragraphs={[
            "We may update this Privacy Policy from time to time. We will post the updated Privacy Policy on our website, and the revised policy will be effective immediately upon posting.",
          ]}
        ></InfoItem>
        <InfoItem
          title="CONTACT US"
          paragraphs={[
            "If you have any questions or concerns about this Privacy Policy,",
          ]}
        ></InfoItem>
        <p className="text-gray-600 -mt-4">
          please contact us at:
          <a className="text-hcolor " href={`mailto:info@techtowers.com`}>
            info@tech-towers.net
          </a>
        </p>
      </motion.div>
    </section>
  );
};

export default PrivacyInfo;
