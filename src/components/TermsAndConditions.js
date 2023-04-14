import { InfoItem } from "./LegalInfo";
import { motion } from "framer-motion";
import { variants } from "./PrivacyInfo";
const TermsAndConditions = () => {
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
          These terms and conditions ("Terms") constitute a legal agreement
          between Tech Towers, a company registered in Bosnia and Herzegovina
          ("we," "us," or "our"), and the clients from the United States of
          America, European Union, and Switzerland ("you" or "your"). By
          accessing our website, engaging with our services, or otherwise doing
          business with us, you agree to be bound by these Terms.
        </p>
        <InfoItem
          title="SERVICES"
          paragraphs={[
            `We provide software development and related services ("Services") to our clients. Our Services include custom software development, team augmentation, and full-service development. We will provide the Services in a professional and timely manner, using reasonable care and skill.`,
          ]}
        ></InfoItem>
        <InfoItem
          title="FEES and PAYMENT"
          paragraphs={[
            `We will charge you fees for the Services, which will be agreed upon in writing before we begin providing the Services. We reserve the right to change our fees at any time, but we will provide you with reasonable notice of any changes. You agree to pay our fees in accordance with our payment terms, which will be set out in our written agreement.`,
          ]}
        ></InfoItem>
        <InfoItem
          title="CONFIDENTIALITY"
          paragraphs={[
            `We will keep all information provided by you confidential and will not disclose it to any third party without your prior written consent. We will take reasonable measures to ensure the security and confidentiality of your information.`,
          ]}
        ></InfoItem>
        <InfoItem
          title="INTELLECTUAL PROPERTY"
          paragraphs={[
            `All intellectual property rights in any software, designs, documents, or other materials that we create for you as part of the Services will belong to you, provided that you have paid all fees due to us. We will retain all intellectual property rights in any pre-existing materials that we use in the provision of the Services.`,
          ]}
        ></InfoItem>
        <InfoItem
          title="WARRANTIES and DISCLAIMERS"
          paragraphs={[
            `We warrant that we will provide the Services in a professional and timely manner and that the Services will be of a quality that is consistent with industry standards. We do not warrant that the Services will be error-free or that they will meet your specific requirements.`,
          ]}
        ></InfoItem>
        <InfoItem
          title="LIMITATION of LIABILITY"
          paragraphs={[
            `We will not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the Services or these Terms, including but not limited to loss of profits, revenue, data, or use. Our liability to you for any direct damages arising out of or in connection with the Services or these Terms will be limited to the fees paid by you to us.`,
          ]}
        ></InfoItem>
        <InfoItem
          title="GOVERNING LAW and JURISDICTION"
          paragraphs={[
            `These Terms will be governed by and construed in accordance with the laws of Bosnia and Herzegovina. Any dispute arising out of or in connection with these Terms will be subject to the exclusive jurisdiction of the courts of Bosnia and Herzegovina.`,
          ]}
        ></InfoItem>
        <InfoItem
          title="CHANGES to THESE TERMS"
          paragraphs={[
            `We reserve the right to change these Terms at any time, but we will provide you with reasonable notice of any changes. Your continued use of our website, engagement with our services, or other business dealings with us after the changes take effect will constitute your acceptance of the revised Terms.`,
          ]}
        ></InfoItem>
        <InfoItem
          title="CONTACT US"
          paragraphs={[
            `If you have any questions or concerns about these Terms,`,
          ]}
        ></InfoItem>
        <p className="text-gray-600 -mt-4">
          please contact us at:
          <a className="text-hcolor " href={`mailto:info@techtowers.com`}>
            info@tech-towers.net
          </a>
        </p>
        <p className="text-gray-600 mt-8">
          By using our website, engaging with our services, or otherwise doing
          business with us, you agree to these Terms. If you do not agree to
          these Terms, you may not use our website, engage with our services, or
          otherwise do business with us.
        </p>
      </motion.div>
    </section>
  );
};

export default TermsAndConditions;
