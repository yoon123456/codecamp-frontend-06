import { ChangeEvent } from "react";

export interface LoginPageUIprops {
  onChangeLoginInput?: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit?: () => void;
  onClickLoginKeepBtn: () => void;
  OnClickGoSignup: () => void;
  isCheck: boolean;
}

export interface IKeepButton {
  isCheck: boolean;
}
