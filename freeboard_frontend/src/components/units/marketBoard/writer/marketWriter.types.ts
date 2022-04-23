import { FieldValues, UseFormHandleSubmit } from "react-hook-form";

export interface IFormValue {
  name: string;
  contents: string;
  price: number;
  remarks: string;
  tags: string;
  pickedCount: number;
}

export interface IMarketWriterPageUIProps {
  onChangeContents: (value: string) => void;
  onClickSubmit: (data: IFormValue) => void;
  register: any;
  handleSubmit: any;
  formState: any;
}

export interface IProps {
  isActive: boolean;
}
