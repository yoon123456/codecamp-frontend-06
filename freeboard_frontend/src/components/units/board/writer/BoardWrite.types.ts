import { ChangeEvent } from "react";

// 컨테이너 부분
export interface IBoardWriteProps {
  isEdit: boolean;
  data?: any;
}

export interface IMyVariables {
  updateBoardInput: any;
  password: string;
  boardId: string;
}

// 프레젠터 부분
export interface IBoardWriteUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeAddress: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeYoutube: (event: ChangeEvent<HTMLInputElement>) => void;
  writerError: string;
  passwordError: string;
  titleError: string;
  contentsError: string;
  addressError: string;
  youtubeError: string;
  onClickUpdate: () => void;
  onClickSingUp: () => void;
  isActive: boolean;
  isEdit: boolean;
  data?: any;
  showModal: () => void;
  handleOk: () => void;
  handleCancel: () => void;
  handleComplete: (data: any) => void;
  zonecode: string;
  daumAddress: string;
  daumAddressDetail: string;
  isOpen: boolean;
}

// 스타일 부분
export interface ISubmitButtonProps {
  isActive: boolean;
  isEdit: boolean;
}
