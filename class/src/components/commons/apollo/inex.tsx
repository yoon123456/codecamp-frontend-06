import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../commons/store/index";
import { getAccessToken } from "../getAccessToken";

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
    // const accessToken = localStorage.getItem("accessToken");
    // const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
    // setAccessToken(accessToken || "");
    // setUserInfo(userInfo);

    // accessToken 재발급받아서 state에 넣어주기
    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);

  // 여기가 프리렌더링시 문제되는 코드
  // const myLocalStorageAccessToken = localStorage.getItem("accessToken");
  // setAccessToken(myLocalStorageAccessToken || "");

  // ================================================================== //

  // // restoreAccessToken 불러오는 gql
  // const RESTORE_ACCESS_TOKEN = gql`
  //   mutation restoreAccessToken {
  //     restoreAccessToken {
  //       accessToken
  //     }
  //   }
  // `;

  // error링크 만들기
  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1-1. 에러를 캐치

    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 1-2. 해당에러가 토큰만료에러 인지르 체크한다(UNAUTHENTICATED)

        if (err.extensions.code === "UNAUTHENTICATED") {
          // // 2-1. refreshToken으로 accessToken을 재발급 받아준다
          // const graphQLClient = new GraphQLClient(
          //   "https://backend06.codebootcamp.co.kr/graphql"
          //   // https로 통신하는 이유는 secure option 떄문이다
          // );
          // const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
          // const newAccessToken = result.restoreAccessToken.accessToken;
          getAccessToken().then((newAccessToken) => {
            // 2-2. setAccessToken을 통해 재발급받은 accessToken을 global state에 저장하기
            setAccessToken(newAccessToken);

            // 3-1. 재발급 받은 accessToken으로 방금 실패한 쿼리 재요청하기
            // getContext를 통해 headers를 불러오거나 setContext를 통해 새로운 값으로 바꿔줄 수 있다

            operation.setContext({
              headers: {
                // 헤더의 모든것은 스프레드 연산자로 그대로 불러오고 Authorization의 값만 새로운 토큰으로 바꿔준다
                ...operation.getContext().headers,
                Authorization: `Bearer ${newAccessToken}`,
              },
            });

            // 3-2. 변경된 operation 재요청하기
            return forward(operation);
          });

          // // 2-2. setAccessToken을 통해 재발급받은 accessToken을 global state에 저장하기
          // setAccessToken(newAccessToken);

          // // 3-1. 재발급 받은 accessToken으로 방금 실패한 쿼리 재요청하기
          // // getContext를 통해 headers를 불러오거나 setContext를 통해 새로운 값으로 바꿔줄 수 있다

          // operation.setContext({
          //   headers: {
          //     // 헤더의 모든것은 스프레드 연산자로 그대로 불러오고 Authorization의 값만 새로운 토큰으로 바꿔준다
          //     ...operation.getContext().headers,
          //     Authorization: `Bearer ${newAccessToken}`,
          //   },
          // });

          // // 3-2. 변경된 operation 재요청하기
          // return forward(operation);
        }
      }
    }
  });

  // graphql 셋팅
  const uploadLink = createUploadLink({
    uri: "https://backend06.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    // errorLink 추가하기
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
