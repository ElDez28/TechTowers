import { useState } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import OurValues from "@/components/OurValues";
import AboutUs from "@/components/AboutUs";
import Navbar from "@/components/Navbar";
import AboutUsHeader from "@/components/AboutUsHeader";

// const OurValues = dynamic(() => import("@/components/OurValues"), {
//   loading: () => <p>Loading...</p>,
// });
// const ContactUs = dynamic(() => import("@/components/ContactUs"), {
//   loading: () => <p>Loading...</p>,
// });
// const AboutUs = dynamic(() => import("@/components/AboutUs"), {
//   loading: () => <p>Loading...</p>,
// });
// const AboutUsHeader = dynamic(() => import("@/components/AboutUsHeader"), {
//   loading: () => <p>Loading...</p>,
// });

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
const About = () => {
  const [bg, setBg] = useState("transparent");
  const { t: navT } = useTranslation("nav");
  const { t: aboutT } = useTranslation("about");
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
        <AboutUsHeader setBg={setBg}></AboutUsHeader>
        <AboutUs t={aboutT}></AboutUs>
        <OurValues></OurValues>
      </main>
    </>
  );
};
export async function getServerSideProps(context) {
  const { locale } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale, ["nav", "about"])),
    },
  };
}

export default About;
