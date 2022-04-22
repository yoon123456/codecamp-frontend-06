import "antd/dist/antd.css";
// import "../styles/globals.css";

import { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { RecoilRoot } from "recoil";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import ApolloSetting from "../src/components/commons/apollo/inex";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1fi2r33Usfw9yBBSP-ShRMrMfgZRrR0U",
  authDomain: "yewon1124-b3d43.firebaseapp.com",
  projectId: "yewon1124-b3d43",
  storageBucket: "yewon1124-b3d43.appspot.com",
  messagingSenderId: "395604253075",
  appId: "1:395604253075:web:e90619e0f9beaf1fe03066",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      {/* app페이지에서 불러오는 방법: 작동은 하지만 모든페이지에서 카카오맵을 다운로드 받으므로 비효율적이다
      <Head>
        <script
        type="text/javascript"
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=7b36e30971445aeef2fff1aa2bd77f73"
        ></script>
      </Head> */}
      <RecoilRoot>
        <ApolloSetting>
          <Global styles={globalStyles} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloSetting>
      </RecoilRoot>
    </div>
  );
}

export default MyApp;
