import { useRecoilState } from "recoil";
import SignupPageUI from "./signup.presenter";
import {
  SignupInput,
  SignupInputError,
  accessTokenState,
} from "../../../commons/store/signup";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "./signup.quries";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../commons/types/generated/type";
import { ChangeEvent } from "react";

export default function SignupPageFn() {
  const [signup, setSignup] = useRecoilState(SignupInput);
  const [signupError, setSignupError] = useRecoilState(SignupInputError);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  const onChangeSignupInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (!signup) {
      setSignupError((prev) => ({
        ...prev,
        emailError: "이메일을 적어주세요",
        passwordError: "비밀번호를 적어주세요",
      }));
    }
    console.log(signupError);

    setSignup((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));

    if (
      event.target.id === "email" &&
      !/^\w+@\w+\.\w+$/.test(event.target.value)
    ) {
      setSignupError((prev) => ({
        ...prev,
        emailError: "형식이 올바르지 않습니다",
      }));
    }
    if (
      event.target.id === "password" &&
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8}$/.test(
        event.target.value
      )
    ) {
      setSignupError((prev) => ({
        ...prev,
        passwordError: "형식이 올바르지 않습니다",
      }));
    }
  };

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {};
  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {};
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {};
  const onChangePasswordCheck = (event: ChangeEvent<HTMLInputElement>) => {};
  const onClickSubmit = () => {};

  return (
    <SignupPageUI
      onChangeEmail={onChangeEmail}
      onChangeName={onChangeName}
      onChangePassword={onChangePassword}
      onChangePasswordCheck={onChangePasswordCheck}
      onClickSubmit={onClickSubmit}
      onChangeSignupInput={onChangeSignupInput}
    />
  );
}
