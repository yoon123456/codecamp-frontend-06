import { IQuery } from "../../../../commons/types/generated/type";
import { MouseEvent } from "react";

export interface IBoardCommentListUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;
  showModal: () => void;
  handleOk: () => void;
  handleCancel: () => void;
  isOpen: boolean;
  onChangeCommentPassword: (event: any) => void;
}
