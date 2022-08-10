import {
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IFormValues {
  email?: string;
  password?: string;
}

export interface ILoginUI {
  register: UseFormRegister<IFormValues>;
  formState: FormState<IFormValues>;
  handleSubmit: UseFormHandleSubmit<IFormValues>;
  onClickLogin: (data: IFormValues) => void;
}

export interface IProps {
  isActive: boolean;
}
