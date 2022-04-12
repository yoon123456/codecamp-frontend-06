import { useMutation } from "@apollo/client";
import { ChangeEvent } from "react";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../commons/types/generated/type";
import LoginPageUI from "./login.presenter";
import { LOGIN_USER } from "./login.quries";
import { useRecoilState } from "recoil";
import {
  LoginInput,
  LoginInputError,
  isCheckState,
} from "../../../commons/store/login";
import { Modal } from "antd";
import { useRouter } from "next/router";

export default function LoginPageFn() {
  const router = useRouter();
  const [login, setLogin] = useRecoilState(LoginInput);
  const [, setLoginError] = useRecoilState(LoginInputError);
  const [isCheck, setIsCheck] = useRecoilState(isCheckState);

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const onChangeLoginInput = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));

    if (e.target.id === "email" && !/^\w+@\w+\.\w+$/.test(e.target.value)) {
      setLoginError((prev) => ({
        ...prev,
        emailError: "형식이 올바르지 않습니다",
      }));
    } else {
      setLoginError((prev) => ({
        ...prev,
        emailError: "",
      }));
    }

    console.log(login);
  };

  const onClickLoginKeepBtn = () => {
    setIsCheck(true);
  };

  const onClickSubmit = async () => {
    if (!login.email) {
      setLoginError({ emailError: "이메일을 적어주세요", passwordError: "" });
    }
    if (!login.password) {
      setLoginError({ emailError: "", passwordError: "비밀번호를 적어주세요" });
    }
    if (!login.password && !login.password) {
      setLoginError({
        emailError: "이메일을 적어주세요",
        passwordError: "비밀번호를 적어주세요",
      });
    }
    if (login.email && login.password) {
      try {
        const result = await loginUser({
          variables: { ...login },
        });
        Modal.success({
          content: "로그인에 성공하였습니다",
        });
        console.log(result);
      } catch (error) {
        if (error instanceof Error)
          Modal.error({
            content: "로그인에 실패했습니다",
          });
      }
    }
  };
  const OnClickGoSignup = () => {
    router.push("/signup");
  };

  return (
    <LoginPageUI
      onClickSubmit={onClickSubmit}
      onChangeLoginInput={onChangeLoginInput}
      onClickLoginKeepBtn={onClickLoginKeepBtn}
      OnClickGoSignup={OnClickGoSignup}
      isCheck={isCheck}
    />
  );
}
