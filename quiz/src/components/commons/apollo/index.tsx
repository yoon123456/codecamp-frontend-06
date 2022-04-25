import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../commons/store";
import { createUploadLink } from "apollo-upload-client";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { GraphQLClient, gql } from "graphql-request";
import { onError } from "@apollo/client/link/error";
import { useEffect } from "react";
import { getAccessToken } from "../getAccessToken";

export default function ApolloSetting(props: any) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [, setUserInfo] = useRecoilState(userInfoState);

  useEffect(() => {
    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions.code === "UNAUTHENTICATED") {
          getAccessToken().then((newAccessToken) => {
            setAccessToken(newAccessToken);
            operation.setContext({
              headers: {
                ...operation.getContext().headers,
                Authorization: `Baarer ${setAccessToken}`,
              },
            });
            return forward(operation);
          });
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend06.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={client}>{props.children} </ApolloProvider>;
}
