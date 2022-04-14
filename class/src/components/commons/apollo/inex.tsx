import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../commons/store/index";

export default function ApolloSetting(props) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [, setUserInfo] = useRecoilState(userInfoState);
  /* 
  방법 1. 더이상 지원되지 않음

  if(process.browser){
  process.browswer은 현재 사용불가 원래 뜻은 브라우저에 사용할때;
  }else{
  yarn dev했을 때 실행되는것을 적어주는 칸
  } 
  
  */

  // // 방법 2  로컬스토리지를 여기서 사용하기
  // if (typeof window !== "undefined") {
  //   // 브라우저 라면
  //   console.log("여기는 브라우저다");

  //   // const myLocalStorageAccessToken = localStorage.getItem("accessToken");
  //   // setAccessToken(myLocalStorageAccessToken || "");
  // } else {
  //   // yarn dev라면 즉, 프론트엔드 서버라면
  //   console.log("여기는 프론트 서버다 즉 yarn dev이다");
  // }

  // 방법 3. useEffect는 브라우저에서만 사용하기 때문에 useEffect에 넣어주기
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
    setAccessToken(accessToken || "");
    setUserInfo(userInfo);
  }, []);

  // const myLocalStorageAccessToken = localStorage.getItem("accessToken");
  // setAccessToken(myLocalStorageAccessToken || "");
  // graphql 셋팅
  const uploadLink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
