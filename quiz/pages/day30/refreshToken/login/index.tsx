import { useMutation, gql } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../src/commons/store";

// 토큰 만료시간 5초
const LOGIN_USER = gql`
  mutation loginUserExample($email: String!, $password: String!) {
    loginUserExample(email: $email, password: $password) {
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
      const result = await loginUser({
        variables: {
          email,
          password,
        },
      });
      const accessToken = result.data.loginUserExample.accessToken;
      setAccessToken(accessToken);
      console.log(accessToken);
      alert("로그인에 성공하였습니다");
      router.push("login-success");
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
