import Head from "next/head";
import { useState } from "react";
import UAParser from "ua-parser-js";
import dynamic from "next/dynamic";
// const Hero = dynamic(() => import("@/components/Hero"), {
//   loading: () => <p>Loading...</p>,
// });
import Hero from "@/components/Hero";
// const Slider = dynamic(() => import("@/components/Slider"), {
//   loading: () => <p>Loading...</p>,
// });
import Slider from "@/components/Slider";
// const Services = dynamic(() => import("@/components/Services"), {
//   loading: () => <p>Loading...</p>,
// });
import Services from "@/components/Services";
// const Navbar = dynamic(() => import("@/components/Navbar"), {
//   loading: () => <p>Loading...</p>,
// });
import Navbar from "@/components/Navbar";
// const Journey = dynamic(() => import("@/components/Journey"), {
//   loading: () => <p>Loading...</p>,
// });
import Journey from "@/components/Journey";
// const Technologies = dynamic(() => import("@/components/Technologies"), {
//   loading: () => <p>Loading...</p>,
// });
import Technologies from "@/components/Technologies";
// const Experience = dynamic(() => import("@/components/Experience"), {
//   loading: () => <p>Loading...</p>,
// });
import Experience from "@/components/Experience";
// const Success = dynamic(() => import("@/components/Success"), {
//   loading: () => <p>Loading...</p>,
// });
import Success from "@/components/Success";
// const WhyChose = dynamic(() => import("@/components/WhyChose"), {
//   loading: () => <p>Loading...</p>,
// });
import WhyChose from "@/components/WhyChose";
// const Testimonials = dynamic(() => import("@/components/Testimonials"), {
//   loading: () => <p>Loading...</p>,
// });
import Testimonials from "@/components/Testimonials";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home(props) {
  const [bg, setBg] = useState("transparent");
  const { t: homeT } = useTranslation("home");
  const { t: navT } = useTranslation("nav");

  return (
    <>
      <Head>
        <title>Tech Towers</title>
        <meta name="description" content="It company" />
      </Head>
      <main>
        <Navbar t={navT} bg={bg}></Navbar>
        <Hero t={homeT} setBg={setBg}></Hero>
        <Slider deviceType={props.deviceType}></Slider>
        <Journey></Journey>
        <Experience></Experience>
        <Services locale={props.locale} t={homeT}></Services>
        <Technologies></Technologies>
        <Success></Success>
        <WhyChose></WhyChose>
        <Testimonials deviceType={props.deviceType}></Testimonials>
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
      locale,
      ...(await serverSideTranslations(locale, ["home", "nav"])),
    },
  };
}
