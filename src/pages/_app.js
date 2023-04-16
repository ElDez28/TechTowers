import "@/styles/globals.css";
import { appWithTranslation } from "next-i18next";
import { Raleway } from "next/font/google";
import Head from "next/head";
import Script from "next/script";
import dynamic from "next/dynamic";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { pageview } from "@/lib/gtagHelper";
const DynamicFooter = dynamic(() => import("@/components/Links"));
const CookieBanner = dynamic(() => import("@/components/CookieBanner"), {
  ssr: false,
});
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-ral",
});
const ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
function App({ Component, pageProps }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + searchParams.toString();

    pageview(ID, url);
  }, [pathname, searchParams, ID]);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={`${raleway.variable} font-ral min-h-screen w-full`}>
        <Component {...pageProps} />
        <DynamicFooter></DynamicFooter>
        <CookieBanner></CookieBanner>
        <Script id="tawk" strategy="lazyOnload">
          {`var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
         (function(){
           var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
           s1.async=true;
           s1.src='https://embed.tawk.to/64367ade4247f20fefeb2cc2/1gtqcvtgf';
           s1.charset='UTF-8';
           s1.setAttribute('crossorigin','*');
           s0.parentNode.insertBefore(s1,s0);
           })()`}
        </Script>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${ID}`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${ID}');
    `}
        </Script>
      </main>
    </>
  );
}

export default appWithTranslation(App);
