import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../src/commons/store";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../src/commons/types/generated/type";

interface IFormValue {
  email: string;
  password: string;
}

const LOGIN_USER = gql`
  mutation loginUser($password: String!, $email: String!) {
    loginUser(password: $password, email: $email) {
      accessToken
    }
  }
`;

export default function QuizLoginPage() {
  const router = useRouter();
  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const onClickSubmit = async (data: IFormValue) => {
    if (data.email && data.password) {
      try {
        const result = await loginUser({
          variables: data,
        });
        const accessToken = result.data?.loginUser.accessToken;
        console.log(accessToken);
        setAccessToken(accessToken);
        localStorage.setItem("accessToken", accessToken);
        Modal.success({ content: "로그인성공!" });
        router.push("payment/loading/");
      } catch (error) {
        Modal.error({ content: "로그인 실패입니다" });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      이메일:
      <input type="text" {...register("email")} />
      <br />
      비번:
      <input type="password" {...register("password")} />
      <button>로그인</button>
    </form>
  );
}
