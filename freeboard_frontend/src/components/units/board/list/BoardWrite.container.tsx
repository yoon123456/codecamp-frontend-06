import { useRouter } from "next/router";
import BoardListUI from "./BoardWrite.presenter";
import { MouseEvent } from "react";
import { IBoardListUIProps } from "./BoardWrite.types";

// 쿼리 문에 페치보드카운트 추가해주어야한다

export default function ListBoardPage(props: IBoardListUIProps) {
  const router = useRouter();

  const onClickMoveToBoardNew = () => {
    router.push("/boards/new");
  };

  const onClickMoveToBoardDetail = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element)
      router.push(`/boards/${event.target.id}`);
    // 이벤트태그의 자식이면 id를 선언해줘
  };

  return (
    <BoardListUI
      data={props.data}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
    />
  );
}
