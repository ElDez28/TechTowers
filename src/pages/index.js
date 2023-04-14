import Head from "next/head";
import Hero from "@/components/Hero";
import Slider from "@/components/Slider";
import UAParser from "ua-parser-js";
import Services from "@/components/Services";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Journey from "@/components/Journey";
import Technologies from "@/components/Technologies";
import Experience from "@/components/Experience";
import Success from "@/components/Success";
import WhyChose from "@/components/WhyChose";
import Testimonials from "@/components/Testimonials";
import ContactUs from "@/components/ContactUs";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home(props) {
  const [bg, setBg] = useState("transparent");
  const { t: heroT } = useTranslation("home");
  const { t: navT } = useTranslation("nav");

  return (
    <>
      <Head>
        <title>Tech Towers</title>
        <meta name="description" content="It company" />
      </Head>
      <main>
        <Navbar t={navT} bg={bg}></Navbar>
        <Hero t={heroT} setBg={setBg}></Hero>
        <Slider deviceType={props.deviceType}></Slider>
        <Journey></Journey>
        <Experience></Experience>
        <Services></Services>
        <Technologies></Technologies>
        <Success></Success>
        <WhyChose></WhyChose>
        <Testimonials deviceType={props.deviceType}></Testimonials>
        <ContactUs main></ContactUs>
      </main>
    </>
  );
}
export async function getServerSideProps(context) {
  const { req, locale } = context;

  let userAgent;
  if (req) {
    userAgent = req.headers["user-agent"];
  } else {
    userAgent = navigator.userAgent;
  }
  const parser = new UAParser();
  parser.setUA(userAgent);
  const result = parser.getResult();
  const deviceType = (result.device && result.device.type) || "desktop";

  return {
    props: {
      deviceType,
      ...(await serverSideTranslations(locale, ["home", "nav"])),
    },
  };
}
