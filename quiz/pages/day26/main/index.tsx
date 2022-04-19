import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../src/commons/store";
import {
  IBoard,
  IMutation,
  IMutationLoginUserArgs,
} from "../../../src/commons/types/generated/type";

export const LOGIN_USER = gql`
  mutation loginUser($password: String!, $email: String!) {
    loginUser(password: $password, email: $email) {
      accessToken
    }
  }
`;

interface IValue {
  email: string;
  password: string;
}
// ts-ignore
export default function QuizLoginPage() {
  const { register, handleSubmit } = useForm();
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const onClickSubmit = async (data: IValue) => {
    try {
      const result = await loginUser({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      const accessToken = result.data?.loginUser.accessToken;
      console.log(accessToken);

      setAccessToken(accessToken);
      localStorage.setItem("accessToken", accessToken);

      if (localStorage.getItem("baskets")) {
        Modal.warning({
          content:
            "비회원으로 담긴 게시물 장바구니가 존재합니다. 이동하시겠습니까?",
        });
        router.push("/day26/boards-basket-list");
      } else {
        Modal.success({
          content: "로그인성공!",
        });
      }
    } catch {
      Modal.error({
        content: "로그인실패",
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onClickSubmit)}>
        <div>로그인</div>
        <input type="text" placeholder="이메일 입력" {...register("email")} />
        <input
          type="password"
          placeholder="비밀번호 입력"
          {...register("password")}
        />
        <button>로그인</button>
      </form>
    </div>
  );
}
