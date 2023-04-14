import { useState } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import SideHero from "@/components/SideHero";
import LegalInfo from "@/components/LegalInfo";
import ContactUs from "@/components/ContactUs";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const LegalNotice = () => {
  const [bg, setBg] = useState("transparent");
  const { t: navT } = useTranslation("nav");
  return (
    <>
      <Head>
        <title>About Tech Towers</title>
        <meta
          name="description"
          content="More info about tech towers company"
        />
      </Head>
      <main>
        <Navbar t={navT} bg={bg}></Navbar>
        <SideHero title="LEGAL INFO" setBg={setBg}></SideHero>
        <LegalInfo></LegalInfo>
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
export default LegalNotice;
