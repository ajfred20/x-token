// _app.tsx
import "@/styles/globals.css"; // Import global styles
import { useEffect } from "react";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // Example of router events
    const handleRouteChange = (url: string) => {
      console.log(`Navigating to: ${url}`);
    };

    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
