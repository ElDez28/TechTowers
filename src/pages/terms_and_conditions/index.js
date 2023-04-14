import { useState } from "react";
import Navbar from "@/components/Navbar";
import SideHero from "@/components/SideHero";
import Head from "next/head";
import TermsAndConditions from "@/components/TermsAndConditions";
import ContactUs from "@/components/ContactUs";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const Terms = () => {
  const [bg, setBg] = useState("transparent");
  const { t: navT } = useTranslation("nav");
  return (
    <>
      <Head>
        <title>Terms and Conditions</title>
        <meta
          name="description"
          content="More info about our terms and Conditions"
        />
      </Head>
      <main>
        <Navbar t={navT} bg={bg}></Navbar>
        <SideHero title="Terms and Conditions" setBg={setBg}></SideHero>
        <TermsAndConditions></TermsAndConditions>
        <ContactUs></ContactUs>
      </main>
    </>
  );
};
export async function getServerSideProps(context) {
  const { locale } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale, ["nav"])),
    },
  };
}
export default Terms;
