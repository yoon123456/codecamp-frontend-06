import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store/login";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { ReactNode, useEffect } from "react";
import { onError } from "@apollo/client/link/error";
import { getAccessToken } from "../getAccessToken";

interface IProps {
  children: ReactNode;
}

export default function ApolloSettingPage(props: IProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  useEffect(() => {
    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);

  // error링크 만들기
  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1-1. 에러를 캐치
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 1-2. 해당에러가 토큰만료 에러인지 체크한다(UNAUTHENTICATED)
        if (err.extensions.code === "UNAUTHENTICATED") {
          getAccessToken().then((newAccessToken) => {
            setAccessToken(newAccessToken);
            operation.setContext({
              herders: {
                // 헤더의 모든것은 스프레드 연산자로 그대로 불러오고 Authorization의 값만 새로운 토큰으로 바꿔준다
                ...operation.getContext().headers,
                Authorization: `Bearer ${newAccessToken}`,
              },
            });
            // 3-2. 변경된 operation 재요청하기
            return forward(operation);
          });
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend06.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    // 쿠키에 포함시킬건지 여부를 정할 수 있음
    credentials: "include",
  });
  // graphql 셋팅
  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}

// import { useRecoilState } from "recoil";
// import { accessTokenState, userInfoState } from "../../../commons/store/login";
// import {
//   ApolloClient,
//   ApolloLink,
//   ApolloProvider,
//   InMemoryCache,
// } from "@apollo/client";
// import { createUploadLink } from "apollo-upload-client";
// import { ReactNode, useEffect } from "react";

// interface IProps {
//   children: ReactNode;
// }

// export default function ApolloSettingPage(props: IProps) {
//   const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
//   const [, setUserInfo] = useRecoilState(userInfoState);

//   useEffect(() => {
//     const accessToken = localStorage.getItem("accessToken");
//     const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
//     setAccessToken(accessToken || "");
//     setUserInfo(userInfo);
//   }, []);

//   const uploadLink = createUploadLink({
//     uri: "http://backend06.codebootcamp.co.kr/graphql",
//     headers: { Authorization: `Bearer ${accessToken}` },
//   });
//   // graphql 셋팅
//   const client = new ApolloClient({
//     link: ApolloLink.from([uploadLink]),
//     cache: new InMemoryCache(),
//   });

//   return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
// }
