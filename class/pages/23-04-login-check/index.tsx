import { useMutation, gql } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../src/commons/store/index";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation(LOGIN_USER);

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
      const accessToken = result.data.loginUser.accessToken;
      console.log(accessToken);

      // 2. 유저정보 받아오기

      // 3. 글로벌스테이트에 저장하기
      setAccessToken(accessToken);
      localStorage.setItem("accessToken", accessToken);

      // 4. 로그인 성공페이지로 이동하기
      alert("로그인에 성공하였습니다!!");
      router.push("/23-05-login-check-success");
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
