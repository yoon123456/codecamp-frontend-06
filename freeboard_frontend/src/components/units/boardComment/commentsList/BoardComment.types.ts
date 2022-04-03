import { IQuery } from "../../../../commons/types/generated/type";
import { MouseEvent } from "react";

export interface IBoardCommentListUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  onClickCommentDelete: (event: MouseEvent<HTMLButtonElement>) => void;
  showModal: (event: MouseEvent<HTMLButtonElement>) => void;
  handleOk: () => void;
  handleCancel: () => void;
  onChangeCommentPassword: (event: any) => void;
  el: any;
  password: string;
  isOpen: boolean;
}

// event: MouseEvent<HTMLButtonElement>
