import { ChangeEvent } from "react";

export interface IBoardCommentUIProps {
  onChangeCommentWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeCommentPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeCommentContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onCilckComment: () => void;
  data?: any;
  contents: string;
}
