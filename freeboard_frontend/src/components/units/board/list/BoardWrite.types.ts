import { MouseEvent } from "react";

// 프레젠터 부분
export interface IBoardListUIProps {
  onClickMoveToBoardDetail: (event: MouseEvent<HTMLDivElement>) => void;
  onClickMoveToBoardNew: () => void;
  data?: any;
}
// interface IBoardListUI {
//   onClickMoveToBoardNew: () => void;
//   onClickMoveToBoardDetail: () => void;
// }
