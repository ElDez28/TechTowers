import "@/styles/globals.css";
import { appWithTranslation } from "next-i18next";
import { Raleway } from "next/font/google";
import Head from "next/head";
import Script from "next/script";
import dynamic from "next/dynamic";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { pageview } from "@/lib/gtagHelper";
import CookieConsent from "react-cookie-consent";
import { useRouter } from "next/router";
const DynamicFooter = dynamic(() => import("@/components/Links"));

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-ral",
});
const ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
function App({ Component, pageProps }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag("config", "G-10KHN0N9HD", { page_path: url });
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  function handleAccept() {
    window.gtag("consent", "update", {
      ad_storage: "granted",
      analytics_storage: "granted",
    });
  }
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/tech.png" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={`${raleway.variable} font-ral min-h-screen w-full`}>
        <Component {...pageProps} />
        <DynamicFooter></DynamicFooter>
        <CookieConsent
          style={{
            top: "90%",
            width: "max-content",
            height: "max-content",
            left: "32%",
            "border-radius": 20,
            background: "#92a4ba",
          }}
          buttonText="Accept"
          enableDeclineButton
          onAccept={() => {
            handleAccept();
          }}
          declineButtonText="Decline"
        >
          We use cookies to improve your experience on our site.
        </CookieConsent>
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
          src={`https://www.googletagmanager.com/gtag/js?id=G-10KHN0N9HD`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-10KHN0N9HD', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </main>
    </>
  );
}

export default appWithTranslation(App);
