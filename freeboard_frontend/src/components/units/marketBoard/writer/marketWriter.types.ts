import { ChangeEvent } from "react";

export interface IMarketWriteProps {
  isEdit: boolean;
  data?: any;
}

export interface IFormValue {
  name: string;
  contents: string;
  price: number;
  remarks: string;
  tags: string[];
  pickedCount: number;
  fileUrls: string;
  // daumAddress: {
  //   // zipcode: number;
  //   address: string;
  //   addressDetail: string;
  // };
}

export interface IMarketWriterPageUIProps {
  onChangeContents: (value: string) => void;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
  onChangeAddress: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: (data: IFormValue) => void;
  onClickUpdate: (data: IFormValue) => void;
  register: any;
  handleSubmit: any;
  formState: any;
  reset: any;
  getValues: any;
  data: any;
  fileUrls: string[];
  isEdit: boolean;
  lat: number;
  setLat: any;
  lng: number;
  address: string;
  addressDetail: string;
  setLng: any;
  isOpen: boolean;
  showModal: () => void;
  handleOk: () => void;
  handleCancel: () => void;
  handleComplete: (data: any) => void;
  hashArr: string[];
  setHashArr: any;
}

export interface IProps {
  isActive: boolean;
}

export interface IMyVariables {
  updateUseditemInput: any;
  useditemId: string;
}

export interface IHashtagProps {
  hashArr: string[];
  setHashArr: any;
}
