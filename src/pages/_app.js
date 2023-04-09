import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { Raleway } from "next/font/google";
import Head from "next/head";
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-ral",
});
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={`${raleway.variable} font-ral min-h-screen w-full`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
