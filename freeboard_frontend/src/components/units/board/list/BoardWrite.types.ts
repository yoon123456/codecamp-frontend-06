import { ApolloQueryResult } from "@apollo/client";
import { MouseEvent, ChangeEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/type";

export interface IListBoardPage {
  data: any;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>> | undefined;
}

// 프레젠터 부분
export interface IBoardListUIProps {
  onClickMoveToBoardDetail?: (event: MouseEvent<HTMLDivElement>) => void;
  onClickMoveToBoardNew?: () => void;
  onLoadMore?: () => void;
  onChangeSearch?: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickPage?: (event: MouseEvent<HTMLSpanElement>) => void;
  data: any;
  keyword: string;
}
export interface IProps {
  isMatched: boolean;
}
