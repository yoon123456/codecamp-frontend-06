import { useMutation, gql, useApolloClient } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../src/commons/store/index";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LoginPage() {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [, setUserInfo] = useRecoilState(userInfoState);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation(LOGIN_USER);

  const client = useApolloClient();

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onCliskLogin = async () => {
    try {
      // 1. 로그인하기
      const result = await loginUser({
        variables: {
          email,
          password,
        },
      });
      const accessToken = result.data?.loginUser.accessToken;
      console.log(accessToken);

      // 2. 유저정보 받아오기
      const resultUserInfo = await client.query({
        query: FETCH_USER_LOGGED_IN,
        context: {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      });

      const userInfo = resultUserInfo.data?.fetchUserLoggedIn;
      console.log(userInfo);

      // 3. 글로벌스테이트에 저장하기
      setAccessToken(accessToken);
      setUserInfo(userInfo);
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      // userInfo 가 객체이기 때문에 문자열로 변환이 필요하다

      // 4. 로그인 성공페이지로 이동하기
      alert("로그인에 성공하였습니다!!");
      router.push("/24-02-login-use-apollo-client-success");
    } catch (error) {
      Modal.error({ content: "로그인에 실패하였습니다" });
    }
  };
  return (
    <div>
      이메일: <input type="text" onChange={onChangeEmail} />
      <br />
      비밀번호: <input type="password" onChange={onChangePassword} /> <br />
      <button onClick={onCliskLogin}>로그인하기</button>
    </div>
  );
}

/* <form onSubmit={}>
<div>
  이메일: <input type="text" onChange={onChangeEmail} />
  <br />
  비밀번호: <input type="password" onChange={onChangePassword} /> <br />
  <button type="submit" onClick={onCliskLogin}>
    로그인하기
  </button>
  <button type="submit">등록하기</button>
  <button type="button" onClick={}>
    나만의버튼
  </button>
  <button type="reset">초기화하기</button>
</div>
</form> */
