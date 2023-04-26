import { useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";
import SideHero from "@/components/SideHero";
import TermsAndConditions from "@/components/TermsAndConditions";

// const SideHero = dynamic(() => import("@/components/SideHero"), {
//   loading: () => <p>Loading...</p>,
// });
// const ContactUs = dynamic(() => import("@/components/ContactUs"), {
//   loading: () => <p>Loading...</p>,
// });
// const TermsAndConditions = dynamic(
//   () => import("@/components/TermsAndConditions"),
//   {
//     loading: () => <p>Loading...</p>,
//   }
// );

const Terms = () => {
  const [bg, setBg] = useState("transparent");
  const { t: navT } = useTranslation("nav");
  const { t: termsT } = useTranslation("terms");
  return (
    <>
      <Head>
        <title>{termsT("title")}</title>
        <meta
          name="description"
          content="More info about our terms and Conditions"
        />
      </Head>
      <main>
        <Navbar t={navT} bg={bg}></Navbar>
        <SideHero title={termsT("title")} setBg={setBg}></SideHero>
        <TermsAndConditions t={termsT}></TermsAndConditions>
      </main>
    </>
  );
};
export async function getStaticProps(context) {
  const { locale } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale, ["nav", "terms"])),
    },
  };
}
export default Terms;
