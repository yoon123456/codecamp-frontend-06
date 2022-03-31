import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;
const MyRow = styled.div`
  display: flex;
`;
const MyColumn = styled.div`
  width: 50%;
`;

export default function MapBoardPage() {
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: dataBoardcount } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(dataBoardcount?.fetchBoardsCount / 10);
  const [pageId, setPageId] = useState(0);
  // 처음에는 dataBoardCount가 undefined를 반환하기 떄문에 ?를 꼭 붙여준다

  const onClickPage = (event) => {
    refetch({ page: Number(event.target.id) });
    setPageId(Number(event.target.id - 1));
  };
  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    refetch({ page: startPage - 10 });
  };
  const onClickNextpage = () => {
    if (startPage + 10 > lastPage) return;
    setStartPage((prev) => prev + 10);
    refetch({ page: startPage + 10 });
  };

  console.log(data);
  console.log("aaa" + pageId);
  console.log(dataBoardcount);

  return (
    <div>
      {data?.fetchBoards.map((el, index) => (
        <MyRow key={el._id}>
          <MyColumn>
            {" "}
            {Number(dataBoardcount?.fetchBoardsCount - pageId * 10) - index}
          </MyColumn>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
      ))}
      <button onClick={onClickPrevPage}>이전</button>
      {new Array(10).fill(1).map(
        (_, index) =>
          index + startPage <= lastPage && (
            <span
              key={index + startPage}
              onClick={onClickPage}
              id={String(index + startPage)}
            >
              {index + startPage}
            </span>
          )
      )}
      <button onClick={onClickNextpage}>다음</button>
    </div>
  );
}
