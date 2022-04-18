import { ChangeEvent } from "react";
import { boolean } from "yup";

export interface IPropsBoardWriteUI {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
  onClickSubmit: () => void;
  isEdit: boolean;
}

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: any;
}
