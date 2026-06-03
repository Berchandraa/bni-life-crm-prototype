import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { JasaCopyLandingPage } from "./jasacopy/JasaCopyLandingPage";

declare global {
  interface Window {
    dataLayer: IArguments[];
    gtag: (...args: unknown[]) => void;
  }
}

const googleAnalyticsId = "G-Y7S20PTLQ5";

function App() {
  useEffect(() => {
    const loadGoogleAnalytics = () => {
      if (document.querySelector(`script[src*="${googleAnalyticsId}"]`)) {
        return;
      }

      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() {
        window.dataLayer.push(arguments);
      };
      window.gtag("js", new Date());
      window.gtag("config", googleAnalyticsId);

      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
      document.head.appendChild(script);
    };

    const scheduleAnalytics = () => {
      if (typeof window.requestIdleCallback === "function") {
        window.requestIdleCallback(loadGoogleAnalytics, { timeout: 3500 });
        return;
      }

      setTimeout(loadGoogleAnalytics, 2500);
    };

    if (document.readyState === "complete") {
      scheduleAnalytics();
      return;
    }

    window.addEventListener("load", scheduleAnalytics, { once: true });

    return () => window.removeEventListener("load", scheduleAnalytics);
  }, []);

  return (
    <>
      <JasaCopyLandingPage />
      <Analytics />
    </>
  );
}

export default App;
