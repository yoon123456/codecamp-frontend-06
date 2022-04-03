import { MouseEvent } from "react";

// 프레젠터 부분
export interface IBoardListUIProps {
  onClickMoveToBoardDetail?: (event: MouseEvent<HTMLDivElement>) => void;
  onClickMoveToBoardNew?: () => void;
  onLoadMore?: () => void;
  data?: any;
  refetch?: any;
}
// interface IBoardListUI {
//   onClickMoveToBoardNew: () => void;
//   onClickMoveToBoardDetail: () => void;
// }
