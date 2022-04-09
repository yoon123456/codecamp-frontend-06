import { MouseEvent, ChangeEvent } from "react";

// 프레젠터 부분
export interface IBoardListUIProps {
  onClickMoveToBoardDetail?: (event: MouseEvent<HTMLDivElement>) => void;
  onClickMoveToBoardNew?: () => void;
  onLoadMore?: () => void;
  onChangeSearch?: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickPage?: (event: MouseEvent<HTMLSpanElement>) => void;
  data?: any;
  refetch?: any;
  keyword?: any;
}
export interface IProps {
  isMatched: boolean;
}
