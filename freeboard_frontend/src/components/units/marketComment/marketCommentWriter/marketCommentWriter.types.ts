export interface IFormValue {
  contents: string;
}

export interface IMarketCommentWriterUIProps {
  onCilckComment: (data: IFormValue) => void;
  register: any;
  handleSubmit: any;
}
