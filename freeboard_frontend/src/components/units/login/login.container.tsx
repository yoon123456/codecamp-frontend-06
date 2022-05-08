import { useMutation, useApolloClient } from "@apollo/client";
import { ChangeEvent } from "react";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../commons/types/generated/type";
import LoginPageUI from "./login.presenter";
import { FETCH_USER_LOGGEDIN, LOGIN_USER } from "./login.quries";
import { useRecoilState } from "recoil";
import {
  LoginInput,
  LoginInputError,
  isCheckState,
  accessTokenState,
  userInfoState,
} from "../../../commons/store/login";
import { Modal } from "antd";
import { useRouter } from "next/router";

export default function LoginPageFn() {
  const router = useRouter();
  const [login, setLogin] = useRecoilState(LoginInput);
  const [, setLoginError] = useRecoilState(LoginInputError);
  const [isCheck, setIsCheck] = useRecoilState(isCheckState);
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [, setUserInfo] = useRecoilState(userInfoState);

  const client = useApolloClient();

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
    if (e.target.id === "password") {
      setLoginError((prev) => ({
        ...prev,
        passwordError: "",
      }));
    }
  };

  const onClickLoginKeepBtn = () => {
    setIsCheck(true);
  };

  const onClickSubmit = async () => {
    if (!login.email) {
      setLoginError((prev) => ({
        ...prev,
        emailError: "이메일을 입력해주세요",
      }));
    } else {
      setLoginError((prev) => ({
        ...prev,
        emailError: "",
      }));
    }
    if (!login.password) {
      setLoginError((prev) => ({
        ...prev,
        passwordError: "비밀번호를 입력해주세요",
      }));
    } else {
      setLoginError((prev) => ({
        ...prev,
        passwordError: "",
      }));
    }

    if (login.email && login.password) {
      try {
        const result = await loginUser({
          variables: { ...login },
        });
        const accessToken = result.data?.loginUser.accessToken;

        const resultUserInfo = await client.query({
          query: FETCH_USER_LOGGEDIN,
          context: {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              credential: "include",
            },
          },
        });

        const userInfo = resultUserInfo.data?.fetchUserLoggedIn;

        setAccessToken(accessToken || "");
        setUserInfo(userInfo);
        // localStorage.setItem("accessToken", accessToken || "");
        // localStorage.setItem("userInfo", JSON.stringify(userInfo));

        Modal.success({
          content: "로그인에 성공하였습니다",
        });
        router.push("/market");
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
