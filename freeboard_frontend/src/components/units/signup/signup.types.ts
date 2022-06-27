import {
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IFromValues {
  email?: string;
  password?: string;
  name?: string;
  passwordCheck?: string;
}
export interface IISignupPageUI {
  register: UseFormRegister<IFromValues>;
  handleSubmit: UseFormHandleSubmit<IFromValues>;
  formState: FormState<IFromValues>;
  onClickSingup: (data: IFromValues) => void;
}

export interface IActiveProps {
  isActive: boolean;
}
