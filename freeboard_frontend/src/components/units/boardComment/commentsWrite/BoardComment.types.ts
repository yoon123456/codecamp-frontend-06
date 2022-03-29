import { ChangeEvent } from "react";

export interface IBoardCommentUIProps {
  onChangeCommentWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeCommentPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeCommentContents: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeRating: (value: number) => void;
  onCilckComment: () => void;
  data?: any;
  contents: string;
  writer: string;
  password: string;
}
