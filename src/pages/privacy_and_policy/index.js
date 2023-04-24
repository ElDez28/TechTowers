import React, { useState } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import SideHero from "@/components/SideHero";
import PrivacyInfo from "@/components/PrivacyInfo";
import ContactUs from "@/components/ContactUs";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const Privacy = () => {
  const [bg, setBg] = useState("transparent");
  const { t: navT } = useTranslation("nav");
  return (
    <>
      <Head>
        <title>Privacy and Policy</title>
        <meta
          name="description"
          content="More info about our privacy and policy"
        />
      </Head>
      <main>
        <Navbar t={navT} bg={bg}></Navbar>
        <SideHero title="Privacy and Policy" setBg={setBg}></SideHero>
        <PrivacyInfo></PrivacyInfo>
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
export default Privacy;