import "antd/dist/antd.css";
import "../styles/globals.css";
import { Global } from "@emotion/react";
import Layout from "../src/components/commons/layout";
import { AppProps } from "next/app";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { RecoilRoot } from "recoil";
import ApolloSetting from "../src/components/commons/apollo";

// graphql 셋팅
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
