import { useState } from "react";
import Head from "next/head";
import OurValues from "@/components/OurValues";
import AboutUs from "@/components/AboutUs";
import Navbar from "@/components/Navbar";
import AboutUsHeader from "@/components/AboutUsHeader";
import ContactUs from "@/components/ContactUs";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
const About = () => {
  const [bg, setBg] = useState("transparent");
  const { t } = useTranslation("nav");
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
        <Navbar t={t} bg={bg}></Navbar>
        <AboutUsHeader setBg={setBg}></AboutUsHeader>
        <AboutUs></AboutUs>
        <OurValues></OurValues>
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

export default About;
