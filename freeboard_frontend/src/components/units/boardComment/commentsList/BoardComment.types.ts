import { IQuery } from "../../../../commons/types/generated/type";
import { MouseEvent } from "react";

export interface IBoardCommentListUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;
  value: number;
}
