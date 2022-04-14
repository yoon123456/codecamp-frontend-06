import { useRecoilState } from "recoil";
import SignupPageUI from "./signup.presenter";
import { SignupInput, SignupInputError } from "../../../commons/store/signup";
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

  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

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
    />
  );
}
