import { useRouter } from "next/router";
import BoardListUI from "./BoardWrite.presenter";
import { MouseEvent } from "react";
import { IBoardListUIProps } from "./BoardWrite.types";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS } from "./BoardWrite.queries";

// 쿼리 문에 페치보드카운트 추가해주어야한다

export default function ListBoardPage(props: IBoardListUIProps) {
  const router = useRouter();
  const { data: scrollData, fetchMore } = useQuery(FETCH_BOARDS);

  const onClickMoveToBoardNew = () => {
    router.push("/boards/new");
  };

  const onClickMoveToBoardDetail = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element)
      router.push(`/boards/${event.target.id}`);
    // 이벤트태그의 자식이면 id를 선언해줘
  };

  const onLoadMore = () => {
    if (!scrollData) return;

    fetchMore({
      variables: { page: Math.ceil(scrollData.fetchBoards.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoards)
          return { fetchBoards: [...prev.fetchBoards] };
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  return (
    <BoardListUI
      data={props.data}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      onLoadMore={onLoadMore}
    />
  );
}
