export interface IMarketWriteProps {
  isEdit: boolean;
  data?: any;
}

export interface IFormValue {
  name: string;
  contents: string;
  price: number;
  remarks: string;
  tags: string;
  pickedCount: number;
  fileUrls: string;
}

export interface IMarketWriterPageUIProps {
  onChangeContents: (value: string) => void;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
  onClickSubmit: (data: IFormValue) => void;
  register: any;
  handleSubmit: any;
  formState: any;
  data: any;
  fileUrls: string[];
  isEdit: boolean;
}

export interface IProps {
  isActive: boolean;
}
