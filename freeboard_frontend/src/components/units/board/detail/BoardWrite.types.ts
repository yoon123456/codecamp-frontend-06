import { MouseEvent } from "react";

//컨테이너 부분
export interface IBoardDetail {
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickMoveToBoardList: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickMoveToBoardEdit: (event: MouseEvent<HTMLButtonElement>) => void;
  isActive?: boolean;
  isEdit?: boolean;
  data?: any;
}

//프레젠터 부분
export interface IBoardWriteUIProps {
  onClickMoveToBoardList: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickMoveToBoardEdit: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;
  isActive?: boolean;
  isEdit?: boolean;
  data?: any;
}

// // 프레젠터? 땜에 오류난 부분
//     isActive?: boolean;
//     isEdit?: boolean;
//     isActive: boolean;
//     isEdit: boolean;      이렇게 두부분에 ?가 없어서 오류가 발생했다 이유는 뭘까염?
