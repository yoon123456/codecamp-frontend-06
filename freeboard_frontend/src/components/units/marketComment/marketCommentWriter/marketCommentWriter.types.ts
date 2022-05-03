import { ChangeEvent, MouseEvent } from "react";

export interface IFormValue {
  contents: string;
}
export interface IMarketCommentWriter {
  useditemQuestionId: string;
  isEditProps: boolean;
  setIsEdit: any;
}

export interface IMarketCommentWriterUIProps {
  onCilckComment?: (data: IFormValue) => void;
  onClickCommentUpdate: (data: IFormValue) => void;
  register?: any;
  handleSubmit?: any;
  contentslength?: string;
  isEditProps?: boolean;
  onChangeCommentContents?: (event: ChangeEvent<HTMLInputElement>) => void;
  useditemQuestionId?: any;
  setIsEdit?: boolean;
  getValues: any;
}
