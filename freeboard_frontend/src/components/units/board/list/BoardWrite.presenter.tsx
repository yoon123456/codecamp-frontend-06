import * as S from "./BoardWrite.styles";
import { getDate } from "../../../commons/libraries/utils";
import { IBoardListUIProps } from "./BoardWrite.types";
import { IBoard } from "../../../../commons/types/generated/type";
import { v4 as uuid } from "uuid";

export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <S.Box>
      <S.Row>
        <S.Search
          type="text"
          placeholder="제목을 검색해주세요"
          onChange={props.onChangeSearch}
        />
        <S.SearchDate type="text" placeholder="YYYY.MM.DD"></S.SearchDate>
        {/* <S.ButtonBlack>검색</S.ButtonBlack> */}
        <S.Button onClick={props.onClickMoveToBoardNew}>
          게시물 등록하기
        </S.Button>
      </S.Row>
      <S.ListHeader>
        <S.List>ID</S.List>
        <S.List>제목</S.List>
        <S.List>작성자</S.List>
        <S.List>날짜</S.List>
      </S.ListHeader>
      <div>
        {props.data?.fetchBoards?.map((el: IBoard) => (
          <S.Row key={el._id}>
            <S.ListId>{String(el._id).slice(-4).toUpperCase()}</S.ListId>
            <S.ListTitle id={el._id} onClick={props.onClickMoveToBoardDetail}>
              {" "}
              {el.title
                .replaceAll(props.keyword, `#$%${props.keyword}#$%`)
                .split("#$%")
                .map((el) => (
                  <S.Word key={uuid()} isMatched={props.keyword === el}>
                    {el}
                  </S.Word>
                ))}
            </S.ListTitle>
            <S.ListWriter>{el.writer}</S.ListWriter>
            <S.ListDate>{getDate(el.createdAt)}</S.ListDate>
          </S.Row>
        ))}
      </div>
      <S.Footer>
        {/* <S.Button onClick={props.onClickMoveToBoardNew}>
          게시물 등록하기
        </S.Button> */}
      </S.Footer>
    </S.Box>
  );
}

/*
import InfiniteScroll from "react-infinite-scroller";
<div style={{ height: "500px", overflow: "auto" }}>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
          useWindow={false}
        ></InfiniteScroll>
         </InfiniteScroll>
         */
