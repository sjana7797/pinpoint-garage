import "../styles/globals.css";
import type { AppProps } from "next/app";
import Root from "../layouts/Root";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Root>
      <Component {...pageProps} />
    </Root>
  );
}

export default MyApp;
