import { useRouter } from "next/router";
import BoardListUI from "./BoardWrite.presenter";
import { MouseEvent, useState, ChangeEvent } from "react";
import { IBoardListUIProps } from "./BoardWrite.types";
import _ from "lodash";

// 쿼리 문에 페치보드카운트 추가해주어야한다

export default function ListBoardPage(props: IBoardListUIProps) {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");

  const getDebounce = _.debounce((data) => {
    // 0.2초간 아무런 작업이 없을때 실행될 부분
    props.refetch({ search: data, page: 1 });
    setKeyword(data);
  }, 2000);
  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };
  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    props.refetch({ page: Number(event.target.id) });
  };

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
      onChangeSearch={onChangeSearch}
      onClickPage={onClickPage}
      keyword={keyword}
    />
  );
}
