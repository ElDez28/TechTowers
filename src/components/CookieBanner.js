import Link from "next/link";
import { getLocalStorage, setLocalStorage } from "@/lib/storageHelper";
import { useState, useEffect } from "react";
export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);

    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    const newValue = cookieConsent ? "granted" : "denied";

    window.gtag("consent", "update", {
      analytics_storage: newValue,
    });

    setLocalStorage("cookie_consent", cookieConsent);
  }, [cookieConsent]);
  return (
    <div
      className={`${
        cookieConsent !== null ? "hidden" : "flex"
      } my-10 mx-auto w-max fixed bottom-0 left-0 right-0  px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4 bg-gray-200 rounded-lg shadow`}
    >
      <div className="text-center">
        <Link href="/info/cookies">
          <p className="whitespace-nowrap">
            We use{" "}
            <span className="font-bold text-sky-400 mx-1"> cookies </span> on
            our site.
          </p>
        </Link>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => setCookieConsent(false)}
          className="px-5 py-2 text-gray-700 rounded-md border-gray-900"
        >
          Decline
        </button>
        <button
          onClick={() => setCookieConsent(true)}
          className="bg-primary px-5 py-2 text-white rounded-lg whitespace-nowrap"
        >
          Allow Cookies
        </button>
      </div>
    </div>
  );
}
