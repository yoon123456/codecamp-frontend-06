// 게시물목록과 등록버튼있는 페이지

import ListBoardPage from "../../src/components/units/board/list/BoardWrite.container";
import Pagination from "../../src/components/commons/pagination/pagination.container";
import {
  FETCH_BOARDS,
  FETCH_BOARDS_COUNT,
} from "../../src/components/units/board/list/BoardWrite.queries";
import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../src/commons/types/generated/type";

export default function ListPage() {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);
  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const lastPage = Math.ceil(Number(dataBoardsCount?.fetchBoardsCount) / 10);

  return (
    <>
      <ListBoardPage data={data} refetch={refetch} />
      <Pagination refetch={refetch} lastPage={lastPage} />
    </>
  );
}
