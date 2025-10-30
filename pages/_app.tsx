import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <h2>Hi Pankaj</h2>
      <Component {...pageProps} />
    </>
  );
}
