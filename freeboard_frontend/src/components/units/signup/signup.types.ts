import { ChangeEvent } from "react";

export interface ISignupPageUIProps {
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePasswordCheck: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: () => void;
}
