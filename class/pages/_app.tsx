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
