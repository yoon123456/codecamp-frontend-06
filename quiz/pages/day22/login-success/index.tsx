import { gql, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../src/commons/store";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LoginSuccessPage() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const router = useRouter();

  if (data?.fetchUserLoggedIn.email === "") {
    Modal.error({ content: "로그인을 다시해주세요" });
    router.push("/day22/login");
  }
  return (
    <div>
      <div>{`${data?.fetchUserLoggedIn.name}님 로그인중`}</div>
      <div>{`이메일 주소는 ${data?.fetchUserLoggedIn.email} 입니다`}</div>
    </div>
  );
}
